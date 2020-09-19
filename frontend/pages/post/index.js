import Head from 'next/head';
import { gql, useQuery } from '@apollo/client';

import { Container, Badge, Row, Col  } from 'react-bootstrap';
import Calendar from 'react-calendar';
import styled from 'styled-components'
import lodash from 'lodash';
import { DateTime } from 'luxon';
import { useRouter } from 'next/router'

import { Header } from '../../components/layout/header';
import { Footer } from '../../components/layout/footer';
import { CenterSpinner } from '../../components/spinner';

const GET_POSTS = gql`
  query {
    posts {
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
    }
  }
`;

const StyledCalendar = styled(Calendar)`
  width: 100%;

  .react-calendar__tile {
    color: black;
    height: 100px;
  }

  .react-calendar__tile--now  {
    color: white !important;
  }

  .badge {
    margin-left: 5px;
  }
`

const getDateByPostId = date =>
  DateTime.fromJSDate(new Date(date)).toFormat('y-MM-dd')

const getMonthByPostId = date =>
  DateTime.fromJSDate(new Date(date)).toFormat('y-MM')

const getYearByPostId = date =>
  DateTime.fromJSDate(new Date(date)).toFormat('y')

export default function Home() {
  const router = useRouter();

  const { loading, error, data } = useQuery(GET_POSTS);

  const postsByDate = lodash.groupBy(data && data.posts, 'postId');
  
  const postsByMonth = lodash.groupBy(
    data && data.editorPosts,
    post => `${post.postId.split('-')[0]}-${post.postId.split('-')[1]}`
  );

  const postsByYear = lodash.groupBy(
    data && data.editorPosts,
    post => `${post.postId.split('-')[0]}`
  );

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
            {
              !loading && <StyledCalendar
                onChange={(date, event) => {
                    if (postsByDate[getDateByPostId(date)]) {
                      router.push({
                        pathname: `/post/${getDateByPostId(date)}`,
                      })
                    } 
                  }
                }
                value={new Date()}
                // tileDisabled
                tileClassName={({ activeStartDate, date, view }) => view === 'month' && date.getDay() === 6 ? 'saturday' : null}
                tileContent={({ activeStartDate, date, view }) => {                 
                  const postInDate = postsByDate[getDateByPostId(date)];
                  const postInMonth = postsByMonth[getMonthByPostId(date)];
                  const postInYear = postsByYear[getYearByPostId(date)];

                  switch(view) {
                    case 'decade': {
                      return postInYear && <Badge variant="primary">{postInYear.length}</Badge>
                    }
                    case 'year': {
                      return postInMonth && <Badge variant="primary">{postInMonth.length}</Badge>
                    }
                    case 'month': {
                      return postInDate && (<> 
                          <div style={{ padding: '5px' }}>
                            <img src={postInDate[0].imageUrl} style={{ width: '30px' }}></img>
                          </div>
                          <p style={{ fontWeight: '600', fontSize: '14px' }}>{ postInDate[0].title.slice(0, 15) }</p>
                        </>)
                    }
                    default:
                      return null;
                  }
                }}
              />
            }
        </Container>

        <Footer />
      </main>
    </div>
  )
}