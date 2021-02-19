import Knex from "knex"
// const data = require('./responsibility.json')
const table = 'rolePermissions'

exports.seed = async function(knex: Knex) {
  await knex(table).del()
  return knex(table).insert([{
    roleId: 1,
    code: 'get_offers',
    created_at: new Date(),
    updated_at: new Date(),
  }, {
    roleId: 1,
    code: 'get_offer',
    created_at: new Date(),
    updated_at: new Date(),
  }, {
    roleId: 1,
    code: 'post_offer',
    created_at: new Date(),
    updated_at: new Date(),
  },{
    roleId: 1,
    code: 'put_offer',
    created_at: new Date(),
    updated_at: new Date(),
  }, {
    roleId: 1,
    code: 'delete_offer',
    created_at: new Date(),
    updated_at: new Date(),
  }])
}