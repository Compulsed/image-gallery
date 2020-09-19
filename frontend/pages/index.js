import Head from 'next/head';
import { gql, useQuery } from '@apollo/client';
import Link from 'next/link'

import { Container, Badge, Row, Col  } from 'react-bootstrap';
import { useRouter } from 'next/router'

import { Header } from '../components/layout/header';
import { Footer } from '../components/layout/footer';

export default function Home() {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>{"D&H"}</title>
        <link rel="icon" href="https://blog-production-image-bucket.s3-accelerate.amazonaws.com/logo-4.png" />
      </Head>

      <main>
        <Header />

        <div style={{  display: 'flex', minHeight: '80vh', alignItems: 'center', justifyContent: 'center' }}>
          <Link href="/post" as='/post'>
            <div style={{ width: '600px', border: '1px solid #e3e3e3', padding: '20px' }}>
              <h1 style={{ fontSize: '72px' }} className="mb-5">Happy 3 months 🎉</h1>
              <p style={{ fontSize: '24px' }}> Today is the day I want to finally spend with you building out our website together, putting all the amazing pictures that we have taken together all in the one place</p>

              
                <p>Click this card and lets go! </p>
            </div>
          </Link>
        </div>

        <Footer />
      </main>
    </div>
  )
}