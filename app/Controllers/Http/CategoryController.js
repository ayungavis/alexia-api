'use strict'

const Category = use('App/Models/Category')

class CategoryController {
	/**
	* Show a list of all categorys.
	* GET categorys
	*
	* @param {object} ctx
	* @param {Request} ctx.request
	* @param {Response} ctx.response
	* @param {View} ctx.view
	*/
	async index ({ request, response, view }) {
		let categories = await Category.all()
		return response.json(categories)
	}

	/**
	* Render a form to be used for creating a new category.
	* GET categorys/create
	*
	* @param {object} ctx
	* @param {Request} ctx.request
	* @param {Response} ctx.response
	* @param {View} ctx.view
	*/
	async create ({ request, response, view }) {
	}

	/**
	* Create/save a new category.
	* POST categorys
	*
	* @param {object} ctx
	* @param {Request} ctx.request
	* @param {Response} ctx.response
	*/
	async store ({ request, response }) {
		const input = request.only([
			'name',
			'slug'
		]);
		const category = new Category()

		category.name = input.name
		category.slug = input.slug

		await category.save()
		return response.status(201).json(category)
	}

	/**
	* Display a single category.
	* GET categorys/:id
	*
	* @param {object} ctx
	* @param {Request} ctx.request
	* @param {Response} ctx.response
	* @param {View} ctx.view
	*/
	async show ({ params, request, response, view }) {
		const category = await Category.find(params.id)
		return response.json(category)
	}

	/**
	* Render a form to update an existing category.
	* GET categorys/:id/edit
	*
	* @param {object} ctx
	* @param {Request} ctx.request
	* @param {Response} ctx.response
	* @param {View} ctx.view
	*/
	async edit ({ params, request, response, view }) {
	}

	/**
	* Update category details.
	* PUT or PATCH categorys/:id
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
		const category = await Category.find(params.id)

		if (!category) {
			return response.status(404).json({data: 'Resource not found'})
		}

		category.name = input.name
		category.slug = input.slug

		await category.save()
		return response.status(200).json(category)
	}

	/**
	* Delete a category with id.
	* DELETE categorys/:id
	*
	* @param {object} ctx
	* @param {Request} ctx.request
	* @param {Response} ctx.response
	*/
	async destroy ({ params, request, response }) {
		const category = await Category.find(params.id)

		if (!category) {
			return response.status(404).json({data: 'Resource not found'})
		}

		await category.delete()
		return response.status(204).json(null)
	}

}

module.exports = CategoryController
