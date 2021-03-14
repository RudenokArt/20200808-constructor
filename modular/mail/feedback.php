<?php header('Content-type: text/html; charset=utf-8');
/**
 * Отправка почты через PHP (SMTP)
 * Сделано в Live-code.ru
 * Автор: Mowshon
 * Дата: 11.11.11
 */

$name=$_POST['name'];
$email=$_POST['email'];
$mesage=$_POST['mesage'];


// Подключаем SMTP класс для работы с почтой
include_once('km_smtp_class.php');

// Конфигурационный массив
$SenderConfig = array(
    "SMTP_server"   =>  "smtp.yandex.ru",
    "SMTP_port"     =>  "465",
   "SMTP_email"    =>  "zakazugideal@yandex.ru",
    "SMTP_pass"     =>  "Patvakanlala197307",
    "SMTP_type"     =>  "ssl"
);

// Email получателя/Получателей
$Receiver = file_get_contents('../profile/admin-mail.txt');
// echo $Receiver;
// exit();

// Тема сообщения
$Subject = "Сообщение с формы обратной связи на сайте";

// Текст сообщения (в HTML)
// $Text = "Привет!<br />
// Сообщение отправлено из скрипта <strong>Mowshon</strong><br />
// Сайт: http://live-code.ru";

$Text = '
Имя отправителя: '.$name.'<br>
Email отправителя: '.$email.' <br>
'.$mesage;

// Вложение в письме - адрес к файлу
$Attachment = '';

/* $mail = new KM_Mailer(сервер, порт, пользователь, пароль, тип); */
/* Тип может быть: null, tls или ssl */
$mail = new KM_Mailer($SenderConfig['SMTP_server'], $SenderConfig['SMTP_port'], $SenderConfig['SMTP_email'], $SenderConfig['SMTP_pass'], $SenderConfig['SMTP_type']);
if($mail->isLogin) {
    // Прикрепить файл
    if($Attachment) {$mail->addAttachment($Attachment);}

    // Добавить ещё получателей
    // $mail->addRecipient('user@mail.ru');
    // $mail->addRecipient('user@yandex.ru');

    /* $mail->send(От, Для, Тема, Текст, Заголовок = опционально) */
    $SendMail = $mail->send($SenderConfig['SMTP_email'], $Receiver, $Subject, $Text);
    
    // Очищаем список получателей
    $mail->clearRecipients();
    $mail->clearCC();
    $mail->clearBCC();
    $mail->clearAttachments();
    echo "Ваше сообщение отправлено администратору";
}
 else {
    echo "Возникла ошибка во время подключения к SMTP-серверу";
 }
    

?>