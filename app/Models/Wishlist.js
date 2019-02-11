'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Wishlist extends Model {
	static get table() {
		return 'wishlists'
	}

	static get primaryKey() {
		return 'id'
	}
}

module.exports = Wishlist
