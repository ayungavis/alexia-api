'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.group(() => {
	// Products
	Route.get('products', 'ProductController.index');
	Route.get('product/:id', 'ProductController.show');
	Route.get('products/top', 'ProductController.top');
	Route.get('products/collection', 'ProductController.collection');
	Route.post('product', 'ProductController.store');
	Route.patch('product/:id', 'ProductController.update');
	Route.delete('product/:id', 'ProductController.destroy');

	// Categories
	Route.get('categories', 'CategoryController.index');
	Route.get('category/:id', 'CategoryController.show');
	Route.post('category', 'CategoryController.store');
	Route.patch('category/:id', 'CategoryController.update');
	Route.delete('category/:id', 'CategoryController.destroy');

	// Orders
	Route.get('orders', 'OrderController.index');
	Route.get('order/:id', 'OrderController.show');
	Route.post('order', 'OrderController.store');
	Route.patch('order/:id', 'OrderController.update');
	Route.delete('order/:id', 'OrderController.destroy');
	Route.delete('orders', 'OrderController.truncate');

	// Cities
	Route.get('cities', 'CityController.index');
	Route.get('city/:id', 'CityController.show');
	Route.post('city', 'CityController.store');
	Route.patch('city/:id', 'CityController.update');
	Route.delete('city/:id', 'CityController.destroy');

	// Countries
	Route.get('countries', 'CountryController.index');
	Route.get('country/:id', 'CountryController.show');
	Route.post('country', 'CountryController.store');
	Route.patch('country/:id', 'CountryController.update');
	Route.delete('country/:id', 'CountryController.destroy');

	// Contacts
	Route.get('contacts', 'ContactController.index');
	Route.get('contact/:id', 'ContactController.show');
	Route.post('contact', 'ContactController.store');
	Route.patch('contact/:id', 'ContactController.update');
	Route.delete('contact/:id', 'ContactController.destroy');

	// Payments
	Route.get('payments', 'PaymentController.index');
	Route.get('payment/:id', 'PaymentController.show');
	Route.post('payment', 'PaymentController.store');
	Route.patch('payment/:id', 'PaymentController.update');
	Route.delete('payment/:id', 'PaymentController.destroy');

	// Shippings
	Route.get('shippings', 'ShippingController.index');
	Route.get('shipping/:id', 'ShippingController.show');
	Route.post('shipping', 'ShippingController.store');
	Route.patch('shipping/:id', 'ShippingController.update');
	Route.delete('shipping/:id', 'ShippingController.destroy');

	// Users
	Route.get('users', 'UserController.index');
	Route.get('user/:id', 'UserController.show');
	Route.post('user', 'UserController.store');
	Route.patch('user/:id', 'UserController.update');
	Route.delete('user/:id', 'UserController.destroy');

	// Wishlist
	Route.get('wishlists', 'WishlistController.index');
	Route.get('wishlist/:id', 'WishlistController.show');
	Route.post('wishlist', 'WishlistController.store');
	Route.patch('wishlist/:id', 'WishlistController.update');
	Route.delete('wishlist/:id', 'WishlistController.destroy');
}).prefix('api/v1')
