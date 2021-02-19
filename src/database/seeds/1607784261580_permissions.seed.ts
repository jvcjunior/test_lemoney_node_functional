import Knex from "knex"
const table = 'permissions'

module.exports.seed = async function(knex: Knex) {
  await knex(table).del()
  return knex(table).insert([{
    code: 'get_offers',
    description: 'Permission to get offers',
    created_at: new Date(),
    updated_at: new Date(),
  }, {
    code: 'get_offer',
    description: 'Permission to get one offer',
    created_at: new Date(),
    updated_at: new Date(),
  }, {
    code: 'post_offer',
    description: 'Permission to create offer',
    created_at: new Date(),
    updated_at: new Date(),
  },{
    code: 'put_offer',
    description: 'Permission to edit offer',
    created_at: new Date(),
    updated_at: new Date(),
  }, {
    code: 'delete_offer',
    description: 'Permission to delete offer',
    created_at: new Date(),
    updated_at: new Date(),
  }])
}