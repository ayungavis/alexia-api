'use strict'

const City = use('App/Models/City')

class CityController {
	/**
	* Show a list of all promos.
	* GET promos
	*
	* @param {object} ctx
	* @param {Request} ctx.request
	* @param {Response} ctx.response
	* @param {View} ctx.view
	*/
	async index ({ request, response, view }) {
		let cities = await City.all()
		return response.json(cities)
	}

	/**
	* Render a form to be used for creating a new promo.
	* GET promos/create
	*
	* @param {object} ctx
	* @param {Request} ctx.request
	* @param {Response} ctx.response
	* @param {View} ctx.view
	*/
	async create ({ request, response, view }) {
	}

	/**
	* Create/save a new promo.
	* POST promos
	*
	* @param {object} ctx
	* @param {Request} ctx.request
	* @param {Response} ctx.response
	*/
	async store ({ request, response }) {
		const input = request.only([
			'name',
			'country_id'
		])
		const city = new City()

		city.name = input.name
		city.country_id = input.country_id

		await city.save()
		return response.status(201).json(city)
	}

	/**
	* Display a single promo.
	* GET promos/:id
	*
	* @param {object} ctx
	* @param {Request} ctx.request
	* @param {Response} ctx.response
	* @param {View} ctx.view
	*/
	async show ({ params, request, response, view }) {
		const city = await City.find(params.id)
		return response.json(city)
	}

	/**
	* Render a form to update an existing promo.
	* GET promos/:id/edit
	*
	* @param {object} ctx
	* @param {Request} ctx.request
	* @param {Response} ctx.response
	* @param {View} ctx.view
	*/
	async edit ({ params, request, response, view }) {
	}

	/**
	* Update promo details.
	* PUT or PATCH promos/:id
	*
	* @param {object} ctx
	* @param {Request} ctx.request
	* @param {Response} ctx.response
	*/
	async update ({ params, request, response }) {
		const input = request.only([
			'name',
			'country_id'
		])
		const city = await City.find(params.id)

		if (!city) {
			return response.status(404).json({data: 'Resource not found'})
		}

		city.name = input.name
		city.country_id = input.country_id

		await city.save()
		return response.status(200).json(city)
	}

	/**
	* Delete a promo with id.
	* DELETE promos/:id
	*
	* @param {object} ctx
	* @param {Request} ctx.request
	* @param {Response} ctx.response
	*/
	async destroy ({ params, request, response }) {
		const city = await City.find(params.id)

		if (!city) {
			return response.status(404).json({data: 'Resource not found'})
		}

		await city.delete()
		return response.status(204).json(null)
	}
}

module.exports = CityController
