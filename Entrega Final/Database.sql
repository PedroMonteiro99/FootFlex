-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: 23-Jan-2020 às 19:16
-- Versão do servidor: 8.0.13-4
-- versão do PHP: 7.2.24-0ubuntu0.18.04.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `hxPSqm6TO7`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `Cliente`
--

CREATE TABLE `Cliente` (
  `idCliente` int(11) NOT NULL,
  `Username` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `Email` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `Password` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `DebitCard` int(16) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Extraindo dados da tabela `Cliente`
--

INSERT INTO `Cliente` (`idCliente`, `Username`, `Email`, `Password`, `DebitCard`) VALUES
(1, 'Pedro', 'pmonteiro1999@gmail.com', 'Pedro99', 849489429),
(2, 'Miguel', 'miguel_ramos99@gmail.com', 'Miguel99', 4327482),
(3, 'Manuel', 'manuel@gmail.com', 'Manuel99', 3245725),
(4, 'João', 'joao@gmail.com', 'Joao99', 251782),
(5, 'Gabriel', 'gabriel@gmail.com', 'Gabriel99', 849492),
(6, 'Francisco', 'francisco@gmail.com', 'Francisco99', 324354049),
(7, 'Rodrigo', 'rodrigo@gmail.com', 'Rodrigo99', 156151),
(8, 'Ricardo', 'ricardo@gmail.com', 'Ricardo99', 218329301),
(9, 'Fábio', 'fabio@gmail.com', 'Fabio99', 894598),
(10, 'Jorge', 'jorge@gmail.com', 'Jorge', 9842689),
(11, 'Luis', 'luis@gmail.com', 'Luis99', 19519818),
(12, 'Nuno', 'nuno@gmail.com', 'Nuno99', 9489789),
(13, 'Guilherme', 'guilherme@gmail.com', 'Guilherme99', 784956),
(14, 'José', 'jose@gmail.com', 'Jose99', 23424235),
(15, 'Fernando', 'fernando@gmail.com', 'Fernando99', 2342342),
(16, 'Rafael', 'rafael@gmail.com', 'Rafael99', 32432534),
(17, 'Renato', 'renato@gmail.com', 'Renato99', 24244234),
(18, 'Emanuel', 'emanuel@gmail.com', 'Emanuel99', 24728942),
(19, 'Mário', 'mario@gmail.com', 'Mario99', 24242342),
(20, 'Leandro', 'leandro@gmail.com', 'Leandro99', 45641313),
(21, 'Leonardo', 'leonardo@gmail.com', 'Leonardo99', 2423435),
(22, 'Roberto', 'roberto@gmail.com', 'Roberto99', 243255434),
(23, 'André', 'andre@gmail.com', 'Andre99', 23252525),
(24, 'António', 'antonio@gmail.com', 'Antonio99', 235346),
(25, 'Quim Roscas', 'quim@gmail.com', 'Quim99', 984891591),
(26, 'Quim Roscas', 'quim@roscas', 'pilantra', 789456123),
(27, 'Quim Roscas', 'quim@roscas', 'pilantra99', 789456123),
(28, 'Joel', 'joel@gmail.com', 'Joel99', 984219),
(29, 'Guilla', 'guilla@123.com', '1234', 74894984),
(30, 'Senna', 'senna@gmail.com', 'kehwes-badbug-matqE5', 123456789),
(31, 'Nagasaki', 'nagasaki12@gmail.com', '0000', 123418189),
(32, 'Nagasaki', 'nagasaki12@gmail.com', '123', 1234567890),
(33, 'Ricardo', 'ricardo@gmail.com', 'ricardo1298', 1234567890),
(34, 'Miguel', 'miguel_marroquino@gmail.com', 'Miguel99', 919849840),
(35, 'Miguel', 'miguelito@gmail.com', 'Miguelito99', 1919198);

-- --------------------------------------------------------

--
-- Estrutura da tabela `Cliente_has_Clube`
--

CREATE TABLE `Cliente_has_Clube` (
  `Cliente_idCliente` int(11) NOT NULL,
  `Cliente_Pacote_idPacote` int(11) NOT NULL,
  `Clube_idClube` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `Cliente_has_Pacote`
--

CREATE TABLE `Cliente_has_Pacote` (
  `Cliente_idCliente` int(11) NOT NULL,
  `Pacote_idPacote` int(11) NOT NULL,
  `Liga` varchar(60) COLLATE utf8_unicode_ci DEFAULT NULL,
  `Desporto` varchar(60) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Extraindo dados da tabela `Cliente_has_Pacote`
--

INSERT INTO `Cliente_has_Pacote` (`Cliente_idCliente`, `Pacote_idPacote`, `Liga`, `Desporto`) VALUES
(1, 1, 'Liga Nos', 'Football'),
(2, 2, NULL, NULL),
(3, 3, NULL, 'Football'),
(4, 1, 'Chinese League', 'Basketball'),
(5, 3, NULL, 'Ice Hockey'),
(6, 2, NULL, NULL),
(7, 1, 'Premier League', 'Football'),
(8, 2, NULL, NULL),
(9, 3, NULL, 'Football'),
(10, 2, NULL, NULL),
(11, 3, NULL, 'Ice Hockey'),
(12, 2, NULL, NULL),
(13, 2, NULL, NULL),
(14, 3, NULL, 'Basketball'),
(15, 1, 'La Liga', 'Football'),
(16, 2, NULL, NULL),
(17, 1, 'NBA', 'Basketball'),
(18, 3, NULL, 'Football'),
(19, 1, 'NHL', 'Ice Hockey'),
(20, 3, NULL, 'Ice Hockey'),
(21, 3, NULL, 'Basketball'),
(22, 2, NULL, NULL),
(23, 2, NULL, NULL),
(24, 3, NULL, 'Football'),
(25, 2, NULL, NULL),
(26, 1, 'Liga Nos', 'Football'),
(27, 1, 'Liga Nos', 'Football'),
(28, 2, NULL, NULL),
(30, 2, NULL, NULL),
(31, 3, NULL, 'Football'),
(33, 2, NULL, NULL);

-- --------------------------------------------------------

--
-- Estrutura da tabela `Clube`
--

CREATE TABLE `Clube` (
  `idClube` int(11) NOT NULL,
  `ClubName` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `Liga_idLiga` int(11) NOT NULL,
  `Liga_Desporto_idDesporto` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `Desporto`
--

CREATE TABLE `Desporto` (
  `idDesporto` int(11) NOT NULL,
  `Tipo_Desporto` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `Jogo`
--

CREATE TABLE `Jogo` (
  `idJogo` int(11) NOT NULL,
  `HomeTeam` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `AwayTeam` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `DataJogo` date DEFAULT NULL,
  `HomeScore` int(11) DEFAULT NULL,
  `AwayScore` int(11) DEFAULT NULL,
  `Localização` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `Liga_idLiga` int(11) NOT NULL,
  `Liga_Desporto_idDesporto` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `Liga`
--

CREATE TABLE `Liga` (
  `idLiga` int(11) NOT NULL,
  `Nome` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `Desporto_idDesporto` int(11) NOT NULL,
  `Desporto_idDesporto1` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `Pacote`
--

CREATE TABLE `Pacote` (
  `idPacote` int(11) NOT NULL,
  `Nome` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `Preço` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Extraindo dados da tabela `Pacote`
--

INSERT INTO `Pacote` (`idPacote`, `Nome`, `Preço`) VALUES
(1, 'League', '14,99'),
(2, 'All in One', '29,99'),
(3, 'Sports', '25,99');

-- --------------------------------------------------------

--
-- Estrutura da tabela `Stream`
--

CREATE TABLE `Stream` (
  `idStream` int(11) NOT NULL,
  `Jogo_idJogo` int(11) NOT NULL,
  `HomeTeam` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `AwayTeam` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `Data` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Cliente`
--
ALTER TABLE `Cliente`
  ADD PRIMARY KEY (`idCliente`);

--
-- Indexes for table `Cliente_has_Clube`
--
ALTER TABLE `Cliente_has_Clube`
  ADD PRIMARY KEY (`Cliente_idCliente`,`Cliente_Pacote_idPacote`,`Clube_idClube`),
  ADD KEY `fk_Cliente_has_Clube_Clube1_idx` (`Clube_idClube`),
  ADD KEY `fk_Cliente_has_Clube_Cliente1_idx` (`Cliente_idCliente`,`Cliente_Pacote_idPacote`);

--
-- Indexes for table `Cliente_has_Pacote`
--
ALTER TABLE `Cliente_has_Pacote`
  ADD PRIMARY KEY (`Cliente_idCliente`,`Pacote_idPacote`),
  ADD KEY `fk_Cliente_has_Pacote_Pacote1_idx` (`Pacote_idPacote`),
  ADD KEY `fk_Cliente_has_Pacote_Cliente1_idx` (`Cliente_idCliente`);

--
-- Indexes for table `Clube`
--
ALTER TABLE `Clube`
  ADD PRIMARY KEY (`idClube`),
  ADD KEY `fk_Clube_Liga1_idx` (`Liga_idLiga`,`Liga_Desporto_idDesporto`);

--
-- Indexes for table `Desporto`
--
ALTER TABLE `Desporto`
  ADD PRIMARY KEY (`idDesporto`);

--
-- Indexes for table `Jogo`
--
ALTER TABLE `Jogo`
  ADD PRIMARY KEY (`idJogo`),
  ADD KEY `fk_Jogo_Liga1_idx` (`Liga_idLiga`,`Liga_Desporto_idDesporto`);

--
-- Indexes for table `Liga`
--
ALTER TABLE `Liga`
  ADD PRIMARY KEY (`idLiga`,`Desporto_idDesporto`),
  ADD KEY `fk_Liga_Desporto1_idx` (`Desporto_idDesporto1`);

--
-- Indexes for table `Pacote`
--
ALTER TABLE `Pacote`
  ADD PRIMARY KEY (`idPacote`);

--
-- Indexes for table `Stream`
--
ALTER TABLE `Stream`
  ADD PRIMARY KEY (`idStream`),
  ADD KEY `fk_Stream_Jogo1_idx` (`Jogo_idJogo`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Cliente`
--
ALTER TABLE `Cliente`
  MODIFY `idCliente` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT for table `Clube`
--
ALTER TABLE `Clube`
  MODIFY `idClube` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `Desporto`
--
ALTER TABLE `Desporto`
  MODIFY `idDesporto` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `Jogo`
--
ALTER TABLE `Jogo`
  MODIFY `idJogo` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `Liga`
--
ALTER TABLE `Liga`
  MODIFY `idLiga` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `Pacote`
--
ALTER TABLE `Pacote`
  MODIFY `idPacote` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `Stream`
--
ALTER TABLE `Stream`
  MODIFY `idStream` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Limitadores para a tabela `Cliente_has_Clube`
--
ALTER TABLE `Cliente_has_Clube`
  ADD CONSTRAINT `fk_Cliente_has_Clube_Cliente1` FOREIGN KEY (`Cliente_idCliente`) REFERENCES `Cliente` (`idcliente`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `fk_Cliente_has_Clube_Clube1` FOREIGN KEY (`Clube_idClube`) REFERENCES `Clube` (`idclube`);

--
-- Limitadores para a tabela `Cliente_has_Pacote`
--
ALTER TABLE `Cliente_has_Pacote`
  ADD CONSTRAINT `fk_Cliente_has_Pacote_Cliente1` FOREIGN KEY (`Cliente_idCliente`) REFERENCES `Cliente` (`idcliente`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `fk_Cliente_has_Pacote_Pacote1` FOREIGN KEY (`Pacote_idPacote`) REFERENCES `Pacote` (`idpacote`);

--
-- Limitadores para a tabela `Clube`
--
ALTER TABLE `Clube`
  ADD CONSTRAINT `fk_Clube_Liga1` FOREIGN KEY (`Liga_idLiga`,`Liga_Desporto_idDesporto`) REFERENCES `Liga` (`idliga`, `desporto_iddesporto`);

--
-- Limitadores para a tabela `Jogo`
--
ALTER TABLE `Jogo`
  ADD CONSTRAINT `fk_Jogo_Liga1` FOREIGN KEY (`Liga_idLiga`,`Liga_Desporto_idDesporto`) REFERENCES `Liga` (`idliga`, `desporto_iddesporto`);

--
-- Limitadores para a tabela `Liga`
--
ALTER TABLE `Liga`
  ADD CONSTRAINT `fk_Liga_Desporto1` FOREIGN KEY (`Desporto_idDesporto1`) REFERENCES `Desporto` (`iddesporto`);

--
-- Limitadores para a tabela `Stream`
--
ALTER TABLE `Stream`
  ADD CONSTRAINT `fk_Stream_Jogo1` FOREIGN KEY (`Jogo_idJogo`) REFERENCES `Jogo` (`idjogo`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
