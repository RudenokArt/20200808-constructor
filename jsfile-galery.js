let page=1;
let itemArr=[];
let categoryExpander=false;
let selectCategoryDroper=false;
let subCategorySelector=false;

function indexOnload () 
{
	getCookie();
	setTimeout(ajaxGallery, 100);
	setTimeout(ajaxPosts, 200);
	setTimeout(ajaxCategory, 300);
	// setTimeout(pangination, 5000);
}
function ajaxGallery(where)
{
	let req = new XMLHttpRequest();
	req.open('POST','php-read-galery.php');
	req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	req.send('where='+where);
	req.onreadystatechange=function ()
	{
		if (req.readyState == 4 && req.status == 200) {
			let str=req.responseText;
			displayGalery(str);
		}	
	}
}
function displayGalery(str)
{	
	try 
	{
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
			let discountPass=discount.split('%');
			if (discount==0)
			{
				discount=''
			}
			else 
			{
				discount='-'+discount+'% '
			}
			galery=galery+
			'<div onclick="constructorTransition(\''+arr[i].image+'\',\''+discountPass[0]+'\')">'+
			//'<div>'+
			'<div class="galeryItem" id="'+id+'">'+
			'<div class="galary-template-wrap" style="background-image: url(miniatures/'+arr[i].image+');">'+
			'<div class="discount">'+discount+'</div>'+
			'<img src="templates/'+template+'" class="galary-template">'+
			'</div>'+
			'<div class="galeryText">'+
			imageName[0]+'<br>'+
			category+' / '+
			subcategory+'<br>'+
			'</div><button class="goButton" '+
			//'onclick="constructorTransition(\''+arr[i].image+'\',\''+discountPass[0]+'\')">'+
			'ВАРИАНТЫ КАРТИН</button>'+
			'</div>'+
			'</div>';
			itemArr[i]=id;
		}
		document.getElementById('content').innerHTML=galery;
		pagination();
	} catch(e) {}
	pageNumber(1);
}
function searchImage()
{
	let where=document.getElementById('searchInput').value;
	if (where=="")
	{
		where='empty'
	}
	else{where='WHERE `image` LIKE "%'+where+'%"'
}
ajaxGallery(where);
}
function showMenu() 
{
	document.getElementById('header-menu').className='drop-menu';
	// body... 
}
function hideMenu () 
{
	document.getElementById('header-menu').className='header-menu';
	// body... 
}
function ajaxPosts()
{
	let req = new XMLHttpRequest();
	req.open('POST','php-read-posts.php');
	req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	req.send();
	req.onreadystatechange=function ()
	{
		if (req.readyState == 4 && req.status == 200){
			try
			{
				let str=req.responseText;
				let post=JSON.parse(str);
				let postBloc='';
				for (i=0;i<post.length;i++)
				{
					postBloc=postBloc+'<div class="post">'+
					'<div><img src="post-image/'+post[i].image_name+'" class="postImage"></div>'+
					'<div>'+post[i].post_text+'</div>'+
					'</div>';
				}
				document.getElementById('posts').innerHTML=postBloc;
			} 
			catch(e) {}

		}
	}
}
function ajaxQuantity(category,field)
{
	let req = new XMLHttpRequest();
	req.open('POST','php-select-count.php');
	req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	req.send('category='+category+'&field='+field);
	req.onreadystatechange=function ()
	{
		if (req.readyState == 4 && req.status == 200) {
			let str=req.responseText;
			document.getElementById('quantity'+category).innerHTML=str;
		}
		
	}
}
function ajaxCategory()
{
	let req = new XMLHttpRequest();
	req.open('POST','php-select-category.php');
	req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	req.send();
	req.onreadystatechange=function ()
	{
		if (req.readyState == 4 && req.status == 200) {
			let str=req.responseText;
			categoriesList(str);
		}
		
	}
	document.getElementById('resetCategory').innerHTML='&#160';
}
function categoriesList (str) 
{
	try 
	{	let arr=JSON.parse(str);
		let list='<table>';
		let select='<option>Все...</option>';
		for(let i=0; i<arr.length; i++)
		{
			list=list+
			'<tr class="item-list">'+
			'<td onclick="ajaxSubCategory(\''+arr[i][1]+'\')">'+
			// '<td onclick="ajaxSubCategory(\''+arr[i][1]+'\')'+
			// '+expandCategory(\''+arr[i][1]+'\')">'+
			arr[i][1]+
			'</td>'+
			'<td id="quantity'+arr[i][1]+'"></td>'+
			'<td id="expand'+arr[i][1]+'" onclick="expandCategory(\''+arr[i][1]+'\')">'+
			'<span class="rotate">&#8250</span></td>'+
			'<tr>'+
			'<tr><td  id="'+arr[i][1]+'" colspan="3"></td></tr>';
			select=select+'<option>'+arr[i][1]+'</option>';
			ajaxQuantity(arr[i][1],'category');
		}
		list=list+'</table>'
		document.getElementById('categories').innerHTML=list;
		document.getElementById('categorySelect').innerHTML=select;
	} catch(e) {}
}
function expandCategory (category) 
{
	subCategorySelector=true;
	if (categoryExpander==false)
	{
		categoryExpander=true;
		showExpandCategory(category);
		document.getElementById('expand'+category).innerHTML=
		'<span class="rotate">&#8249</span>';
	}
	else
	{
		categoryExpander=false;
		document.getElementById(category).innerHTML='';
		document.getElementById('expand'+category).innerHTML=
		'<span class="rotate">&#8250</span>';
	}
}
function showExpandCategory(category)
{
	let req = new XMLHttpRequest();
	req.open('POST','php-select-subcategory.php');
	req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	req.send('category='+category);
	req.onreadystatechange=function ()
	{
		if (req.readyState == 4 && req.status == 200){
			str=req.responseText;
			subCategoriesList (str,category)
		}
		
	}
}
function ajaxSubCategory(category){
	page=1;
	let req = new XMLHttpRequest();
	req.open('POST','php-select-subcategory.php');
	req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	req.send('category='+category);
	req.onreadystatechange=function ()
	{
		if (req.readyState == 4 && req.status == 200) {
			str=req.responseText;
			if (subCategorySelector==false)
			{
				subCategoriesList (str,category)
			}
		}
		
	}
	ajaxGallery('WHERE `category`="'+category+'"')
	document.getElementById('resetCategory').innerHTML=
	'<span class="item-list" onclick="ajaxCategory()+ajaxGallery()">&#8666</span>';
}
function subCategoriesList (str,category) 
{
	try 
	{	let arr=JSON.parse(str);
		let list='';
		let select='<option>Все...</option>';
		for(let i=0; i<arr.length; i++)
		{
			list=list+
			'<span class="item-list" onclick="showSubCategory(\''+arr[i][1]+'\')">&#8226 '
			+arr[i][1]+'&#160 &#160'+
			'<span id="quantity'+arr[i][1]+'"></span></span><br><br>';
			select=select+'<option>'+arr[i][1]+'</option>';
			if (subCategorySelector!=false)
			{
				ajaxQuantity(arr[i][1],'subcategory');
			}
		}
		if (subCategorySelector!=false)
		{
			document.getElementById(category).innerHTML=list;
		}
		else{
			document.getElementById('subCategorySelect').innerHTML=select;
		}	
	} catch(e) {}
}
function showSubCategory (argument) 
{
	ajaxGallery('WHERE `subcategory`="'+argument+'"')
	// body... 
}
function showMenu(){
	document.getElementById('sidebar').style.display='block';
	document.getElementById('sidebar').style.position='absolute';
	document.getElementById('sidebar').style.backgroundColor='rgb(200,200,200)';
	document.getElementById('posts').style.display='none';
	document.getElementById('sidebar').style.zIndex='5';
	document.getElementById('drop-menu').innerHTML=
	'<button onclick="hideMenu()"><h1>&#10006</h1></button>';
}
function hideMenu(){
	document.getElementById('sidebar').style.display='none';
	document.getElementById('drop-menu').innerHTML=
	'<button onclick="showMenu()"><h1>&#8801</h1></button>';
}

function pagination()
{
	let items=Number(document.getElementById('paginationPage').value);
	let itemBegin=(page-1)*items+1;
	let itemEnd=(itemBegin+items-1);
	let n=Math.ceil((itemArr.length)/items);
	for (i=0;i<itemArr.length;i++)
		{document.getElementById(itemArr[i]).style.display = 'none'}
	for (k=itemBegin-1;k<itemEnd;k++)
	{
		try 
		{
			document.getElementById(itemArr[k]).style.display = 'block';
			document.getElementById('page'+page).style.color='red';
		} catch(e) {}
	}
	pageNavigation(n);
	// SetCookie(items);
}
function pageNavigation(n)
{
	pages='<div onclick="priviousPage()" class="pages">&#9668</div>';
	for (i=1;i<=n;i++)
	{
		pages=pages+
		'<div onclick="pageNumber('+i+')"'+
		' id="page'+i+'" class="pages">'+i+'</div>';		
	}
	pages=pages+'<div onclick="nextPage('+n+')" class="pages">&#9658</div>';
	document.getElementById('pageNavigation').innerHTML=pages;
}
function cutNavigation (page) {
 let pages = document.getElementsByClassName('pages');
 if (pages.length>10) {
  for (let i = 1; i < page-5; i++) {
    pages[i].style='display:none';
  }
  for (i = page+5; i < pages.length-2; i++) {
    pages[i].style='display:none';
  }
  if (page-5>0) {pages[page-5].innerHTML='...'}
  if (page+4<pages.length-2) {pages[page+4].innerHTML='...';}
 }
}
function priviousPage()
{
	page=page-1;
	if (page<1){page=1}
		pagination();
	document.getElementById('page'+page).style.color='red';
}
function nextPage(n)
{
	page=page+1;
	if (page>n){page=n}
		pagination();
	document.getElementById('page'+page).style.color='red';
}
function pageNumber(i)
{
	page=i;
	pagination();
	document.getElementById('page'+page).style.color='red';
  cutNavigation(page)
}
// function SetCookie(items)
// {
// 	if (items>1)
// 		{document.cookie='paginationPage='+items;}
// 	else{document.cookie='paginationPage=15';}
// }
function getCookie()
{
	// let paginationPage=document.cookie;
	// let arr=paginationPage.split("=");
	// if (arr[1]>1)
	// 	{document.getElementById('paginationPage').value=Number(arr[1]);}
	// else {document.getElementById('paginationPage').value=20;}
	let req = new XMLHttpRequest();
	req.open('POST','php-pagination-get.php');
	req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	req.send();
	req.onreadystatechange=function ()
	{
		if (req.readyState == 4 && req.status == 200){
			let paginationPage=req.responseText;
			if (paginationPage>1)
				{document.getElementById('paginationPage').value=Number(paginationPage);}
			else {document.getElementById('paginationPage').value=20}
		}
	
}
}
function selectCategory() {
	page=1;
	subCategorySelector=false;
	let category=document.getElementById('categorySelect').value;
	if (category=='Все...')
	{
		ajaxGallery();
		document.getElementById('subCategorySelect').innerHTML='';
	}
	else {
		ajaxSubCategory(category);
	}
}
function selectSubCategory() { 
	page=1;
	let subcategory=document.getElementById('subCategorySelect').value;
	if (subcategory=='Все...'){selectCategory()}
		else{showSubCategory (subcategory);}
}
function selectArrow(argument){
	if (selectCategoryDroper==false)
	{
		document.getElementById(argument).innerHTML='&#8249';
		selectCategoryDroper=true;
	}
	else{selectArrowReset(argument)}
}
function selectArrowReset (argument) {
	document.getElementById(argument).innerHTML='&#8250';
	selectCategoryDroper=false;
}
function constructorTransition (imageName,discount) {
	document.cookie='imageName='+imageName;
	document.cookie='discount='+discount;
	document.location.href='constructor.html';
	console.log(document.cookie);
	localStorage.removeItem('editItem');
}