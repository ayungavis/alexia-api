'use strict'

const Country = use('App/Models/Country')

class CountryController {
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
		let countries = await Country.all()
		return response.json(countries)
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
			'slug'
		])
		const country = new Country()

		country.name = input.name
		country.slug = input.slug

		await country.save()
		return response.status(201).json(country)
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
		const country = await Country.find(params.id)
		return response.json(country)
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
			'slug'
		])
		const country = await Country.find(params.id)

		if (!country) {
			return response.status(404).json({data: 'Resource not found'})
		}

		country.name = input.name
		country.slug = input.slug

		await country.save()
		return response.status(200).json(country)
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
		const country = await Country.find(params.id)

		if (!country) {
			return response.status(404).json({data: 'Resource not found'})
		}

		await country.delete()
		return response.status(204).json(null)
	}
}

module.exports = CountryController
