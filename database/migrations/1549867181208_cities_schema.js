'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CitiesSchema extends Schema {
  up () {
    this.create('cities', (table) => {
      table.increments('id')
      table.string('name').notNullable()
      table.integer('country_id').unsigned().references('id').inTable('countries')
      table.timestamps()

    })
  }

  down () {
    this.drop('cities')
  }
}

module.exports = CitiesSchema
