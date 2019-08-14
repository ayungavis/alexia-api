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
const Prefix = 'api/v1';

Route.on('/').render('welcome')

// Products
Route.group(() => {
	Route.get('/', 'ProductController.index');
	Route.get(':id', 'ProductController.show');
	Route.post('/', 'ProductController.store');
	Route.patch(':id', 'ProductController.update');
	Route.delete(':id', 'ProductController.destroy');
}).prefix(Prefix + '/products')

Route.group(() => {
  Route.get('top', 'ProductController.top');
  Route.get('collection', 'ProductController.collection');
}).prefix('api/v1')

// Categories
Route.group(() => {
	Route.get('/', 'CategoryController.index');
	Route.get(':id', 'CategoryController.show');
	Route.post('/', 'CategoryController.store');
	Route.patch(':id', 'CategoryController.update');
	Route.delete(':id', 'CategoryController.destroy');
}).prefix(Prefix + '/categories')

// Orders
Route.group(() => {
	Route.get('/', 'OrderController.index');
	Route.get(':id', 'OrderController.show');
	Route.post('/', 'OrderController.store');
	Route.patch(':id', 'OrderController.update');
	Route.delete(':id', 'OrderController.destroy');
	Route.delete('/', 'OrderController.truncate');
}).prefix(Prefix + '/orders')

// Cities
Route.group(() => {
	Route.get('/', 'CityController.index');
	Route.get(':id', 'CityController.show');
	Route.post('/', 'CityController.store');
	Route.patch(':id', 'CityController.update');
	Route.delete(':id', 'CityController.destroy');
}).prefix(Prefix + '/cities')

// Countries
Route.group(() => {
	Route.get('/', 'CountryController.index');
	Route.get(':id', 'CountryController.show');
	Route.post('/', 'CountryController.store');
	Route.patch(':id', 'CountryController.update');
	Route.delete(':id', 'CountryController.destroy');
}).prefix(Prefix + '/countries')

// Contacts
Route.group(() => {
	Route.get('/', 'ContactController.index');
	Route.get(':id', 'ContactController.show');
	Route.post('/', 'ContactController.store');
	Route.patch(':id', 'ContactController.update');
	Route.delete(':id', 'ContactController.destroy');
}).prefix(Prefix + '/contacts')

// Payments
Route.group(() => {
	Route.get('/', 'PaymentController.index');
	Route.get(':id', 'PaymentController.show');
	Route.post('/', 'PaymentController.store');
	Route.patch(':id', 'PaymentController.update');
	Route.delete(':id', 'PaymentController.destroy');
}).prefix(Prefix + '/payments')

// Shippings
Route.group(() => {
	Route.get('/', 'ShippingController.index');
	Route.get(':id', 'ShippingController.show');
	Route.post('/', 'ShippingController.store');
	Route.patch(':id', 'ShippingController.update');
	Route.delete(':id', 'ShippingController.destroy');
}).prefix(Prefix + '/shipppings')

// Users
Route.group(() => {
	Route.get('/', 'UserController.index');
	Route.get(':id', 'UserController.show').middleware('auth')
	Route.post('/', 'UserController.store');
	Route.patch(':id', 'UserController.update');
	Route.delete(':id', 'UserController.destroy');
}).prefix(Prefix + '/users')

// Wishlist
Route.group(() => {
	Route.get('/', 'WishlistController.index');
	Route.get(':id', 'WishlistController.show');
	Route.post('/', 'WishlistController.store');
	Route.patch(':id', 'WishlistController.update');
	Route.delete(':id', 'WishlistController.destroy');
}).prefix(Prefix + '/wishlists')

// Authentication using JWT
Route.group(() => {
	Route.post('register', 'AuthController.register');
	Route.post('login', 'AuthController.login');
	Route.post('refresh', 'AuthController.refreshToken').middleware('auth');
	Route.post('logout', 'AuthController.logout').middleware('auth');
	Route.get('profile', 'AuthController.profile').middleware('auth');
}).prefix(Prefix + '/auth')
