-- CreateTable
CREATE TABLE `Histori_login` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `last_login` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Jadwal` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `hari` VARCHAR(191) NOT NULL,
    `jumlah_sesi` INTEGER NOT NULL,
    `lama_sesi` INTEGER NOT NULL,
    `jam_mulai` TIME NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Jadwal_khusus` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `kelas` VARCHAR(20) NOT NULL,
    `keterangan` VARCHAR(191) NOT NULL,
    `sesi` VARCHAR(20) NOT NULL,
    `hari` VARCHAR(20) NOT NULL,
    `durasi` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Master_agama` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nama_agama` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Jenis_pelatihan` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nama_pelatihan` VARCHAR(191) NULL,
    `kode_pelatihan` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Master_jurusan` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nama_jurusan` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Master_kelas` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nama_kelas` VARCHAR(191) NOT NULL,
    `kelas` VARCHAR(20) NOT NULL,
    `id_jurusan` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Master_pangkat` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nama_pangkat` VARCHAR(191) NULL,
    `nama_golongan` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Master_pelajaran` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `kode_mapel` VARCHAR(191) NOT NULL,
    `nama_mapel` VARCHAR(191) NOT NULL,
    `kelompok_mapel` VARCHAR(191) NOT NULL,
    `kelas` VARCHAR(191) NOT NULL,
    `beban_jam` INTEGER NOT NULL,
    `id_jurusan` INTEGER NOT NULL,
    `cost` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Role` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nama_role` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Pengajar` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nama_pengajar` VARCHAR(191) NOT NULL,
    `jenis_kelamin` VARCHAR(191) NOT NULL,
    `nik` VARCHAR(16) NOT NULL,
    `ttl` DATETIME(3) NOT NULL,
    `nama_ibu` VARCHAR(191) NOT NULL,
    `nip` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `id_pangkat` INTEGER NOT NULL,
    `jabatan` VARCHAR(191) NOT NULL,
    `unit_kerja` VARCHAR(255) NOT NULL,
    `nama_instansi` VARCHAR(255) NOT NULL,
    `alamat_instansi` TEXT NOT NULL,
    `no_telepon_instansi` VARCHAR(20) NOT NULL,
    `id_agama` INTEGER NOT NULL,
    `status_kawin` ENUM('belumKawin', 'sudahKawin', 'ceraiHidup', 'ceraiMati') NOT NULL,
    `hobi` TEXT NOT NULL,
    `alamat` TEXT NOT NULL,
    `foto` TEXT NULL,
    `pendidikan_sd` VARCHAR(191) NOT NULL,
    `pendidikan_smp` VARCHAR(191) NOT NULL,
    `pendidikan_sma` VARCHAR(191) NOT NULL,
    `pendidikan_d3` VARCHAR(191) NOT NULL,
    `pendidikan_s1` VARCHAR(191) NOT NULL,
    `pendidikan_s2` VARCHAR(191) NOT NULL,
    `pendidikan_s3` VARCHAR(191) NOT NULL,
    `status_kepegawaian` ENUM('CPNS', 'PEJABAT_STRUKTURAL', 'TENAGA_AHLI') NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Pengajar_nip_key`(`nip`),
    UNIQUE INDEX `Pengajar_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Peserta` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nama_peserta` VARCHAR(191) NOT NULL,
    `jenis_kelamin` VARCHAR(191) NOT NULL,
    `nik` VARCHAR(16) NOT NULL,
    `ttl` DATETIME(3) NOT NULL,
    `nama_ibu` VARCHAR(191) NOT NULL,
    `nip` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `id_pangkat` INTEGER NOT NULL,
    `jabatan` VARCHAR(191) NOT NULL,
    `unit_kerja` VARCHAR(255) NOT NULL,
    `nama_instansi` VARCHAR(255) NOT NULL,
    `alamat_instansi` TEXT NOT NULL,
    `no_telepon_instansi` VARCHAR(20) NOT NULL,
    `id_agama` INTEGER NOT NULL,
    `status_kawin` ENUM('belumKawin', 'sudahKawin', 'ceraiHidup', 'ceraiMati') NOT NULL,
    `hobi` TEXT NOT NULL,
    `alamat` TEXT NOT NULL,
    `foto` TEXT NULL,
    `pendidikan_sd` VARCHAR(191) NOT NULL,
    `pendidikan_smp` VARCHAR(191) NOT NULL,
    `pendidikan_sma` VARCHAR(191) NOT NULL,
    `pendidikan_d3` VARCHAR(191) NOT NULL,
    `pendidikan_s1` VARCHAR(191) NOT NULL,
    `pendidikan_s2` VARCHAR(191) NOT NULL,
    `pendidikan_s3` VARCHAR(191) NOT NULL,
    `status_kepegawaian` ENUM('CPNS', 'PEJABAT_STRUKTURAL', 'TENAGA_AHLI') NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Peserta_nip_key`(`nip`),
    UNIQUE INDEX `Peserta_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Penjadwalan` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_kelas` INTEGER NOT NULL,
    `id_pengajar` INTEGER NOT NULL,
    `id_mapel` INTEGER NOT NULL,
    `hari` VARCHAR(191) NOT NULL,
    `sesi` INTEGER NOT NULL,
    `id_jadwal` INTEGER NOT NULL,
    `keterangan` VARCHAR(191) NOT NULL,
    `jam_mulai` TIME NOT NULL,
    `jam_selesai` TIME NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Request_jadwal` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_pengajar` INTEGER NOT NULL,
    `hari` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Rumusan` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_pengajar` INTEGER NOT NULL,
    `hari_request` VARCHAR(255) NOT NULL,
    `id_kelas` INTEGER NOT NULL,
    `total` INTEGER NOT NULL,
    `beban_kerja` INTEGER NOT NULL,
    `pendapatan` INTEGER NOT NULL,
    `hasil_rumusan` DOUBLE NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nama` VARCHAR(191) NULL,
    `nip` INTEGER NOT NULL,
    `id_pengajar` INTEGER NULL,
    `id_peserta` INTEGER NULL,
    `password` VARCHAR(191) NULL,
    `email` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Histori_login` ADD CONSTRAINT `Histori_login_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Master_kelas` ADD CONSTRAINT `Master_kelas_id_jurusan_fkey` FOREIGN KEY (`id_jurusan`) REFERENCES `Master_jurusan`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Master_pelajaran` ADD CONSTRAINT `Master_pelajaran_id_jurusan_fkey` FOREIGN KEY (`id_jurusan`) REFERENCES `Master_jurusan`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Pengajar` ADD CONSTRAINT `Pengajar_id_pangkat_fkey` FOREIGN KEY (`id_pangkat`) REFERENCES `Master_pangkat`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Pengajar` ADD CONSTRAINT `Pengajar_id_agama_fkey` FOREIGN KEY (`id_agama`) REFERENCES `Master_agama`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Peserta` ADD CONSTRAINT `Peserta_id_pangkat_fkey` FOREIGN KEY (`id_pangkat`) REFERENCES `Master_pangkat`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Peserta` ADD CONSTRAINT `Peserta_id_agama_fkey` FOREIGN KEY (`id_agama`) REFERENCES `Master_agama`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Penjadwalan` ADD CONSTRAINT `Penjadwalan_id_kelas_fkey` FOREIGN KEY (`id_kelas`) REFERENCES `Master_kelas`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Penjadwalan` ADD CONSTRAINT `Penjadwalan_id_pengajar_fkey` FOREIGN KEY (`id_pengajar`) REFERENCES `Pengajar`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Penjadwalan` ADD CONSTRAINT `Penjadwalan_id_mapel_fkey` FOREIGN KEY (`id_mapel`) REFERENCES `Master_pelajaran`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Penjadwalan` ADD CONSTRAINT `Penjadwalan_id_jadwal_fkey` FOREIGN KEY (`id_jadwal`) REFERENCES `Jadwal`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Request_jadwal` ADD CONSTRAINT `Request_jadwal_id_pengajar_fkey` FOREIGN KEY (`id_pengajar`) REFERENCES `Pengajar`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Rumusan` ADD CONSTRAINT `Rumusan_id_pengajar_fkey` FOREIGN KEY (`id_pengajar`) REFERENCES `Pengajar`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Rumusan` ADD CONSTRAINT `Rumusan_id_kelas_fkey` FOREIGN KEY (`id_kelas`) REFERENCES `Master_kelas`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
