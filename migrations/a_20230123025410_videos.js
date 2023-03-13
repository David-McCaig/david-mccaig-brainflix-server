/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function (knex) {
    return knex.schema.createTable('videos', (table) => {
      table.uuid('id').primary();
      table.string('title');  
      table.string('channel');    
      table.string('image');
      table.string('description', 1000);
      table.integer('views').defaultTo(0);
      table.integer('likes').defaultTo(0);
      table.string('duration').defaultTo(0);
      table.timestamp('created_at').defaultTo(knex.fn.now())
    });
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function (knex) {
    return knex.schema.dropTable('videos');
  };
