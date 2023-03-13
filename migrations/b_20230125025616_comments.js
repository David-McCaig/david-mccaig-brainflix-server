/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function (knex) {
    return knex.schema.createTable('comments', (table) => {
      table.uuid('id').primary();
      table
        .uuid('videos_id')
        .references('videos.id')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      table.string('name');
      table.string('comment', 1000);
      table.integer('likes').defaultTo(0);
      table.timestamp('created_at').defaultTo(knex.fn.now());
    });
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function (knex) {
    return knex.schema.dropTable('comments');
  };
