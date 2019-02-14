'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Country extends Model {
	static get table() {
		return 'countries'
	}

	static get primaryKey() {
		return 'id'
	}

	contact() {
		return this.hasMany('App/Models/Contact')
	}

	city() {
		return this.hasMany('App/Models/City')
	}
}

module.exports = Country
