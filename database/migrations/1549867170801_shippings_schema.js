'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ShippingsSchema extends Schema {
  up () {
    this.create('shippings', (table) => {
      table.increments('id')
      table.string('name').notNullable()
      table.double('cost').notNullable()    
      table.timestamps()
    })
  }

  down () {
    this.drop('shippings')
  }
}

module.exports = ShippingsSchema
