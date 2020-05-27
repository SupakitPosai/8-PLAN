-- phpMyAdmin SQL Dump
-- version 4.8.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: May 11, 2020 at 01:45 PM
-- Server version: 5.6.38
-- PHP Version: 5.6.40

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sieconsu_8plan`
--

-- --------------------------------------------------------

--
-- Table structure for table `advertisement`
--

CREATE TABLE `advertisement` (
  `id_advertisement` int(11) NOT NULL,
  `name_advertisement` text COLLATE utf8_unicode_ci NOT NULL,
  `img_advertisement` text COLLATE utf8_unicode_ci NOT NULL,
  `url_advertisement` text COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `advertisement`
--

INSERT INTO `advertisement` (`id_advertisement`, `name_advertisement`, `img_advertisement`, `url_advertisement`) VALUES
(1, 'cccc', '/img_ad/ad.jpg', 'http://8-plan.com/');

-- --------------------------------------------------------

--
-- Table structure for table `banner`
--

CREATE TABLE `banner` (
  `id_banner` int(11) NOT NULL,
  `name_banner` varchar(35) COLLATE utf8_unicode_ci NOT NULL,
  `img_banner` text COLLATE utf8_unicode_ci NOT NULL,
  `page` varchar(35) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `banner`
--

INSERT INTO `banner` (`id_banner`, `name_banner`, `img_banner`, `page`) VALUES
(2, 'dsadssadsa', '/img_banner/banner-2020-03-15_02-47-25.jpg', 'About'),
(4, 'dsdsadsa', '/img_banner/banner-2020-03-17_02-12-23.jpg', 'Updates'),
(5, 'wewqe', '/img_banner/banner-2020-04-02_11-19-52.jpg', 'Projects');

-- --------------------------------------------------------

--
-- Table structure for table `best_seller`
--

CREATE TABLE `best_seller` (
  `id_best_seller` int(11) NOT NULL,
  `id_product` varchar(35) COLLATE utf8_unicode_ci NOT NULL,
  `index_best_seller` int(11) NOT NULL,
  `status_best_seller` varchar(35) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `best_seller`
--

INSERT INTO `best_seller` (`id_best_seller`, `id_product`, `index_best_seller`, `status_best_seller`) VALUES
(1, '2dd2d2ed2ed2ed2', 2, 'active'),
(2, 'wdw1232s2s2s22', 1, 'active');

-- --------------------------------------------------------

--
-- Table structure for table `chat`
--

CREATE TABLE `chat` (
  `id_chat` int(11) NOT NULL,
  `id_chat_room` int(11) NOT NULL,
  `message` text COLLATE utf8_unicode_ci NOT NULL,
  `id_user` varchar(35) COLLATE utf8_unicode_ci NOT NULL,
  `date_chat` datetime NOT NULL,
  `read` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `chat`
--

INSERT INTO `chat` (`id_chat`, `id_chat_room`, `message`, `id_user`, `date_chat`, `read`) VALUES
(58, 5, 'bhkk', 'd8d23b534a97f3bav2ec943925c7b891ccn', '2020-03-24 20:01:23', 0),
(59, 5, 'jkgkj', 'd8d23b534a97f3bav2ec943925c7b891ccn', '2020-03-24 20:01:58', 0),
(60, 5, 'jkgkj', 'd8d23b534a97f3bav2ec943925c7b891ccn', '2020-03-24 20:02:01', 0),
(61, 5, 'jkgkj', 'd8d23b534a97f3bav2ec943925c7b891ccn', '2020-03-24 20:02:15', 0),
(62, 5, 'fds', 'd8d23b534a97f3bav2ec943925c7b891ccn', '2020-03-24 20:02:30', 0),
(63, 5, 'fdsgfd', 'd8d23b534a97f3bav2ec943925c7b891ccn', '2020-03-24 20:02:52', 0),
(64, 5, 'fdsds', 'd8d23b534a97f3bav2ec943925c7b891ccn', '2020-03-24 20:03:09', 0),
(65, 5, 'dfsfsd', 'd8d23b534a97f3bav2ec943925c7b891ccn', '2020-03-24 20:03:38', 0),
(66, 5, 'cxz', 'd8d23b534a97f3bav2ec943925c7b891ccn', '2020-03-24 20:04:31', 0),
(67, 5, 'dfdsf', 'd8d23b534a97f3bav2ec943925c7b891ccn', '2020-03-24 20:06:50', 0),
(68, 5, 'ยินดีให้บริการครับ กรุณารอแอดมินต่อกต่อกลับครับ', 'fe3fe3c3cr34', '2020-03-24 20:06:50', 0),
(69, 5, 'hggk', 'd8d23b534a97f3bav2ec943925c7b891ccn', '2020-03-24 20:11:42', 0),
(70, 5, 'ยินดีให้บริการครับ กรุณารอแอดมินต่อกต่อกลับครับ', 'fe3fe3c3cr34', '2020-03-24 20:11:42', 0),
(71, 6, 'Test', 'j50041fc03e5i8766abb7a0d9d0bf1d687s', '2020-03-25 15:44:34', 0),
(72, 6, 'ยินดีให้บริการครับ กรุณารอแอดมินต่อกต่อกลับครับ', 'fe3fe3c3cr34', '2020-03-25 15:44:34', 0),
(73, 7, 'test', 'peb340b0902f9e9cce09fff6b63ee00ae5w', '2020-03-25 16:12:53', 0),
(74, 7, 'ยินดีให้บริการครับ กรุณารอแอดมินต่อกต่อกลับครับ', 'fe3fe3c3cr34', '2020-03-25 16:12:53', 0),
(75, 5, 'dsadsa', 'd8d23b534a97f3bav2ec943925c7b891ccn', '2020-04-20 10:28:11', 0),
(76, 5, 'ยินดีให้บริการครับ กรุณารอแอดมินต่อกต่อกลับครับ', 'fe3fe3c3cr34', '2020-04-20 10:28:11', 0),
(77, 5, 'fdsfdsfd', 'd8d23b534a97f3bav2ec943925c7b891ccn', '2020-04-22 11:19:36', 0),
(78, 5, 'ยินดีให้บริการครับ กรุณารอแอดมินต่อกต่อกลับครับ', 'fe3fe3c3cr34', '2020-04-22 11:19:36', 0),
(79, 5, 'sadsd', 'd8d23b534a97f3bav2ec943925c7b891ccn', '2020-04-22 18:02:59', 0),
(80, 5, 'ยินดีให้บริการครับ กรุณารอแอดมินต่อกต่อกลับครับ', 'fe3fe3c3cr34', '2020-04-22 18:02:59', 0);

-- --------------------------------------------------------

--
-- Table structure for table `chat_room`
--

CREATE TABLE `chat_room` (
  `id_chat_room` int(11) NOT NULL,
  `id_user` varchar(35) COLLATE utf8_unicode_ci NOT NULL,
  `date_chat_room` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `chat_room`
--

INSERT INTO `chat_room` (`id_chat_room`, `id_user`, `date_chat_room`) VALUES
(5, 'd8d23b534a97f3bav2ec943925c7b891ccn', '2020-04-22 18:02:59'),
(6, 'j50041fc03e5i8766abb7a0d9d0bf1d687s', '2020-03-25 15:44:34'),
(7, 'peb340b0902f9e9cce09fff6b63ee00ae5w', '2020-03-25 16:12:53');

-- --------------------------------------------------------

--
-- Table structure for table `comment`
--

CREATE TABLE `comment` (
  `id_comment` int(11) NOT NULL,
  `id_user` varchar(35) COLLATE utf8_unicode_ci NOT NULL,
  `id_product` varchar(35) COLLATE utf8_unicode_ci NOT NULL,
  `text_comment` text COLLATE utf8_unicode_ci NOT NULL,
  `date_comment` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `comment`
--

INSERT INTO `comment` (`id_comment`, `id_user`, `id_product`, `text_comment`, `date_comment`) VALUES
(1, 'd8d23b534a97f3bav2ec943925c7b891ccn', '2dd2d2ed2ed2ed2', 'งานดีมากครับ', '2020-03-05 17:49:37'),
(6, 'r23rc23r32cr23ccrccrcf', '2dd2d2ed2ed2ed2', 'แบบสวยครับ', '2020-03-06 00:03:00'),
(17, 'd8d23b534a97f3bav2ec943925c7b891ccn', '2dd2d2ed2ed2ed2', 'dsdsadsa', '2020-03-06 16:41:15'),
(19, 'd8d23b534a97f3bav2ec943925c7b891ccn', '2dd2d2ed2ed2ed2', 'ssdsad', '2020-03-06 17:08:16'),
(20, 'd8d23b534a97f3bav2ec943925c7b891ccn', '2dd2d2ed2ed2ed2', 'nnmn', '2020-03-12 23:34:23'),
(22, 'peb340b0902f9e9cce09fff6b63ee00ae5w', 'r4b7e96ed1f21c91b3aa847a4713xb1810l', 'Hi', '2020-03-30 08:36:24');

-- --------------------------------------------------------

--
-- Table structure for table `company`
--

CREATE TABLE `company` (
  `id_company` varchar(35) COLLATE utf8_unicode_ci NOT NULL,
  `name_company` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `value_company_en` text COLLATE utf8_unicode_ci NOT NULL,
  `value_company_th` text COLLATE utf8_unicode_ci
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `company`
--

INSERT INTO `company` (`id_company`, `name_company`, `value_company_en`, `value_company_th`) VALUES
('asdadwd2w2d2wdw2dw2', 'mission', '12321', '<p>8-Plan เกิดมากจากความตั้งใจของทีมงานสถาปนิก<br>-วิศวกร ที่อยากให้ ประชาชนทั่วไป เข้าถึงการบริการด้านการออกแบบ เขียนแบบ การจัดรายการคำนวณโครงสร้าง ให้คำปรึกษา จากสถาปนิก-วิศวกร ที่มีประสบกาณ์กว่า 10 ปี ในรูปแบบ Online – Offline ในราคาที่สามารถเข้าถึงได้ พร้อมกับยกมาตรฐานการประกอบวิชาชีพให้สูงขึ้น โดยทีมงาน 8-Plan มีแนวคิดนำการออกแบบด้านการประหยัดพลังงานและเป็นมิตรต่อสิ่งแวดล้อม (Ecological building) และนวัตกรรมของวัสดุ-การก่อสร้าง มาใช้ เพื่ออนาคตของประชาคมโลก ที่ต้องการลดภาวะโลกร้อนและสร้างสมดุลธรรมชาติ ให้กับอนาคตลูกหลานของเรา</p>'),
('dcdcd5d54cd5s4c5dsc7ds8c8ds8', 'Consultant', 'cdscdscss sd sd sd sd asxassax', 'หแ้ก่าห้แา่หก ก แกหแกหา่แสา'),
('dfdsfwfsdfww3r3r3qr3r33t3t', 'about', '<p><span style=\"color: rgb(33,37,41);background-color: rgb(255,255,255);font-size: 18px;font-family: RSU_Regular;\">ด้วยการออกแบบด้วยนวัตกรรมที่ทันสมัย เพียงแค่คุณคลิก..</span></p>\n<p><span style=\"color: rgb(251,160,38);font-size: 18px;font-family: RSU_Regular;\"><strong>8PLAN</strong></span><span style=\"color: rgb(33,37,41);background-color: rgb(255,255,255);font-size: 18px;font-family: RSU_Regular;\"> สานต่อบ้านในฝันของคุณ ด้วยค่าแบบที่ราคาถูก</span><br><span style=\"color: rgb(33,37,41);background-color: rgb(255,255,255);font-size: 18px;font-family: RSU_Regular;\">พร้อมโปรโมชั่นอีกมากมายสำหรับคุณ</span><br><span style=\"color: rgb(33,37,41);background-color: rgb(255,255,255);font-size: 18px;font-family: RSU_Regular;\">การออกแบบที่ใช้นวัตกรรมและเทคโนโลยี แบบบ้านประหยัดพลังงาน</span><br><span style=\"color: rgb(33,37,41);background-color: rgb(255,255,255);font-size: 18px;font-family: RSU_Regular;\">โดยอ้างอิงจาก กระทรวงพลังงาน</span><br><span style=\"color: rgb(33,37,41);background-color: rgb(255,255,255);font-size: 18px;font-family: RSU_Regular;\">ให้เราร่วมสร้างความฝันของคุณให้เป็นความจริง</span><br><span style=\"color: rgb(251,160,38);background-color: rgb(255,255,255);font-size: 18px;font-family: RSU_Regular;\">8PLAN ให้คุณได้ทุกสิ่ง ที่คุณฝัน \"บ้านของคุณ...จะเป็นจริง\"</span><span style=\"color: rgb(251,160,38);\"> </span></p>', '<p style=\"text-align:justify;\"><span style=\"font-size: 18px;\">ด้วยการออกแบบด้วยนวัตกรรมที่ทันสมัย เพียงแค่คุณคลิก.. </span></p>\n<p style=\"text-align:justify;\"><span style=\"font-size: 18px;\">8PLAN </span>สานต่อบ้านในฝันของคุณ ด้วยค่าแบบที่ราคาถูก<br>พร้อมโปรโมชั่นอีกมากมายสำหรับคุณ<br>การออกแบบที่ใช้นวัตกรรมและเทคโนโลยี แบบบ้านประหยัดพลังงาน<br>โดยอ้างอิงจาก กระทรวงพลังงาน<br>ให้เราร่วมสร้างความฝันของคุณให้เป็นความจริง<br>8PLAN ให้คุณได้ทุกสิ่ง ที่คุณฝัน \"บ้านของคุณ...จะเป็นจริง\"</p>'),
('sdsajdlkasjdlkajsd1223213kws2', 'profile', '<p>8-Plan เกิดมากจากความตั้งใจของทีมงานสถาปนิก-วิศวกร ที่อยากให้ ประชาชนทั่วไป เข้าถึงการบริการด้านการออกแบบ เขียนแบบ การจัดรายการคำนวณโครงสร้าง ให้คำปรึกษา จากสถาปนิก-วิศวกร ที่มีประสบกาณ์กว่า 10 ปี ในรูปแบบ Online – Offline ในราคาที่สามารถเข้าถึงได้ พร้อมกับยกมาตรฐานการประกอบวิชาชีพให้สูงขึ้น โดยทีมงาน 8-Plan มีแนวคิดนำการออกแบบด้านการประหยัดพลังงานและเป็นมิตรต่อสิ่งแวดล้อม (Ecological building) และนวัตกรรมของวัสดุ-การก่อสร้าง มาใช้ เพื่ออนาคตของประชาคมโลก ที่ต้องการลดภาวะโลกร้อนและสร้างสมดุลธรรมชาติ ให้กับอนาคตลูกหลานของเรา<br><br>      8-Plan was born from the intention of the team of architects - engineers who want to offer the best service to the public. We offer to customers such as designs, drawings, cataloging, structural calculation, consulting through our architects-engineers who had over 10 years of experience in Online - Offline service with affordable price and high standard of professional practice.<br>8-Plan’s team brings the design concept to be an energy-saving and environmentally friendly (Ecological building) design and also innovation of materials - construction to the future of the global community. All we do for reducing a global warming and create a natural balancing of our children’s future.</p>', '<p><span style=\"color: rgb(33,37,41);background-color: rgb(255,255,255);font-size: 18px;font-family: RSU_Regular;\">8-Plan เกิดมากจากความตั้งใจของทีมงานสถาปนิก-วิศวกร ที่อยากให้ ประชาชนทั่วไป เข้าถึงการบริการด้านการออกแบบ เขียนแบบ การจัดรายการคำนวณโครงสร้าง ให้คำปรึกษา จากสถาปนิก-วิศวกร ที่มีประสบกาณ์กว่า 10 ปี ในรูปแบบ Online – Offline ในราคาที่สามารถเข้าถึงได้ พร้อมกับยกมาตรฐานการประกอบวิชาชีพให้สูงขึ้น โดยทีมงาน 8-Plan มีแนวคิดนำการออกแบบด้านการประหยัดพลังงานและเป็นมิตรต่อสิ่งแวดล้อม (Ecological building) และนวัตกรรมของวัสดุ-การก่อสร้าง มาใช้ เพื่ออนาคตของประชาคมโลก ที่ต้องการลดภาวะโลกร้อนและสร้างสมดุลธรรมชาติ ให้กับอนาคตลูกหลานของเรา<br></span><br>&nbsp;</p>');

-- --------------------------------------------------------

--
-- Table structure for table `consultant`
--

CREATE TABLE `consultant` (
  `id_consultant` int(11) NOT NULL,
  `img_consultant` text COLLATE utf8_unicode_ci NOT NULL,
  `detail_consultant` text COLLATE utf8_unicode_ci NOT NULL,
  `titel_consultant` text COLLATE utf8_unicode_ci NOT NULL,
  `img_bg_consultant` text COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `consultant`
--

INSERT INTO `consultant` (`id_consultant`, `img_consultant`, `detail_consultant`, `titel_consultant`, `img_bg_consultant`) VALUES
(1, '/img_consultant/test1.jpg', '<p>dsdsdsd sdsad sad FDFDSF</p>', 'wwwww', '/img_consultant/test2.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `discount`
--

CREATE TABLE `discount` (
  `id_discount` int(11) NOT NULL,
  `text_discount` text COLLATE utf8_unicode_ci NOT NULL,
  `type_discount` text COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `discount`
--

INSERT INTO `discount` (`id_discount`, `text_discount`, `type_discount`) VALUES
(1, 'เพียงคุณคลิก...', 'h1'),
(2, 'ซื้อแบบบ้าน', 'h2'),
(3, 'ออนไลน์ตอนนี้', 'h3'),
(4, 'รับทันทีส่วนลด', 'h4'),
(5, '10%', 'dis'),
(6, 'เลย!!', 'h5');

-- --------------------------------------------------------

--
-- Table structure for table `event`
--

CREATE TABLE `event` (
  `id_event` varchar(35) COLLATE utf8_unicode_ci NOT NULL,
  `title_event` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `detail_event` text COLLATE utf8_unicode_ci NOT NULL,
  `img_event` text COLLATE utf8_unicode_ci NOT NULL,
  `date_event` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `event`
--

INSERT INTO `event` (`id_event`, `title_event`, `detail_event`, `img_event`, `date_event`) VALUES
('d2b1d9bc104fd12bfd8e7984c6843af399e', 'sdsad sasad sadsas ddsad', 'sadasdsa', '/img_event/event-2020-03-17_02-08-26.jpg', '2020-03-17 02:08:26'),
('ha858981f83ea4701145f328704f2e0gb2y', 'fsdfds', 'dfdsf', '/img_event/event-2020-03-17_02-08-10.jpg', '2020-03-17 02:08:10');

-- --------------------------------------------------------

--
-- Table structure for table `excellence`
--

CREATE TABLE `excellence` (
  `id_excellence` int(11) NOT NULL,
  `name_excellence` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `img_excellence` text COLLATE utf8_unicode_ci NOT NULL,
  `status_excellence` varchar(50) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `excellence`
--

INSERT INTO `excellence` (`id_excellence`, `name_excellence`, `img_excellence`, `status_excellence`) VALUES
(1, 'Recycle', '/img_excellence/icon1.jpg', 'active'),
(2, 'Green Material', '/img_excellence/icon2.jpg', 'active'),
(3, 'OTTV RTTV', '/img_excellence/icon3.jpg', 'active'),
(4, 'Solar Panel', '/img_excellence/excellence-2020-03-08_11-33-49.jpg', 'not active'),
(5, 'qqqqq', '/img_excellence/excellence-2020-03-08_11-52-09.jpg', 'not active'),
(6, 'Solar Panel', '/img_excellence/excellence-2020-03-17_08-40-27.jpg', 'active');

-- --------------------------------------------------------

--
-- Table structure for table `excellence_product`
--

CREATE TABLE `excellence_product` (
  `id_excellence_product` int(11) NOT NULL,
  `detail_excellence_product` text COLLATE utf8_unicode_ci NOT NULL,
  `id_product` varchar(35) COLLATE utf8_unicode_ci NOT NULL,
  `id_excellence` int(11) NOT NULL,
  `status_excellence_product` varchar(50) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `excellence_product`
--

INSERT INTO `excellence_product` (`id_excellence_product`, `detail_excellence_product`, `id_product`, `id_excellence`, `status_excellence_product`) VALUES
(1, 'cvdsgsgfsfgfhgdh', '2dd2d2ed2ed2ed2', 1, 'not active'),
(2, 'Vertical garden and low heat material', '2dd2d2ed2ed2ed2', 2, 'active'),
(3, 'yutuytuy', '2dd2d2ed2ed2ed2', 3, 'not active'),
(4, 'tretrt', 'wdwweqwqeqw', 1, 'active'),
(5, 'gdfgf', 'wdwweqwqeqw', 2, 'active'),
(6, 'dfadfda afdaf afa', 'k1d71cf908322a826ec0d54ed51d4d80f2n', 1, 'not active'),
(7, 'cvxvxcccccc', 'k1d71cf908322a826ec0d54ed51d4d80f2n', 2, 'not active'),
(8, 'efewdfdsf', 'b64efd61a97d68fb74e753c6a1dca12a76h', 2, 'active'),
(9, 'OTTV 14 W/m2 and RTTV 6 W/m2', '2dd2d2ed2ed2ed2', 3, 'active'),
(10, 'Solar Panel can save up to 70%', '2dd2d2ed2ed2ed2', 6, 'active'),
(11, 'OTTV 20 W/m2 and RTTV 6 W/m2', 'k1d71cf908322a826ec0d54ed51d4d80f2n', 3, 'active'),
(12, 'The best in natural air circulation', 'k1d71cf908322a826ec0d54ed51d4d80f2n', 2, 'active'),
(13, 'Solar Panel can save up to 50%', 'k1d71cf908322a826ec0d54ed51d4d80f2n', 6, 'active'),
(14, 'Wood expose material', 'wdw1232s2s2s22', 3, 'active'),
(15, 'OTTV 17 W/m2 and RTTV 6 W/m2', 'wdw1232s2s2s22', 3, 'active'),
(16, 'Solar Panel can save up to 63%', 'wdw1232s2s2s22', 6, 'active'),
(17, 'Hdududu', 'r4b7e96ed1f21c91b3aa847a4713xb1810l', 6, 'active'),
(18, 'Ydyyd', 'yfd56558c5d6dc6b4l6661c8bbdd75f525f', 1, 'active');

-- --------------------------------------------------------

--
-- Table structure for table `gallery`
--

CREATE TABLE `gallery` (
  `id_gallery` varchar(35) COLLATE utf8_unicode_ci NOT NULL,
  `name_gallery` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `img_gallery` text COLLATE utf8_unicode_ci NOT NULL,
  `id_type_gallery` varchar(35) COLLATE utf8_unicode_ci NOT NULL,
  `status_gallery` varchar(50) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `gallery`
--

INSERT INTO `gallery` (`id_gallery`, `name_gallery`, `img_gallery`, `id_type_gallery`, `status_gallery`) VALUES
('dewdwdewd23343', 'Two story design', '/img_gallery/test4.jpg', 'xxex32212e332rx4xr', 'not active'),
('ewcf23r322e1r3c2c32', 'บ้านชั้นเดียว', '/img_gallery/one_floor.jpg', 'efewf2fe2ef34ff44', 'active'),
('mbda75076eeb35448dd265ebea7a8a5aeen', 'บ้านชั้นครึ่ง', '/img_gallery/gallery-2020-04-04_20-28-55.jpg', 'efewf2fe2ef34ff44', 'active'),
('qewe2332e3', '1 story design', '/img_gallery/test3.jpg', 'xxex32212e332rx4xr', 'not active'),
('qwe232323', 'บ้านสองชั้น', '/img_gallery/two_floor.jpg', 'efewf2fe2ef34ff44', 'active'),
('s110321f889cdff413yd90b560b86a28c8l', 'SADAD2343', '/img_gallery/gallery-2020-03-08_04-31-49.jpg', 'efewf2fe2ef34ff44', 'not active');

-- --------------------------------------------------------

--
-- Table structure for table `get_threed`
--

CREATE TABLE `get_threed` (
  `id_get_threeD` int(11) NOT NULL,
  `img_get_threeD` text COLLATE utf8_unicode_ci NOT NULL,
  `titel_get_threeD` text COLLATE utf8_unicode_ci NOT NULL,
  `detail_get_threeD` text COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `get_threed`
--

INSERT INTO `get_threed` (`id_get_threeD`, `img_get_threeD`, `titel_get_threeD`, `detail_get_threeD`) VALUES
(1, '/img_get_threeD/test1.jpg', 'งานออกแบบบ้าน อาคารต่างๆ ในรูปแบบ 3D', '<p>การเขียนแบบบ้านให้ออกมาเสมือนจริง และ มีมุมมองเหมือนห้อง เหมือนบ้านจริงๆที่จะก่อสร้าง ทำให้การดูแบบบ้าน แบบห้อง ได้ง่ายขึ้น</p>');

-- --------------------------------------------------------

--
-- Table structure for table `how_to`
--

CREATE TABLE `how_to` (
  `id_how_to` int(11) NOT NULL,
  `img_how_to` text COLLATE utf8_unicode_ci NOT NULL,
  `name_how_to` text COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `how_to`
--

INSERT INTO `how_to` (`id_how_to`, `img_how_to`, `name_how_to`) VALUES
(1, '/img_howto/test.jpg', '3434');

-- --------------------------------------------------------

--
-- Table structure for table `img_gallery`
--

CREATE TABLE `img_gallery` (
  `id_img_gallery` int(11) NOT NULL,
  `name_img_gallery` text COLLATE utf8_unicode_ci NOT NULL,
  `url_img_gallery` text COLLATE utf8_unicode_ci NOT NULL,
  `id_product` varchar(35) COLLATE utf8_unicode_ci NOT NULL,
  `status_img_gallery` text COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `img_gallery`
--

INSERT INTO `img_gallery` (`id_img_gallery`, `name_img_gallery`, `url_img_gallery`, `id_product`, `status_img_gallery`) VALUES
(1, 'sdsadsa', '/img_imggallery/t1.jpg', '2dd2d2ed2ed2ed2', 'active'),
(2, 'fdsfds', '/img_imggallery/t2.jpg', '2dd2d2ed2ed2ed2', 'active'),
(3, 'หน้าบ้าน', '/img_imggallery/imggallery-2020-04-20_10-19-11.jpg', '2dd2d2ed2ed2ed2', 'active'),
(4, '1', '/img_imggallery/imggallery-2020-04-20_13-55-47.jpg', 'k1d71cf908322a826ec0d54ed51d4d80f2n', 'active'),
(5, '2', '/img_imggallery/imggallery-2020-04-20_13-56-21.jpg', 'k1d71cf908322a826ec0d54ed51d4d80f2n', 'active'),
(6, '2', '/img_imggallery/imggallery-2020-04-20_13-56-21.jpg', 'k1d71cf908322a826ec0d54ed51d4d80f2n', 'not active'),
(7, '3', '/img_imggallery/imggallery-2020-04-20_13-56-41.jpg', 'k1d71cf908322a826ec0d54ed51d4d80f2n', 'active'),
(8, '1', '/img_imggallery/imggallery-2020-04-20_15-58-48.jpg', 'r4b7e96ed1f21c91b3aa847a4713xb1810l', 'active'),
(9, '2', '/img_imggallery/imggallery-2020-04-20_15-59-28.jpg', 'r4b7e96ed1f21c91b3aa847a4713xb1810l', 'active'),
(10, '3', '/img_imggallery/imggallery-2020-04-20_15-59-50.jpg', 'r4b7e96ed1f21c91b3aa847a4713xb1810l', 'active'),
(11, '1', '/img_imggallery/imggallery-2020-04-20_16-04-57.jpg', 'wdw1232s2s2s22', 'active'),
(12, '2', '/img_imggallery/imggallery-2020-04-20_16-05-23.jpg', 'wdw1232s2s2s22', 'active'),
(13, '3', '/img_imggallery/imggallery-2020-04-20_16-05-40.jpg', 'wdw1232s2s2s22', 'active');

-- --------------------------------------------------------

--
-- Table structure for table `interior`
--

CREATE TABLE `interior` (
  `id_interior` int(11) NOT NULL,
  `img_interior` text COLLATE utf8_unicode_ci NOT NULL,
  `detail_interior` text COLLATE utf8_unicode_ci NOT NULL,
  `titel_interior` text COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `interior`
--

INSERT INTO `interior` (`id_interior`, `img_interior`, `detail_interior`, `titel_interior`) VALUES
(2, '/img_interior/test2.jpg', '<p>dss ds sd sd sd</p>', 'Interior');

-- --------------------------------------------------------

--
-- Table structure for table `item_package`
--

CREATE TABLE `item_package` (
  `id_item_package` varchar(35) COLLATE utf8_unicode_ci NOT NULL,
  `name_item_package` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `price_item` int(11) NOT NULL,
  `file_item_package` text COLLATE utf8_unicode_ci NOT NULL,
  `id_package` varchar(35) COLLATE utf8_unicode_ci NOT NULL,
  `id_product` varchar(35) COLLATE utf8_unicode_ci NOT NULL,
  `status_item_package` varchar(50) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `item_package`
--

INSERT INTO `item_package` (`id_item_package`, `name_item_package`, `price_item`, `file_item_package`, `id_package`, `id_product`, `status_item_package`) VALUES
('3d32d32d2cdcduji', '1', 1000, '/item_package/test.png', 'g4443r332d23', '2dd2d2ed2ed2ed2', 'active'),
('cdcsdcdsc', 'qewqe', 1500, '/item_package/test.png', 'f3f3ede3f', '2dd2d2ed2ed2ed2', 'not active'),
('dccdcsdc', '9', 1000, '/item_package/test.png', '7b56444b4b4b4bbbb', '2dd2d2ed2ed2ed2', 'active'),
('edd2d2', '8', 1000, '/item_package/test.png', 'bu57775r554d4d4d4', '2dd2d2ed2ed2ed2', 'active'),
('edewdeedw', '7', 1000, '/item_package/test.png', 'bu57775r554d4d4d4', '2dd2d2ed2ed2ed2', 'active'),
('pbfe83059c2eodf4038cce6eca993aabb8e', 'แปลน', 2000, '/item_package/item_package-2020-03-12_04-10-53.jpg', 'f3f3ede3f', '2dd2d2ed2ed2ed2', 'active'),
('tretreer', '6', 1000, '/item_package/test.png', 'hitf6575f7f7', '2dd2d2ed2ed2ed2', 'active'),
('vfvvfrf', '5', 1000, '/item_package/test.png', 'hitf6575f7f7', '2dd2d2ed2ed2ed2', 'active'),
('wedded2ed2ede2', '2', 1000, '/item_package/test.png', 'f3f3ede3f', '2dd2d2ed2ed2ed2', 'active'),
('wqqwdw1d1dwdwwd1', '3', 1000, '/item_package/test.png', 'f3f3ede3f', '2dd2d2ed2ed2ed2', 'active');

-- --------------------------------------------------------

--
-- Table structure for table `likes`
--

CREATE TABLE `likes` (
  `id_likes` varchar(35) COLLATE utf8_unicode_ci NOT NULL,
  `id_user` varchar(35) COLLATE utf8_unicode_ci NOT NULL,
  `id_product` varchar(35) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `news`
--

CREATE TABLE `news` (
  `id_news` varchar(35) COLLATE utf8_unicode_ci NOT NULL,
  `title_news` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `detail_news` text COLLATE utf8_unicode_ci NOT NULL,
  `img_news` text COLLATE utf8_unicode_ci NOT NULL,
  `date_news` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `news`
--

INSERT INTO `news` (`id_news`, `title_news`, `detail_news`, `img_news`, `date_news`) VALUES
('j73c8u676bd525fb5d88ddaed8c8d1eedce', 'sdsa', 'sdasad', '/img_news/news-2020-04-02_11-16-11.jpg', '2020-04-02 11:16:11');

-- --------------------------------------------------------

--
-- Table structure for table `order`
--

CREATE TABLE `order` (
  `id_order` varchar(35) COLLATE utf8_unicode_ci NOT NULL,
  `no_order` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `id_product` varchar(35) COLLATE utf8_unicode_ci NOT NULL,
  `status_order` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `id_user` varchar(35) COLLATE utf8_unicode_ci NOT NULL,
  `id_payment_form` varchar(35) COLLATE utf8_unicode_ci NOT NULL,
  `id_payment_method` varchar(35) COLLATE utf8_unicode_ci NOT NULL,
  `date_order` datetime NOT NULL,
  `date_payment` datetime DEFAULT NULL,
  `img_order` text COLLATE utf8_unicode_ci,
  `tack_num` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `num_product` int(11) NOT NULL,
  `total_product` int(11) NOT NULL,
  `total_order` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `order`
--

INSERT INTO `order` (`id_order`, `no_order`, `id_product`, `status_order`, `id_user`, `id_payment_form`, `id_payment_method`, `date_order`, `date_payment`, `img_order`, `tack_num`, `num_product`, `total_product`, `total_order`) VALUES
('ab0c08a762f7a64fa28c62a8c9y6c55c9ec', '7531778671', 'wdw1232s2s2s22', 'รอการชำระเงิน', 'peb340b0902f9e9cce09fff6b63ee00ae5w', '4', '2', '2020-03-30 16:08:25', NULL, NULL, NULL, 0, 0, 0),
('b0a1426d8c93c0612c03049748e5cb0f13k', '5150106324', 'k1d71cf908322a826ec0d54ed51d4d80f2n', 'รอการชำระเงิน', 's90c87ca91b95kc708c7378cc9b9bfd44bh', '5', '1', '2020-04-02 13:14:53', NULL, NULL, NULL, 0, 0, 0),
('e428ce79f025ff9f8dc2bc8979ad61b7dbj', '1162859214', 'r4b7e96ed1f21c91b3aa847a4713xb1810l', 'รอการชำระเงิน', 'peb340b0902f9e9cce09fff6b63ee00ae5w', '4', '6', '2020-04-23 09:21:54', NULL, NULL, NULL, 1, 11900, 11900),
('e633d32bb540bd3da2290d1abc08j89ff5h', '4166166766', 'k1d71cf908322a826ec0d54ed51d4d80f2n', 'รอการจัดส่ง', 'd8d23b534a97f3bav2ec943925c7b891ccn', '2', '1', '2020-04-22 11:18:04', '2020-04-22 11:17:46', '/img_pay/pay-2020-04-22_11-18-26.jpg', NULL, 1, 12000, 12000),
('fc48cad537bfe5c008e29a15bdee5fe2b0b', '5989279753', 'r4b7e96ed1f21c91b3aa847a4713xb1810l', 'รอการชำระเงิน', 'peb340b0902f9e9cce09fff6b63ee00ae5w', '4', '2', '2020-03-30 08:36:53', NULL, NULL, NULL, 0, 0, 0),
('nd9f2fdb296145dc2d9334bd4fdgf82d93y', '8861887108', 'r4b7e96ed1f21c91b3aa847a4713xb1810l', 'รอการจัดส่ง', 'd8d23b534a97f3bav2ec943925c7b891ccn', '2', '5', '2020-04-21 18:37:24', '2020-04-21 18:41:01', '/img_pay/pay-2020-04-21_18-41-34.jpg', NULL, 1, 11900, 11900),
('p57e3f478186fid666bec56419bbd22ddex', '3752921022', '2dd2d2ed2ed2ed2', 'รอการชำระเงิน', 'd8d23b534a97f3bav2ec943925c7b891ccn', '2', '2', '2020-04-02 13:18:07', NULL, NULL, NULL, 0, 0, 0),
('qe3ae8c16679adbfb6e71a220m9e474c41p', '4597600033', '2dd2d2ed2ed2ed2', 'รอการชำระเงิน', 'd8d23b534a97f3bav2ec943925c7b891ccn', '2', '1', '2020-04-20 13:35:05', NULL, NULL, NULL, 1, 16500, 16500),
('y6961c0z34a2fdea607093071ee748f0dez', '6895949358', 'r4b7e96ed1f21c91b3aa847a4713xb1810l', 'รอการจัดส่ง', 'd8d23b534a97f3bav2ec943925c7b891ccn', '2', '1', '2020-04-21 18:06:11', '2020-04-21 18:30:16', '/img_pay/pay-2020-04-21_18-30-50.jpg', NULL, 1, 11900, 11900);

-- --------------------------------------------------------

--
-- Table structure for table `package`
--

CREATE TABLE `package` (
  `id_package` varchar(35) COLLATE utf8_unicode_ci NOT NULL,
  `name_package_th` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `name_package_en` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `id_type_package` varchar(35) COLLATE utf8_unicode_ci NOT NULL,
  `status_package` varchar(50) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `package`
--

INSERT INTO `package` (`id_package`, `name_package_th`, `name_package_en`, `id_type_package`, `status_package`) VALUES
('7b56444b4b4b4bbbb', 'Structure drawing', 'Structure drawing', '6y56y67u6u76hg45', 'active'),
('bu57775r554d4d4d4', 'MEE Drawing', 'MEE Drawing', '6y56y67u6u76hg45', 'active'),
('f3f3ede3f', '3D View Full HD', '3D View Full HD', 'd3232cr323c2c3', 'active'),
('g4443r332d23', '3D View', '3D View', 'wdwd1e1e2e2', 'active'),
('hitf6575f7f7', 'Floor Plan', 'Floor Plan', 'd3232cr323c2c3', 'active'),
('o7f69ca3efebd6a75cbd2a567e251871b0i', 'ฟฟฟฟ', 'aaaaa', '3f545f45f45f4', 'not active'),
('uh766g8gh8jj8j', '2D View Section', '2D View Section', 'd3232cr323c2c3', 'active');

-- --------------------------------------------------------

--
-- Table structure for table `payment_form`
--

CREATE TABLE `payment_form` (
  `id_payment_form` int(11) NOT NULL,
  `full_name` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `address` text COLLATE utf8_unicode_ci NOT NULL,
  `phone_number` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `province` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `district` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `postal_code` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `country` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `id_user` varchar(35) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `payment_form`
--

INSERT INTO `payment_form` (`id_payment_form`, `full_name`, `address`, `phone_number`, `province`, `district`, `postal_code`, `country`, `id_user`) VALUES
(2, 'wqdfsfe', 'qwe12 112 312', '23213', 'dqw', 'wewq', '2312', 'qdsaas', 'd8d23b534a97f3bav2ec943925c7b891ccn'),
(3, 'sadsa', 'sadsa', '2312321', 'qweqe', 'see', '21321', 'qwe', 'j50041fc03e5i8766abb7a0d9d0bf1d687s'),
(4, 'Hanny Chandra Pratama', 'Nursing dormitory Khon Kaen University', '+66945347655', 'KHON KAEN', 'Nai Meuang', '40002', 'ไทย', 'peb340b0902f9e9cce09fff6b63ee00ae5w'),
(5, 'gfgfgfgf', 'gfgfg', 'gfgfgf', 'gfgfg', 'gfgfgf', 'fgfgfgfg', 'gfgfgfggf', 's90c87ca91b95kc708c7378cc9b9bfd44bh');

-- --------------------------------------------------------

--
-- Table structure for table `payment_method`
--

CREATE TABLE `payment_method` (
  `id_payment_method` int(11) NOT NULL,
  `detail_payment_method` text COLLATE utf8_unicode_ci NOT NULL,
  `img_payment_method` text COLLATE utf8_unicode_ci NOT NULL,
  `status_payment_method` varchar(35) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `payment_method`
--

INSERT INTO `payment_method` (`id_payment_method`, `detail_payment_method`, `img_payment_method`, `status_payment_method`) VALUES
(1, 'ธนาคารกสิกรไทย\nชื่อบัญชี บริษัทคอนสตรัคชั่นจำกัด\nประเภทบัญชีกระแสรายวัน\nเลขที่บัญชี 061-8-47293-0', '/img_paymentM/test.jpg', 'active'),
(2, 'TMB BANK\nชื่อบัญชี นาย อภัย ชาภิรมย์\nเลขที่บัญชี 320-2-49472-4', '/img_paymentM/paymentM-2020-03-12_05-34-31.jpg', 'not active'),
(3, 'sdsfdf fds fdf d', '/img_paymentM/paymentM-2020-04-20_10-37-27.jpg', 'not active'),
(4, 'ธนาคารไทยพาณิยช์ \nชื่อบัญชี บริษัทคอนสตรัคชั่นจำกัด\nประเภทบัญชี ฝากออมทรัพย์\nเลขที่บัญชี 600-2492330', '/img_paymentM/paymentM-2020-04-20_14-04-55.jpg', 'not active'),
(5, 'TMB BANK\nชื่อบัญชี นาย อภัย ชาภิรมย์\nเลขที่บัญชี 320-2-49472-4', '/img_paymentM/paymentM-2020-04-20_14-08-37.jpg', 'not active'),
(6, 'ธนาคารไทยพาณิยช์ \nชื่อบัญชี บริษัทคอนสตรัคชั่นจำกัด\nประเภทบัญชี ฝากออมทรัพย์\nเลขที่บัญชี 600-2492330', '/img_paymentM/paymentM-2020-04-23_08-51-57.jpg', 'active');

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `id_product` varchar(35) COLLATE utf8_unicode_ci NOT NULL,
  `name_product_th` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `name_product_en` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `price_product` int(11) NOT NULL,
  `price_sale` int(11) NOT NULL,
  `detail_product` text COLLATE utf8_unicode_ci NOT NULL,
  `size_product` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `excellence` text COLLATE utf8_unicode_ci,
  `ready_to_build` text COLLATE utf8_unicode_ci,
  `img_product` text COLLATE utf8_unicode_ci NOT NULL,
  `img_plan` text COLLATE utf8_unicode_ci NOT NULL,
  `type_product` int(11) NOT NULL,
  `id_gallery` varchar(35) COLLATE utf8_unicode_ci NOT NULL,
  `status_product` int(11) NOT NULL,
  `created_product` datetime NOT NULL,
  `product_document` text COLLATE utf8_unicode_ci NOT NULL,
  `product_service` text COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id_product`, `name_product_th`, `name_product_en`, `price_product`, `price_sale`, `detail_product`, `size_product`, `excellence`, `ready_to_build`, `img_product`, `img_plan`, `type_product`, `id_gallery`, `status_product`, `created_product`, `product_document`, `product_service`) VALUES
('2dd2d2ed2ed2ed2', 'IF2-002', 'IF2-002', 27000, 16500, 'พื้นที่ใช้สอย\n3 ห้องนอน +  2 ห้องน้ำ + 1 ห้องรับแขก\n\nขนาดพื้นที่ในการก่อสร้าง\nพื้นที่ใช้สอยภายในบ้าน 110 ตรม. (10 x 11 ม.)\nขนาดพื้นที่สำหรับก่อสร้าง 14 x 15 ม.\n\nการคำนวณ ค่าการใช้พลังงาน BEC\nค่า OTTV 20 W/m2\nค่า RTTV 6 W/m2\nนวัตกรรมวัสดุประหยัดพลังงาน Cell Crete\nแผงโซล่าเซลล์\n\nราคาก่อสร้าง ประมาณ \n1.3 - 1.55 ล้านบาท\n\nเครดิตผู้ออกแบบ\nสถาปนิก : Settepong Wongchai, Hanny Chandra\nวิศวกร : Dr. Aphai Chapirom', '11 x 10 m', '-', '-', '/img_product/test.jpg', '/img_product/plan_test.jpg', 125, 'qwe232323', 1, '2020-03-04 03:17:28', '- แบบก่อสร้างขนาด A3 จำนวน 1 ชุด  \r\n- ภาพแบบจำลอง 3มิติ จำนวน 3 รูป  \r\n- รายการคำนวณโครงสร้างจากสามัญวิศกร   \r\n- รายการคำนวณการประหยัดพลังงาน BEC  - รายการประมาณราคาค่าก่อสร้าง  - รับรองแบบและใบอนุญาตประกอบวิชาชีพ สถาปนิก – สามัญวิศวกร  *************** จัดส่งแบบฟรี ***************\r\n', '- วิศวกร-สถาปนิก ให้คำปรึกษาระหว่างก่อสร้างโดยระบบประชุมทางไกล   - ปรึกษาระหว่างการก่อสร้างได้ 1 ชั่วโมง/ครั้ง จำนวน 2 ครั้ง ฟรี'),
('b64efd61a97d68fb74e753c6a1dca12a76h', 'www', '2334', 324, 234, 'rwer', '32x432', 'erewrw', 'dsfdsf', '/img_product/product-2020-03-12_20-25-11.jpg', '/img_product/plan-2020-03-12_20-25-11.jpg', 200, 'ewcf23r322e1r3c2c32', 0, '2020-03-12 20:25:11', 'ww', '22'),
('g8dc5f69e647caa12y8d14a81723aa61a7f', 'IF1.5-005', 'IF1.5-005', 36500, 18500, '<p>&nbsp;<span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New;\">พื้นที่ใช้สอย</span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\"> 3 </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New;\">ห้องนอน +</span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">  2 </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New;\">ห้องน้ำ +</span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\"> 1 </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New;\">ห้องรับแขก</span>&nbsp;</p>\n<p><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New;\">ขนาดพื้นที่ในการก่อสร้าง</span> <span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New;\">พื้นที่ใช้สอยภายในบ้าน  </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">187 </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New;\">ตรม. (</span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">10 x 11 </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New;\">ม.)</span>&nbsp;</p>\n<p><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New;\">ขนาดพื้นที่สำหรับก่อสร้าง </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">14 x15 </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New;\">ม.</span></p>\n<p><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New;\">การคำนวณค่าการใช้พลังงาน </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">BEC </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New;\">ค่า </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">OTTV 20 W/m2 </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New;\">ค่า </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">RTTV 6 W/m2 </span></p>\n<p><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New;\">นวัตกรรมวัสดุประหยัดพลังงาน </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">Cell Crete </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New;\">แผงโซล่าเซลล์ราคาก่อสร้าง  ประมาณ</span> <span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">1.3 - 1.55 </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New;\">ล้านบาท</span>&nbsp;</p>\n<p><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New;\">เครดิตผู้ออกแบบ</span> <span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New;\">สถาปนิก : </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">Settepong Wongchai, Hanny Chandra </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New;\">วิศวกร : </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">Dr. AphaiChapirom</span>&nbsp;</p>', '10x11', NULL, NULL, '/img_product/product-2020-04-27_15-47-32.jpg', '/img_product/plan-2020-04-27_15-47-32.jpg', 187, 'mbda75076eeb35448dd265ebea7a8a5aeen', 1, '2020-04-27 15:47:32', '<p>&nbsp;<span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">- </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New;\">แบบก่อสร้างขนาด </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">A3 </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New;\">จำนวน </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">1 </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New;\">ชุด</span>&nbsp;</p>\n<p><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">- </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New;\">ภาพแบบจำลอง </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">3</span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New;\">มิติ จำนวน </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">3 </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New;\">รูป</span></p>\n<p><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">- </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New;\">รายการคำนวณโครงสร้างจากสามัญวิศกร</span>&nbsp;</p>\n<p><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\"> -</span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New;\">รายการคำนวณการประหยัดพลังงาน</span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">BEC </span></p>\n<p><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">- </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New;\">รายการประมาณราคาค่าก่อสร้าง</span>&nbsp;</p>\n<p><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">- </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New;\">รับรองแบบและใบอนุญาตประกอบวิชาชีพสถาปนิก – สามัญวิศวกร</span><br><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">*************** </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New;\">จัดส่งแบบฟรี</span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\"> ***************</span>&nbsp;</p>', '<p>&nbsp;<span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">- </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New;\">วิศวกร-สถาปนิก ให้คำปรึกษาระหว่างก่อสร้างโดยระบบประชุมทางไกล</span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\"> </span></p>\n<p><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\"> - </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New;\">ปรึกษาระหว่างการก่อสร้างได้</span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">1 </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New;\">ชั่วโมง/ครั้งจำนวน </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">2 </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New;\">ครั้ง ฟรี</span>&nbsp;</p>'),
('jef4e3a74dw00a82569826898139b5ea74n', 'IF1-005', 'IF1-005', 23500, 14500, '<p>&nbsp;<span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New\", serif;\">พื้นที่ใช้สอย</span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\"> 3 </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New\", serif;\">ห้องนอน +</span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">  2 </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New\", serif;\">ห้องน้ำ<br>+</span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\"> 1 </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New\", serif;\">ห้องรับแขก</span> <span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New\", serif;\">ขนาดพื้นที่ในการก่อสร้าง</span> <span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New\", serif;\">พื้นที่ใช้สอยภายในบ้าน<br></span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">147 </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New\", serif;\">ตรม. (</span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">10 x 11 </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New\", serif;\">ม.)</span> <span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New\", serif;\">ขนาดพื้นที่สำหรับก่อสร้าง </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">14 x<br>15 </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New\", serif;\">ม.</span> <span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New\", serif;\">การคำนวณ<br>ค่าการใช้พลังงาน </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">BEC </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New\", serif;\">ค่า </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">OTTV<br>20 W/m2 </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New\", serif;\">ค่า </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">RTTV 6 W/m2 </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New\", serif;\">นวัตกรรมวัสดุประหยัดพลังงาน<br></span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">Cell Crete </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New\", serif;\">แผงโซล่าเซลล์ราคาก่อสร้าง ประมาณ</span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\"> <br>1.3 - 1.55 </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New\", serif;\">ล้านบาท</span> <span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New\", serif;\">เครดิตผู้ออกแบบ</span> <span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New\", serif;\">สถาปนิก : </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">Settepong Wongchai, Hanny Chandra </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New\", serif;\">วิศวกร : </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">Dr. Aphai<br>Chapirom</span>&nbsp;&nbsp;</p>', '11x10', NULL, NULL, '/img_product/product-2020-04-27_13-57-56.jpg', '/img_product/plan-2020-04-27_13-57-56.jpg', 147, 'ewcf23r322e1r3c2c32', 1, '2020-04-27 13:57:56', '<p>&nbsp;<span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">- </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New\", serif;\">แบบก่อสร้างขนาด </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">A3<br></span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New\", serif;\">จำนวน </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">1 </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New\", serif;\">ชุด</span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\"> - </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New\", serif;\">ภาพแบบจำลอง </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">3</span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New\", serif;\">มิติ จำนวน </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">3 </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New\", serif;\">รูป</span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\"> - </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New\", serif;\">รายการคำนวณโครงสร้างจากสามัญวิศกร</span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">  -</span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New\", serif;\">รายการคำนวณการประหยัดพลังงาน<br></span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">BEC - </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New\", serif;\">รายการประมาณราคาค่าก่อสร้าง</span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\"> - </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New\", serif;\">รับรองแบบและใบอนุญาตประกอบวิชาชีพ<br>สถาปนิก – สามัญวิศวกร</span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\"><br>*************** </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New\", serif;\">จัดส่งแบบฟรี</span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\"> ***************</span>&nbsp;&nbsp;</p>', '<p>&nbsp;<span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">- </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New\", serif;\">วิศวกร-สถาปนิก ให้คำปรึกษาระหว่างก่อสร้างโดยระบบประชุมทางไกล</span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">  - </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New\", serif;\">ปรึกษาระหว่างการก่อสร้างได้<br></span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">1 </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New\", serif;\">ชั่วโมง/ครั้ง<br>จำนวน </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">2 </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New\", serif;\">ครั้ง ฟรี</span>&nbsp;&nbsp;</p>'),
('k1d71cf908322a826ec0d54ed51d4d80f2n', 'IF1-001', 'IF1-001', 19500, 12000, 'พื้นที่ใช้สอย\n3 ห้องนอน +  2 ห้องน้ำ + 1 ห้องรับแขก\n\nขนาดพื้นที่ในการก่อสร้าง\nพื้นที่ใช้สอยภายในบ้าน 110 ตรม. (10 x 11 ม.)\nขนาดพื้นที่สำหรับก่อสร้าง 14 x 15 ม.\n\nการคำนวณ ค่าการใช้พลังงาน BEC\nค่า OTTV 20 W/m2\nค่า RTTV 6 W/m2\nนวัตกรรมวัสดุประหยัดพลังงาน Cell Crete\nแผงโซล่าเซลล์\n\nราคาก่อสร้าง ประมาณ \n1.3 - 1.55 ล้านบาท\n\nเครดิตผู้ออกแบบ\nสถาปนิก : Settepong Wongchai, Hanny Chandra\nวิศวกร : Dr. Aphai Chapirom', '11 x 10 m', '-', '-', '/img_product/product-2020-03-08_09-58-13.jpg', '/img_product/plan-2020-03-08_09-58-13.jpg', 110, 'ewcf23r322e1r3c2c32', 1, '2020-03-08 09:58:13', '- แบบก่อสร้างขนาด A3 จำนวน 1 ชุด  - ภาพแบบจำลอง 3มิติ จำนวน 3 รูป  - รายการคำนวณโครงสร้างจากสามัญวิศกร   -รายการคำนวณการประหยัดพลังงาน BEC  - รายการประมาณราคาค่าก่อสร้าง  - รับรองแบบและใบอนุญาตประกอบวิชาชีพ สถาปนิก – สามัญวิศวกร  *************** จัดส่งแบบฟรี ***************', ' - วิศวกร-สถาปนิก ให้คำปรึกษาระหว่างก่อสร้างโดยระบบประชุมทางไกล   - ปรึกษาระหว่างการก่อสร้างได้ 1 ชั่วโมง/ครั้ง จำนวน 2 ครั้ง ฟรี'),
('keee606b47d97cc1bcc63bc0fbbd16608az', 'IF1-002', 'IF1-002', 16500, 9900, '<p>&nbsp;<span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New\", serif;\">พื้นที่ใช้สอย</span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\"> 3 </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New\", serif;\">ห้องนอน +</span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">  2 </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New\", serif;\">ห้องน้ำ +</span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\"> 1 </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New\", serif;\">ห้องรับแขก<br></span>&nbsp;</p>\n<p><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New\", serif;\">ขนาดพื้นที่ในการก่อสร้าง พื้นที่ใช้สอยภายในบ้าน </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">110 </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New\", serif;\">ตรม. (</span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">10 x 11 </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New\", serif;\">ม.) </span>&nbsp;</p>\n<p><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New\", serif;\">ขนาดพื้นที่สำหรับก่อสร้าง </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">14 x 15 </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New\", serif;\">ม.</span>&nbsp;</p>\n<p>&nbsp;<span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New\", serif;\">การคำนวณ ค่าการใช้พลังงาน </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">BEC </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New\", serif;\">ค่า </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">OTTV 20 W</span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New\", serif;\">/</span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">m2 </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New\", serif;\">ค่า </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">RTTV 6 W</span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New\", serif;\">/</span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">m2 </span>&nbsp;</p>\n<p><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New\", serif;\">นวัตกรรมวัสดุประหยัดพลังงาน </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">Cell Crete </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New\", serif;\">แผงโซล่าเซลล์ ราคาก่อสร้าง ประมาณ</span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">  1</span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New\", serif;\">.</span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">3 </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New\", serif;\">- </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">1</span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New\", serif;\">.</span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">55 </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New\", serif;\">ล้านบาท</span>&nbsp;</p>\n<p>&nbsp;<span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New\", serif;\">เครดิตผู้ออกแบบ สถาปนิก : </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">Settepong Wongchai, Hanny Chandra </span> <span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New\", serif;\">วิศวกร : </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">Dr</span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New\", serif;\">. </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">Aphai Chapirom</span>&nbsp;&nbsp;</p>', '10x11', NULL, NULL, '/img_product/product-2020-04-30_10-08-29.jpg', '/img_product/plan-2020-04-30_10-08-29.jpg', 85, 'ewcf23r322e1r3c2c32', 1, '2020-04-30 10:08:29', '<p>&nbsp;<span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New\", serif;\">- แบบก่อสร้างขนาด </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">A3 </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New\", serif;\">จำนวน </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">1 </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New\", serif;\">ชุด </span>&nbsp;</p>\n<p><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New\", serif;\">- ภาพแบบจำลอง </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">3</span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New\", serif;\">มิติ จำนวน </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">3 </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New\", serif;\">รูป</span>&nbsp;</p>\n<p>&nbsp;<span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New\", serif;\">- รายการคำนวณโครงสร้างจากสามัญวิศกร  </span>&nbsp;</p>\n<p><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New\", serif;\">-รายการคำนวณการประหยัดพลังงาน </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">BEC</span></p>\n<p><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New\", serif;\">- รายการประมาณราคาค่าก่อสร้าง</span></p>\n<p><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New\", serif;\">- รับรองแบบและใบอนุญาตประกอบวิชาชีพ<br>สถาปนิก – สามัญวิศวกร </span>&nbsp;</p>\n<p><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New\", serif;\">***************</span> <span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New\", serif;\">จัดส่งแบบฟรี</span> <span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New\", serif;\">***************</span>&nbsp;&nbsp;</p>', '<p>&nbsp;<span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New\", serif;\">- วิศวกร-สถาปนิกให้คำปรึกษาระหว่างก่อสร้างโดยระบบประชุมทางไกล  </span>&nbsp;</p>\n<p><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New\", serif;\">- ปรึกษาระหว่างการก่อสร้างได้ </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">1 </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New\", serif;\">ชั่วโมง/ครั้ง จำนวน </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">2 </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New\", serif;\">ครั้ง ฟรี</span>&nbsp;&nbsp;</p>'),
('p78185fe590164a36d9fbb787d727c1e54x', 'IF1.5-002', 'IF1.5-002', 26500, 15900, '<p><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New;\">พื้นที่ใช้สอย</span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\"> 3 </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New;\">ห้องนอน +</span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">  2 </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New;\">ห้องน้ำ +</span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\"> 1 </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New;\">ห้องรับแขก</span></p>\n<p><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New;\">ขนาดพื้นที่ในการก่อสร้าง</span> <span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New;\">พื้นที่ใช้สอยภายในบ้าน</span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">136</span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New;\">ตรม. (</span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">10 x 11 </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New;\">ม.)</span>&nbsp;</p>\n<p><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New;\">ขนาดพื้นที่สำหรับก่อสร้าง </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">14 x15 </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New;\">ม. </span></p>\n<p><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New;\">การคำนวณ ค่าการใช้พลังงาน </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">BEC </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New;\">ค่า </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">OTTV 20 W/m2 </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New;\">ค่า </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">RTTV 6 W/m2 </span></p>\n<p><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New;\">นวัตกรรมวัสดุประหยัดพลังงาน </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">Cell Crete </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New;\">แผงโซล่าเซลล์ราคาก่อสร้าง ประมาณ</span> <span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">1.3 - 1.55 </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New;\">ล้านบาท</span>&nbsp;</p>\n<p><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New;\">เครดิตผู้ออกแบบ</span> <span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New;\">สถาปนิก : </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">Settepong Wongchai, Hanny Chandra  </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New;\">วิศวกร : </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">Dr. Aphai  Chapirom</span>&nbsp;</p>', '10x11', NULL, NULL, '/img_product/product-2020-04-27_14-33-46.jpg', '/img_product/plan-2020-04-27_14-33-46.jpg', 136, 'mbda75076eeb35448dd265ebea7a8a5aeen', 1, '2020-04-27 14:33:46', '<p>&nbsp;<span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">- </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New;\">แบบก่อสร้างขนาด </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">A3 </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New;\">จำนวน </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">1 </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New;\">ชุด</span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\"> </span></p>\n<p><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">- </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New;\">ภาพแบบจำลอง </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">3</span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New;\">มิติ จำนวน </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">3 </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New;\">รูป</span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\"> </span></p>\n<p><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">- </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New;\">รายการคำนวณโครงสร้างจากสามัญวิศกร</span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">  </span></p>\n<p><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">- </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New;\">รายการคำนวณการประหยัดพลังงาน </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">BEC </span></p>\n<p><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">- </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New;\">รายการประมาณราคาค่าก่อสร้าง</span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\"> </span></p>\n<p><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">- </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New;\">รับรองแบบและใบอนุญาตประกอบวิชาชีพ สถาปนิก – สามัญวิศวกร</span><br><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">*************** </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New;\">จัดส่งแบบฟรี</span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\"> ***************</span>&nbsp;</p>', '<p>&nbsp;<span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">- </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New;\">วิศวกร-สถาปนิก ให้คำปรึกษาระหว่างก่อสร้างโดยระบบประชุมทางไกล</span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">  </span></p>\n<p><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">- </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New;\">ปรึกษาระหว่างการก่อสร้างได้  </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">1 </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New;\">ชั่วโมง/ครั้ง จำนวน </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">2 </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New;\">ครั้ง ฟรี</span>&nbsp;</p>'),
('q8a859d98853d5d51f28n1d631082a7127f', 'IF1-004', 'IF1-004', 25900, 15900, '<p>&nbsp;<span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New\", serif;\">พื้นที่ใช้สอย</span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\"> 3 </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New\", serif;\">ห้องนอน +</span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">  2 </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New\", serif;\">ห้องน้ำ<br>+</span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\"> 1 </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New\", serif;\">ห้องรับแขก</span> <span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New\", serif;\">ขนาดพื้นที่ในการก่อสร้าง</span> <span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New\", serif;\">พื้นที่ใช้สอยภายในบ้าน<br></span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">150 </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New\", serif;\">ตรม. (</span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">10 x 11 </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New\", serif;\">ม.)</span> <span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New\", serif;\">ขนาดพื้นที่สำหรับก่อสร้าง </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">14 x<br>15 </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New\", serif;\">ม.</span> <span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New\", serif;\">การคำนวณ<br>ค่าการใช้พลังงาน </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">BEC </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New\", serif;\">ค่า </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">OTTV<br>20 W/m2 </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New\", serif;\">ค่า </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">RTTV 6 W/m2 </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New\", serif;\">นวัตกรรมวัสดุประหยัดพลังงาน<br></span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">Cell Crete </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New\", serif;\">แผงโซล่าเซลล์ราคาก่อสร้าง ประมาณ</span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\"> <br>1.3 - 1.55 </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New\", serif;\">ล้านบาท</span> <span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New\", serif;\">เครดิตผู้ออกแบบ</span> <span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New\", serif;\">สถาปนิก : </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">Settepong Wongchai, Hanny Chandra </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New\", serif;\">วิศวกร : </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">Dr. Aphai<br>Chapirom</span>&nbsp;&nbsp;</p>', '11x10', NULL, NULL, '/img_product/product-2020-04-27_13-53-00.jpg', '/img_product/plan-2020-04-27_13-53-00.jpg', 150, 'ewcf23r322e1r3c2c32', 1, '2020-04-27 13:53:00', '<p>&nbsp;<span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New\", serif;\">พื้นที่ใช้สอย</span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\"> 3 </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New\", serif;\">ห้องนอน +</span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">  2 </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New\", serif;\">ห้องน้ำ<br>+</span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\"> 1 </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New\", serif;\">ห้องรับแขก</span> <span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New\", serif;\">ขนาดพื้นที่ในการก่อสร้าง</span> <span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New\", serif;\">พื้นที่ใช้สอยภายในบ้าน<br></span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">110 </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New\", serif;\">ตรม. (</span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">10 x 11 </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New\", serif;\">ม.)</span> <span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New\", serif;\">ขนาดพื้นที่สำหรับก่อสร้าง </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">14 x<br>15 </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New\", serif;\">ม.</span> <span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New\", serif;\">การคำนวณ<br>ค่าการใช้พลังงาน </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">BEC </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New\", serif;\">ค่า </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">OTTV<br>20 W/m2 </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New\", serif;\">ค่า </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">RTTV 6 W/m2 </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New\", serif;\">นวัตกรรมวัสดุประหยัดพลังงาน<br></span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">Cell Crete </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New\", serif;\">แผงโซล่าเซลล์ราคาก่อสร้าง ประมาณ</span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\"> <br>1.3 - 1.55 </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New\", serif;\">ล้านบาท</span> <span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New\", serif;\">เครดิตผู้ออกแบบ</span> <span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New\", serif;\">สถาปนิก : </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">Settepong Wongchai, Hanny Chandra </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New\", serif;\">วิศวกร : </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">Dr. Aphai<br>Chapirom</span>&nbsp;&nbsp;</p>', '<p>&nbsp;<span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">- </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New\", serif;\">วิศวกร-สถาปนิก ให้คำปรึกษาระหว่างก่อสร้างโดยระบบประชุมทางไกล</span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">  - </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New\", serif;\">ปรึกษาระหว่างการก่อสร้างได้<br></span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">1 </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New\", serif;\">ชั่วโมง/ครั้ง<br>จำนวน </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">2 </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New\", serif;\">ครั้ง ฟรี</span>&nbsp;&nbsp;</p>'),
('r4b7e96ed1f21c91b3aa847a4713xb1810l', 'IF1-003', 'IF1-003', 17000, 11900, '<p><strong>พื้นที่ใช้สอย</strong><br>3 ห้องนอน +  2 ห้องน้ำ + 1 ห้องรับแขก<br><strong>ขนาดพื้นที่ในการก่อสร้าง</strong><br>พื้นที่ใช้สอยภายในบ้าน 110 ตรม. (10 x 11 ม.)<br>ขนาดพื้นที่สำหรับก่อสร้าง 14 x 15 ม.<br><strong>การคำนวณ ค่าการใช้พลังงาน BEC</strong><br>ค่า OTTV 20 W/m2<br>ค่า RTTV 6 W/m2<br>นวัตกรรมวัสดุประหยัดพลังงาน Cell Crete<br>แผงโซล่าเซลล์<br><strong>ราคาก่อสร้าง ประมาณ</strong> <br>1.3 - 1.55 ล้านบาท<br><strong>เครดิตผู้ออกแบบ</strong><br>สถาปนิก : Settepong Wongchai, Hanny Chandra<br>วิศวกร : Dr. Aphai Chapirom</p>', '11 x 10', '-', '-', '/img_product/product-2020-03-17_09-18-59.jpg', '/img_product/plan-2020-03-17_09-18-59.jpg', 98, 'ewcf23r322e1r3c2c32', 1, '2020-03-17 09:18:59', '<p>- แบบก่อสร้างขนาด A3 จำนวน 1 ชุด  <br>- ภาพแบบจำลอง 3มิติ จำนวน 3 รูป  <br>- รายการคำนวณโครงสร้างจากสามัญวิศกร   <br>- รายการคำนวณการประหยัดพลังงาน BEC  <br>- รายการประมาณราคาค่าก่อสร้าง  <br>- รับรองแบบและใบอนุญาตประกอบวิชาชีพ สถาปนิก <br>- สามัญวิศวกร  <br>*************** จัดส่งแบบฟรี ***************</p>', '<p>- วิศวกร-สถาปนิก ให้คำปรึกษาระหว่างก่อสร้างโดยระบบประชุมทางไกล   <br>- ปรึกษาระหว่างการก่อสร้างได้ 1 ชั่วโมง/ครั้ง จำนวน 2 ครั้ง ฟรี</p>');
INSERT INTO `product` (`id_product`, `name_product_th`, `name_product_en`, `price_product`, `price_sale`, `detail_product`, `size_product`, `excellence`, `ready_to_build`, `img_product`, `img_plan`, `type_product`, `id_gallery`, `status_product`, `created_product`, `product_document`, `product_service`) VALUES
('r8n220c7e1fa65a3d9038ddb3b55e6ea27h', 'IF1.5-003', 'TF1.5-003', 26500, 15900, '<p>&nbsp;<span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New;\">พื้นที่ใช้สอย</span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\"> 3 </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New;\">ห้องนอน +</span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">  2 </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New;\">ห้องน้ำ+</span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\"> 1 </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New;\">ห้องรับแขก</span>&nbsp;</p>\n<p><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New;\">ขนาดพื้นที่ในการก่อสร้าง</span> <span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New;\">พื้นที่ใช้สอยภายในบ้าน</span><br><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">136 </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New;\">ตรม. (</span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">10 x 11 </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New;\">ม.)</span> <span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New;\">ขนาดพื้นที่สำหรับก่อสร้าง </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">14 x 15 </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New;\">ม.</span>&nbsp;</p>\n<p><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New;\">การคำนวณ ค่าการใช้พลังงาน </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">BEC </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New;\">ค่า </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">OTTV20 W/m2 </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New;\">ค่า </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">RTTV 6 W/m2 </span></p>\n<p><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New;\">นวัตกรรมวัสดุประหยัดพลังงาน </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">Cell Crete </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New;\">แผงโซล่าเซลล์ราคาก่อสร้าง ประมาณ</span> <span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">1.3 - 1.55 </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New;\">ล้านบาท</span> <span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New;\">เ</span></p>\n<p><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New;\">ครดิตผู้ออกแบบ</span> <span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New;\">สถาปนิก : </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">Settepong Wongchai, Hanny Chandra  </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New;\">วิศวกร : </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">Dr. Aphai  Chapirom</span>&nbsp;</p>', '10x11', NULL, NULL, '/img_product/product-2020-04-27_14-38-29.jpg', '/img_product/plan-2020-04-27_14-38-29.jpg', 136, 'mbda75076eeb35448dd265ebea7a8a5aeen', 1, '2020-04-27 14:38:29', '<p><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">- </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New;\">แบบก่อสร้างขนาด </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">A3 </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New;\">จำนวน </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">1 </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New;\">ชุด</span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\"> </span></p>\n<p><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">- </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New;\">ภาพแบบจำลอง </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">3</span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New;\">มิติ จำนวน </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">3 </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New;\">รูป</span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\"> </span></p>\n<p><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">- </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New;\">รายการคำนวณโครงสร้างจากสามัญวิศกร</span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">  </span></p>\n<p><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">- </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New;\">รายการคำนวณการประหยัดพลังงาน </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">BEC </span></p>\n<p><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">- </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New;\">รายการประมาณราคาค่าก่อสร้าง</span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\"> </span></p>\n<p><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">- </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New;\">รับรองแบบและใบอนุญาตประกอบวิชาชีพ สถาปนิก – สามัญวิศวกร</span><br><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">*************** </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New;\">จัดส่งแบบฟรี</span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\"> ***************</span>&nbsp;</p>', '<p>&nbsp;<span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">- </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New;\">วิศวกร-สถาปนิก ให้คำปรึกษาระหว่างก่อสร้างโดยระบบประชุมทางไกล</span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">  </span></p>\n<p><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">- </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New;\">ปรึกษาระหว่างการก่อสร้างได้ </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">1 </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New;\">ชั่วโมง/ครั้ง จำนวน </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">2 </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New;\">ครั้ง ฟรี</span>&nbsp;</p>'),
('v1ff218aa3cbe9f1d10a90f66tbfc16e3db', 'IF1-006', 'IF1-006', 19000, 11500, '<p>&nbsp;<span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New\", serif;\">พื้นที่ใช้สอย</span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\"> 3 </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New\", serif;\">ห้องนอน +</span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">  2 </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New\", serif;\">ห้องน้ำ<br>+</span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\"> 1 </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New\", serif;\">ห้องรับแขก</span> <span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New\", serif;\">ขนาดพื้นที่ในการก่อสร้าง</span> <span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New\", serif;\">พื้นที่ใช้สอยภายในบ้าน<br></span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">117 </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New\", serif;\">ตรม. (</span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">10 x 11 </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New\", serif;\">ม.)</span> <span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New\", serif;\">ขนาดพื้นที่สำหรับก่อสร้าง </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">14 x<br>15 </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New\", serif;\">ม.</span> <span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New\", serif;\">การคำนวณ<br>ค่าการใช้พลังงาน </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">BEC </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New\", serif;\">ค่า </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">OTTV<br>20 W/m2 </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New\", serif;\">ค่า </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">RTTV 6 W/m2 </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New\", serif;\">นวัตกรรมวัสดุประหยัดพลังงาน<br></span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">Cell Crete </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New\", serif;\">แผงโซล่าเซลล์ราคาก่อสร้าง ประมาณ</span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\"> <br>1.3 - 1.55 </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New\", serif;\">ล้านบาท</span> <span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New\", serif;\">เครดิตผู้ออกแบบ</span> <span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New\", serif;\">สถาปนิก : </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">Settepong Wongchai, Hanny Chandra </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New\", serif;\">วิศวกร : </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">Dr. Aphai<br>Chapirom</span>&nbsp;&nbsp;</p>', '11x10', NULL, NULL, '/img_product/product-2020-04-27_14-02-23.jpg', '/img_product/plan-2020-04-27_14-02-23.jpg', 117, 'ewcf23r322e1r3c2c32', 1, '2020-04-27 14:02:23', '<p>&nbsp;<span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">- </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New\", serif;\">แบบก่อสร้างขนาด </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">A3<br></span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New\", serif;\">จำนวน </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">1 </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New\", serif;\">ชุด</span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\"> - </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New\", serif;\">ภาพแบบจำลอง </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">3</span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New\", serif;\">มิติ จำนวน </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">3 </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New\", serif;\">รูป</span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\"> - </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New\", serif;\">รายการคำนวณโครงสร้างจากสามัญวิศกร</span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">  -</span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New\", serif;\">รายการคำนวณการประหยัดพลังงาน<br></span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">BEC - </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New\", serif;\">รายการประมาณราคาค่าก่อสร้าง</span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\"> - </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New\", serif;\">รับรองแบบและใบอนุญาตประกอบวิชาชีพ<br>สถาปนิก – สามัญวิศวกร</span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\"><br>*************** </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New\", serif;\">จัดส่งแบบฟรี</span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\"> ***************</span>&nbsp;&nbsp;</p>', '<p>&nbsp;<span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">- </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New\", serif;\">วิศวกร-สถาปนิก ให้คำปรึกษาระหว่างก่อสร้างโดยระบบประชุมทางไกล</span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">  - </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New\", serif;\">ปรึกษาระหว่างการก่อสร้างได้<br></span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">1 </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New\", serif;\">ชั่วโมง/ครั้ง<br>จำนวน </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">2 </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New\", serif;\">ครั้ง ฟรี</span>&nbsp;&nbsp;</p>'),
('wdw1232s2s2s22', 'IF1-002', 'IF1-002', 16500, 9900, 'พื้นที่ใช้สอย\n3 ห้องนอน +  2 ห้องน้ำ + 1 ห้องรับแขก\n\nขนาดพื้นที่ในการก่อสร้าง\nพื้นที่ใช้สอยภายในบ้าน 110 ตรม. (10 x 11 ม.)\nขนาดพื้นที่สำหรับก่อสร้าง 14 x 15 ม.\n\nการคำนวณ ค่าการใช้พลังงาน BEC\nค่า OTTV 20 W/m2\nค่า RTTV 6 W/m2\nนวัตกรรมวัสดุประหยัดพลังงาน Cell Crete\nแผงโซล่าเซลล์\n\nราคาก่อสร้าง ประมาณ \n1.3 - 1.55 ล้านบาท\n\nเครดิตผู้ออกแบบ\nสถาปนิก : Settepong Wongchai, Hanny Chandra\nวิศวกร : Dr. Aphai Chapirom', '11 x 10 m', '-', '-', '/img_product/test2.jpg', '/img_product/plan_test2.jpg', 85, 'qwe232323', 0, '2020-03-02 09:35:16', '- แบบก่อสร้างขนาด A3 จำนวน 1 ชุด  - ภาพแบบจำลอง 3มิติ จำนวน 3 รูป  - รายการคำนวณโครงสร้างจากสามัญวิศกร   -รายการคำนวณการประหยัดพลังงาน BEC  - รายการประมาณราคาค่าก่อสร้าง  - รับรองแบบและใบอนุญาตประกอบวิชาชีพ สถาปนิก – สามัญวิศวกร  *************** จัดส่งแบบฟรี ***************', '- วิศวกร-สถาปนิก ให้คำปรึกษาระหว่างก่อสร้างโดยระบบประชุมทางไกล   - ปรึกษาระหว่างการก่อสร้างได้ 1 ชั่วโมง/ครั้ง จำนวน 2 ครั้ง ฟรี'),
('wdwweqwqeqw', 'vbnvbv', 'fds dsfdsf', 20000, 0, 'รายละเอียด', '20 x 10 m', 'sdfdsf', 'dfdsf', '/img_product/test.png', '', 100, 'ewcf23r322e1r3c2c32', 0, '2020-03-04 07:27:18', 'dd', '66'),
('we223e23e32e', 'ปแป ผแปผ', 'fds dsfdsf', 15000, 10000, 'รายละเอียด', '30 x 20 m', 'dfsdf', 'dfdsfds', '/img_product/test.png', '', 500, 'qwe232323', 0, '2020-03-02 05:27:36', 'cc', '77'),
('y0v21f0077a618ab83b04af4ed607fb4c3b', 'IF1.5-001', 'IF1.5-001', 28900, 17500, '<p>&nbsp;<span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New;\">พื้นที่ใช้สอย</span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\"> 3 </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New;\">ห้องนอน +</span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">  3 </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New;\">ห้องน้ำ +</span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\"> 1 </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New;\">ห้องรับแขก</span>&nbsp;</p>\n<p><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New;\">ขนาดพื้นที่ในการก่อสร้าง</span> <span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New;\">พื้นที่ใช้สอยภายในบ้าน </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">150 </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New;\">ตรม. (</span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">10 x 11 </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New;\">ม.)</span>&nbsp;</p>\n<p><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New;\">ขนาดพื้นที่สำหรับก่อสร้าง </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">14 x 15 </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New;\">ม.</span>&nbsp;</p>\n<p><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New;\">การคำนวณ ค่าการใช้พลังงาน </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">BEC </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New;\">ค่า </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">OTTV 20 W/m2 </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New;\">ค่า </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">RTTV 6 W/m2 </span></p>\n<p><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New;\">นวัตกรรมวัสดุประหยัดพลังงาน </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">Cell Crete </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New;\">แผงโซล่าเซลล์ราคาก่อสร้าง ประมาณ</span>  <span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">1.3 - 1.55 </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New;\">ล้านบาท</span>&nbsp;</p>\n<p><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New;\">เครดิตผู้ออกแบบ</span> <span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New;\">สถาปนิก : </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">Settepong Wongchai, Hanny Chandra  </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New;\">วิศวกร : </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">Dr. Aphai  Chapirom</span>&nbsp;</p>', '10x11', NULL, NULL, '/img_product/product-2020-04-27_14-22-21.jpg', '/img_product/plan-2020-04-27_14-22-21.jpg', 150, 'mbda75076eeb35448dd265ebea7a8a5aeen', 1, '2020-04-27 14:22:21', '<p>&nbsp;<span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">- </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New;\">แบบก่อสร้างขนาด </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">A3 </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New;\">จำนวน </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">1 </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New;\">ชุด</span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\"> </span></p>\n<p><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">- </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New;\">ภาพแบบจำลอง </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">3</span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New;\">มิติ จำนวน </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">3 </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New;\">รูป</span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\"> </span></p>\n<p><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">- </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New;\">รายการคำนวณโครงสร้างจากสามัญวิศกร</span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">  </span></p>\n<p><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">-</span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New;\">รายการคำนวณการประหยัดพลังงาน </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">BEC </span></p>\n<p><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">- </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New;\">รายการประมาณราคาค่าก่อสร้าง </span></p>\n<p><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">- </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New;\">รับรองแบบและใบอนุญาตประกอบวิชาชีพ สถาปนิก – สามัญวิศวกร</span><br><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">*************** </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New;\">จัดส่งแบบฟรี</span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\"> ***************</span>&nbsp;</p>', '<p>&nbsp;<span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">- </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New;\">วิศวกร-สถาปนิก ให้คำปรึกษาระหว่างก่อสร้างโดยระบบประชุมทางไกล</span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">  </span></p>\n<p><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">- </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New;\">ปรึกษาระหว่างการก่อสร้างได้ </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">1 </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New;\">ชั่วโมง/ครั้ง  จำนวน </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: RSU_Regular, serif;\">2 </span><span style=\"color: rgb(33,37,41);background-color: white;font-size: 13.5pt;font-family: Angsana New;\">ครั้ง ฟรี</span>&nbsp;</p>'),
('yfd56558c5d6dc6b4l6661c8bbdd75f525f', 'IF2-001', 'IF2-001', 29000, 17000, 'พื้นที่ใช้สอย\n3 ห้องนอน +  2 ห้องน้ำ + 1 ห้องรับแขก\n\nขนาดพื้นที่ในการก่อสร้าง\nพื้นที่ใช้สอยภายในบ้าน 110 ตรม. (10 x 11 ม.)\nขนาดพื้นที่สำหรับก่อสร้าง 14 x 15 ม.\n\nการคำนวณ ค่าการใช้พลังงาน BEC\nค่า OTTV 20 W/m2\nค่า RTTV 6 W/m2\nนวัตกรรมวัสดุประหยัดพลังงาน Cell Crete\nแผงโซล่าเซลล์\n\nราคาก่อสร้าง ประมาณ \n1.3 - 1.55 ล้านบาท', '11 x 10', '-', '-', '/img_product/product-2020-03-17_09-05-35.jpg', '/img_product/plan-2020-03-17_09-05-35.jpg', 132, 'qwe232323', 1, '2020-03-17 09:05:35', '- แบบก่อสร้างขนาด A3 จำนวน 1 ชุด  - ภาพแบบจำลอง 3มิติ จำนวน 3 รูป  - รายการคำนวณโครงสร้างจากสามัญวิศกร   -รายการคำนวณการประหยัดพลังงาน BEC  - รายการประมาณราคาค่าก่อสร้าง  - รับรองแบบและใบอนุญาตประกอบวิชาชีพ สถาปนิก – สามัญวิศวกร  *************** จัดส่งแบบฟรี ***************', '- วิศวกร-สถาปนิก ให้คำปรึกษาระหว่างก่อสร้างโดยระบบประชุมทางไกล   - ปรึกษาระหว่างการก่อสร้างได้ 1 ชั่วโมง/ครั้ง จำนวน 2 ครั้ง ฟรี'),
('zd2l488ee5c44c2af9c156944bc65ef77cq', 'sdsdfd', 'fdsfsd', 23423, 343, 'fdsfd sdf dsf', '324', 's fdsf', 'dfdsf df s', '/img_product/product-2020-03-21_16-15-11.jpg', '/img_product/plan-2020-03-21_16-15-11.jpg', 232, 'ewcf23r322e1r3c2c32', 0, '2020-03-21 16:15:11', 'sss', '99');

-- --------------------------------------------------------

--
-- Table structure for table `projects`
--

CREATE TABLE `projects` (
  `id_projects` varchar(35) COLLATE utf8_unicode_ci NOT NULL,
  `name_projects_th` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `name_projects_en` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `name_owner_th` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `name_owner_en` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `location_th` text COLLATE utf8_unicode_ci NOT NULL,
  `location_en` text COLLATE utf8_unicode_ci NOT NULL,
  `construction_cost` int(11) NOT NULL,
  `area_projects` text COLLATE utf8_unicode_ci NOT NULL,
  `detail_projects` text COLLATE utf8_unicode_ci NOT NULL,
  `img_projects` text COLLATE utf8_unicode_ci NOT NULL,
  `status_projects` varchar(50) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `projects`
--

INSERT INTO `projects` (`id_projects`, `name_projects_th`, `name_projects_en`, `name_owner_th`, `name_owner_en`, `location_th`, `location_en`, `construction_cost`, `area_projects`, `detail_projects`, `img_projects`, `status_projects`) VALUES
('df3ee2fe2f54fr4f4rf4', 'บ้าน 3 ชั้น ในกรุงเทพ', 'Tree STOREY HOUSE IN BANGKOK', 'นาย ดกดหกด', 'Mr.Serfffr', 'ชัยภูมิ ไทย', 'Chaiyapum, Thailand', 120000000, '450 ตร.ม.', 'sadsadsa', '/img_projects/test2.jpg', 'on_going'),
('dsddwd32e23d231r', 'บ้าน 2 ชั้น ในกรุงเทพ', 'TWO STOREY HOUSE IN BANGKOK', 'นาย กหดก', 'Mr.Chantara', 'ชัยภูมิ ไทย', 'Chaiyapum, Thailand', 150000000, '450 ตร.ม.', 'sads a adda ', '/img_projects/test3.jpg', 'on_going'),
('dsdwd232d23r4r34r131r', 'บ้าน 2 ชั้น ในกรุงเทพ', 'TWO STOREY HOUSE IN BANGKOK', 'นาย กหดก', 'Mr.Chantara', 'ชัยภูมิ ไทย', 'Chaiyapum, Thailand', 150000000, '450 ตร.ม.', 'caad d dad ', '/img_projects/test.jpg', 'on_going'),
('qwewqe32e32e32e', 'บ้าน 2 ชั้น ในพัทยา', 'TWO STOREY HOUSE IN PATAYA', 'นาย กหดกหด', 'Mr.ewrewr', 'ชัยภูมิ ไทย', 'Chaiyapum, Thailand', 150000000, '450 ตร.ม.', 'dcadcds sd s', '/img_projects/test.jpg', 'completed');

-- --------------------------------------------------------

--
-- Table structure for table `project_design`
--

CREATE TABLE `project_design` (
  `id_project_design` int(11) NOT NULL,
  `img_project_design` text COLLATE utf8_unicode_ci NOT NULL,
  `titel_project_design` text COLLATE utf8_unicode_ci NOT NULL,
  `detail_project_design` text COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `project_design`
--

INSERT INTO `project_design` (`id_project_design`, `img_project_design`, `titel_project_design`, `detail_project_design`) VALUES
(1, '/img_project_design/test1.jpg', 'saacdac1111', '<p>adcdc d dd dda aadad </p>'),
(2, '/img_project_design/test2.jpg', 'ew w w w we wwww', '<p>acdcdsc sd r wrw w</p>');

-- --------------------------------------------------------

--
-- Table structure for table `promotion`
--

CREATE TABLE `promotion` (
  `id_promotion` int(11) NOT NULL,
  `id_product` varchar(35) COLLATE utf8_unicode_ci NOT NULL,
  `status_promotion` varchar(50) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `promotion`
--

INSERT INTO `promotion` (`id_promotion`, `id_product`, `status_promotion`) VALUES
(1, '2dd2d2ed2ed2ed2', 'active');

-- --------------------------------------------------------

--
-- Table structure for table `request`
--

CREATE TABLE `request` (
  `id_request` int(11) NOT NULL,
  `name_request` text COLLATE utf8_unicode_ci NOT NULL,
  `emali_request` text COLLATE utf8_unicode_ci NOT NULL,
  `tel_request` text COLLATE utf8_unicode_ci NOT NULL,
  `message_request` text COLLATE utf8_unicode_ci NOT NULL,
  `date_request` datetime NOT NULL,
  `read_request` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `request`
--

INSERT INTO `request` (`id_request`, `name_request`, `emali_request`, `tel_request`, `message_request`, `date_request`, `read_request`) VALUES
(2, 'saaf', 'dafda', 'fdsf', 'fadfda', '2020-04-06 22:24:56', 0);

-- --------------------------------------------------------

--
-- Table structure for table `staff`
--

CREATE TABLE `staff` (
  `id_staff` varchar(35) COLLATE utf8_unicode_ci NOT NULL,
  `first_name_staff_th` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `first_name_staff_en` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `last_name_staff_th` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `last_name_staff_en` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `position_staff` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `resume_staff_th` text COLLATE utf8_unicode_ci NOT NULL,
  `resume_staff_en` text COLLATE utf8_unicode_ci NOT NULL,
  `img_staff` text COLLATE utf8_unicode_ci NOT NULL,
  `status_staff` varchar(50) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `staff`
--

INSERT INTO `staff` (`id_staff`, `first_name_staff_th`, `first_name_staff_en`, `last_name_staff_th`, `last_name_staff_en`, `position_staff`, `resume_staff_th`, `resume_staff_en`, `img_staff`, `status_staff`) VALUES
('sdsad1dwerewr2343e3r5565', 'นาย ออออ', 'Mr. ewfefew', 'กหกหด', 'bvcbcvb', 'ytuytuy', 'ดหกด กั ่ี  ราีรารีัะ  ำดำพ ำดไ', 'dff ddsfds f dfsd f fsdf ', '/img_staff/test2.jpg', 'normal');

-- --------------------------------------------------------

--
-- Table structure for table `statistics`
--

CREATE TABLE `statistics` (
  `id_statistics` int(11) NOT NULL,
  `id_user` varchar(35) COLLATE utf8_unicode_ci NOT NULL,
  `date_statistics` datetime NOT NULL,
  `status_statistics` text COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `statistics`
--

INSERT INTO `statistics` (`id_statistics`, `id_user`, `date_statistics`, `status_statistics`) VALUES
(7, 'fe3fe3c3cr34', '2020-04-17 23:48:14', 'Login'),
(8, 'fe3fe3c3cr34', '2020-04-17 23:58:47', 'Logout'),
(9, 'z890752dd24b349658507d2a7cbd788022n', '2020-04-17 23:58:52', 'Login'),
(10, 'z890752dd24b349658507d2a7cbd788022n', '2020-04-18 00:02:47', 'Logout'),
(11, 'fe3fe3c3cr34', '2020-04-20 00:15:18', 'Login'),
(12, 'fe3fe3c3cr34', '2020-04-20 00:30:50', 'Logout'),
(13, 'fe3fe3c3cr34', '2020-04-20 08:00:37', 'Login'),
(14, 'fe3fe3c3cr34', '2020-04-20 08:01:04', 'Login'),
(15, 'fe3fe3c3cr34', '2020-04-20 08:05:43', 'Logout'),
(16, 'fe3fe3c3cr34', '2020-04-20 08:05:50', 'Login'),
(17, 'fe3fe3c3cr34', '2020-04-20 08:06:32', 'Logout'),
(18, 'fe3fe3c3cr34', '2020-04-20 08:24:07', 'Logout'),
(19, 'fe3fe3c3cr34', '2020-04-20 10:16:48', 'Login'),
(20, 'fe3fe3c3cr34', '2020-04-20 10:20:12', 'Logout'),
(21, 'fe3fe3c3cr34', '2020-04-20 10:28:42', 'Login'),
(22, 'fe3fe3c3cr34', '2020-04-20 10:35:38', 'Logout'),
(23, 'fe3fe3c3cr34', '2020-04-20 10:36:58', 'Login'),
(24, 'fe3fe3c3cr34', '2020-04-20 10:38:29', 'Logout'),
(25, 'fe3fe3c3cr34', '2020-04-20 13:11:39', 'Login'),
(26, 'fe3fe3c3cr34', '2020-04-20 13:25:27', 'Login'),
(27, 'fe3fe3c3cr34', '2020-04-20 13:46:29', 'Logout'),
(28, 'fe3fe3c3cr34', '2020-04-20 13:48:51', 'Login'),
(29, 'fe3fe3c3cr34', '2020-04-20 15:27:45', 'Logout'),
(30, 'fe3fe3c3cr34', '2020-04-20 15:56:21', 'Login'),
(31, 'fe3fe3c3cr34', '2020-04-20 16:06:03', 'Logout'),
(32, 'fe3fe3c3cr34', '2020-04-20 16:06:31', 'Login'),
(33, 'fe3fe3c3cr34', '2020-04-22 11:19:15', 'Login'),
(34, 'fe3fe3c3cr34', '2020-04-22 11:19:23', 'Logout'),
(35, 'fe3fe3c3cr34', '2020-04-22 11:19:47', 'Login'),
(36, 'fe3fe3c3cr34', '2020-04-22 11:20:21', 'Logout'),
(37, 'fe3fe3c3cr34', '2020-04-22 11:37:57', 'Login'),
(38, 'fe3fe3c3cr34', '2020-04-22 11:49:08', 'Logout'),
(39, 'fe3fe3c3cr34', '2020-04-22 15:07:06', 'Login'),
(40, 'fe3fe3c3cr34', '2020-04-22 15:12:39', 'Login'),
(41, 'fe3fe3c3cr34', '2020-04-22 15:13:17', 'Logout'),
(42, 'fe3fe3c3cr34', '2020-04-22 16:13:23', 'Login'),
(43, 'fe3fe3c3cr34', '2020-04-22 16:19:05', 'Login'),
(44, 'fe3fe3c3cr34', '2020-04-22 16:28:09', 'Login'),
(45, 'fe3fe3c3cr34', '2020-04-22 16:36:30', 'Logout'),
(46, 'fe3fe3c3cr34', '2020-04-22 16:43:35', 'Login'),
(47, 'fe3fe3c3cr34', '2020-04-22 17:39:29', 'Logout'),
(48, 'fe3fe3c3cr34', '2020-04-22 17:50:41', 'Logout'),
(49, 'fe3fe3c3cr34', '2020-04-23 00:29:35', 'Login'),
(50, 'fe3fe3c3cr34', '2020-04-23 00:29:54', 'Logout'),
(51, 'fe3fe3c3cr34', '2020-04-23 08:44:27', 'Login'),
(52, 'fe3fe3c3cr34', '2020-04-23 08:56:20', 'Logout'),
(53, 'fe3fe3c3cr34', '2020-04-23 08:58:22', 'Login'),
(54, 'fe3fe3c3cr34', '2020-04-23 09:01:02', 'Logout'),
(55, 'fe3fe3c3cr34', '2020-04-23 09:01:34', 'Login'),
(56, 'fe3fe3c3cr34', '2020-04-23 09:02:04', 'Logout'),
(57, 'fe3fe3c3cr34', '2020-04-23 09:19:09', 'Login'),
(58, 'fe3fe3c3cr34', '2020-04-23 09:19:27', 'Logout'),
(59, 'fe3fe3c3cr34', '2020-04-23 16:56:36', 'Login'),
(60, 'fe3fe3c3cr34', '2020-04-23 17:01:41', 'Logout'),
(61, 'fe3fe3c3cr34', '2020-04-23 17:29:21', 'Login'),
(62, 'fe3fe3c3cr34', '2020-04-24 08:25:37', 'Login'),
(63, 'fe3fe3c3cr34', '2020-04-24 08:26:31', 'Logout'),
(64, 'fe3fe3c3cr34', '2020-04-24 09:47:52', 'Login'),
(65, 'fe3fe3c3cr34', '2020-04-25 21:12:09', 'Login'),
(66, 'fe3fe3c3cr34', '2020-04-26 21:49:58', 'Login'),
(67, 'fe3fe3c3cr34', '2020-04-26 21:50:16', 'Logout'),
(68, 'fe3fe3c3cr34', '2020-04-27 13:32:27', 'Login'),
(69, 'fe3fe3c3cr34', '2020-04-27 13:35:42', 'Login'),
(70, 'fe3fe3c3cr34', '2020-04-27 17:09:02', 'Logout'),
(71, 'fe3fe3c3cr34', '2020-04-29 09:17:53', 'Login'),
(72, 'fe3fe3c3cr34', '2020-04-29 09:18:55', 'Logout'),
(73, 'fe3fe3c3cr34', '2020-04-29 09:24:17', 'Login'),
(74, 'fe3fe3c3cr34', '2020-04-29 09:27:09', 'Logout'),
(75, 'fe3fe3c3cr34', '2020-04-29 09:43:34', 'Login'),
(76, 'fe3fe3c3cr34', '2020-04-29 15:18:15', 'Login'),
(77, 'fe3fe3c3cr34', '2020-04-30 09:55:58', 'Login'),
(78, 'fe3fe3c3cr34', '2020-05-01 08:13:00', 'Login'),
(79, 'fe3fe3c3cr34', '2020-05-01 09:49:18', 'Login'),
(80, 'fe3fe3c3cr34', '2020-05-01 09:51:51', 'Logout'),
(81, 'fe3fe3c3cr34', '2020-05-01 10:04:51', 'Login'),
(82, 'fe3fe3c3cr34', '2020-05-01 10:14:38', 'Logout'),
(83, 'fe3fe3c3cr34', '2020-05-01 10:14:58', 'Login'),
(84, 'fe3fe3c3cr34', '2020-05-01 10:15:41', 'Logout'),
(85, 'fe3fe3c3cr34', '2020-05-01 10:17:39', 'Logout'),
(86, 'fe3fe3c3cr34', '2020-05-01 10:31:43', 'Login'),
(87, 'fe3fe3c3cr34', '2020-05-01 11:56:43', 'Logout'),
(88, 'fe3fe3c3cr34', '2020-05-01 14:58:20', 'Login'),
(89, 'fe3fe3c3cr34', '2020-05-04 14:00:46', 'Login'),
(90, 'fe3fe3c3cr34', '2020-05-04 14:03:20', 'Logout'),
(91, 'fe3fe3c3cr34', '2020-05-04 14:04:42', 'Login'),
(92, 'fe3fe3c3cr34', '2020-05-04 14:06:03', 'Logout'),
(93, 'fe3fe3c3cr34', '2020-05-04 14:07:37', 'Login'),
(94, 'fe3fe3c3cr34', '2020-05-04 14:13:55', 'Logout'),
(95, 'fe3fe3c3cr34', '2020-05-04 14:24:35', 'Login'),
(96, 'fe3fe3c3cr34', '2020-05-04 14:31:54', 'Logout');

-- --------------------------------------------------------

--
-- Table structure for table `status_admin`
--

CREATE TABLE `status_admin` (
  `id_status_admin` int(11) NOT NULL,
  `status_admin` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `status_admin`
--

INSERT INTO `status_admin` (`id_status_admin`, `status_admin`) VALUES
(1, 0);

-- --------------------------------------------------------

--
-- Table structure for table `type_gallery`
--

CREATE TABLE `type_gallery` (
  `id_type_gallery` varchar(35) COLLATE utf8_unicode_ci NOT NULL,
  `name_type_gallery` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `status_type_gallery` varchar(50) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `type_gallery`
--

INSERT INTO `type_gallery` (`id_type_gallery`, `name_type_gallery`, `status_type_gallery`) VALUES
('d16790bcd48162be38pfec835e5b38cf64g', 'wwew22222', 'Not Active'),
('ebbabba3b7912faec44bb03957b245b76dh', 'sdfds', 'Not Active'),
('efewf2fe2ef34ff44', 'Floor', 'active'),
('haa147y8f1bd26786b932685b7b6c8aa67d', 'testt', 'Not Active'),
('lafce97e1bb948be1d07053xb889c76053m', 'sdfdsf', 'Not Active'),
('n2b280dc269ccfdyb230d92c315dea6245g', 'ew2we2ew2', 'Not Active'),
('r455068101ev6a0ffb9455a96ca1c1c2f5t', 'test', 'Not Active'),
('xxex32212e332rx4xr', 'Sustainable Design', 'Not Active');

-- --------------------------------------------------------

--
-- Table structure for table `type_package`
--

CREATE TABLE `type_package` (
  `id_type_package` varchar(35) COLLATE utf8_unicode_ci NOT NULL,
  `name_type_package_th` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `name_type_package_en` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `status_type_package` varchar(50) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `type_package`
--

INSERT INTO `type_package` (`id_type_package`, `name_type_package_th`, `name_type_package_en`, `status_type_package`) VALUES
('3f545f45f45f4', 'COST ESTIMATION', 'COST ESTIMATION', 'active'),
('45t54t54t54t5t5', 'COUPON MEETING ONLINE', 'COUPON MEETING ONLINE', 'active'),
('6y56y67u6u76hg45', 'STRUCTURE DRAWINGS', 'STRUCTURE DRAWINGS', 'active'),
('d3232cr323c2c3', 'ARCHITECTURE DRAWINGS', 'ARCHITECTURE DRAWINGS', 'active'),
('p49jf2cba360cc8cf23ad9faca613b3ae4m', 'ฟฟฟฟฟฟฟ', 'aaaaaa', 'not active'),
('wdwd1e1e2e2', 'ฟรี', 'FREE', 'active');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id_user` varchar(35) COLLATE utf8_unicode_ci NOT NULL,
  `f_name_user` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `l_name_user` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `id_card` varchar(13) COLLATE utf8_unicode_ci NOT NULL,
  `address_user` text COLLATE utf8_unicode_ci,
  `date_year` date DEFAULT NULL,
  `email_user` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `id_facebook` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `id_google` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `username` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `img_user` text COLLATE utf8_unicode_ci NOT NULL,
  `type_user` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `updated_at` datetime DEFAULT NULL,
  `created_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id_user`, `f_name_user`, `l_name_user`, `id_card`, `address_user`, `date_year`, `email_user`, `id_facebook`, `id_google`, `username`, `password`, `img_user`, `type_user`, `updated_at`, `created_at`) VALUES
('d8d23b534a97f3bav2ec943925c7b891ccn', 'supakit', 'posai', '1232312321', 'ชัยภูมิ 36000', '1998-05-22', 'supakit@gmail.com', NULL, NULL, 'boat', '1234', '/img_user/user-2020-03-01_16-14-31.jpg', 'user', '2020-03-01 16:14:31', '2020-03-01 16:14:31'),
('fe3fe3c3cr34', 'Super', 'Admin', '2132132', NULL, NULL, '', NULL, NULL, 'admin', 'admin', '/img_user/admin.jpg', 'SuperAdmin', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
('j50041fc03e5i8766abb7a0d9d0bf1d687s', 'aad', 'sdsdS', '1234567890987', 'sadsad', '2007-09-15', 'DSD@asfdf.com', NULL, NULL, '1111', '1111', '/img_user/user-2020-03-24_21-16-59.jpg', 'user', NULL, NULL),
('o39920e26e4f0c6f6deb74aud74600da18u', 'ssadsad', 'wewqewq', '12344', 'ewqwee', '1998-05-22', 'Soew@dfs.com', NULL, NULL, 'boat1', '12345', '/img_user/user-2020-03-03_18-04-15.jpg', 'user', '2020-03-03 18:04:15', '2020-03-03 18:04:15'),
('o399e072d57c8f82499682da85a1f862d5j', 'ewqe', 'wqeqw', '123', 'sdfdsf', '2004-08-16', '213@fsa.fgd', NULL, NULL, 'qwewq', '123', '/img_user/user-2020-03-01_16-10-25.jpg', 'user', '2020-03-01 16:10:25', '2020-03-01 16:10:25'),
('peb340b0902f9e9cce09fff6b63ee00ae5w', 'Hanny', 'Chandra', 'B9461315', 'Chaiyaphum, Thailand', '1994-08-06', 'hannychandraprat@gmail.com', NULL, NULL, 'Hanny Chandra', 'Siapasadj4', '/img_user/user-2020-03-25_16-01-35.jpg', 'user', NULL, NULL),
('r23rc23r32cr23ccrccrcf', 'Test', 'Test', '2321', '8000 นคร', '2020-02-11', 'test@8-plan.com', NULL, NULL, 'test', 'test', '/img_user/test.jpg', 'user', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
('s90c87ca91b95kc708c7378cc9b9bfd44bh', 'hanny', 'chandra', '545342', 'gfgffgfgf', '2006-10-16', 'hannychandrap@yahoo.com', NULL, NULL, 'hanny cp', 'siapasadja', '/img_user/user-2020-04-02_13-13-48.jpg', 'user', NULL, NULL),
('v0ea168a10048d18e5db1bab9165idbbe0o', 'sda', 'sdsa', '123123123', 'weqeqwe', '2007-09-11', 'sdsa@sad.com', NULL, NULL, 'sadsa', '11111', '/img_user/user-2020-03-04_01-24-51.jpg', 'user', '2020-03-04 01:24:51', '2020-03-04 01:24:51'),
('x7e592520c3bab252b4cb9bf93f772aa4lq', 'wqewq', 'qeqweqw', '1369900447323', 'dfsfds\nsdf\ndsf', '2009-08-16', 'fdsfds@dsfd.com', NULL, NULL, 'boat11', 'boat11', '/img_user/user-2020-03-25_15-20-28.jpg', 'user', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `video`
--

CREATE TABLE `video` (
  `id_video` varchar(35) COLLATE utf8_unicode_ci NOT NULL,
  `title_video_th` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `title_video_en` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `date_upload_video` datetime NOT NULL,
  `url_video` text COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `video`
--

INSERT INTO `video` (`id_video`, `title_video_th`, `title_video_en`, `date_upload_video`, `url_video`) VALUES
('cf25b05f56d7x182b5105df769bf601f61n', 'ออกแบบบ้านประหยัดพลังงาน 36 ตรม.| Download FREE architecture+structure+cost estimate+energy report', 'ออกแบบบ้านประหยัดพลังงาน 36 ตรม.| Download FREE architecture+structure+cost estimate+energy report', '2020-03-17 00:41:35', 'https://www.youtube.com/embed/0eErHCn1IMU'),
('r1cdb0c9d9ba1035983f461d6984lffc6bi', 'โปรโมชั้นสุดพิเศษ ลดกระหน่ำ บ้านประหยัดพลังงานสไตล์โมเดิร์น | so cheap modern energy-saving house', 'โปรโมชั้นสุดพิเศษ ลดกระหน่ำ บ้านประหยัดพลังงานสไตล์โมเดิร์น | so cheap modern energy-saving house', '2020-03-17 01:01:07', 'https://www.youtube.com/embed/19UdeJUlrg4');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `advertisement`
--
ALTER TABLE `advertisement`
  ADD PRIMARY KEY (`id_advertisement`);

--
-- Indexes for table `banner`
--
ALTER TABLE `banner`
  ADD PRIMARY KEY (`id_banner`);

--
-- Indexes for table `best_seller`
--
ALTER TABLE `best_seller`
  ADD PRIMARY KEY (`id_best_seller`);

--
-- Indexes for table `chat`
--
ALTER TABLE `chat`
  ADD PRIMARY KEY (`id_chat`);

--
-- Indexes for table `chat_room`
--
ALTER TABLE `chat_room`
  ADD PRIMARY KEY (`id_chat_room`);

--
-- Indexes for table `comment`
--
ALTER TABLE `comment`
  ADD PRIMARY KEY (`id_comment`);

--
-- Indexes for table `company`
--
ALTER TABLE `company`
  ADD PRIMARY KEY (`id_company`);

--
-- Indexes for table `consultant`
--
ALTER TABLE `consultant`
  ADD PRIMARY KEY (`id_consultant`);

--
-- Indexes for table `discount`
--
ALTER TABLE `discount`
  ADD PRIMARY KEY (`id_discount`);

--
-- Indexes for table `event`
--
ALTER TABLE `event`
  ADD PRIMARY KEY (`id_event`);

--
-- Indexes for table `excellence`
--
ALTER TABLE `excellence`
  ADD PRIMARY KEY (`id_excellence`);

--
-- Indexes for table `excellence_product`
--
ALTER TABLE `excellence_product`
  ADD PRIMARY KEY (`id_excellence_product`);

--
-- Indexes for table `gallery`
--
ALTER TABLE `gallery`
  ADD PRIMARY KEY (`id_gallery`);

--
-- Indexes for table `get_threed`
--
ALTER TABLE `get_threed`
  ADD PRIMARY KEY (`id_get_threeD`);

--
-- Indexes for table `how_to`
--
ALTER TABLE `how_to`
  ADD PRIMARY KEY (`id_how_to`);

--
-- Indexes for table `img_gallery`
--
ALTER TABLE `img_gallery`
  ADD PRIMARY KEY (`id_img_gallery`);

--
-- Indexes for table `interior`
--
ALTER TABLE `interior`
  ADD PRIMARY KEY (`id_interior`);

--
-- Indexes for table `item_package`
--
ALTER TABLE `item_package`
  ADD PRIMARY KEY (`id_item_package`);

--
-- Indexes for table `likes`
--
ALTER TABLE `likes`
  ADD PRIMARY KEY (`id_likes`);

--
-- Indexes for table `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`id_news`);

--
-- Indexes for table `order`
--
ALTER TABLE `order`
  ADD PRIMARY KEY (`id_order`);

--
-- Indexes for table `package`
--
ALTER TABLE `package`
  ADD PRIMARY KEY (`id_package`);

--
-- Indexes for table `payment_form`
--
ALTER TABLE `payment_form`
  ADD PRIMARY KEY (`id_payment_form`);

--
-- Indexes for table `payment_method`
--
ALTER TABLE `payment_method`
  ADD PRIMARY KEY (`id_payment_method`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id_product`);

--
-- Indexes for table `projects`
--
ALTER TABLE `projects`
  ADD PRIMARY KEY (`id_projects`);

--
-- Indexes for table `project_design`
--
ALTER TABLE `project_design`
  ADD PRIMARY KEY (`id_project_design`);

--
-- Indexes for table `promotion`
--
ALTER TABLE `promotion`
  ADD PRIMARY KEY (`id_promotion`);

--
-- Indexes for table `request`
--
ALTER TABLE `request`
  ADD PRIMARY KEY (`id_request`);

--
-- Indexes for table `staff`
--
ALTER TABLE `staff`
  ADD PRIMARY KEY (`id_staff`);

--
-- Indexes for table `statistics`
--
ALTER TABLE `statistics`
  ADD PRIMARY KEY (`id_statistics`);

--
-- Indexes for table `status_admin`
--
ALTER TABLE `status_admin`
  ADD PRIMARY KEY (`id_status_admin`);

--
-- Indexes for table `type_gallery`
--
ALTER TABLE `type_gallery`
  ADD PRIMARY KEY (`id_type_gallery`);

--
-- Indexes for table `type_package`
--
ALTER TABLE `type_package`
  ADD PRIMARY KEY (`id_type_package`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id_user`);

--
-- Indexes for table `video`
--
ALTER TABLE `video`
  ADD PRIMARY KEY (`id_video`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `advertisement`
--
ALTER TABLE `advertisement`
  MODIFY `id_advertisement` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `banner`
--
ALTER TABLE `banner`
  MODIFY `id_banner` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `best_seller`
--
ALTER TABLE `best_seller`
  MODIFY `id_best_seller` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `chat`
--
ALTER TABLE `chat`
  MODIFY `id_chat` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=81;

--
-- AUTO_INCREMENT for table `chat_room`
--
ALTER TABLE `chat_room`
  MODIFY `id_chat_room` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `comment`
--
ALTER TABLE `comment`
  MODIFY `id_comment` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `consultant`
--
ALTER TABLE `consultant`
  MODIFY `id_consultant` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `discount`
--
ALTER TABLE `discount`
  MODIFY `id_discount` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `excellence`
--
ALTER TABLE `excellence`
  MODIFY `id_excellence` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `excellence_product`
--
ALTER TABLE `excellence_product`
  MODIFY `id_excellence_product` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `get_threed`
--
ALTER TABLE `get_threed`
  MODIFY `id_get_threeD` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `how_to`
--
ALTER TABLE `how_to`
  MODIFY `id_how_to` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `img_gallery`
--
ALTER TABLE `img_gallery`
  MODIFY `id_img_gallery` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `interior`
--
ALTER TABLE `interior`
  MODIFY `id_interior` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `payment_form`
--
ALTER TABLE `payment_form`
  MODIFY `id_payment_form` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `payment_method`
--
ALTER TABLE `payment_method`
  MODIFY `id_payment_method` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `project_design`
--
ALTER TABLE `project_design`
  MODIFY `id_project_design` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `promotion`
--
ALTER TABLE `promotion`
  MODIFY `id_promotion` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `request`
--
ALTER TABLE `request`
  MODIFY `id_request` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `statistics`
--
ALTER TABLE `statistics`
  MODIFY `id_statistics` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=97;

--
-- AUTO_INCREMENT for table `status_admin`
--
ALTER TABLE `status_admin`
  MODIFY `id_status_admin` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
