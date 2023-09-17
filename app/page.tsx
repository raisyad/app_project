"use client"
import createEmotionCache from '@/config/createEmotionCache';
import { AppProps } from 'next/app';
import { CacheProvider, EmotionCache } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import Image from 'next/image'
import BerandaPage from './Beranda/page';
import DataDiri from './DataDiri/page';
import EditDataDiri from './DataDiri/Edit/page';
import Pelatihan from './pelatihan/page';
import KotakMasuk from './kotakmasuk/page';
import JadwalPage from './jadwal/page';
import RegisterPage from './Daftar/page';

const clientSideEmotionCache = createEmotionCache();

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function Home(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      {/* <CssBaseline /> */}
      {/* Home */}
      {/* <Content /> */}
      {/* Home */}

      {/* Daftar */}
      <RegisterPage />
      {/* Daftar */}

      {/* Beranda */}
      {/* <BerandaPage /> */}
      {/* Beranda */}

      {/* Data Diri */}
      {/* <DataDiri /> */}
      {/* Data Diri */}

      {/* Edit Data Diri */}
      {/* <EditDataDiri /> */}
      {/* Edit Data Diri */}

      {/* Pelatihan */}
      {/* <Pelatihan /> */}
      {/* Pelatihan */}

      {/* Kotak Masuk */}
      {/* <KotakMasuk /> */}
      {/* Kotak Masuk */}

      {/* Jadwal */}
      {/* <JadwalPage /> */}
      {/* Jadwal */}
      
    </CacheProvider>
  )
}
