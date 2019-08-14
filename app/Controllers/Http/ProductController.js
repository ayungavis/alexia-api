'use strict'

const Product = use('App/Models/Product')
const Database = use('Database')
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with promos
 */
class ProductController {
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
		let products = await Product.all()
		return response.json(products)
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
			'shortname',
			'description',
			'category_id',
			'price',
			'ratings',
			'rating_one',
			'rating_two',
			'rating_three',
			'rating_four',
			'rating_five',
			'reviews',
			'new_item',
			'collection',
			'top_trends',
			'in_wishlist',
			'in_cart',
			'stocks',
			'thumbnail',
			'image_one',
			'image_two',
			'image_three',
			'image_four'
		]);
		const product = new Product()

		product.name = input.name
		product.shortname = input.shortname
		product.description = input.description
		product.category_id = input.category_id
		product.price = input.price
		product.ratings = input.ratings
		product.rating_one = input.rating_one
		product.rating_two = input.rating_two
		product.rating_three = input.rating_three
		product.rating_four = input.rating_four
		product.rating_five = input.rating_five
		product.reviews = input.reviews
		product.new_item = input.new_item
		product.collection = input.collection
		product.top_trends = input.top_trends
		product.in_wishlist = input.in_wishlist
		product.in_cart = input.in_cart
		product.stocks = input.stocks
		product.thumbnail = input.thumbnail
		product.image_one = input.image_one
		product.image_two = input.image_two
		product.image_three = input.image_three
		product.image_four = input.image_four

		await product.save()
		return response.status(201).json(product)
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
		const product = await Product.find(params.id)
		return response.json(product)
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
			'shortname',
			'description',
			'category_id',
			'price',
			'ratings',
			'rating_one',
			'rating_two',
			'rating_three',
			'rating_four',
			'rating_five',
			'reviews',
			'new_item',
			'collection',
			'top_trends',
			'in_wishlist',
			'in_cart',
			'stocks',
			'thumbnail',
			'image_one',
			'image_two',
			'image_three',
			'image_four'
		])
		const product = await Product.find(params.id)

		if (!product) {
			return response.status(404).json({data: 'Resource not found'})
		}

		product.name = input.name
		product.shortname = input.shortname
		product.description = input.description
		product.category_id = input.category_id
		product.price = input.price
		product.ratings = input.ratings
		product.rating_one = input.rating_one
		product.rating_two = input.rating_two
		product.rating_three = input.rating_three
		product.rating_four = input.rating_four
		product.rating_five = input.rating_five
		product.reviews = input.reviews
		product.new_item = input.new_item
		product.collection = input.collection
		product.top_trends = input.top_trends
		product.in_wishlist = input.in_wishlist
		product.in_cart = input.in_cart
		product.stocks = input.stocks
		product.thumbnail = input.thumbnail
		product.image_one = input.image_one
		product.image_two = input.image_two
		product.image_three = input.image_three
		product.image_four = input.image_four

		await product.save()
		return response.status(200).json(product)
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
		const product = await Product.find(params.id)

		if (!product) {
			return response.status(404).json({data: 'Resource not found'})
		}

		await product.delete()
		return response.status(204).json(null)
	}

	async top ({ request, response, view }) {
		const products = await Product.query().where('top_trends', 1).fetch()
		return response.json(products)
	}

	async collection ({ request, response, view }) {
		const products = await Product.query().where('collection', 1).fetch()
		return response.json(products)
	}
}

module.exports = ProductController
