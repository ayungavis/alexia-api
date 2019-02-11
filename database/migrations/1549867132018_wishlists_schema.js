'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class WishlistsSchema extends Schema {
  up () {
    this.create('wishlists', (table) => {
      table.increments('id')
      table.integer('product_id').unsigned().references('id').inTable('products')
      table.timestamps()
    })
  }

  down () {
    this.drop('wishlists')
  }
}

module.exports = WishlistsSchema
