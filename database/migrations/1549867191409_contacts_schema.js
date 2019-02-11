'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ContactsSchema extends Schema {
  up () {
    this.create('contacts', (table) => {
      table.increments('id')
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.string('address').notNullable()
      table.integer('city_id').unsigned().references('id').inTable('cities')
      table.integer('country_id').unsigned().references('id').inTable('countries')
      table.integer('zip_code').notNullable()
      table.enu('type', ['main', 'additional'])
      table.timestamps()
    })
  }

  down () {
    this.drop('contacts')
  }
}

module.exports = ContactsSchema
