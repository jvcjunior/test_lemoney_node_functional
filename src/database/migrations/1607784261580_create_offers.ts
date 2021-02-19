import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('offers', table => {
    table.increments('id').primary()
    table.string('advertiser_name').notNullable().unique()
    table.string('url').notNullable()
    table.string('description').notNullable()
    table.dateTime('starts_at').notNullable().defaultTo(knex.fn.now())
    table.dateTime('ends_at').nullable()
    table.string('premium').nullable()
    table.dateTime('created_at').notNullable().defaultTo(knex.fn.now())
    table.dateTime('updated_at').nullable()
  })

}

export async function down(knex: Knex) {
  return knex.schema.dropTable('offers')
}