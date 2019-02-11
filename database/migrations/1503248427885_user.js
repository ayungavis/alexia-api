'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.increments('id')
      table.string('username', 80).notNullable().unique()
      table.string('name').nullable()
      table.string('email', 254).notNullable().unique()
      table.string('password', 60).notNullable()
      table.text('photo').nullable()
      table.text('cover_photo').nullable()
      table.string('description').nullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
