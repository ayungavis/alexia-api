'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PromoSchema extends Schema {
  up () {
    this.create('promos', (table) => {
      table.increments()
      table.string('title').nullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('promos')
  }
}

module.exports = PromoSchema
