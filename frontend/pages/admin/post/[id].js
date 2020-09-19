import Head from 'next/head';
import dynamic from 'next/dynamic'
import { gql, useQuery } from '@apollo/client';
import { withRouter } from 'next/router'
import Link from 'next/link'
import { DateTime } from 'luxon';
import { useState } from 'react';

import { Container, Row, Col, Button, Carousel } from 'react-bootstrap';
import { Header } from '../../../components/layout/header';
import { Footer } from '../../../components/layout/footer';
import { PostCard } from '../../../components/card';
import { CenterSpinner } from '../../../components/spinner';
import { BlogMarkdown } from '../../../components/blog-markdown';

const GET_POSTS = gql`
  query($postId: String!, $secret: String!) {
    editorPost(postId: $postId, secret: $secret) {
      id
      postId
      title
      shortDescription
      longDescription
      imageUrl
      body
      createdAt
      updatedAt
      publishStatus
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
    GET_POSTS,
    { 
      variables: { postId: router.query.id, secret },
      pollInterval: 2500
    }
  );

  const post = data && data.editorPost ;

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
                  <Link href="/admin" as={`/admin`} passHref >
                    <Button className="mr-2 mt-2" variant="light">{ '<- Memories' }</Button>
                  </Link>
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: 10 }}>
                  <h1 style={{ display: 'inline-block'}}>Edit Memory from {DateTime.fromJSDate(new Date(post.postId)).toFormat('DD')}</h1>
                  <Link href="/admin/post/[id]/edit" as={`/admin/post/${post.postId}/edit`} passHref >
                    <Button className="mt-2" style={{ float: 'right' }} variant="light">Edit</Button>
                  </Link>
                </Col>
              </Row>
          
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