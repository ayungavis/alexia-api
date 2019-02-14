'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class City extends Model {
	static get table() {
		return 'cities'
	}

	static get primaryKey() {
		return 'id'
	}

	country() {
		return this.belongsTo('App/Models/Country')
	}

	contact() {
		return this.hasMany('App/Models/Contact')
	}
}

module.exports = City
