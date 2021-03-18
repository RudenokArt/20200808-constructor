let crutchEdit={};
let interiorArr=[];

function divShow(div)
{
	document.getElementById(div).style.display='block';
	//
}
function divHide(div)
{
	document.getElementById(div).style.display='none';
	//	
}
function adminOnload()
{
	getCookie();
	ajaxGallery();
	document.getElementById('sidebarCategorySelect').innerHTML='<span id="categorySelect"></span>';
	document.getElementById('sidebarSubCategorySelect').innerHTML='<span id="subCategorySelect"></span>'
	document.getElementById('popUpCategorySelect').innerHTML='';
	document.getElementById('popUpSubCategorySelect').innerHTML=''
	ajaxCategory();
	ajaxPosts();
	templateSelect();
	setTimeout(setPageNumber, 1000);
}
function SetCookie(items)
{
	if (items>0) {
		let value=items;
	} else {
		let value=20;
	}
	let value=items;
	try {
		let req = new XMLHttpRequest();
		req.open('POST','php-pagination-set.php');
		req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
		req.send('value='+items);
		req.onreadystatechange=	function(){}
	} catch(e) {}
}
function getCookie()
{
	let req = new XMLHttpRequest();
	req.open('POST','php-pagination-get.php');
	req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	req.send();
	req.onreadystatechange=function ()
	{
		let paginationPage=req.responseText;
		if (paginationPage>1)
			{document.getElementById('paginationPage').value=Number(paginationPage);}
		else {document.getElementById('paginationPage').value=20}
	}
}
function managerOnload()
{
	getCategories();
	getMaterials();
	getSize();
	ajaxTemplates();
	templateSelect();
}
function ajaxPosts()
{
	let req = new XMLHttpRequest();
	req.open('POST','php-read-posts.php');
	req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	req.send();
	req.onreadystatechange=function ()
	{
		try 
		{
			let str=req.responseText;
			let post=JSON.parse(str);
			let postBloc='';
			for (i=0;i<post.length;i++)
			{
				postBloc=postBloc+'<div onclick=getDataPost('+post[i].id+')>'+
				'<div><img src="post-image/'+post[i].image_name+'" class="postImage"></div>'+
				'<div>'+post[i].post_text+'</div>'+
				'</div>';
			}
			document.getElementById('postBloc').innerHTML=postBloc;
		} 
		catch(e) {}
	}
}
function ajaxTemplates()
{
	let req = new XMLHttpRequest();
	req.open('POST','php-read-templates.php');
	req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	req.send();
	req.onreadystatechange=function ()
	{
		try 
		{
			let str=req.responseText;
			let template=JSON.parse(str);
			let tempalatesTab='';
			for (i=0;i<template.length;i++)
			{
				tempalatesTab=tempalatesTab+
				'<div onclick=getDataTemplate('+template[i].id+') class="templateItem">'+
				'<div>'+
				'<img src="mini-templates/'+template[i].template+'" class="templateIcon">'+
				'</div>'+
				'<div>'+template[i].template+'<br>'+
				template[i].size+'<br>'+ template[i].price+
				'</div>'+
				'</div>';
			}
			document.getElementById('tempalatesTab').innerHTML=tempalatesTab;
		} 
		catch(e) {}
	}
}
function getDataPost(id)
{
	showPostPopUp('editPostPopUp');
	let req = new XMLHttpRequest();
	req.open('POST','php-get-post-data.php');
	req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	req.send('id='+id);
	req.onreadystatechange=function ()
	{
		try 
		{
			let str=req.responseText;
			let arr=JSON.parse(str);
			document.getElementById('postId').value=arr.id;
			document.getElementById('EditPostText').value=arr.post_text;
			document.getElementById('postImageName').value=arr.image_name;
		} catch(e) {}
	}
}
function getDataTemplate(id)
{
	divShow('editTemplatePopUp');
	let req = new XMLHttpRequest();
	req.open('POST','php-get-templates-data.php');
	req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	req.send('id='+id);
	req.onreadystatechange=function ()
	{
		try 
		{
			let str=req.responseText;
			let arr=JSON.parse(str);
			document.getElementById('templateId').value=arr.id;
			document.getElementById('templateName').innerText=arr.template;
			document.getElementById('templateSize').value=arr.size;
			document.getElementById('price').value=arr.price;
			//console.log(arr)
		} catch(e) {}
	}
}
function deleteTemplate()
{
	let id = document.getElementById('templateId').value;
	let image = document.getElementById('templateName').innerHTML;
	let req = new XMLHttpRequest();
	req.open('POST','php-del-template.php');
	req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	req.send('id='+id+'&image='+image);
	req.onreadystatechange=function ()
	{
		let str=req.responseText;
	}
	divHide('editTemplatePopUp')
	setTimeout(ajaxTemplates,500)
}
function deletePost()
{
	var id = document.getElementById('postId').value;
	var image = document.getElementById('postImageName').value;
	var req = new XMLHttpRequest();
	req.open('POST','php-del-post.php');
	req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	req.send('id='+id+'&image='+image);
	req.onreadystatechange=function ()
	{
		let str=req.responseText;
		console.log (str);
	}
	hidePopUp('editPostPopUp')
	setTimeout(ajaxPosts,500)
}
function editPost()
{
	let postEdit={};
	postEdit.id=document.getElementById('postId').value;
	postEdit.post_text=document.getElementById('EditPostText').value;
	let str=JSON.stringify(postEdit)
	ajaxEditPost(str);
}
function editTemplate()
{
	var templateEdit={};
	templateEdit.id=document.getElementById('templateId').value;
	templateEdit.size=document.getElementById('templateSize').value;
	templateEdit.price=document.getElementById('price').value;
	var str=JSON.stringify(templateEdit);
	ajaxEditTemplate(str);
}
function ajaxEditTemplate(str)
{
	var id = document.getElementById('templateId').value;
	var req = new XMLHttpRequest();
	req.open('POST','php-edit-template.php');
	req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	req.send('str='+str);
	req.onreadystatechange=function (){}
	divHide('editTemplatePopUp')
	setTimeout(ajaxTemplates,500);
}
function ajaxEditPost(str)
{
	let id = document.getElementById('postId').value;
	let req = new XMLHttpRequest();
	req.open('POST','php-edit-post.php');
	req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	req.send('str='+str);
	req.onreadystatechange=function ()
	{
		let str=req.responseText;
		console.log (req.responseText);
	}
	hidePopUp('editPostPopUp')
	setTimeout(ajaxPosts,500)
}
function redirect(adress)
{ 
	document.location.href = adress;
	//
}
function showInput(item1,item2)
{
	setTimeout(getInput,500,item1,item2);
	//
}
function getInput(item1,item2)
{ 
	let item=document.getElementById(item1);
	document.getElementById(item2).innerText=item.value;
}
function submitForm(x)
{
	let form = document.getElementById(x);
	form.submit();
	ajaxGallery(); 
}
function showPopUp(div)
{
	document.getElementById(div).style.display='block';
	document.getElementById('sidebarCategorySelect').innerHTML='';
	document.getElementById('sidebarSubCategorySelect').innerHTML=''
	document.getElementById('popUpCategorySelect').innerHTML='<span id="categorySelect"></span>';
	document.getElementById('popUpSubCategorySelect').innerHTML='<span id="subCategorySelect"></span>'
	ajaxCategory();
}
function showEditPopUp(id,imageName,discount,order)
{ 
	document.getElementById('editPopUp').style.display='block';
	document.getElementById('sidebarCategorySelect').innerHTML='';
	document.getElementById('sidebarSubCategorySelect').innerHTML=''
	document.getElementById('editPopUpCategorySelect').innerHTML=
	'<span id="categorySelect"></span>';
	document.getElementById('editPopUpSubCategorySelect').innerHTML=
	'<span id="subCategorySelect"></span>'
	document.getElementById('editItemId').value=id;
	document.getElementById('imageName').innerHTML=imageName;
  document.getElementById('40x70').value=order;
	document.getElementById('discount').value=discount;
	getEditData(id);
	ajaxCategory();
}
function editCrutch(category,subcategory,template) {

	crutchEdit.category=category;
	crutchEdit.subcategory=subcategory;
	crutchEdit.template=template;
	templateSelect ();
}
function showPostPopUp(id)
{
	document.getElementById(id).style.display='block';
	//console.log('post')
}
function ajaxDelItem()
{
	let id = document.getElementById('editItemId').value;
	let image = document.getElementById('image').value;
	let req = new XMLHttpRequest();
	req.open('POST','php-del-item.php');
	req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	req.send('id='+id+'&image='+image);
	req.onreadystatechange=function ()
	{
		let str=req.responseText;
		console.log (str);
	}
	hidePopUp('editPopUp')
	setTimeout(ajaxGallery,500);
}
function getEditData(id)
{	
	let req = new XMLHttpRequest();
	req.open('POST','php-get-edit-data.php');
	req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	req.send('id='+id);
	req.onreadystatechange=function ()
	{
		try {
			let str=req.responseText;
			let arr=JSON.parse(str);
			document.getElementById('image').value=arr.image;
			document.getElementById('category').value=arr.category;
			document.getElementById('subcategory').value=arr.subcategory;
			// document.getElementById('40x70').value=arr.i40x70;
			// document.getElementById('46x80').value=arr.i46x80;
			// document.getElementById('51x90').value=arr.i51x90;
			// document.getElementById('57x100').value=arr.i57x100;
			// document.getElementById('63x110').value=arr.i63x110;
			// document.getElementById('68x120').value=arr.i68x120;
			// document.getElementById('74x130').value=arr.i74x130;
			// document.getElementById('80x140').value=arr.i80x140;
			document.getElementById('discount').value=arr.discount;
		} catch(e) {}
	}
}
function editItem(){
	let itemEdit={};
	itemEdit.id=document.getElementById('editItemId').value;
	itemEdit.category=document.getElementById('selectCategory').value;
	itemEdit.subcategory=document.getElementById('selectSubCategory').value;
	itemEdit.i40x70=document.getElementById('40x70').value;
	// itemEdit.i46x80=document.getElementById('46x80').value;
	// itemEdit.i51x90=document.getElementById('51x90').value;
	// itemEdit.i57x100=document.getElementById('57x100').value;
	// itemEdit.i63x110=document.getElementById('63x110').value;
	// itemEdit.i68x120=document.getElementById('68x120').value;
	// itemEdit.i74x130=document.getElementById('74x130').value;
	// itemEdit.i80x140=document.getElementById('80x140').value;
	itemEdit.discount=document.getElementById('discount').value;
	itemEdit.template=document.getElementById('template').value;
	let str=JSON.stringify(itemEdit)
	ajaxEditItem(str);
}
function ajaxEditItem(str){
	let id = document.getElementById('editItemId').value;
	let req = new XMLHttpRequest();
	req.open('POST','php-edit-item.php');
	req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	req.send('str='+str);
	req.onreadystatechange=function ()
	{
		let str=req.responseText;
		console.log (req.responseText);
	}
	hidePopUp('editPopUp')
	setTimeout(ajaxGallery,500);
}
function hidePopUp(div)
{
	document.getElementById('sidebarCategorySelect').innerHTML='<span id="categorySelect"></span>';
	document.getElementById('sidebarSubCategorySelect').innerHTML='<span id="subCategorySelect"></span>'
	document.getElementById('popUpCategorySelect').innerHTML='';
	document.getElementById('popUpSubCategorySelect').innerHTML=''
	ajaxCategory();
	document.getElementById(div).style.display='none';
}
function searchImage()
{
	let where=document.getElementById('searchInput').value;
	if (where=="")
		{where='empty'}
	else{where='WHERE `image` LIKE "%'+where+'%"'}
		ajaxGallery(where);
}
function filterImage()
{
	let category=document.getElementById('selectCategory').value;
	let subcategory=document.getElementById('selectSubCategory').value;
	let priceFrom=document.getElementById('priceFrom').value;
	let priceTo=document.getElementById('priceTo').value;
	if (priceFrom=='')
		{priceFrom=0}
	if (priceTo=='')
		{priceTo=1000000000}

	// if (subcategory=='')
	// {
	// 	where='empty'
	// }
	// else
	// {
	// 	where='WHERE `category`="'
	// 	+category+'" AND `40x70`>="'
	// 	+priceFrom+'" AND `40x70`<="'+priceTo+'"';
	// }
	where='WHERE `category`="'
		+category+'" AND `40x70`>="'
		+priceFrom+'" AND `40x70`<="'+priceTo+'"';

	page=1;
	ajaxGallery(where);
}
function ajaxGallery(where)
{
	let req = new XMLHttpRequest();
	req.open('POST','php-read-galery.php');
	req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	req.send('where='+where);
	req.onreadystatechange=function ()
	{
		let str=req.responseText;
		displayGalery(str);
	}
}
let itemArr=[];
function displayGalery(str)
{	
	try {
		let arr=JSON.parse(str);
		let galery='';
		itemArr=[];
		for (i=0;i<arr.length;i++)
		{
			let imageName=(arr[i].image).split('.');
			let category=(arr[i].category);
			let subcategory=(arr[i].subcategory);
			let price=(arr[i].price);
			let id=(arr[i].id);
			let discount=(arr[i].discount);
			let template=(arr[i].template);
      let order=(arr[i].order);
			if (discount==0)
				{discount=''}
			else {discount='-'+discount+'% '}
				galery=galery+
			'<div class="galeryItem" id="'+id+'" '+
			'onclick="showEditPopUp('+id+',\''+imageName[0]+'\',\''+discount+'\',\''+order+'\')+'+
			'editCrutch(\''+category+'\',\''+subcategory+'\',\''+template+'\')">'+
			'<div class="galery-image" style="background-image: url(miniatures/'+arr[i].image+');">'+
			'<div class="discount">'+discount+'</div>'+
			'<img src="mini-templates/'+template+'" class="galary-template">'+
			'</div>'+
			'<div>'+
			imageName[0]+' '+template+'<br>'+
			category+' / '+
			subcategory+
			'</div>'+
			'</div>';
			itemArr[i]=id;
		}
		document.getElementById('content').innerHTML=galery;
		pagination();
	} catch(e) {}
}
let page=1;
function getPageNumber () {
	document.cookie='page=true';
	console.log(document.cookie);
}
function setPageNumber () {
	let items=Number(document.getElementById('paginationPage').value);
	let n=Math.ceil((itemArr.length)/items);
	let str=document.cookie;
	let arr=str.split('; ');
	for (var i = 0; i < arr.length; i++) {
		let subArr=arr[i].split('=');
		if (subArr[0]=='page'&&subArr[1]!='false'){
			pageNumber(n);
		}	
	}
	document.cookie='page=false';
}
function pagination(){
	let items=Number(document.getElementById('paginationPage').value);
	let n=Math.ceil((itemArr.length)/items);
	let itemBegin=(page-1)*items+1;
	let itemEnd=(itemBegin+items-1);
	for (i=0;i<itemArr.length;i++)
		{document.getElementById(itemArr[i]).style.display = 'none'};
	for (k=itemBegin-1;k<itemEnd;k++)
	{
		try 
		{
			document.getElementById(itemArr[k]).style.display = 'block'
		} catch(e) {}
	}
	pageNavigation(n);
	document.getElementById('page'+page).style.color='red';
	SetCookie(items);
}
function pageNavigation(n){
	pages='<div onclick="priviousPage()" class="pages">&#9668</div>';
	for (i=1;i<=n;i++)
	{
		pages=pages+
		'<div onclick="pageNumber('+i+')"'+
		' id="page'+i+'" class="pages">'+i+'</div>';		
	}
	pages=pages+'<div onclick="nextPage('+n+')" class="pages">&#9658</div>';
	document.getElementById('pageNavigation').innerHTML=pages
}
function priviousPage()
{
	page=page-1;
	if (page<1){page=1}
		pagination();
	document.getElementById('page'+page).style.color='red';
}
function nextPage(n){
	page=page+1;
	if (page>n){page=n}
		pagination();
	document.getElementById('page'+page).style.color='red';
}
function pageNumber(i){
	page=i;
	pagination();
	document.getElementById('page'+page).style.color='red';
}

function ajaxCategory()
{
	let req = new XMLHttpRequest();
	req.open('POST','php-select-category.php');
	req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	req.send();
	req.onreadystatechange=function ()
	{
		let str=req.responseText;
		selectCategory(str);
	}
}
function selectCategory(str)
{
	try 
	{
		let select='<select onchange="ajaxSubCategory()"'+
		' id="selectCategory" name="selectCategory">';
		let arr=JSON.parse(str);
		for (let i=0;i<arr.length;i++)
		{
			if (arr[i][1]==crutchEdit.category)			{
				select=select+'<option selected="selected">';
			}
			else{
				select=select+'<option>';
			}
			select=select+arr[i][1];
			select=select+'</option>';
		}
		//select=select+'<option>';
		select=select+'</select>';
		document.getElementById('categorySelect').innerHTML=select;
		ajaxSubCategory();
	} catch(e){}
}
function ajaxSubCategory()
{
	let category=document.getElementById('selectCategory').value;
	let req = new XMLHttpRequest();
	req.open('POST','php-select-subcategory.php');
	req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	req.send('category='+category);
	req.onreadystatechange=function ()
	{
		let str=req.responseText;
		selectSubCategory(str);
	}
}
function selectSubCategory(str)
{
	try 
	{
		let select='<select name="selectSubCategory" id="selectSubCategory">';
		let arr=JSON.parse(str);
		for (let i=0;i<arr.length;i++)
		{
			if (arr[i][1]==crutchEdit.subcategory){
				select=select+'<option selected="selected">';
			}
			else {
				select=select+'<option>';
			}
			select=select+arr[i][1];
			select=select+'</option>';
		}
		select=select+'</select>';
		document.getElementById('subCategorySelect').innerHTML=select;
	} catch(e){}
}
function getCategories()
{
	let req = new XMLHttpRequest();
	req.open('POST','php-select-category.php');
	req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	req.send();
	req.onreadystatechange=function ()
	{
		categories=req.responseText;
		categoriesTab(categories);
	}
}
function categoriesTab(categories)
{
	try 
	{	
		let select='<select onchange="getSubCategories()"'+
		' id="selectCategory" name="selectCategory">';
		let table='<table><tr><th>Категории<th><tr>';
		let arr=JSON.parse(categories);
		for(i=0;i<arr.length;i++)
		{
			table=table+'<tr><td>'+arr[i][1]+
			'</td><td><button title="удалить" id="'+arr[i][0]+
			'" onclick="delCategory('+arr[i][0]+')">&#10060</button></td></tr>';
			select=select+'<option>';
			select=select+arr[i][1];
			select=select+'</option>';
		}
		table=table+'</table>';
		select=select+'</select>';
		document.getElementById('categorySelect').innerHTML=select;
		document.getElementById('categoryTab').innerHTML=table;
		getSubCategories();
	} catch(e) {}
}
function getSubCategories()
{
	let category=document.getElementById('selectCategory').value;
	let req = new XMLHttpRequest();
	req.open('POST','php-select-subcategory.php');
	req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	req.send('category='+category);
	req.onreadystatechange=function ()
	{
		categories=req.responseText;
		subCategoriesTab(categories)
	}
}
function subCategoriesTab(categories)
{
	try 
	{
		let table='<table><tr><th>Подкатегории<th><tr>';
		let arr=JSON.parse(categories);
		for(i=0;i<arr.length;i++)
		{
			table=table+'<tr><td>'+arr[i][1]+
			'</td><td><button title="удалить" id="'+arr[i][0]+
			'" onclick="delSubCategory('+arr[i][0]+')">&#10060</button></td></tr>';	
		}
		table=table+'</table>';
		document.getElementById('subCategoryTab').innerHTML=table;
	} catch(e) {}
}
function categoryAdd()
{
	let category=document.getElementById('addCategory').value;
	if (category=='')
	{
		console.log('error')
	}
	else
	{
		let req = new XMLHttpRequest();
		req.open('POST','php-add-category.php');
		req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
		req.send('category='+category);
		req.onreadystatechange=function ()
		{
			categories=req.responseText;
		}
		setTimeout(getCategories,1000);
	}
}
function getMaterials()
{
	let req = new XMLHttpRequest();
	req.open('POST','php-get-materials.php');
	req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	req.send();
	req.onreadystatechange=function ()
	{
		materials=req.responseText;
		materialsTab(materials);
	}
}
function materialsTab(materials)
{
	try 
	{	
		let table='<table><tr><th>Материалы</th><tr>';
		let arr=JSON.parse(materials);
		for(i=0;i<arr.length;i++)
		{
			table=table+'<tr><td>'+arr[i][1]+' - '+arr[i][2]+'%</td>'+
			'<td><button title="удалить" id="'+arr[i][0]+
			'" onclick="delMaterial('+arr[i][0]+')">&#10060</button></td></tr>';
		}
		table=table+'</table>';
		document.getElementById('materialTab').innerHTML=table;
	} catch(e) {}
}
function delMaterial(id)
{
	let req = new XMLHttpRequest();
	req.open('POST','php-del-material.php');
	req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	req.send('id='+id);
	req.onreadystatechange=function ()
	{
		console.log(req.responseText);
	}
	setTimeout(getMaterials,1000);
}
function materialAdd()
{
	let material=document.getElementById('addMaterial').value;
	let kofMaterial=document.getElementById('kofMaterial').value;
	if (material=='')
	{
		console.log('error')
	}
	else
	{
		let req = new XMLHttpRequest();
		req.open('POST','php-add-material.php');
		req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
		req.send('material='+material+'&kofMaterial='+kofMaterial);
		req.onreadystatechange=function ()
		{
			material=req.responseText;
		}
		setTimeout(getMaterials,1000);
	}
}
function getSize()
{
	let req = new XMLHttpRequest();
	req.open('POST','php-get-size.php');
	req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	req.send();
	req.onreadystatechange=function (){
		if (req.readyState == 4 && req.status == 200) {
			size=req.responseText;
			sizeTab(size);
		}
	}
}
function sizeTab(size)
{
	try 
	{	
		let select1 = '<select name="templateSize">';
		let select2 = '<select id="templateSize">';
		let table='<table><tr><th>Размеры<th><tr>';
		let arr=JSON.parse(size);
		sizeSelector(arr);
		for(i=0;i<arr.length;i++)
		{
			select1=select1+'<option>'+arr[i][1]+'</option>';
			select2=select2+'<option>'+arr[i][1]+'</option>';
			table=table+'<tr><td>'+arr[i][3]+'</td>'+
			'<td>'+arr[i][1]+'</td>'+
			'<td>'+arr[i][2]+' руб.</td>'+
			'<td><button title="удалить" id="'+arr[i][0]+
			'" onclick="delSize('+arr[i][0]+')">&#10060</button></td></tr>';
		}
		select1 = select1+'</select>';
		select2 = select2+ '</select>';
		table=table+'</table>';
		document.getElementById('sizeTab').innerHTML=table;
		document.getElementById('sizeSelect').innerHTML=select1;
		document.getElementById('sizeEditSelect').innerHTML=select2;
	} catch(e) {}
}
function sizeSelector (arr) {
	let newArr=[arr[0]];
	for (var i = 0; i < arr.length; i++) {
		let check=true;
		for (var n = 0; n < newArr.length; n++) {
			if (newArr[n][1]==arr[i][1]&&newArr[n][2]==arr[i][2]) {
				check=false;
			}
		}
		if (check==true){newArr.push(arr[i])}
	}
	sizeSelectorForm(newArr);
}
function sizeSelectorForm (arr) {
	let select='<option></option>';
	for (var i = 0; i < arr.length; i++) {
		select=select+
		'<option class="size-selector"'+
		//'onclick="sizeSelectorFunction(\''+arr[i][1]+'\',\''+arr[i][2]+'\')"'+
		'>'+
		arr[i][1]+' : '+arr[i][2]+'</option>';
	}
	document.getElementById('sizeSelector').innerHTML=select;
	setTimeout(addSizeSelectorFunction, 2000);
}
function addSizeSelectorFunction(){
	let sizeSelector=document.getElementById('sizeSelector');
	sizeSelector.addEventListener('change', sizeSelectorFunction)
}
function sizeSelectorFunction (e) {
	let arr = (e.target.value).split(' : ');
	console.log(arr);
	document.getElementById('addSize').value=arr[0];
	document.getElementById('kofSize').value=arr[1];
}
function delSize(id)
{
	let req = new XMLHttpRequest();
	req.open('POST','php-del-size.php');
	req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	req.send('id='+id);
	req.onreadystatechange=function ()
	{
		console.log(req.responseText);
	}
	setTimeout(getSize,1000);
}
function sizeAdd()
{
	let size=document.getElementById('addSize').value;
	let kofSize=document.getElementById('kofSize').value;
	let template=document.getElementById('template').value;
	console.log(template);
	if (size=='')
	{
		console.log('error')
	}
	else
	{
		let req = new XMLHttpRequest();
		req.open('POST','php-add-size.php');
		req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
		req.send('size='+size+'&kofSize='+kofSize+'&template='+template);
		req.onreadystatechange=function (){}
		setTimeout(getSize,1000);
	}
}
function subCategoryAdd()
{
	let subcategory=document.getElementById('addSubCategory').value;
	let category=document.getElementById('selectCategory').value;
	if (subcategory=='')
	{
		console.log('error')
	}
	else
	{
		let req = new XMLHttpRequest();
		req.open('POST','php-add-subcategory.php');
		req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
		req.send('category='+category+'&subcategory='+subcategory);
		req.onreadystatechange=function ()
		{
			console.log(req.responseText);
		}
		setTimeout(getSubCategories,1000);
	}
}
function delCategory(id)
{
	let req = new XMLHttpRequest();
	req.open('POST','php-del-category.php');
	req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	req.send('id='+id);
	req.onreadystatechange=function ()
	{
		console.log(req.responseText);
	}
	setTimeout(getCategories,1000);
}
function delSubCategory(id)
{
	let req = new XMLHttpRequest();
	req.open('POST','php-del-subcategory.php');
	req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	req.send('id='+id);
	req.onreadystatechange=function ()
	{
		console.log(req.responseText);
	}
	setTimeout(getCategories,1000);
}
function templateSelect () 
{
	let req = new XMLHttpRequest();
	req.open('POST','php-read-templates.php');
	req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	req.send();
	req.onreadystatechange=function ()
	{
		try {
			let str=req.responseText;
			let template=JSON.parse(str);
			let select='<select name="template">';
			let select2='<select id="template">';
			for (let i=0; i<template.length; i++)
			{
				select=select+'<option>'+template[i].template+'</option>';
				if(crutchEdit.template==template[i].template){
					select2=select2+'<option selected="selected">'+template[i].template+'</option>';
				}
				else{
					select2=select2+'<option>'+template[i].template+'</option>';
				}	
			}
			select=select+'</select>';
			select2=select2+'</select>';
			document.getElementById('addTemplateSelect').innerHTML=select;
			document.getElementById('editTemplateSelect').innerHTML=select2;
			// console.log(crutchEdit);
		} catch(e) {}
	}
}
function ajaxInteriors () {
	var ajax = new XMLHttpRequest();
	ajax.onreadystatechange = function() {
		if (ajax.readyState == 4 && ajax.status == 200) {
			var response = ajax.responseText;
			interiorArr=JSON.parse(response);
			interiorTape();
		}
	};
	ajax.open('POST', 'php-get-interiors.php', true);
	ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	ajax.send();
}
function interiorTape () {
	let tape = '';
	for(let i=0;i<interiorArr.length;i++){
		tape=tape+
		//'<div class="interior-tape-item">'+i+'</div>';
		'<img src="interiors/'+interiorArr[i].interior+'"'+
		' class="interior-tape-item"'+
		' onclick="interiorPopUp(\''+interiorArr[i].id+'\',\''+interiorArr[i].interior+'\')">';
	}
	document.getElementById('interior-tape').innerHTML=tape;
}
function interiorPopUp (id,interior) {
	divShow('editInteriorPopUp');
	document.getElementById('interiorId').value=id;
	document.getElementById('interiorName').innerHTML=interior;
}
function deleteInterior () {
	let id=document.getElementById('interiorId').value;
	let interior=document.getElementById('interiorName').innerHTML;
	var ajax = new XMLHttpRequest();
	ajax.open('POST', 'php-del-interior.php', true);
	ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	ajax.send('interior='+interior+'&id='+id);
	ajax.onreadystatechange = function() {
		if (ajax.readyState == 4 && ajax.status == 200) {
			var response = ajax.responseText;
			ajaxInteriors ();
			divHide('editInteriorPopUp');
		}
	}
}
