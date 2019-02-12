'use strict'

const Payment = use('App/Models/Payment')

class PaymentController {
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
		let payments = await Payment.all()
		return response.json(payments)
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
			'user_id',
			'type',
			'name',
			'number',
			'month',
			'year',
			'cvc'
		])
		const payment = new Payment()

		payment.user_id = input.user_id
		payment.type = input.type
		payment.name = input.name
		payment.number = input.number
		payment.month = input.month
		payment.year = input.year
		payment.cvc = input.cvc

		await payment.save()
		return response.status(201).json(payment)
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
		const payment = await Payment.find(params.id)
		return response.json(payment)
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
			'user_id',
			'type',
			'name',
			'number',
			'month',
			'year',
			'cvc'
		])
		const payment = await Payment.find(params.id)

		if (!payment) {
			return response.status(404).json({data: 'Resource not found'})
		}

		payment.user_id = input.user_id
		payment.type = input.type
		payment.name = input.name
		payment.number = input.number
		payment.month = input.month
		payment.year = input.year
		payment.cvc = input.cvc

		await payment.save()
		return response.status(200).json(payment)
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
		const payment = await Payment.find(params.id)

		if (!payment) {
			return response.status(404).json({data: 'Resource not found'})
		}

		await payment.delete()
		return response.status(204).json(null)
	}
}

module.exports = PaymentController
