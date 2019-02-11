'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CountriesSchema extends Schema {
  up () {
    this.create('countries', (table) => {
      table.increments('id')
      table.string('name').notNullable()
      table.string('slug').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('countries')
  }
}

module.exports = CountriesSchema
