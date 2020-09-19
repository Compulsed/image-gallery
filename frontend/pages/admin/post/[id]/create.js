import Head from 'next/head';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic'
import { withRouter } from 'next/router'
import { gql, useMutation } from '@apollo/client';
import { DateTime } from 'luxon';
import Link from 'next/link'

import { Button, Row, Col, Form, Container, Spinner } from 'react-bootstrap';

import { Header } from '../../../../components/layout/header';
import { Footer } from '../../../../components/layout/footer';

const CREATE_POST = gql`
    mutation ($postInput: PostInput!, $secret: String!) {
        createPost (postInput: $postInput, secret: $secret) {
            status
            post {
                id
                postId
                title
                shortDescription
                longDescription
                imageUrl
                body
                createdAt
                updatedAt
            }
            errorMessage
        }
    }
`;

const defaultBodyString = `\
# Information about this day

Insert something special about this day
`;


const defaultFormValues = {
    title: 'Title to describe the day',
    imageUrl: 'https://blog-production-image-bucket.s3-accelerate.amazonaws.com/cf720254-751d-432c-bb75-5928594c7bbb-D2099DD1-EEB3-4A55-8D2C-896254DA249C.png',
    shortDescription: 'A short summary of the day',
    longDescription: 'A longer summary of the day',
    body: defaultBodyString
}

const PostForm = ({ postId }) => {
    const router = useRouter();
    const [createPost, { data, loading }] = useMutation(CREATE_POST);

    // Handle Success
    if (data && data.createPost && data.createPost.status) {
        router.push(`/admin/post/[id]`, `/admin/post/${data.createPost.post.postId}`);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();

        const form = event.currentTarget;

        const postInput = {
            postId,
            title: form.elements.title.value,
            imageUrl: form.elements.imageUrl.value,
            shortDescription: form.elements.shortDescription.value,
            longDescription: form.elements.longDescription.value,
            body: form.elements.body.value
        };

        const secret = localStorage.getItem('_password');

        createPost({ variables: { postInput, secret } });
    };

    return (
        <Form className="mb-5" onSubmit={handleSubmit}>
            <Form.Group controlId="title">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text"  defaultValue={defaultFormValues.title} />
            </Form.Group>           

            <Form.Group controlId="imageUrl">
                <Form.Label>Image URL</Form.Label>
                <Form.Control type="text"  defaultValue={defaultFormValues.imageUrl} />
            </Form.Group>

            <Form.Group controlId="shortDescription">
                <Form.Label>Short Description</Form.Label>
                <Form.Control as="textarea" rows="1"  defaultValue={defaultFormValues.shortDescription} />
            </Form.Group>

            <Form.Group controlId="longDescription">
                <Form.Label>Long Description</Form.Label>
                <Form.Control as="textarea" rows="3"  defaultValue={defaultFormValues.longDescription}  />
            </Form.Group>

            <hr className="mt-5 mb-5"></hr>

            <Form.Group controlId="body">
                <Form.Label>Body</Form.Label>
                <Form.Control as="textarea" rows="20" defaultValue={defaultFormValues.body}/>
            </Form.Group>                

            <hr className="mt-5 mb-5"></hr>

            <div>
                <Button variant="dark" type="submit">
                    { !loading
                        ? "Create"
                        : <Spinner size="sm" animation="border" variant="light" />}
                </Button>
                <span className="ml-2">
                  { data?.createPost?.status === false && data?.createPost?.errorMessage }
                </span>
            </div>
                                
        </Form>
    )
}

function Post({ router }) {
  const postId = router.query.id;

  return (
    <div>
      <Head>
        <title>{"D&H"}</title>
        <link rel="icon" href="https://blog-production-image-bucket.s3-accelerate.amazonaws.com/logo-4.png" />
      </Head>

      <main>
        <Header />

        <Container>
            <Row>
                <Col>
                  <Link href="/admin" as={`/admin`} passHref >
                    <Button className="mr-2 mt-2" variant="light">{ '<- Memories' }</Button>
                  </Link>
                </Col>
              </Row>

            <Row>
                <Col>
                    <h1 style={{ display: 'inline-block'}} className="mb-5">New Memory on {DateTime.fromJSDate(new Date(postId)).toFormat('DD')}</h1>
                </Col>
            </Row>

            <PostForm postId={postId} />
        </Container>

        <Footer />
      </main>
    </div>
  )
}

export default dynamic(() => Promise.resolve(withRouter(Post)), {
    ssr: false
  });