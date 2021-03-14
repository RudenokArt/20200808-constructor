-- phpMyAdmin SQL Dump
-- version 4.7.5
-- https://www.phpmyadmin.net/
--
-- Хост: localhost
-- Время создания: Окт 12 2020 г., 08:58
-- Версия сервера: 5.6.34
-- Версия PHP: 7.1.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `e25532i4_db`
--

-- --------------------------------------------------------

--
-- Структура таблицы `constractor_templates`
--

CREATE TABLE `constractor_templates` (
  `id` int(10) NOT NULL,
  `template` varchar(200) CHARACTER SET utf8 NOT NULL,
  `size` varchar(200) CHARACTER SET utf8 NOT NULL,
  `price` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Дамп данных таблицы `constractor_templates`
--

INSERT INTO `constractor_templates` (`id`, `template`, `size`, `price`) VALUES
(12, 'шик.png', '', 0),
(13, 'хит-2.png', '', 0),
(14, 'хит-1.png', '', 0),
(15, 'Фантазия.png', '', 0),
(16, 'NEW.png', '', 0);

-- --------------------------------------------------------

--
-- Структура таблицы `constructor_category`
--

CREATE TABLE `constructor_category` (
  `id` int(10) NOT NULL,
  `category` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `constructor_category`
--

INSERT INTO `constructor_category` (`id`, `category`) VALUES
(1, 'Города'),
(2, 'Бабочки');

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
  `40x70` int(10) NOT NULL,
  `46x80` int(10) NOT NULL,
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
(10, 'рис1.webp', '', '', 'шик-1.png', 0, 0, 0, 0, 0, 0, 0, 0, 0),
(11, 'рис1.webp', '', '', 'хит-1.png', 0, 0, 0, 0, 0, 0, 0, 0, 0),
(12, 'рис1.webp', '', '', 'NEW-1.png', 0, 0, 0, 0, 0, 0, 0, 0, 0),
(13, 'Город-2.jpg', 'Города', '', 'хит-1.png', 0, 0, 0, 0, 0, 0, 0, 0, 0),
(14, 'Город-2.jpg', 'Города', '', 'шик-1.png', 0, 0, 0, 0, 0, 0, 0, 0, 0),
(15, 'Город-2.jpg', 'Города', '', 'NEW-1.png', 0, 0, 0, 0, 0, 0, 0, 0, 0),
(19, 'Бабочки-2.jpg', 'Бабочки', '', 'шик-1.png', 0, 0, 0, 0, 0, 0, 0, 0, 0),
(20, 'Бабочки-2.jpg', 'Бабочки', '', 'хит-1.png', 0, 0, 0, 0, 0, 0, 0, 0, 0),
(21, 'Бабочки-1.jpg', 'Бабочки', '', 'NEW-1.png', 0, 0, 0, 0, 0, 0, 0, 0, 0),
(22, 'Африка-2.jpg', 'Пейзажи', 'Равнинные пейзажи', 'шик-1.png', 20, 0, 0, 0, 0, 0, 0, 0, 0),
(23, 'Африка-2.jpg', 'Африка', '', 'хит-1.png', 0, 0, 0, 0, 0, 0, 0, 0, 0),
(24, 'Африка-2.jpg', 'Африка', '', 'NEW-1.png', 0, 0, 0, 0, 0, 0, 0, 0, 0),
(25, 'Античность-2.jpg', '', '', 'шик-1.png', 0, 0, 0, 0, 0, 0, 0, 0, 0),
(26, 'Античность-2.jpg', '', '', 'хит-1.png', 0, 0, 0, 0, 0, 0, 0, 0, 0),
(27, 'Античность-2.jpg', '', '', 'NEW-1.png', 0, 0, 0, 0, 0, 0, 0, 0, 0);

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
(14, 'интерьер2.jpg'),
(16, 'interior4.jpg'),
(17, 'interior5.jpg'),
(18, 'interior6.jpg'),
(19, 'interior7.jpg');

-- --------------------------------------------------------

--
-- Структура таблицы `constructor_mat`
--

CREATE TABLE `constructor_mat` (
  `id` int(10) NOT NULL,
  `material` varchar(200) CHARACTER SET utf8 NOT NULL,
  `kof` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Дамп данных таблицы `constructor_mat`
--

INSERT INTO `constructor_mat` (`id`, `material`, `kof`) VALUES
(7, 'матовый холст', '30'),
(8, 'стекло', '10'),
(9, 'Глянцевый холст', '20');

-- --------------------------------------------------------

--
-- Структура таблицы `constructor_post`
--

CREATE TABLE `constructor_post` (
  `id` int(10) NOT NULL,
  `image_name` varchar(200) CHARACTER SET utf8 NOT NULL,
  `post_text` text CHARACTER SET utf8 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Структура таблицы `constructor_size`
--

CREATE TABLE `constructor_size` (
  `id` int(10) NOT NULL,
  `size` varchar(200) CHARACTER SET utf8 NOT NULL,
  `kof` int(10) NOT NULL,
  `template` varchar(50) CHARACTER SET utf8 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Дамп данных таблицы `constructor_size`
--

INSERT INTO `constructor_size` (`id`, `size`, `kof`, `template`) VALUES
(10, '40*40', 5, 'шик-1.png'),
(11, '50*50', 10, 'шик-1.png'),
(12, '50*50', 20, 'NEW-1.png'),
(13, '50*50', 1000, 'шик-3.png');

-- --------------------------------------------------------

--
-- Структура таблицы `constructor_subcategory`
--

CREATE TABLE `constructor_subcategory` (
  `id` int(10) NOT NULL,
  `category` varchar(200) NOT NULL,
  `subcategory` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `constructor_subcategory`
--

INSERT INTO `constructor_subcategory` (`id`, `category`, `subcategory`) VALUES
(1, 'Пейзажи', 'Горные пейзажи'),
(2, 'Пейзажи', 'Равнинные пейзажи'),
(3, 'Африка', 'Малые города'),
(4, 'Абстракция', 'категория 1'),
(5, 'Бабочки', 'мухи');

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
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `constractor_templates`
--
ALTER TABLE `constractor_templates`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT для таблицы `constructor_category`
--
ALTER TABLE `constructor_category`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT для таблицы `constructor_galеry`
--
ALTER TABLE `constructor_galеry`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT для таблицы `constructor_interiors`
--
ALTER TABLE `constructor_interiors`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT для таблицы `constructor_mat`
--
ALTER TABLE `constructor_mat`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT для таблицы `constructor_post`
--
ALTER TABLE `constructor_post`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `constructor_size`
--
ALTER TABLE `constructor_size`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT для таблицы `constructor_subcategory`
--
ALTER TABLE `constructor_subcategory`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
