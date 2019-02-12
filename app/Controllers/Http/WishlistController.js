'use strict'

const Wishlist = use('App/Models/Wishlist')

class WishlistController {
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
		let wishlists = await Wishlist.all()
		return response.json(wishlists)
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
			'product_id'
		])
		const wishlist = new Wishlist()

		wishlist.product_id = input.product_id

		await wishlist.save()
		return response.status(201).json(wishlist)
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
		const wishlist = await Wishlist.find(params.id)
		return reponse.json(wishlist)
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
			'product_id'
		])
		const wishlist = await Wishlist.find(parmas.id)

		if (!wishlist) {
			return response.status(404).json({data: 'Resource not found'})
		}

		wishlist.product_id = input.product_id

		await wishlist.save()
		return response.status(200).json(wishlist)
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
		const wishlist = await Wishlist.find(parmas.id)

		if (!wishlist) {
			return response.status(404).json({data: 'Resource not found'})
		}

		await wishlist.delete()
		return response.status(204).json(null)
	}
}

module.exports = WishlistController
