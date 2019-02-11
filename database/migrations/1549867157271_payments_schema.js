'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PaymentsSchema extends Schema {
  up () {
    this.create('payments', (table) => {
      table.increments('id')
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.enu('type', ['credit_card', 'bank'])
      table.string('name').nullable()
      table.string('number').notNullable()
      table.integer('month').nullable()
      table.integer('year').nullable()
      table.integer('cvc').nullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('payments')
  }
}

module.exports = PaymentsSchema
