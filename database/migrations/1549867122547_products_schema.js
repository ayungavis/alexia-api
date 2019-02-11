'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductsSchema extends Schema {
  up () {
    this.create('products', (table) => {
      table.increments('id').notNullable()
      table.string('name').notNullable()
      table.string('shortname').notNullable()
      table.text('description').nullable()
      table.integer('category_id').unsigned().references('id').inTable('categories')
      table.double('price').notNullable()
      table.double('ratings').nullable()
      table.integer('rating_one').nullable()
      table.integer('rating_two').nullable()
      table.integer('rating_three').nullable()
      table.integer('rating_four').nullable()
      table.integer('rating_five').nullable()
      table.integer('reviews').nullable()
      table.boolean('new_item').nullable()
      table.boolean('collection').nullable()
      table.boolean('top_trends').nullable()
      table.boolean('in_wishlist').nullable()
      table.boolean('in_cart').nullable()
      table.integer('stocks').nullable()
      table.text('thumbnail').nullable()
      table.text('image_one').nullable()
      table.text('image_two').nullable()
      table.text('image_three').nullable()
      table.text('image_four').nullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('products')
  }
}

module.exports = ProductsSchema
