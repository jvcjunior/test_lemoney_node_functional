import Knex from "knex"
const table = 'offers'

exports.seed = async function(knex: Knex) {
  await knex(table).del()
  return knex(table).insert([{
    id: 1,
    advertiser_name: 'Magazine Luiza',
    url: "magazine.com",
    description: "Offer from magazine",
    starts_at: new Date(),
    created_at: new Date(),
    updated_at: new Date(),
  }, {
    id: 2,
    advertiser_name: 'Magazine Luiza II',
    url: "magazine.com",
    description: "Offer from magazine",
    starts_at: new Date(),
    created_at: new Date(),
    updated_at: new Date(),
  }])
}