import Router from 'next/router'
import { useEffect } from 'react';

import { Container } from 'next/app';
import { DefaultSeo } from 'next-seo';
import { ThemeProvider } from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/styles.css'
import 'react-calendar/dist/Calendar.css';
import '@brainhubeu/react-carousel/lib/style.css';

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

import { withApollo } from '../libs/with-apollo';

const App = ({ Component, pageProps }) => {
  useEffect(() => {
    const handleRouteChange = (url) => {}
    Router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [])

  return (
    <Container>
      <ThemeProvider theme={theme}>
        <DefaultSeo
            title='Image Gallery'
            description='Image Gallery'      
            openGraph={{
              title: 'Image Gallery',
              description: 'Image Gallery',
              type: 'website',
              locale: 'en_IE',
              url: 'https://dalejsalter.com/',
              site_name: 'D&H',
              images: [
                {
                  url: 'blog-production-image-bucket.s3-accelerate.amazonaws.com/logo-4.png',
                  width: 512,
                  height: 512,
                  alt: 'D&H Site Logo',
                },
              ]
            }}
            twitter={{
              handle: '@handle',
              site: '@site',
              cardType: 'summary_large_image',
            }}
          />
        <Component {...pageProps} />
      </ThemeProvider>
    </Container>

  );
}

export default withApollo({ ssr: true })(App);