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
}

module.exports = Country
