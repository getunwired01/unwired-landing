import { useEffect } from 'react'
import { useRouter } from 'next/router'
import type { AppProps } from 'next/app'
import '../styles/globals.css'

// Extend the Window interface to include gtag
declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: Record<string, any>) => void;
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const GA_TRACKING_ID = 'G-6XJ57YM5VF';

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      window.gtag('config', `${GA_TRACKING_ID}`, {
        page_path: url,
      })
    }

    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return <Component {...pageProps} />
}

export default MyApp