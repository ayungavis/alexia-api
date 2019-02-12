'use strict'

const User = use('App/Models/User')

class UserController {
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
		let users = await User.all()
		return response.json(users)
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
			'username',
			'name',
			'email',
			'password',
			'photo',
			'cover_photo',
			'description'
		])
		const user = new User()

		user.username = input.username
		user.name = input.name
		user.email = input.email
		user.password = input.password
		user.photo = input.photo
		user.cover_photo = input.cover_photo
		user.description = input.description

		await user.save()
		return response.status(201).json(user)
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
		const user = await User.find(params.id)
		return response.json(user)
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
			'username',
			'name',
			'email',
			'password',
			'photo',
			'cover_photo',
			'description'
		])
		const user = await User.find(params.id)

		if (!user) {
			return response.status(404).json({data: 'Resource not found'})
		}

		user.username = input.username
		user.name = input.name
		user.email = input.email
		user.password = input.password
		user.photo = input.photo
		user.cover_photo = input.cover_photo
		user.description = input.description

		await user.save()
		return response.status(200).json(user)
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
		const user = await User.find(params.id)

		if (!user) {
			return response.status(404).json({data: 'Resource not found'})
		}

		await user.delete()
		return response.status(204).json(null)
	}
}

module.exports = UserController
