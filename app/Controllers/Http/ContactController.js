'use strict'

const Contact = use('App/Models/Contact')

class ContactController {
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
		let contacts = await Contact.all()
		return response.json(contacts)
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
			'address',
			'city_id',
			'country_id',
			'zip_code',
			'type',
		])
		const contact = new Contact()

		contact.user_id = input.user_id
		contact.address = input.address
		contact.city_id = input.city_id
		contact.country_id = input.country_id
		contact.zip_code = input.zip_code
		contact.type = input.type

		await contact.save()
		return response.status(201).json(contact)
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
		const contact = await Contact.find(params.id)
		return response.json(contact)
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
			'address',
			'city_id',
			'country_id',
			'zip_code',
			'type',
		])
		const contact = await Contact.find(params.id)

		if (!contact) {
			return response.status(404).json({data: 'Resource not found'})
		}

		contact.user_id = input.user_id
		contact.address = input.address
		contact.city_id = input.city_id
		contact.country_id = input.country_id
		contact.zip_code = input.zip_code
		contact.type = input.type

		await contact.save()
		return response.status(200).json(contact)
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
		const contact = await Contact.find(params.id)

		if (!contact) {
			return response.status(404).json({data: 'Resource not found'})
		}

		await contact.delete()
		return response.status(204).json(null)
	}
}

module.exports = ContactController
