'use strict'

const Order = use('App/Models/Order')

class OrderController {
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
		let orders = await Order.query().with('products').fetch()
		return response.json(orders)
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
			'product_id',
			'qty',
			'price',
			// 'address_id',
			// 'shipping_id',
			// 'payment_method',
			// 'payment_id',
			// 'has_done',
			// 'has_done_at'
		])
		const order = new Order()

		order.product_id = input.product_id
		order.qty = input.qty
		order.price = input.price
		// order.address_id = input.address_id
		// order.shipping_id = input.shipping_id
		// order.payment_method = input.payment_method
		// order.payment_id = input.payment_id
		// order.has_done = input.has_done
		// order.has_done_at = input.has_done_at

		await order.save()
		return response.status(201).json(order)
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
		const order = await Order.find(params.id)
		return response.json(order)
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
			// 'product_id',
			'qty',
			// 'price',
			// 'address_id',
			// 'shipping_id',
			// 'payment_method',
			// 'payment_id',
			// 'has_done',
			// 'has_done_at'
		])
		const order = await Order.find(params.id)

		if (!order) {
			return response.status(404).json({data: 'Resource not found'})
		}

		// order.product_id = input.product_id
		order.qty = input.qty
		// order.price = input.price
		// order.address_id = input.address_id
		// order.shipping_id = input.shipping_id
		// order.payment_method = input.payment_method
		// order.payment_id = input.payment_id
		// order.has_done = input.has_done
		// order.has_done_at = input.has_done_at

		await order.save()
		return response.status(200).json(order)
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
		const order = await Order.find(params.id)

		if (!order) {
			return response.status(404).json({data: 'Resource not found'})
		}

		await order.delete()
		return response.status(204).json(null)
	}
}

module.exports = OrderController
