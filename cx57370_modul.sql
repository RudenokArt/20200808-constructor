-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Мар 16 2021 г., 23:29
-- Версия сервера: 5.6.47
-- Версия PHP: 7.1.33

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
(5, 'category_4'),
(6, 'category_5'),
(7, 'category_6'),
(8, 'category_7'),
(9, 'category_8'),
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
(180, 'категория_1', 'subcategory_1_9'),
(181, 'category_2', 'subcategory_2_1'),
(182, 'category_2', 'subcategory_2_2'),
(183, 'category_2', 'subcategory_2_3'),
(184, 'category_2', 'subcategory_2_4'),
(185, 'category_2', 'subcategory_2_5'),
(186, 'category_2', 'subcategory_2_6'),
(187, 'category_2', 'subcategory_2_7'),
(188, 'category_2', 'subcategory_2_8'),
(189, 'category_2', 'subcategory_2_9'),
(190, 'category_3', 'subcategory_3_1'),
(191, 'category_3', 'subcategory_3_2'),
(192, 'category_3', 'subcategory_3_3'),
(193, 'category_3', 'subcategory_3_4'),
(194, 'category_3', 'subcategory_3_5'),
(195, 'category_3', 'subcategory_3_6'),
(196, 'category_3', 'subcategory_3_7'),
(197, 'category_3', 'subcategory_3_8'),
(198, 'category_3', 'subcategory_3_9'),
(199, 'category_4', 'subcategory_4_1'),
(200, 'category_4', 'subcategory_4_2'),
(201, 'category_4', 'subcategory_4_3'),
(202, 'category_4', 'subcategory_4_4'),
(203, 'category_4', 'subcategory_4_5'),
(204, 'category_4', 'subcategory_4_6'),
(205, 'category_4', 'subcategory_4_7'),
(206, 'category_4', 'subcategory_4_8'),
(207, 'category_4', 'subcategory_4_9'),
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
(235, 'category_8', 'subcategory_8_1'),
(236, 'category_8', 'subcategory_8_2'),
(237, 'category_8', 'subcategory_8_3'),
(238, 'category_8', 'subcategory_8_4'),
(239, 'category_8', 'subcategory_8_5'),
(240, 'category_8', 'subcategory_8_6'),
(241, 'category_8', 'subcategory_8_7'),
(242, 'category_8', 'subcategory_8_8'),
(243, 'category_8', 'subcategory_8_9'),
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
-- Структура таблицы `wallpaper_wallpaper`
--

CREATE TABLE `wallpaper_wallpaper` (
  `id` int(10) NOT NULL,
  `article` varchar(200) NOT NULL,
  `wallpaper` varchar(200) NOT NULL,
  `category` varchar(200) NOT NULL,
  `subcategory` varchar(200) NOT NULL,
  `interior` varchar(200) NOT NULL,
  `discoun` int(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `wallpaper_wallpaper`
--

INSERT INTO `wallpaper_wallpaper` (`id`, `article`, `wallpaper`, `category`, `subcategory`, `interior`, `discoun`) VALUES
(1, '01615831815', 'Абстракция0', 'категория_1', 'subcategory_1_2', 'interior_1', 20),
(2, '11615831815', 'Абстракция1', 'категория_1', 'subcategory_1_2', 'interior_1', 0),
(3, '21615831815', 'Абстракция2', 'категория_1', 'subcategory_1_2', 'interior_1', 0),
(4, '31615831815', 'Абстракция3', 'категория_1', 'subcategory_1_2', 'interior_1', 0),
(5, '41615831815', 'Абстракция4', 'категория_1', 'subcategory_1_2', 'interior_1', 0),
(6, '01615831836', 'Абстракция0', 'категория_1', 'subcategory_1_3', 'interior_1', 0),
(7, '11615831836', 'Абстракция1', 'категория_1', 'subcategory_1_3', 'interior_1', 0),
(8, '21615831836', 'Абстракция2', 'категория_1', 'subcategory_1_3', 'interior_1', 0),
(9, '31615831836', 'Абстракция3', 'категория_1', 'subcategory_1_3', 'interior_1', 0),
(10, '41615831836', 'Абстракция4', 'категория_1', 'subcategory_1_3', 'interior_1', 0),
(11, '01615831856', 'Абстракция0', 'category_2', 'subcategory_2_2', 'interior_1', 0),
(12, '11615831856', 'Абстракция1', 'category_2', 'subcategory_2_2', 'interior_1', 0),
(13, '21615831856', 'Абстракция2', 'category_2', 'subcategory_2_2', 'interior_1', 0),
(14, '31615831856', 'Абстракция3', 'category_2', 'subcategory_2_2', 'interior_1', 0),
(15, '41615831856', 'Абстракция4', 'category_2', 'subcategory_2_2', 'interior_1', 0),
(16, '01615831863', 'Абстракция0', 'category_2', 'subcategory_2_3', 'interior_1', 0),
(17, '11615831863', 'Абстракция1', 'category_2', 'subcategory_2_3', 'interior_1', 0),
(18, '21615831863', 'Абстракция2', 'category_2', 'subcategory_2_3', 'interior_1', 0),
(19, '31615831863', 'Абстракция3', 'category_2', 'subcategory_2_3', 'interior_1', 0),
(20, '41615831863', 'Абстракция4', 'category_2', 'subcategory_2_3', 'interior_1', 0),
(21, '01615831929', 'Абстракция0', 'category_3', 'subcategory_3_3', 'interior_1', 0),
(22, '11615831929', 'Абстракция1', 'category_3', 'subcategory_3_3', 'interior_1', 0),
(23, '21615831929', 'Абстракция2', 'category_3', 'subcategory_3_3', 'interior_1', 0),
(24, '31615831929', 'Абстракция3', 'category_3', 'subcategory_3_3', 'interior_1', 0),
(25, '41615831929', 'Абстракция4', 'category_3', 'subcategory_3_3', 'interior_1', 0),
(26, '51615831929', 'Абстракция5', 'category_3', 'subcategory_3_3', 'interior_1', 0),
(27, '61615831929', 'Абстракция6', 'category_3', 'subcategory_3_3', 'interior_1', 0),
(28, '71615831929', 'Абстракция7', 'category_3', 'subcategory_3_3', 'interior_1', 0),
(29, '81615831929', 'Абстракция8', 'category_3', 'subcategory_3_3', 'interior_1', 0),
(30, '91615831929', 'Абстракция9', 'category_3', 'subcategory_3_3', 'interior_1', 0),
(31, '101615831929', 'Абстракция10', 'category_3', 'subcategory_3_3', 'interior_1', 0),
(32, '111615831929', 'Абстракция11', 'category_3', 'subcategory_3_3', 'interior_1', 0),
(33, '121615831929', 'Абстракция12', 'category_3', 'subcategory_3_3', 'interior_1', 0),
(34, '131615831929', 'Абстракция13', 'category_3', 'subcategory_3_3', 'interior_1', 0),
(35, '141615831929', 'Абстракция14', 'category_3', 'subcategory_3_3', 'interior_1', 0),
(36, '151615831929', 'Абстракция15', 'category_3', 'subcategory_3_3', 'interior_1', 0),
(37, '161615831929', 'Абстракция16', 'category_3', 'subcategory_3_3', 'interior_1', 0),
(38, '171615831929', 'Абстракция17', 'category_3', 'subcategory_3_3', 'interior_1', 0),
(39, '181615831929', 'Абстракция18', 'category_3', 'subcategory_3_3', 'interior_1', 0),
(40, '191615831929', 'Абстракция19', 'category_3', 'subcategory_3_3', 'interior_1', 0),
(41, '201615831929', 'Абстракция20', 'category_3', 'subcategory_3_3', 'interior_1', 0),
(42, '211615831929', 'Абстракция21', 'category_3', 'subcategory_3_3', 'interior_1', 0),
(43, '221615831929', 'Абстракция22', 'category_3', 'subcategory_3_3', 'interior_1', 0),
(44, '231615831929', 'Абстракция23', 'category_3', 'subcategory_3_3', 'interior_1', 0),
(45, '241615831929', 'Абстракция24', 'category_3', 'subcategory_3_3', 'interior_1', 0),
(46, '251615831929', 'Абстракция25', 'category_3', 'subcategory_3_3', 'interior_1', 0),
(47, '261615831929', 'Абстракция26', 'category_3', 'subcategory_3_3', 'interior_1', 0),
(48, '271615831929', 'Абстракция27', 'category_3', 'subcategory_3_3', 'interior_1', 0),
(49, '281615831929', 'Абстракция28', 'category_3', 'subcategory_3_3', 'interior_1', 0),
(50, '291615831929', 'Абстракция29', 'category_3', 'subcategory_3_3', 'interior_1', 0),
(51, '301615831929', 'Абстракция30', 'category_3', 'subcategory_3_3', 'interior_1', 0),
(52, '311615831929', 'Абстракция31', 'category_3', 'subcategory_3_3', 'interior_1', 0),
(53, '321615831929', 'Абстракция32', 'category_3', 'subcategory_3_3', 'interior_1', 0),
(54, '331615831929', 'Абстракция33', 'category_3', 'subcategory_3_3', 'interior_1', 0),
(55, '341615831929', 'Абстракция34', 'category_3', 'subcategory_3_3', 'interior_1', 0),
(56, '351615831929', 'Абстракция35', 'category_3', 'subcategory_3_3', 'interior_1', 0),
(57, '361615831929', 'Абстракция36', 'category_3', 'subcategory_3_3', 'interior_1', 0),
(58, '371615831929', 'Абстракция37', 'category_3', 'subcategory_3_3', 'interior_1', 0),
(59, '381615831929', 'Абстракция38', 'category_3', 'subcategory_3_3', 'interior_1', 0),
(60, '391615831929', 'Абстракция39', 'category_3', 'subcategory_3_3', 'interior_1', 0),
(61, '401615831929', 'Абстракция40', 'category_3', 'subcategory_3_3', 'interior_1', 0),
(62, '411615831929', 'Абстракция41', 'category_3', 'subcategory_3_3', 'interior_1', 0),
(63, '421615831929', 'Абстракция42', 'category_3', 'subcategory_3_3', 'interior_1', 0),
(64, '431615831929', 'Абстракция43', 'category_3', 'subcategory_3_3', 'interior_1', 0),
(65, '441615831929', 'Абстракция44', 'category_3', 'subcategory_3_3', 'interior_1', 0),
(66, '451615831929', 'Абстракция45', 'category_3', 'subcategory_3_3', 'interior_1', 0),
(67, '461615831929', 'Абстракция46', 'category_3', 'subcategory_3_3', 'interior_1', 0),
(68, '471615831929', 'Абстракция47', 'category_3', 'subcategory_3_3', 'interior_1', 0),
(69, '481615831929', 'Абстракция48', 'category_3', 'subcategory_3_3', 'interior_1', 0),
(70, '491615831929', 'Абстракция49', 'category_3', 'subcategory_3_3', 'interior_1', 0);

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `wallpaper_category`
--
ALTER TABLE `wallpaper_category`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `wallpaper_subcategory`
--
ALTER TABLE `wallpaper_subcategory`
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
-- AUTO_INCREMENT для таблицы `wallpaper_category`
--
ALTER TABLE `wallpaper_category`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT для таблицы `wallpaper_subcategory`
--
ALTER TABLE `wallpaper_subcategory`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=343;

--
-- AUTO_INCREMENT для таблицы `wallpaper_wallpaper`
--
ALTER TABLE `wallpaper_wallpaper`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=71;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
