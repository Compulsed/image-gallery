exports.up = async function(knex) {
    console.log('Init post');

    await knex.schema.dropTableIfExists('post');

    await knex.schema.createTable('post', table => {
        table
            .text('postId')
            .primary();

        table
          .text('title');

        table
          .text('body');
        
        table
          .text('shortDescription');            
        
        table
          .text('longDescription');
        
        table
          .text('imageUrl');
        
        table
          .timestamp('createdAt');
        
        table
          .timestamp('updatedAt');

        table
          .string('publishStatus');

        table
          .boolean('availableWithLink');

        table
          .jsonb('images');          
    });
  };
  
  exports.down = async function(knex) {
    await knex.schema.dropTable('post');
  };