import Head from 'next/head';
import dynamic from 'next/dynamic'

import { gql, useQuery } from '@apollo/client';
import { withRouter } from 'next/router'
import { useState } from 'react';

import { Container, Row, Col, Carousel } from 'react-bootstrap';
import { Header } from '../../components/layout/header';
import { Footer } from '../../components/layout/footer';
import { CenterSpinner } from '../../components/spinner';
import { BlogMarkdown } from '../../components/blog-markdown';

const GET_POST = gql`
  query($postId: String!, $secret: String!) {
    post(postId: $postId, secret: $secret) {
      id
      postId
      title
      shortDescription
      longDescription
      imageUrl
      body
      createdAt
      updatedAt
      images {
        imageUrl
      }
    }
  }
`;

const MyCarousel = ({ post }) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {(post.images || []).map(({ imageUrl }) => (
        <Carousel.Item key={imageUrl}>
          <img
            className="d-block w-100"
            src={imageUrl}
            alt="First slide"
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
} 

function Post({ router }) {
  const secret = localStorage.getItem('_password');

  const { loading, error, data } = useQuery(
    GET_POST,
    { variables: { postId:  router.query.id, secret } } 
  );

  const post = data && data.post;

  return (
    <div>
      <Head>
        <title>{"D&H"}</title>
        <link rel="icon" href="https://blog-production-image-bucket.s3-accelerate.amazonaws.com/logo-4.png" />
      </Head>

      <main>
        <Header />

        <Container>
          {loading && <CenterSpinner animation="grow" />}

          {!loading && post && (
            <div>
              <Row>
                <Col>
                  <MyCarousel post={post}></MyCarousel>
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: 10 }}>
                  <BlogMarkdown escapeHtml={false} source={post.body} />
                </Col>
              </Row>            
            </div>
          )}
        </Container>

        <Footer />
      </main>
    </div>
  )
}

export default dynamic(() => Promise.resolve(withRouter(Post)), {
  ssr: false
});