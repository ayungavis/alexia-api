'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Order extends Model {
	static get table() {
		return 'orders'
	}

	static get primaryKey() {
		return 'id'
	}

	products() {
		return this.belongsTo('App/Models/Product')
	}

	contact() {
		return this.belongsTo('App/Models/Contact')
	}

	shipping() {
		return this.belongsTo('App/Models/Shipping')
	}

	payment() {
		return this.belongsTo('App/Models/Payment')
	}
}

module.exports = Order
