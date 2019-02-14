'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Shipping extends Model {
	static get table() {
		return 'shippings'
	}

	static get primaryKey() {
		return 'id'
	}

	order() {
		return this.hasMany('App/Models/Order')
	}
}

module.exports = Shipping
