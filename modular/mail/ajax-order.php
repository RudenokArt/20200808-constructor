<?php header('Content-type: text/html; charset=utf-8');
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
    "SMTP_pass"     =>  "Patvakanlala197307",
    "SMTP_type"     =>  "ssl"
);

// Email получателя/Получателей
$Receiver = file_get_contents('../profile/admin-mail.txt');
// echo $Receiver;
// exit();

// Тема сообщения
$Subject = "Юг-Идеал онлайн заявка";

// Текст сообщения (в HTML)
// $Text = "Привет!<br />
// Сообщение отправлено из скрипта <strong>Mowshon</strong><br />
// Сайт: http://live-code.ru";

$Text = 'Заявка в приложенном файле <br>
Производственная компания Юг Идеал <br>
Краснодарский край г.Новороссийск<br>
ул.Мысхакское шоссе 50/10<br>
+7(988) 769 69 66 +7(988) 762 22 69 
';

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
    
    // Очищаем список получателей
    $mail->clearRecipients();
    $mail->clearCC();
    $mail->clearBCC();
    $mail->clearAttachments();
    echo "Заказ отправлен администратору";
}
 else {
    echo "Возникла ошибка во время подключения к SMTP-серверу";
 }
    

?>