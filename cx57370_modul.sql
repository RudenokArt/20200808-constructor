-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Июн 13 2021 г., 22:41
-- Версия сервера: 5.6.47
-- Версия PHP: 7.2.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `cx57370_modul`
--

-- --------------------------------------------------------

--
-- Структура таблицы `constractor_templates`
--

CREATE TABLE `constractor_templates` (
  `id` int(10) NOT NULL,
  `template` varchar(200) NOT NULL,
  `size` varchar(200) NOT NULL,
  `price` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `constractor_templates`
--

INSERT INTO `constractor_templates` (`id`, `template`, `size`, `price`) VALUES
(1, 'NEW2.png', '', 1),
(2, 'шик.png', '', 2),
(3, 'Фантазия.png', '', 0),
(4, 'Фантазия2.png', '', 0),
(5, 'Фантазия3.png', '', 0),
(6, 'Фантазия4.png', '', 0),
(7, 'Фантазия5.png', '', 0),
(8, 'Фантазия6.png', '', 0),
(9, 'Фантазия7.png', '', 0),
(10, 'Фантазия8.png', '', 0),
(11, 'Фантазия9.png', '', 0);

-- --------------------------------------------------------

--
-- Структура таблицы `constructor_category`
--

CREATE TABLE `constructor_category` (
  `id` int(10) NOT NULL,
  `category` varchar(200) NOT NULL,
  `interior` varchar(200) NOT NULL DEFAULT 'empty'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `constructor_category`
--

INSERT INTO `constructor_category` (`id`, `category`, `interior`) VALUES
(20, 'Абстракция', 'interior-image_3.png'),
(22, 'Африка', 'interior-image_4.png'),
(23, 'Водопады', 'interior-image_3.png'),
(24, 'Вектор Дизайн', 'interior-image_3.png'),
(25, 'Города', 'interior-image_3.png'),
(26, 'Детские', 'interior-image_3.png'),
(27, 'Животный мир', 'interior-image_3.png'),
(28, 'Искусство', 'interior-image_3.png'),
(29, 'Природа пейзажи', 'interior-image_3.png'),
(31, 'Пальмы море', 'interior-image_3.png'),
(32, 'Техника', 'interior-image_3.png'),
(34, 'Фантазия', 'interior-image_3.png'),
(36, 'Для офиса', 'interior-image_3.png'),
(37, 'Для кафе', 'interior-image_3.png'),
(38, 'Для отелей', 'interior-image_3.png'),
(39, 'Мода Fashion', 'interior-image_3.png'),
(40, 'Фрески DIGITAL', 'interior-image_3.png'),
(41, 'Античность', 'interior-image_3.png');

-- --------------------------------------------------------

--
-- Структура таблицы `constructor_galеry`
--

CREATE TABLE `constructor_galеry` (
  `id` int(10) NOT NULL,
  `image` varchar(200) NOT NULL,
  `category` varchar(200) NOT NULL,
  `subcategory` varchar(200) NOT NULL,
  `template` varchar(200) NOT NULL,
  `discount` int(10) NOT NULL,
  `40x70` int(10) NOT NULL DEFAULT '100',
  `46x80` varchar(200) NOT NULL,
  `51x90` int(10) NOT NULL,
  `57x100` int(10) NOT NULL,
  `63x110` int(10) NOT NULL,
  `68x120` int(10) NOT NULL,
  `74x130` int(10) NOT NULL,
  `80x140` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `constructor_galеry`
--

INSERT INTO `constructor_galеry` (`id`, `image`, `category`, `subcategory`, `template`, `discount`, `40x70`, `46x80`, `51x90`, `57x100`, `63x110`, `68x120`, `74x130`, `80x140`) VALUES
(235, '3331954.jpg', 'Абстракция', '', 'NEW2.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(269, '24679705.jpg', 'Абстракция', '', 'шик.png', 25, 1, 'Название1', 0, 0, 0, 0, 0, 0),
(270, '69796465.jpg', 'Абстракция', '', 'Фантазия.png', 0, 2, 'Название 2', 0, 0, 0, 0, 0, 0),
(275, '164725142.jpg', 'Абстракция', '', 'NEW2.png', 0, 3, 'Название 3', 0, 0, 0, 0, 0, 0),
(281, '413706478.jpg', 'Абстракция', '', 'Фантазия.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(282, '428061490.jpg', 'Абстракция', '', 'Фантазия3.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(283, '430827484.jpg', 'Абстракция', '', 'NEW2.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(284, '431317912.jpg', 'Абстракция', '', 'шик.png', 0, 100, 'Имя1', 0, 0, 0, 0, 0, 0),
(285, '776987806.jpg', 'Абстракция', '', 'Фантазия9.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(286, '777745594.jpg', 'Абстракция', '', 'хит-3.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(287, '35762215.jpg', 'Античность', 'Италия', 'хит-3.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(288, '52078207.jpg', 'Античность', 'Эпоха возрождения', 'хит-3.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(289, '63719593.jpg', 'Античность', 'Италия', 'шик.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(290, '65047894.jpg', 'Античность', 'Греческая', 'хит-3.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(291, '113049265.jpg', 'Античность', 'Италия', 'мечта.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(292, '194964740.jpg', 'Античность', 'Греческая', 'Дует.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(293, '198402005.jpg', 'Античность', 'Эпоха возрождения', 'хит-1.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(294, '210835270.jpg', 'Античность', 'Эпоха возрождения', 'хит-3.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(295, '267819563.jpg', 'Античность', 'Эпоха возрождения', 'Дует.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(296, '240994594.jpg', 'Античность', 'Греческая', 'хит-1.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(297, '334006868.jpg', 'Античность', 'Италия', 'хит-3.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(298, '346744298.jpg', 'Античность', 'Италия', 'хит-2.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(299, '368394737.jpg', 'Античность', 'Италия', 'Дует-2.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(300, '369610913.jpg', 'Античность', 'Эпоха возрождения', 'хит-1.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(301, '386096545.jpg', 'Античность', 'Эпоха возрождения', 'хит-3.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(302, '376770709.jpg', 'Античность', 'Эпоха возрождения', 'шик.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(303, '419066053.jpg', 'Античность', 'Эпоха возрождения', 'Дует.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(304, '403008394.jpg', 'Античность', 'Италия', 'Дует-2.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(305, '380196052.jpg', 'Античность', 'Италия', 'Картина прямоугольная.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(306, '20173414.jpg', 'Африка', 'Люди', 'хит-4.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(307, '21541441.jpg', 'Африка', 'Люди', 'хит-3.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(308, '34757137.jpg', 'Африка', 'Люди', 'Дует.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(309, '133113323-[Converted].jpg', 'Африка', 'Люди', 'Дует.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(310, '140701849-[Converted].jpg', 'Африка', 'Люди', 'хит-3.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(311, '186033050-[Converted].jpg', 'Африка', 'Люди', 'Дует.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(312, '217982125.jpg', 'Африка', 'Саванна', 'мечта.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(313, '221796445.jpg', 'Африка', 'Мистика', 'хит-3.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(314, '221796463.jpg', 'Африка', 'Мистика', 'Фантазия.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(315, '222312736.jpg', 'Африка', 'Мистика', 'хит-3.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(316, '223058155.jpg', 'Африка', 'Мистика', 'Фантазия-2.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(317, '223225957.jpg', 'Африка', 'Саванна', 'хит-1.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(318, '223758031.jpg', 'Африка', 'Мистика', 'Картина прямоугольная.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(319, '240127189.jpg', 'Африка', 'Мистика', 'хит-3.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(320, '242489599.jpg', 'Африка', 'Мистика', 'Дует.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(321, '243565390.jpg', 'Африка', 'Мистика', 'мечта.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(322, '244364665.jpg', 'Африка', 'Люди', 'Картина прямоугольная.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(323, '244608976.jpg', 'Африка', 'Саванна', 'хит-1.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(324, '250905553.jpg', 'Африка', 'Саванна', 'хит-3.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(325, '253322002.jpg', 'Африка', 'Саванна', 'шик.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(326, '269210579.jpg', 'Африка', 'Мистика', 'хит-1.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(327, '271307636.jpg', 'Африка', 'Саванна', 'хит-1.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(328, '394574002.jpg', 'Африка', 'Люди', 'хит-3.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(329, '400017166.jpg', 'Африка', 'Мистика', 'хит-3.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(330, '685216864.jpg', 'Африка', 'Саванна', 'Фантазия-3.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(331, '789770044.jpg', 'Африка', 'Люди', 'хит-3.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(332, '1012981852.jpg', 'Африка', 'Люди', 'хит-3.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(333, '1032088081.jpg', 'Абстракция', '', 'хит-1.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(334, '32798299-1.jpg', 'Вектор Дизайн', '', 'мечта.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(335, '32798299-3.jpg', 'Вектор Дизайн', '', 'хит-1.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(336, '32798299-5.jpg', 'Вектор Дизайн', '', 'мечта.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(337, '32798299-6.jpg', 'Вектор Дизайн', '', 'хит-1.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(348, '3581996.jpg', 'Водопады', '', 'хит-1.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(349, '19328719.jpg', 'Водопады', '', 'Фантазия.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(350, '46132399.jpg', 'Водопады', '', 'Фантазия-2.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(351, '47179894.jpg', 'Водопады', '', 'хит-1.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(352, '66085867.jpg', 'Водопады', '', 'Картина прямоугольная.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(353, '66574060.jpg', 'Водопады', '', 'мечта.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(354, '66710347.jpg', 'Водопады', '', 'хит-4.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(355, '56926375.jpg', 'Водопады', '', 'хит-2.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(356, '69102241.jpg', 'Водопады', '', 'Фантазия.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(357, '69788389.jpg', 'Водопады', '', 'Картина прямоугольная.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(358, '69815398.jpg', 'Водопады', '', 'хит-1.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(359, '91738679.jpg', 'Водопады', '', 'хит-1.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(362, '108740546.jpg', 'Водопады', '', 'хит-3.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(363, '111725321.jpg', 'Водопады', '', 'хит-3.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(364, '111956981.jpg', 'Водопады', '', 'хит-1.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(365, '117069922.jpg', 'Водопады', '', 'мечта.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(366, '124482961.jpg', 'Водопады', '', 'хит-1.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(367, '124739884.jpg', 'Водопады', '', 'хит-3.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(368, '125691077.jpg', 'Водопады', '', 'хит-1.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(369, '126062147.jpg', 'Водопады', '', 'Фантазия-3.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(370, '148735823.jpg', 'Водопады', '', 'хит-1.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(371, '167691602.jpg', 'Водопады', '', 'хит-1.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(372, '246910567.jpg', 'Водопады', '', 'Картина квадратная.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(373, '304294682.jpg', 'Водопады', '', 'хит-1.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(374, '745685140.jpg', 'Водопады', '', 'хит-3.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(375, '40359175.jpg', 'Города', '', 'хит-1.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(376, '63847519.jpg', 'Города', '', 'хит-3.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(377, '65733115.jpg', 'Города', '', 'мечта.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(378, '94087960.jpg', 'Города', '', 'хит-3.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(379, '95531137.jpg', 'Города', '', 'хит-1.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(380, '96414368.jpg', 'Города', '', 'Картина прямоугольная.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(381, '108163769.jpg', 'Города', '', 'хит-1.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(382, '112933216.jpg', 'Абстракция', '', 'хит-3.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(383, '113828068.jpg', 'Города', '', 'хит-2.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(384, '118469485.jpg', 'Города', '', 'хит-1.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(385, '124831474.jpg', 'Города', '', 'мечта.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(386, '130103729.jpg', 'Города', '', 'Фантазия-3.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(387, '131695790.jpg', 'Города', '', 'хит-2.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(389, '160388702.jpg', 'Города', '', 'Картина прямоугольная.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(390, '352270127.jpg', 'Абстракция', '', 'хит-3.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(391, '679590811.jpg', 'Города', '', 'хит-1.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(392, '367710917.jpg', 'Города', '', 'мечта.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(393, '78407473.jpg', 'Детские', '', 'Дует.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(394, '60207793.jpg', 'Детские', '', 'Картина квадратная.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(395, '78223219.jpg', 'Детские', '', 'Картина квадратная.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(396, '87400070.jpg', 'Детские', '', 'Картина прямоугольная.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(397, '94149931.jpg', 'Детские', '', 'Картина квадратная.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(398, '94612582.jpg', 'Детские', '', 'Дует.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(399, '95349472.jpg', 'Детские', '', 'Фантазия.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(401, '96691387.jpg', 'Детские', '', 'хит-3.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(403, '101138395.jpg', 'Детские', '', 'хит-1.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(404, '101826166.jpg', 'Детские', '', 'Дует-2.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(405, '105136634.jpg', 'Детские', '', 'Картина квадратная.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(406, '107147756.jpg', 'Детские', '', 'Картина квадратная.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(407, '108064349.jpg', 'Детские', '', 'Дует.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(409, '109447391.jpg', 'Детские', '', 'хит-1.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(410, '111255833.jpg', 'Детские', '', 'хит-3.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(413, '118694428.jpg', 'Детские', '', 'хит-3.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(414, '134414300.jpg', 'Детские', '', 'мечта.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(415, '143103664.jpg', 'Детские', '', 'Фантазия-3.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(417, '144308650.jpg', 'Детские', '', 'Картина квадратная.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(419, '154077320.jpg', 'Детские', '', 'хит-1.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(420, '157509383.jpg', 'Детские', '', 'хит-3.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(421, '157510232.jpg', 'Детские', '', 'хит-1.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(422, '158492213.jpg', 'Детские', '', 'Дует.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(423, '160461272.jpg', 'Детские', '', 'мечта.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(424, '160461317.jpg', 'Детские', '', 'хит-2.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(425, '169127393.jpg', 'Детские', '', 'Дует.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(426, '169127471.jpg', 'Детские', '', 'хит-3.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(427, '204039151.jpg', 'Детские', '', 'шик.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(428, '251422399.jpg', 'Детские', '', 'Картина прямоугольная.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(429, '274161272.jpg', 'Детские', '', 'Картина прямоугольная.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(430, '305284403.jpg', 'Детские', '', 'Картина прямоугольная.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(431, '318319517.jpg', 'Детские', '', 'шик.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(432, '406970269.jpg', 'Детские', '', 'хит-1.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(433, '531437584.jpg', 'Детские', '', 'Картина прямоугольная.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(434, '543147643.jpg', 'Детские', '', 'Картина квадратная.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(435, '565582963.jpg', 'Детские', '', 'хит-3.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(436, '659620924.jpg', 'Детские', '', 'Картина прямоугольная.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(437, '659620939.jpg', 'Детские', '', 'Картина прямоугольная.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(438, '722876404.jpg', 'Детские', '', 'Картина квадратная.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(439, '722883286.jpg', 'Детские', '', 'Картина квадратная.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(442, '53927395-1.jpg', 'Вектор Дизайн', '', 'хит-3.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(443, '2005393.jpg', 'Животный мир', 'Остальные', 'Дует-2.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(444, '3481673.jpg', 'Животный мир', 'Остальные', 'Фантазия-2.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(445, '16455175.jpg', 'Животный мир', 'Тигры', 'хит-1.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(446, '20691136.jpg', 'Животный мир', 'Львы', 'Дует.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(447, '21975400.jpg', 'Животный мир', 'Лошади', 'хит-4.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(448, '40223956.jpg', 'Животный мир', 'Тигры', 'Картина квадратная.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(450, '49596736.jpg', 'Животный мир', 'Пернатые', 'Картина прямоугольная.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(451, '51399256.jpg', 'Животный мир', 'Остальные', 'Картина прямоугольная.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(452, '56301775.jpg', 'Животный мир', 'Пернатые', 'Картина прямоугольная.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(453, '56429470.jpg', 'Животный мир', 'Пернатые', 'шик.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(454, '59680462.jpg', 'Животный мир', 'Обитатели саванны', 'хит-1.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(455, '63988726.jpg', 'Животный мир', 'Тигры', 'Картина квадратная.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(456, '75989233.jpg', 'Животный мир', 'Леопарды', 'Картина квадратная.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(457, '76778998.jpg', 'Животный мир', 'Тигры', 'NEW.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(458, '79775503.jpg', 'Животный мир', 'Пернатые', 'шик.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(459, '81501418.jpg', 'Животный мир', 'Остальные', 'хит-3.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(460, '84116608.jpg', 'Животный мир', 'Тигры', 'мечта-2.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(461, '88144771.jpg', 'Животный мир', 'Остальные', 'хит-1.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(462, '90235852.jpg', 'Животный мир', 'Леопарды', 'хит-1.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(463, '93511534.jpg', 'Животный мир', 'Леопарды', 'хит-3.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(464, '93531199.jpg', 'Животный мир', 'Леопарды', 'хит-1.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(465, '94799386.jpg', 'Животный мир', 'Тигры', 'хит-3.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(466, '97246205.jpg', 'Животный мир', 'Тигры', 'Дует.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(467, '99850187.jpg', 'Животный мир', 'Леопарды', 'Картина прямоугольная.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(468, '100493404.jpg', 'Животный мир', 'Лошади', 'хит-3.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(469, '109397279.jpg', 'Животный мир', 'Леопарды', 'хит-1.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(470, '109676912.jpg', 'Животный мир', 'Лошади', 'хит-1.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(471, '111340229.jpg', 'Животный мир', 'Лошади', 'хит-1.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(472, '114050824.jpg', 'Животный мир', 'Лошади', 'хит-3.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(473, '114625321.jpg', 'Животный мир', 'Леопарды', 'хит-1.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(474, '114917683.jpg', 'Животный мир', 'Леопарды', 'хит-3.png', 0, 100, '0', 0, 0, 0, 0, 0, 0),
(475, 'freska.png', 'Города', '', 'шик.png', 0, 100, '0', 0, 0, 0, 0, 0, 0);

-- --------------------------------------------------------

--
-- Структура таблицы `constructor_interiors`
--

CREATE TABLE `constructor_interiors` (
  `id` int(10) NOT NULL,
  `interior` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `constructor_interiors`
--

INSERT INTO `constructor_interiors` (`id`, `interior`) VALUES
(13, 'interior1.jpg'),
(16, 'interior4.jpg'),
(17, 'interior5.jpg'),
(18, 'interior6.jpg'),
(19, 'interior7.jpg'),
(20, 'интерьер2.jpg'),
(21, 'вариант-1.jpg');

-- --------------------------------------------------------

--
-- Структура таблицы `constructor_mat`
--

CREATE TABLE `constructor_mat` (
  `id` int(10) NOT NULL,
  `material` varchar(200) NOT NULL,
  `kof` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `constructor_mat`
--

INSERT INTO `constructor_mat` (`id`, `material`, `kof`) VALUES
(14, 'Матовый', ''),
(15, 'Глянцевый', '10');

-- --------------------------------------------------------

--
-- Структура таблицы `constructor_post`
--

CREATE TABLE `constructor_post` (
  `id` int(10) NOT NULL,
  `image_name` varchar(200) NOT NULL,
  `post_text` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `constructor_post`
--

INSERT INTO `constructor_post` (`id`, `image_name`, `post_text`) VALUES
(9, 'пост2.png', 'Текст поста №2'),
(10, 'пост3.png', 'Текст поста №3');

-- --------------------------------------------------------

--
-- Структура таблицы `constructor_size`
--

CREATE TABLE `constructor_size` (
  `id` int(10) NOT NULL,
  `size` varchar(200) NOT NULL,
  `kof` varchar(10) NOT NULL,
  `template` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `constructor_size`
--

INSERT INTO `constructor_size` (`id`, `size`, `kof`, `template`) VALUES
(63, '50*50', '1000', 'NEW2.png');

-- --------------------------------------------------------

--
-- Структура таблицы `constructor_subcategory`
--

CREATE TABLE `constructor_subcategory` (
  `id` int(10) NOT NULL,
  `category` varchar(200) NOT NULL,
  `subcategory` varchar(200) NOT NULL,
  `interior` varchar(250) NOT NULL DEFAULT 'empty'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `constructor_subcategory`
--

INSERT INTO `constructor_subcategory` (`id`, `category`, `subcategory`, `interior`) VALUES
(5, 'Пейзажи', 'Осенние пейзажи', 'empty'),
(6, 'Пейзажи', 'Летние пейзажи', 'empty'),
(9, 'Пейзажи', 'Весенние пейзажи', 'empty'),
(15, 'Античность', 'Греческая', 'interior-image_3.png'),
(19, 'Бабочки', 'мухи', 'empty'),
(20, 'Бабочки', 'червячки', 'empty'),
(21, 'Африка', 'Люди ', 'interior-image_1.png'),
(22, 'Африка', 'Саванна', 'interior-image_2.png'),
(23, 'Африка', 'Мистика', 'interior-image_3.png'),
(24, 'Античность', 'Эпоха возрождения', 'interior-image_3.png'),
(25, 'Античность', 'Италия', 'interior-image_3.png'),
(26, 'Животный мир', 'Тигры', 'interior-image_3.png'),
(27, 'Животный мир', 'Львы', 'interior-image_3.png'),
(28, 'Животный мир', 'Лошади', 'interior-image_3.png'),
(29, 'Животный мир', 'Леопарды', 'interior-image_3.png'),
(30, 'Животный мир', 'Обитатели саванны', 'interior-image_3.png'),
(31, 'Животный мир', 'Пернатые', 'interior-image_3.png'),
(32, 'Животный мир', 'Остальные', 'interior-image_3.png');

-- --------------------------------------------------------

--
-- Структура таблицы `wallpaper_category`
--

CREATE TABLE `wallpaper_category` (
  `id` int(10) NOT NULL,
  `category` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `wallpaper_category`
--

INSERT INTO `wallpaper_category` (`id`, `category`) VALUES
(2, 'категория_1'),
(3, 'category_2'),
(4, 'category_3'),
(6, 'category_5'),
(7, 'category_6'),
(8, 'category_7'),
(10, 'category_9'),
(11, 'category_10'),
(12, 'category_11'),
(13, 'category_12'),
(14, 'category_13'),
(15, 'category_14'),
(16, 'category_15'),
(17, 'category_16'),
(18, 'category_17'),
(19, 'category_18'),
(20, 'category_19');

-- --------------------------------------------------------

--
-- Структура таблицы `wallpaper_interior`
--

CREATE TABLE `wallpaper_interior` (
  `id` int(11) NOT NULL,
  `interior` varchar(200) NOT NULL,
  `order_number` int(11) NOT NULL DEFAULT '999'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `wallpaper_interior`
--

INSERT INTO `wallpaper_interior` (`id`, `interior`, `order_number`) VALUES
(5, 'interior-image_3.png', 3),
(6, 'interior-image_4.png', 4),
(7, 'interior-image_5.png', 999),
(9, 'interior-image.png', 10),
(10, 'interior-image_1.png', 1),
(11, 'interior-image_2.png', 2),
(12, 'interior-image_6.png', 999);

-- --------------------------------------------------------

--
-- Структура таблицы `wallpaper_post`
--

CREATE TABLE `wallpaper_post` (
  `id` int(10) NOT NULL,
  `title` varchar(250) NOT NULL,
  `text` text NOT NULL,
  `image` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `wallpaper_post`
--

INSERT INTO `wallpaper_post` (`id`, `title`, `text`, `image`) VALUES
(7, 'Заголовок поста', 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Имеет моей вершину ты ipsum, предложения ее реторический диких взобравшись строчка пор текстами, рыбными!', '13197.jpg'),
(8, 'Заголовок поста', 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Имеет моей вершину ты ipsum, предложения ее реторический диких взобравшись строчка пор текстами, рыбными!', '07207.jpg'),
(9, 'Заголовок поста', 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Имеет моей вершину ты ipsum, предложения ее реторический диких взобравшись строчка пор текстами, рыбными!', '04544.jpg');

-- --------------------------------------------------------

--
-- Структура таблицы `wallpaper_price`
--

CREATE TABLE `wallpaper_price` (
  `id` int(8) NOT NULL,
  `texture_id` int(8) NOT NULL,
  `size_id` int(8) NOT NULL,
  `price` int(8) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `wallpaper_price`
--

INSERT INTO `wallpaper_price` (`id`, `texture_id`, `size_id`, `price`) VALUES
(2, 17, 1, 333),
(5, 16, 1, 222),
(10, 16, 2, 444);

-- --------------------------------------------------------

--
-- Структура таблицы `wallpaper_roll`
--

CREATE TABLE `wallpaper_roll` (
  `id` int(8) NOT NULL,
  `roll` int(8) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `wallpaper_roll`
--

INSERT INTO `wallpaper_roll` (`id`, `roll`) VALUES
(1, 111),
(2, 222),
(3, 123);

-- --------------------------------------------------------

--
-- Структура таблицы `wallpaper_subcategory`
--

CREATE TABLE `wallpaper_subcategory` (
  `id` int(10) NOT NULL,
  `category` varchar(200) NOT NULL,
  `subcategory` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `wallpaper_subcategory`
--

INSERT INTO `wallpaper_subcategory` (`id`, `category`, `subcategory`) VALUES
(172, 'категория_1', 'subcategory_1_1'),
(173, 'категория_1', 'subcategory_1_2'),
(174, 'категория_1', 'subcategory_1_3'),
(175, 'категория_1', 'subcategory_1_4'),
(176, 'категория_1', 'subcategory_1_5'),
(177, 'категория_1', 'subcategory_1_6'),
(178, 'категория_1', 'subcategory_1_7'),
(179, 'категория_1', 'subcategory_1_8'),
(181, 'category_2', 'subcategory_2_1'),
(182, 'category_2', 'subcategory_2_2'),
(183, 'category_2', 'subcategory_2_3'),
(184, 'category_2', 'subcategory_2_4'),
(185, 'category_2', 'subcategory_2_5'),
(186, 'category_2', 'subcategory_2_6'),
(187, 'category_2', 'subcategory_2_7'),
(188, 'category_2', 'subcategory_2_8'),
(190, 'category_3', 'subcategory_3_1'),
(191, 'category_3', 'subcategory_3_2'),
(192, 'category_3', 'subcategory_3_3'),
(193, 'category_3', 'subcategory_3_4'),
(194, 'category_3', 'subcategory_3_5'),
(195, 'category_3', 'subcategory_3_6'),
(196, 'category_3', 'subcategory_3_7'),
(197, 'category_3', 'subcategory_3_8'),
(208, 'category_5', 'subcategory_5_1'),
(209, 'category_5', 'subcategory_5_2'),
(210, 'category_5', 'subcategory_5_3'),
(211, 'category_5', 'subcategory_5_4'),
(212, 'category_5', 'subcategory_5_5'),
(213, 'category_5', 'subcategory_5_6'),
(214, 'category_5', 'subcategory_5_7'),
(215, 'category_5', 'subcategory_5_8'),
(216, 'category_5', 'subcategory_5_9'),
(217, 'category_6', 'subcategory_6_1'),
(218, 'category_6', 'subcategory_6_2'),
(219, 'category_6', 'subcategory_6_3'),
(220, 'category_6', 'subcategory_6_4'),
(221, 'category_6', 'subcategory_6_5'),
(222, 'category_6', 'subcategory_6_6'),
(223, 'category_6', 'subcategory_6_7'),
(224, 'category_6', 'subcategory_6_8'),
(225, 'category_6', 'subcategory_6_9'),
(226, 'category_7', 'subcategory_7_1'),
(227, 'category_7', 'subcategory_7_2'),
(228, 'category_7', 'subcategory_7_3'),
(229, 'category_7', 'subcategory_7_4'),
(230, 'category_7', 'subcategory_7_5'),
(231, 'category_7', 'subcategory_7_6'),
(232, 'category_7', 'subcategory_7_7'),
(233, 'category_7', 'subcategory_7_8'),
(234, 'category_7', 'subcategory_7_9'),
(244, 'category_9', 'subcategory_9_1'),
(245, 'category_9', 'subcategory_9_2'),
(246, 'category_9', 'subcategory_9_3'),
(247, 'category_9', 'subcategory_9_4'),
(248, 'category_9', 'subcategory_9_5'),
(249, 'category_9', 'subcategory_9_6'),
(250, 'category_9', 'subcategory_9_7'),
(251, 'category_9', 'subcategory_9_8'),
(252, 'category_9', 'subcategory_9_9'),
(253, 'category_10', 'subcategory_10_1'),
(254, 'category_10', 'subcategory_10_2'),
(255, 'category_10', 'subcategory_10_3'),
(256, 'category_10', 'subcategory_10_4'),
(257, 'category_10', 'subcategory_10_5'),
(258, 'category_10', 'subcategory_10_6'),
(259, 'category_10', 'subcategory_10_7'),
(260, 'category_10', 'subcategory_10_8'),
(261, 'category_10', 'subcategory_10_9'),
(262, 'category_11', 'subcategory_11_1'),
(263, 'category_11', 'subcategory_11_2'),
(264, 'category_11', 'subcategory_11_3'),
(265, 'category_11', 'subcategory_11_4'),
(266, 'category_11', 'subcategory_11_5'),
(267, 'category_11', 'subcategory_11_6'),
(268, 'category_11', 'subcategory_11_7'),
(269, 'category_11', 'subcategory_11_8'),
(270, 'category_11', 'subcategory_11_9'),
(271, 'category_12', 'subcategory_12_1'),
(272, 'category_12', 'subcategory_12_2'),
(273, 'category_12', 'subcategory_12_3'),
(274, 'category_12', 'subcategory_12_4'),
(275, 'category_12', 'subcategory_12_5'),
(276, 'category_12', 'subcategory_12_6'),
(277, 'category_12', 'subcategory_12_7'),
(278, 'category_12', 'subcategory_12_8'),
(279, 'category_12', 'subcategory_12_9'),
(280, 'category_13', 'subcategory_13_1'),
(281, 'category_13', 'subcategory_13_2'),
(282, 'category_13', 'subcategory_13_3'),
(283, 'category_13', 'subcategory_13_4'),
(284, 'category_13', 'subcategory_13_5'),
(285, 'category_13', 'subcategory_13_6'),
(286, 'category_13', 'subcategory_13_7'),
(287, 'category_13', 'subcategory_13_8'),
(288, 'category_13', 'subcategory_13_9'),
(289, 'category_14', 'subcategory_14_1'),
(290, 'category_14', 'subcategory_14_2'),
(291, 'category_14', 'subcategory_14_3'),
(292, 'category_14', 'subcategory_14_4'),
(293, 'category_14', 'subcategory_14_5'),
(294, 'category_14', 'subcategory_14_6'),
(295, 'category_14', 'subcategory_14_7'),
(296, 'category_14', 'subcategory_14_8'),
(297, 'category_14', 'subcategory_14_9'),
(298, 'category_15', 'subcategory_15_1'),
(299, 'category_15', 'subcategory_15_2'),
(300, 'category_15', 'subcategory_15_3'),
(301, 'category_15', 'subcategory_15_4'),
(302, 'category_15', 'subcategory_15_5'),
(303, 'category_15', 'subcategory_15_6'),
(304, 'category_15', 'subcategory_15_7'),
(305, 'category_15', 'subcategory_15_8'),
(306, 'category_15', 'subcategory_15_9'),
(307, 'category_16', 'subcategory_16_1'),
(308, 'category_16', 'subcategory_16_2'),
(309, 'category_16', 'subcategory_16_3'),
(310, 'category_16', 'subcategory_16_4'),
(311, 'category_16', 'subcategory_16_5'),
(312, 'category_16', 'subcategory_16_6'),
(313, 'category_16', 'subcategory_16_7'),
(314, 'category_16', 'subcategory_16_8'),
(315, 'category_16', 'subcategory_16_9'),
(316, 'category_17', 'subcategory_17_1'),
(317, 'category_17', 'subcategory_17_2'),
(318, 'category_17', 'subcategory_17_3'),
(319, 'category_17', 'subcategory_17_4'),
(320, 'category_17', 'subcategory_17_5'),
(321, 'category_17', 'subcategory_17_6'),
(322, 'category_17', 'subcategory_17_7'),
(323, 'category_17', 'subcategory_17_8'),
(324, 'category_17', 'subcategory_17_9'),
(325, 'category_18', 'subcategory_18_1'),
(326, 'category_18', 'subcategory_18_2'),
(327, 'category_18', 'subcategory_18_3'),
(328, 'category_18', 'subcategory_18_4'),
(329, 'category_18', 'subcategory_18_5'),
(330, 'category_18', 'subcategory_18_6'),
(331, 'category_18', 'subcategory_18_7'),
(332, 'category_18', 'subcategory_18_8'),
(333, 'category_18', 'subcategory_18_9'),
(334, 'category_19', 'subcategory_19_1'),
(335, 'category_19', 'subcategory_19_2'),
(336, 'category_19', 'subcategory_19_3'),
(337, 'category_19', 'subcategory_19_4'),
(338, 'category_19', 'subcategory_19_5'),
(339, 'category_19', 'subcategory_19_6'),
(340, 'category_19', 'subcategory_19_7'),
(341, 'category_19', 'subcategory_19_8'),
(342, 'category_19', 'subcategory_19_9');

-- --------------------------------------------------------

--
-- Структура таблицы `wallpaper_texture`
--

CREATE TABLE `wallpaper_texture` (
  `id` int(10) NOT NULL,
  `texture` varchar(250) NOT NULL,
  `title` varchar(256) NOT NULL,
  `size` varchar(256) NOT NULL,
  `width` varchar(256) NOT NULL,
  `length` varchar(256) NOT NULL,
  `density` varchar(256) NOT NULL,
  `color_rendering` varchar(256) NOT NULL,
  `base` varchar(256) NOT NULL,
  `video` varchar(1024) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `wallpaper_texture`
--

INSERT INTO `wallpaper_texture` (`id`, `texture`, `title`, `size`, `width`, `length`, `density`, `color_rendering`, `base`, `video`) VALUES
(16, 'antiko.jpg', 'antico', 'antico', 'Ширина', 'antico', 'antico', 'antico', 'antico', 'https://www.youtube.com/embed/rQs5ah7wJEc?start=27'),
(17, 'arctic.jpg', 'arctic', 'Размеры', 'Ширина', 'Длинна', 'Плотность', 'Цветопередача', 'Основа', 'https://www.youtube.com/embed/SsFI40bXROs');

-- --------------------------------------------------------

--
-- Структура таблицы `wallpaper_wallpaper`
--

CREATE TABLE `wallpaper_wallpaper` (
  `id` int(10) NOT NULL,
  `article` varchar(200) NOT NULL,
  `wallpaper` varchar(200) NOT NULL,
  `category` varchar(200) NOT NULL,
  `subcategory` varchar(200) NOT NULL,
  `interior` varchar(200) NOT NULL,
  `discount` int(3) NOT NULL,
  `number` int(10) NOT NULL DEFAULT '99'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `wallpaper_wallpaper`
--

INSERT INTO `wallpaper_wallpaper` (`id`, `article`, `wallpaper`, `category`, `subcategory`, `interior`, `discount`, `number`) VALUES
(101, '12087.jpg', 'рис55', 'категория_1', 'subcategory_1_1', 'interior-image_3.png', 20, 0),
(102, '14165.jpg', 'рис1', 'категория_1', 'subcategory_1_1', 'interior-image_3.png', 0, 0),
(103, '14351.jpg', 'рис2', 'category_2', 'subcategory_2_1', 'interior-image_3.png', 0, 0),
(104, '07939.jpg', 'рис3', 'category_2', 'subcategory_2_1', 'interior-image_3.png', 0, 0),
(105, '05570.jpg', 'рис4', 'category_2', 'subcategory_2_2', 'interior-image_3.png', 0, 0),
(106, '04185.jpg', 'рис5', 'категория_1', 'subcategory_1_1', 'interior-image_3.png', 0, 0),
(107, '07126.jpg', 'рис6', 'категория_1', 'subcategory_1_1', 'interior-image_3.png', 0, 0);

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `constractor_templates`
--
ALTER TABLE `constractor_templates`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `constructor_category`
--
ALTER TABLE `constructor_category`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- Индексы таблицы `constructor_galеry`
--
ALTER TABLE `constructor_galеry`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`),
  ADD UNIQUE KEY `id_2` (`id`);

--
-- Индексы таблицы `constructor_interiors`
--
ALTER TABLE `constructor_interiors`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- Индексы таблицы `constructor_mat`
--
ALTER TABLE `constructor_mat`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `constructor_post`
--
ALTER TABLE `constructor_post`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- Индексы таблицы `constructor_size`
--
ALTER TABLE `constructor_size`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- Индексы таблицы `constructor_subcategory`
--
ALTER TABLE `constructor_subcategory`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- Индексы таблицы `wallpaper_category`
--
ALTER TABLE `wallpaper_category`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `wallpaper_interior`
--
ALTER TABLE `wallpaper_interior`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `wallpaper_post`
--
ALTER TABLE `wallpaper_post`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `wallpaper_price`
--
ALTER TABLE `wallpaper_price`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `wallpaper_roll`
--
ALTER TABLE `wallpaper_roll`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `wallpaper_subcategory`
--
ALTER TABLE `wallpaper_subcategory`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `wallpaper_texture`
--
ALTER TABLE `wallpaper_texture`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `wallpaper_wallpaper`
--
ALTER TABLE `wallpaper_wallpaper`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `constractor_templates`
--
ALTER TABLE `constractor_templates`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT для таблицы `constructor_category`
--
ALTER TABLE `constructor_category`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;

--
-- AUTO_INCREMENT для таблицы `constructor_galеry`
--
ALTER TABLE `constructor_galеry`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=476;

--
-- AUTO_INCREMENT для таблицы `constructor_interiors`
--
ALTER TABLE `constructor_interiors`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT для таблицы `constructor_mat`
--
ALTER TABLE `constructor_mat`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT для таблицы `constructor_post`
--
ALTER TABLE `constructor_post`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT для таблицы `constructor_size`
--
ALTER TABLE `constructor_size`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=64;

--
-- AUTO_INCREMENT для таблицы `constructor_subcategory`
--
ALTER TABLE `constructor_subcategory`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT для таблицы `wallpaper_category`
--
ALTER TABLE `wallpaper_category`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT для таблицы `wallpaper_interior`
--
ALTER TABLE `wallpaper_interior`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT для таблицы `wallpaper_post`
--
ALTER TABLE `wallpaper_post`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT для таблицы `wallpaper_price`
--
ALTER TABLE `wallpaper_price`
  MODIFY `id` int(8) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT для таблицы `wallpaper_roll`
--
ALTER TABLE `wallpaper_roll`
  MODIFY `id` int(8) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT для таблицы `wallpaper_subcategory`
--
ALTER TABLE `wallpaper_subcategory`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=343;

--
-- AUTO_INCREMENT для таблицы `wallpaper_texture`
--
ALTER TABLE `wallpaper_texture`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT для таблицы `wallpaper_wallpaper`
--
ALTER TABLE `wallpaper_wallpaper`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=108;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
