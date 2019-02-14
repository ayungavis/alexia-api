'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Payment extends Model {
	static get table() {
		return 'payments'
	}

	static get primaryKey() {
		return 'id'
	}

	order() {
		return this.hasMany('App/Models/Order')
	}

	user() {
		return this.belongsTo('App/Models/User')
	}
}

module.exports = Payment
