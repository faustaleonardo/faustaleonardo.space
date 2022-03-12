import AOS from 'aos';
import 'aos/dist/aos.css';

import '../styles/index.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({ duration: 1500 });
    AOS.refresh();
  }, []);

  return (
    <ThemeProvider attribute="class" enableSystem={false} defaultTheme="dark">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
