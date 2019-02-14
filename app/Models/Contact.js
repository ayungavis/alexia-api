'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Contact extends Model {
	static get table() {
		return 'contacts'
	}

	static get primaryKey() {
		return 'id'
	}

	user() {
		return this.belongsTo('App/Models/User')
	}

	city() {
		return this.belongsTo('App/Models/City')
	}

	country() {
		return this.belongsTo('App/Models/Country')
	}

	order() {
		return this.hasMany('App/Models/Order')
	}
}

module.exports = Contact
