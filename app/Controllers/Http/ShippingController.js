'use strict'

const Shipping = use('App/Models/Shipping')

class ShippingController {
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
		let shippings = await Shipping.all()
		return response.json(shippings)
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
			'cost'
		])
		const shipping = new Shipping()

		shipping.name = input.name
		shipping.cost = input.cost

		await shipping.save()
		return response.status(201).json(shipping)
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
		const shipping = await Shipping.find(params.id)
		return response.json(shipping)
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
			'cost'
		])
		const shipping = await Shipping.find(params.id)

		if (!shipping) {
			return response.status(404).json({data: 'Resource not found'})
		}

		shipping.name = input.name
		shipping.cost = input.cost

		await shipping.save()
		return response.status(200).json(shipping)
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
		const shipping = await Shipping.find(params.id)

		if (!shipping) {
			return response.status(404).json({data: 'Resource not found'})
		}

		await shipping.delete()
		return response.status(204).json(null)
	}
}

module.exports = ShippingController
