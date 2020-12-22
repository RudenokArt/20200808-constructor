<?php 
/**
 * Отправка почты через PHP (SMTP)
 * Сделано в Live-code.ru
 * Автор: Mowshon
 * Дата: 11.11.11
 */

// Подключаем SMTP класс для работы с почтой
include_once('km_smtp_class.php');

// Конфигурационный массив
$SenderConfig = array(
    "SMTP_server"   =>  "smtp.yandex.ru",
    "SMTP_port"     =>  "465",
    "SMTP_email"    =>  "zakazugideal@yandex.ru",
    "SMTP_pass"     =>  "Patvakanlala197306",
    "SMTP_type"     =>  "ssl"
);

// Email получателя/Получателей
$Receiver = $_POST['recipient'];
// Тема сообщения
$Subject = "Юг-идеал";

// Текст сообщения (в HTML)
// $Text = "Привет!<br />
// Сообщение отправлено из скрипта <strong>Mowshon</strong><br />
// Сайт: http://live-code.ru";
$jsonData=file_get_contents('../order-settings.txt');
$arr=json_decode($jsonData);
$Text = 'Артикул: '.$arr[0].
'<br>Шаблон: '.$arr[1].
'<br>Размер: '.$arr[9].
'<br>Материал: '.$arr[10].
'<br>Стоимость: '.$arr[11].
'<br>Заказчик: '.$arr[12].
'<br>e-mail заказчика: '.$arr[13].
'<br>тел. заказчика: '.$arr[14];

// Вложение в письме - адрес к файлу
$Attachment = '../order-image.jpg';

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
    if ($Receiver!=$arr[13]) {
        $SendMail = $mail->send($SenderConfig['SMTP_email'], $arr[13], $Subject, $Text);
    }
    
    // Очищаем список получателей
    $mail->clearRecipients();
    $mail->clearCC();
    $mail->clearBCC();
    $mail->clearAttachments();
}
 else {
    echo "Возникла ошибка во время подключения к SMTP-серверу<br />";
 }
echo "<p>Сообщение отправлено";
    echo '<meta http-equiv="refresh" content="5;URL=../index.html">'; // Воврат на домашнюю страницу

?>