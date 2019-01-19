-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Jan 19, 2019 at 08:29 PM
-- Server version: 10.1.16-MariaDB
-- PHP Version: 5.6.24

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `purchasinglanka`
--

-- --------------------------------------------------------

--
-- Table structure for table `busydates`
--

CREATE TABLE `busydates` (
  `id` int(10) NOT NULL,
  `deliveryPerson_id` int(10) NOT NULL,
  `time_slot_id` int(10) NOT NULL,
  `type` varchar(50) NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `busydates`
--

INSERT INTO `busydates` (`id`, `deliveryPerson_id`, `time_slot_id`, `type`, `date`) VALUES
(1, 1, 1, 'MARKED_AS_BUSY', '2019-01-17'),
(2, 2, 2, 'MARKED_AS_BUSY', '2019-01-18'),
(3, 1, 2, 'MARKED_AS_BUSY', '2018-01-10'),
(4, 3, 2, 'MARKED_AS_BUSY', '2019-01-23'),
(5, 2, 1, 'MARKED_AS_BUSY', '2019-01-29'),
(6, 2, 2, 'MARKED_AS_BUSY', '2019-01-28'),
(7, 3, 1, 'MARKED_AS_BUSY', '2019-01-17'),
(8, 2, 1, 'MARKED_AS_BUSY', '2019-01-30'),
(9, 3, 1, 'MARKED_AS_BUSY', '2019-01-22'),
(10, 3, 2, 'MARKED_AS_BUSY', '2019-01-31'),
(11, 4, 1, 'MARKED_AS_BUSY', '2019-01-30'),
(12, 4, 2, 'MARKED_AS_BUSY', '2019-01-23'),
(13, 1, 1, 'MARKED_AS_BUSY', '2019-01-11');

-- --------------------------------------------------------

--
-- Table structure for table `chargeperkm`
--

CREATE TABLE `chargeperkm` (
  `id` int(10) NOT NULL,
  `deliveryPerson_id` int(10) NOT NULL,
  `time_slot_id` int(10) NOT NULL,
  `charge` float(5,2) NOT NULL,
  `currency` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `chargeperkm`
--

INSERT INTO `chargeperkm` (`id`, `deliveryPerson_id`, `time_slot_id`, `charge`, `currency`) VALUES
(1, 1, 1, 250.00, 'AUD'),
(2, 1, 2, 300.00, 'AUD'),
(3, 2, 1, 250.00, 'AUD'),
(4, 2, 2, 300.00, 'AUD'),
(5, 3, 1, 150.00, 'AUD'),
(6, 3, 2, 150.00, 'AUD'),
(7, 4, 1, 400.00, 'AUD'),
(8, 4, 2, 450.00, 'AUD');

-- --------------------------------------------------------

--
-- Table structure for table `deliverypeople`
--

CREATE TABLE `deliverypeople` (
  `id` int(10) NOT NULL,
  `job_role` int(10) NOT NULL,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `description` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `deliverypeople`
--

INSERT INTO `deliverypeople` (`id`, `job_role`, `first_name`, `last_name`, `description`) VALUES
(1, 1, 'Emma', 'Olivia', 'We were all very young and were just doing what we loved.'),
(2, 1, 'Emma', 'Isabella', 'We were all very young and were just doing what we loved.'),
(3, 1, 'Jacob', 'William', 'We were just working and doing what we loved '),
(4, 2, 'James', 'Alexander', 'Famous for styling the tresses of Kate Moss, Sienna Miller and Emma Watson\r\n');

-- --------------------------------------------------------

--
-- Table structure for table `gallery`
--

CREATE TABLE `gallery` (
  `id` int(10) NOT NULL,
  `profile_id` int(10) NOT NULL,
  `image_path` varchar(200) NOT NULL,
  `gallery_path` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `gallery`
--

INSERT INTO `gallery` (`id`, `profile_id`, `image_path`, `gallery_path`) VALUES
(1, 1, '../gallery/1/profile/sty_prof.jpg', '../gallery/1/profile/'),
(2, 2, '../gallery/2/profile/sty_prof.jpg', '../gallery/2/profile/'),
(3, 3, '../gallery/3/profile/sty_prof.jpg', '../gallery/3/profile/'),
(4, 4, '../gallery/4/profile/sty_prof.jpg', '../gallery/4/profile/');

-- --------------------------------------------------------

--
-- Table structure for table `jobrole`
--

CREATE TABLE `jobrole` (
  `id` int(10) NOT NULL,
  `role` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `jobrole`
--

INSERT INTO `jobrole` (`id`, `role`) VALUES
(1, 'Hair Stylist'),
(2, 'Educator');

-- --------------------------------------------------------

--
-- Table structure for table `locations`
--

CREATE TABLE `locations` (
  `id` int(10) NOT NULL,
  `city` varchar(50) NOT NULL,
  `state` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `locations`
--

INSERT INTO `locations` (`id`, `city`, `state`) VALUES
(1, 'Badulla', ''),
(2, 'Bandarawela', ''),
(3, 'Welimada', ''),
(4, 'Colombo1', ''),
(5, 'Colombo2', ''),
(6, 'Gampaha', ''),
(7, 'Kelaniya', ''),
(8, 'Matara', ''),
(9, 'Galle', ''),
(10, 'Weligama', '');

-- --------------------------------------------------------

--
-- Table structure for table `preferredlocations`
--

CREATE TABLE `preferredlocations` (
  `deliveryPerson_id` int(10) NOT NULL,
  `location_id` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `preferredlocations`
--

INSERT INTO `preferredlocations` (`deliveryPerson_id`, `location_id`) VALUES
(1, 1),
(1, 2),
(1, 3),
(2, 4),
(2, 5),
(2, 6),
(3, 8),
(3, 9),
(3, 10),
(4, 6),
(4, 7);

-- --------------------------------------------------------

--
-- Table structure for table `skills`
--

CREATE TABLE `skills` (
  `id` int(10) NOT NULL,
  `parent_id` int(10) NOT NULL,
  `description` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `skills`
--

INSERT INTO `skills` (`id`, `parent_id`, `description`) VALUES
(1, 1, 'Perm'),
(2, 1, 'Full Hair Colour'),
(3, 1, 'Men Hair Cutting'),
(4, 1, 'Hair Relaxing'),
(5, 1, 'Women Long Hair Cut'),
(6, 1, 'Women Short Hair Cut'),
(7, 1, 'Bridel');

-- --------------------------------------------------------

--
-- Table structure for table `stylistskillmapping`
--

CREATE TABLE `stylistskillmapping` (
  `stylist_id` int(10) NOT NULL,
  `skill_id` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `stylistskillmapping`
--

INSERT INTO `stylistskillmapping` (`stylist_id`, `skill_id`) VALUES
(1, 1),
(1, 2),
(1, 4),
(2, 1),
(3, 5),
(3, 6),
(4, 1),
(4, 2),
(4, 7),
(4, 6),
(2, 3);

-- --------------------------------------------------------

--
-- Table structure for table `timeslot`
--

CREATE TABLE `timeslot` (
  `id` int(10) NOT NULL,
  `slot` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `timeslot`
--

INSERT INTO `timeslot` (`id`, `slot`) VALUES
(1, '8AM - 12PM'),
(2, '1PM - 5PM');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `busydates`
--
ALTER TABLE `busydates`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `chargeperkm`
--
ALTER TABLE `chargeperkm`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `deliverypeople`
--
ALTER TABLE `deliverypeople`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `gallery`
--
ALTER TABLE `gallery`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `jobrole`
--
ALTER TABLE `jobrole`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `locations`
--
ALTER TABLE `locations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `preferredlocations`
--
ALTER TABLE `preferredlocations`
  ADD PRIMARY KEY (`deliveryPerson_id`,`location_id`);

--
-- Indexes for table `skills`
--
ALTER TABLE `skills`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `timeslot`
--
ALTER TABLE `timeslot`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `busydates`
--
ALTER TABLE `busydates`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
--
-- AUTO_INCREMENT for table `chargeperkm`
--
ALTER TABLE `chargeperkm`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT for table `deliverypeople`
--
ALTER TABLE `deliverypeople`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `gallery`
--
ALTER TABLE `gallery`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `jobrole`
--
ALTER TABLE `jobrole`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `locations`
--
ALTER TABLE `locations`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT for table `skills`
--
ALTER TABLE `skills`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
--
-- AUTO_INCREMENT for table `timeslot`
--
ALTER TABLE `timeslot`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
