'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class OrdersSchema extends Schema {
  up () {
    this.create('orders', (table) => {
      table.increments('id')
      table.integer('product_id').unsigned().references('id').inTable('products')
      table.integer('qty').notNullable()
      table.double('price').notNullable()
      table.integer('address_id').unsigned().references('id').inTable('contacts')
      table.integer('shipping_id').unsigned().references('id').inTable('shippings')
      table.enu('payment_method', ['credit_card', 'bank_transfer'])
      table.integer('payment_id').unsigned().references('id').inTable('payments')
      table.boolean('has_done').nullable()
      table.datetime('has_done_date').nullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('orders')
  }
}

module.exports = OrdersSchema
