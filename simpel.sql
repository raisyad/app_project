-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 11, 2023 at 03:03 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.1.17

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `simpel`
--

-- --------------------------------------------------------

--
-- Table structure for table `histori_login`
--

CREATE TABLE `histori_login` (
  `id` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `last_login` datetime(3) NOT NULL DEFAULT current_timestamp(3)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `jadwal`
--

CREATE TABLE `jadwal` (
  `id` int(11) NOT NULL,
  `hari` varchar(191) NOT NULL,
  `jumlah_sesi` int(11) NOT NULL,
  `lama_sesi` int(11) NOT NULL,
  `jam_mulai` time NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `jadwal_khusus`
--

CREATE TABLE `jadwal_khusus` (
  `id` int(11) NOT NULL,
  `kelas` varchar(20) NOT NULL,
  `keterangan` varchar(191) NOT NULL,
  `sesi` varchar(20) NOT NULL,
  `hari` varchar(20) NOT NULL,
  `durasi` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `jenis_pelatihan`
--

CREATE TABLE `jenis_pelatihan` (
  `id` int(11) NOT NULL,
  `nama_pelatihan` varchar(191) DEFAULT NULL,
  `kode_pelatihan` varchar(191) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `jenis_pelatihan`
--

INSERT INTO `jenis_pelatihan` (`id`, `nama_pelatihan`, `kode_pelatihan`) VALUES
(1, 'Pelatihan Dasar Calon Pegawai Negeri Sipil', 'LATSAR'),
(2, 'Pelatihan Kepemimpinan Pengawas', 'PKP'),
(3, 'Pelatihan Kepemimpinan Administrator', 'PKA');

-- --------------------------------------------------------

--
-- Table structure for table `master_agama`
--

CREATE TABLE `master_agama` (
  `id` int(11) NOT NULL,
  `nama_agama` varchar(191) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `master_agama`
--

INSERT INTO `master_agama` (`id`, `nama_agama`) VALUES
(1, 'ISLAM'),
(2, 'KRISTEN PROTESTAN'),
(3, 'KRISTEN KATOLIK'),
(4, 'HINDU'),
(5, 'BUDHA'),
(6, 'KONGHUCU');

-- --------------------------------------------------------

--
-- Table structure for table `master_jurusan`
--

CREATE TABLE `master_jurusan` (
  `id` int(11) NOT NULL,
  `nama_jurusan` varchar(191) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `master_kelas`
--

CREATE TABLE `master_kelas` (
  `id` int(11) NOT NULL,
  `nama_kelas` varchar(191) NOT NULL,
  `kelas` varchar(20) NOT NULL,
  `id_jurusan` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `master_pangkat`
--

CREATE TABLE `master_pangkat` (
  `id` int(11) NOT NULL,
  `nama_pangkat` varchar(191) DEFAULT NULL,
  `nama_golongan` varchar(191) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `master_pangkat`
--

INSERT INTO `master_pangkat` (`id`, `nama_pangkat`, `nama_golongan`) VALUES
(1, 'Juru', 'I.a'),
(2, 'Juru Muda Tingkat I', 'I.b'),
(3, 'Juru Tingkat I', 'I.d'),
(4, 'Pengatur Muda', 'II.a'),
(5, 'Pengatur Muda TK.I', 'II.b'),
(6, 'Pengatur', 'II.c'),
(7, 'Pengatur TK.I', 'II.d'),
(8, 'Penata Muda', 'III.a'),
(9, 'Penata Muda TK.I', 'III.b'),
(10, 'Penata', 'III.c'),
(11, 'Penata TK.I', 'III.d'),
(12, 'Pembina', 'IV.a'),
(13, 'Pembina TK.I', 'IV.b'),
(14, 'Pembina Utama Muda', 'IV.c'),
(15, 'Pembina Utama Madya', 'IV.d'),
(16, 'Pembina Utama', 'IV.e');

-- --------------------------------------------------------

--
-- Table structure for table `master_pelajaran`
--

CREATE TABLE `master_pelajaran` (
  `id` int(11) NOT NULL,
  `kode_mapel` varchar(191) NOT NULL,
  `nama_mapel` varchar(191) NOT NULL,
  `kelompok_mapel` varchar(191) NOT NULL,
  `kelas` varchar(191) NOT NULL,
  `beban_jam` int(11) NOT NULL,
  `id_jurusan` int(11) NOT NULL,
  `cost` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `pengajar`
--

CREATE TABLE `pengajar` (
  `id` int(11) NOT NULL,
  `nama_pengajar` varchar(191) NOT NULL,
  `jenis_kelamin` varchar(191) NOT NULL,
  `nik` varchar(16) NOT NULL,
  `ttl` datetime(3) NOT NULL,
  `nama_ibu` varchar(191) NOT NULL,
  `nip` varchar(191) NOT NULL,
  `email` varchar(191) NOT NULL,
  `id_pangkat` int(11) NOT NULL,
  `jabatan` varchar(191) NOT NULL,
  `unit_kerja` varchar(255) NOT NULL,
  `nama_instansi` varchar(255) NOT NULL,
  `alamat_instansi` text NOT NULL,
  `no_telepon_instansi` varchar(20) NOT NULL,
  `id_agama` int(11) NOT NULL,
  `status_kawin` enum('belumKawin','sudahKawin','ceraiHidup','ceraiMati') NOT NULL,
  `hobi` text NOT NULL,
  `alamat` text NOT NULL,
  `foto` text DEFAULT NULL,
  `pendidikan_sd` varchar(191) NOT NULL,
  `pendidikan_smp` varchar(191) NOT NULL,
  `pendidikan_sma` varchar(191) NOT NULL,
  `pendidikan_d3` varchar(191) NOT NULL,
  `pendidikan_s1` varchar(191) NOT NULL,
  `pendidikan_s2` varchar(191) NOT NULL,
  `pendidikan_s3` varchar(191) NOT NULL,
  `status_kepegawaian` enum('CPNS','PEJABAT_STRUKTURAL','TENAGA_AHLI') NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL DEFAULT current_timestamp(3)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `penjadwalan`
--

CREATE TABLE `penjadwalan` (
  `id` int(11) NOT NULL,
  `id_kelas` int(11) NOT NULL,
  `id_pengajar` int(11) NOT NULL,
  `id_mapel` int(11) NOT NULL,
  `hari` varchar(191) NOT NULL,
  `sesi` int(11) NOT NULL,
  `id_jadwal` int(11) NOT NULL,
  `keterangan` varchar(191) NOT NULL,
  `jam_mulai` time NOT NULL,
  `jam_selesai` time NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `peserta`
--

CREATE TABLE `peserta` (
  `id` int(11) NOT NULL,
  `nama_peserta` varchar(191) NOT NULL,
  `jenis_kelamin` varchar(191) NOT NULL,
  `nik` varchar(16) NOT NULL,
  `ttl` datetime(3) NOT NULL,
  `nama_ibu` varchar(191) NOT NULL,
  `nip` varchar(191) NOT NULL,
  `email` varchar(191) NOT NULL,
  `id_pangkat` int(11) NOT NULL,
  `jabatan` varchar(191) NOT NULL,
  `unit_kerja` varchar(255) NOT NULL,
  `nama_instansi` varchar(255) NOT NULL,
  `alamat_instansi` text NOT NULL,
  `no_telepon_instansi` varchar(20) NOT NULL,
  `id_agama` int(11) NOT NULL,
  `status_kawin` enum('belumKawin','sudahKawin','ceraiHidup','ceraiMati') NOT NULL,
  `hobi` text NOT NULL,
  `alamat` text NOT NULL,
  `foto` text DEFAULT NULL,
  `pendidikan_sd` varchar(191) NOT NULL,
  `pendidikan_smp` varchar(191) NOT NULL,
  `pendidikan_sma` varchar(191) NOT NULL,
  `pendidikan_d3` varchar(191) NOT NULL,
  `pendidikan_s1` varchar(191) NOT NULL,
  `pendidikan_s2` varchar(191) NOT NULL,
  `pendidikan_s3` varchar(191) NOT NULL,
  `status_kepegawaian` enum('CPNS','PEJABAT_STRUKTURAL','TENAGA_AHLI') NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL DEFAULT current_timestamp(3)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `request_jadwal`
--

CREATE TABLE `request_jadwal` (
  `id` int(11) NOT NULL,
  `id_pengajar` int(11) NOT NULL,
  `hari` varchar(191) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `role`
--

CREATE TABLE `role` (
  `id` int(11) NOT NULL,
  `nama_role` varchar(191) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `role`
--

INSERT INTO `role` (`id`, `nama_role`) VALUES
(1, 'admin'),
(2, 'pengajar'),
(3, 'peserta');

-- --------------------------------------------------------

--
-- Table structure for table `rumusan`
--

CREATE TABLE `rumusan` (
  `id` int(11) NOT NULL,
  `id_pengajar` int(11) NOT NULL,
  `hari_request` varchar(255) NOT NULL,
  `id_kelas` int(11) NOT NULL,
  `total` int(11) NOT NULL,
  `beban_kerja` int(11) NOT NULL,
  `pendapatan` int(11) NOT NULL,
  `hasil_rumusan` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `nama` varchar(191) DEFAULT NULL,
  `nip` int(11) NOT NULL,
  `id_pengajar` int(11) DEFAULT NULL,
  `id_peserta` int(11) DEFAULT NULL,
  `password` varchar(191) DEFAULT NULL,
  `email` varchar(191) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `_prisma_migrations`
--

CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) NOT NULL,
  `checksum` varchar(64) NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) NOT NULL,
  `logs` text DEFAULT NULL,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `applied_steps_count` int(10) UNSIGNED NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `_prisma_migrations`
--

INSERT INTO `_prisma_migrations` (`id`, `checksum`, `finished_at`, `migration_name`, `logs`, `rolled_back_at`, `started_at`, `applied_steps_count`) VALUES
('f7febeea-cba1-43b1-b08c-86ee6612ecae', 'a24eb35ae3a7091ef67f12cc4437d3967007ba86487b87f397fce10259dde3f8', '2023-08-13 06:45:05.037', '20230813064504_simpel_db', NULL, NULL, '2023-08-13 06:45:04.496', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `histori_login`
--
ALTER TABLE `histori_login`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Histori_login_userId_fkey` (`userId`);

--
-- Indexes for table `jadwal`
--
ALTER TABLE `jadwal`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `jadwal_khusus`
--
ALTER TABLE `jadwal_khusus`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `jenis_pelatihan`
--
ALTER TABLE `jenis_pelatihan`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `master_agama`
--
ALTER TABLE `master_agama`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `master_jurusan`
--
ALTER TABLE `master_jurusan`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `master_kelas`
--
ALTER TABLE `master_kelas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Master_kelas_id_jurusan_fkey` (`id_jurusan`);

--
-- Indexes for table `master_pangkat`
--
ALTER TABLE `master_pangkat`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `master_pelajaran`
--
ALTER TABLE `master_pelajaran`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Master_pelajaran_id_jurusan_fkey` (`id_jurusan`);

--
-- Indexes for table `pengajar`
--
ALTER TABLE `pengajar`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Pengajar_nip_key` (`nip`),
  ADD UNIQUE KEY `Pengajar_email_key` (`email`),
  ADD KEY `Pengajar_id_pangkat_fkey` (`id_pangkat`),
  ADD KEY `Pengajar_id_agama_fkey` (`id_agama`);

--
-- Indexes for table `penjadwalan`
--
ALTER TABLE `penjadwalan`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Penjadwalan_id_kelas_fkey` (`id_kelas`),
  ADD KEY `Penjadwalan_id_pengajar_fkey` (`id_pengajar`),
  ADD KEY `Penjadwalan_id_mapel_fkey` (`id_mapel`),
  ADD KEY `Penjadwalan_id_jadwal_fkey` (`id_jadwal`);

--
-- Indexes for table `peserta`
--
ALTER TABLE `peserta`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Peserta_nip_key` (`nip`),
  ADD UNIQUE KEY `Peserta_email_key` (`email`),
  ADD KEY `Peserta_id_pangkat_fkey` (`id_pangkat`),
  ADD KEY `Peserta_id_agama_fkey` (`id_agama`);

--
-- Indexes for table `request_jadwal`
--
ALTER TABLE `request_jadwal`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Request_jadwal_id_pengajar_fkey` (`id_pengajar`);

--
-- Indexes for table `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `rumusan`
--
ALTER TABLE `rumusan`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Rumusan_id_pengajar_fkey` (`id_pengajar`),
  ADD KEY `Rumusan_id_kelas_fkey` (`id_kelas`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `User_email_key` (`email`);

--
-- Indexes for table `_prisma_migrations`
--
ALTER TABLE `_prisma_migrations`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `histori_login`
--
ALTER TABLE `histori_login`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `jadwal`
--
ALTER TABLE `jadwal`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `jadwal_khusus`
--
ALTER TABLE `jadwal_khusus`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `jenis_pelatihan`
--
ALTER TABLE `jenis_pelatihan`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `master_agama`
--
ALTER TABLE `master_agama`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `master_jurusan`
--
ALTER TABLE `master_jurusan`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `master_kelas`
--
ALTER TABLE `master_kelas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `master_pangkat`
--
ALTER TABLE `master_pangkat`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `master_pelajaran`
--
ALTER TABLE `master_pelajaran`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `pengajar`
--
ALTER TABLE `pengajar`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `penjadwalan`
--
ALTER TABLE `penjadwalan`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `peserta`
--
ALTER TABLE `peserta`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `request_jadwal`
--
ALTER TABLE `request_jadwal`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `role`
--
ALTER TABLE `role`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `rumusan`
--
ALTER TABLE `rumusan`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `histori_login`
--
ALTER TABLE `histori_login`
  ADD CONSTRAINT `Histori_login_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `master_kelas`
--
ALTER TABLE `master_kelas`
  ADD CONSTRAINT `Master_kelas_id_jurusan_fkey` FOREIGN KEY (`id_jurusan`) REFERENCES `master_jurusan` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `master_pelajaran`
--
ALTER TABLE `master_pelajaran`
  ADD CONSTRAINT `Master_pelajaran_id_jurusan_fkey` FOREIGN KEY (`id_jurusan`) REFERENCES `master_jurusan` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `pengajar`
--
ALTER TABLE `pengajar`
  ADD CONSTRAINT `Pengajar_id_agama_fkey` FOREIGN KEY (`id_agama`) REFERENCES `master_agama` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `Pengajar_id_pangkat_fkey` FOREIGN KEY (`id_pangkat`) REFERENCES `master_pangkat` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `penjadwalan`
--
ALTER TABLE `penjadwalan`
  ADD CONSTRAINT `Penjadwalan_id_jadwal_fkey` FOREIGN KEY (`id_jadwal`) REFERENCES `jadwal` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `Penjadwalan_id_kelas_fkey` FOREIGN KEY (`id_kelas`) REFERENCES `master_kelas` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `Penjadwalan_id_mapel_fkey` FOREIGN KEY (`id_mapel`) REFERENCES `master_pelajaran` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `Penjadwalan_id_pengajar_fkey` FOREIGN KEY (`id_pengajar`) REFERENCES `pengajar` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `peserta`
--
ALTER TABLE `peserta`
  ADD CONSTRAINT `Peserta_id_agama_fkey` FOREIGN KEY (`id_agama`) REFERENCES `master_agama` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `Peserta_id_pangkat_fkey` FOREIGN KEY (`id_pangkat`) REFERENCES `master_pangkat` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `request_jadwal`
--
ALTER TABLE `request_jadwal`
  ADD CONSTRAINT `Request_jadwal_id_pengajar_fkey` FOREIGN KEY (`id_pengajar`) REFERENCES `pengajar` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `rumusan`
--
ALTER TABLE `rumusan`
  ADD CONSTRAINT `Rumusan_id_kelas_fkey` FOREIGN KEY (`id_kelas`) REFERENCES `master_kelas` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `Rumusan_id_pengajar_fkey` FOREIGN KEY (`id_pengajar`) REFERENCES `pengajar` (`id`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
