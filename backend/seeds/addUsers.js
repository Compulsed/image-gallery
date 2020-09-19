exports.seed = async function(knex) {
  await knex('post')
    .del()
  
  await knex('post')
    .insert(getPosts());
};

const POST_BODY = `\
# Our awesome day at X/YZ

This was super fun
`;

const getPosts = () => 
[
    {
        postId: '2020-09-01',
        title: 'PUBLISHED Title From DB - 1',
        shortDescription: 'Lorem Ipsum is simply dummy text of the printing',
        longDescription: 'Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing', 
        body: POST_BODY,
        imageUrl: 'https://blog-production-image-bucket.s3-accelerate.amazonaws.com/logo-4.png',
        createdAt: new Date().toISOString(),
        updatedAt: '2020-09-24T12:17:17.278Z',
        publishStatus: 'PUBLISHED',
        availableWithLink: true,
        images: JSON.stringify([
            {
                imageUrl: 'https://blog-production-image-bucket.s3-accelerate.amazonaws.com/logo-4.png?a=a'
            },
            {
                imageUrl: 'https://blog-production-image-bucket.s3-accelerate.amazonaws.com/logo-4.png?b=b'
            },
            {
                imageUrl: 'https://blog-production-image-bucket.s3-accelerate.amazonaws.com/logo-4.png?c=c'
            },
            {
                imageUrl: 'https://blog-production-image-bucket.s3-accelerate.amazonaws.com/logo-4.png?d=d'
            },                                    
        ])
    },
    {
        postId: '2020-09-02',
        title: 'DRAFT Title From DB - 2', 
        shortDescription: 'Lorem Ipsum is simply dummy text of the printing',
        longDescription: 'Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing', 
        body: POST_BODY,
        imageUrl: 'https://blog-production-image-bucket.s3-accelerate.amazonaws.com/logo-4.png',
        createdAt: '2020-09-23T12:17:17.278Z',
        updatedAt: null,
        publishStatus: 'DRAFT',
        availableWithLink: true,
        images: JSON.stringify([
            {
                imageUrl: 'https://blog-production-image-bucket.s3-accelerate.amazonaws.com/logo-4.png?a=a'
            },
            {
                imageUrl: 'https://blog-production-image-bucket.s3-accelerate.amazonaws.com/logo-4.png?b=b'
            },
            {
                imageUrl: 'https://blog-production-image-bucket.s3-accelerate.amazonaws.com/logo-4.png?c=c'
            },
            {
                imageUrl: 'https://blog-production-image-bucket.s3-accelerate.amazonaws.com/logo-4.png?d=d'
            },                                    
        ])
    },
    {
        postId: '2020-09-03',
        title: 'Title From DB - 3', 
        shortDescription: 'Lorem Ipsum is simply dummy text of the printing',
        longDescription: 'Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing', 
        body: POST_BODY,
        imageUrl: 'https://blog-production-image-bucket.s3-accelerate.amazonaws.com/logo-4.png',
        createdAt: '2020-09-23T12:17:17.278Z',
        updatedAt: '2020-09-24T12:17:17.278Z',
        publishStatus: 'DRAFT',
       
       availableWithLink: true, images: JSON.stringify([
            {
                imageUrl: 'https://blog-production-image-bucket.s3-accelerate.amazonaws.com/logo-4.png?a=a'
            },
            {
                imageUrl: 'https://blog-production-image-bucket.s3-accelerate.amazonaws.com/logo-4.png?b=b'
            },
            {
                imageUrl: 'https://blog-production-image-bucket.s3-accelerate.amazonaws.com/logo-4.png?c=c'
            },
            {
                imageUrl: 'https://blog-production-image-bucket.s3-accelerate.amazonaws.com/logo-4.png?d=d'
            },                                    
        ]        )
    },
    {
        postId: '2020-09-04',
        title: 'Title From DB - 4',
        shortDescription: 'Lorem Ipsum is simply dummy text of the printing',
        longDescription: 'Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing', 
        body: POST_BODY,
        imageUrl: 'https://blog-production-image-bucket.s3-accelerate.amazonaws.com/logo-4.png',
        createdAt: '2020-09-23T12:17:17.278Z',
        updatedAt: null,
        publishStatus: 'DRAFT',
        availableWithLink: true,
        images: JSON.stringify([
            {
                imageUrl: 'https://blog-production-image-bucket.s3-accelerate.amazonaws.com/logo-4.png?a=a'
            },
            {
                imageUrl: 'https://blog-production-image-bucket.s3-accelerate.amazonaws.com/logo-4.png?b=b'
            },
            {
                imageUrl: 'https://blog-production-image-bucket.s3-accelerate.amazonaws.com/logo-4.png?c=c'
            },
            {
                imageUrl: 'https://blog-production-image-bucket.s3-accelerate.amazonaws.com/logo-4.png?d=d'
            },                                    
        ])
    },
    {
        postId: '2020-09-05',
        title: 'Title From DB - 5', 
        shortDescription: 'Lorem Ipsum is simply dummy text of the printing',
        longDescription: 'Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing', 
        body: POST_BODY,
        imageUrl: 'https://blog-production-image-bucket.s3-accelerate.amazonaws.com/logo-4.png',
        createdAt: '2020-09-23T12:17:17.278Z',
        updatedAt: null,
        publishStatus: 'PUBLISHED',
       
       availableWithLink: true, images: JSON.stringify([
            {
                imageUrl: 'https://blog-production-image-bucket.s3-accelerate.amazonaws.com/logo-4.png?a=a'
            },
            {
                imageUrl: 'https://blog-production-image-bucket.s3-accelerate.amazonaws.com/logo-4.png?b=b'
            },
            {
                imageUrl: 'https://blog-production-image-bucket.s3-accelerate.amazonaws.com/logo-4.png?c=c'
            },
            {
                imageUrl: 'https://blog-production-image-bucket.s3-accelerate.amazonaws.com/logo-4.png?d=d'
            },                                    
        ]        )
    },
    {
        postId: '2020-09-06',
        title: 'Title From DB - 6', 
        shortDescription: 'Lorem Ipsum is simply dummy text of the printing',
        longDescription: 'Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing', 
        body: POST_BODY,
        imageUrl: 'https://blog-production-image-bucket.s3-accelerate.amazonaws.com/logo-4.png',
        createdAt: '2020-09-23T12:17:17.278Z',
        updatedAt: null,
        publishStatus: 'DRAFT',
        availableWithLink: true,
        images: JSON.stringify([
            {
                imageUrl: 'https://blog-production-image-bucket.s3-accelerate.amazonaws.com/logo-4.png?a=a'
            },
            {
                imageUrl: 'https://blog-production-image-bucket.s3-accelerate.amazonaws.com/logo-4.png?b=b'
            },
            {
                imageUrl: 'https://blog-production-image-bucket.s3-accelerate.amazonaws.com/logo-4.png?c=c'
            },
            {
                imageUrl: 'https://blog-production-image-bucket.s3-accelerate.amazonaws.com/logo-4.png?d=d'
            },                                    
        ])
    },
    {
        postId: '2020-09-07',
        title: 'Title From DB - 7',
        shortDescription: 'Lorem Ipsum is simply dummy text of the printing',
        longDescription: 'Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing', 
        body: POST_BODY,
        imageUrl: 'https://blog-production-image-bucket.s3-accelerate.amazonaws.com/logo-4.png',
        createdAt: '2020-09-23T12:17:17.278Z',
        updatedAt: null,
        publishStatus: 'DRAFT',
       
       availableWithLink: true, images: JSON.stringify([
            {
                imageUrl: 'https://blog-production-image-bucket.s3-accelerate.amazonaws.com/logo-4.png?a=a'
            },
            {
                imageUrl: 'https://blog-production-image-bucket.s3-accelerate.amazonaws.com/logo-4.png?b=b'
            },
            {
                imageUrl: 'https://blog-production-image-bucket.s3-accelerate.amazonaws.com/logo-4.png?c=c'
            },
            {
                imageUrl: 'https://blog-production-image-bucket.s3-accelerate.amazonaws.com/logo-4.png?d=d'
            },                                    
        ]        )
    },
    {
        postId: '2020-09-08',
        title: 'Title From DB - 8', 
        shortDescription: 'Lorem Ipsum is simply dummy text of the printing',
        longDescription: 'Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing', 
        body: POST_BODY,
        imageUrl: 'https://blog-production-image-bucket.s3-accelerate.amazonaws.com/logo-4.png',
        createdAt: '2020-09-23T12:17:17.278Z',
        updatedAt: null,
        publishStatus: 'DRAFT',
       
       availableWithLink: true, images: JSON.stringify([
            {
                imageUrl: 'https://blog-production-image-bucket.s3-accelerate.amazonaws.com/logo-4.png?a=a'
            },
            {
                imageUrl: 'https://blog-production-image-bucket.s3-accelerate.amazonaws.com/logo-4.png?b=b'
            },
            {
                imageUrl: 'https://blog-production-image-bucket.s3-accelerate.amazonaws.com/logo-4.png?c=c'
            },
            {
                imageUrl: 'https://blog-production-image-bucket.s3-accelerate.amazonaws.com/logo-4.png?d=d'
            },                                    
        ]        )
    },
    {
        postId: '2020-09-09',
        title: 'Title From DB - 9', 
        shortDescription: 'Lorem Ipsum is simply dummy text of the printing',
        longDescription: 'Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing', 
        body: POST_BODY,
        imageUrl: 'https://blog-production-image-bucket.s3-accelerate.amazonaws.com/logo-4.png',
        createdAt: '2020-09-23T12:17:17.278Z',
        updatedAt: null,
        publishStatus: 'DRAFT',
        availableWithLink: true,
        images: JSON.stringify([
            {
                imageUrl: 'https://blog-production-image-bucket.s3-accelerate.amazonaws.com/logo-4.png?a=a'
            },
            {
                imageUrl: 'https://blog-production-image-bucket.s3-accelerate.amazonaws.com/logo-4.png?b=b'
            },
            {
                imageUrl: 'https://blog-production-image-bucket.s3-accelerate.amazonaws.com/logo-4.png?c=c'
            },
            {
                imageUrl: 'https://blog-production-image-bucket.s3-accelerate.amazonaws.com/logo-4.png?d=d'
            },                                    
        ])
    }                                                            
];