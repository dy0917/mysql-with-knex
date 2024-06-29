/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('relationships', (table) => {
    table.increments('id').notNullable().primary();
    table.integer('EmployeeId').unsigned().nullable();
    table.integer('EmployerId').unsigned().nullable();
    table.foreign('EmployeeId').references('users.id').onDelete('CASCADE');
    table.foreign('EmployerId').references('users.id').onDelete('CASCADE');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('relationships');
};
