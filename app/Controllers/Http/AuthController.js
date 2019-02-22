'use strict'

const User = use('App/Models/User')

class AuthController {
	async register({ request, auth, response }) {
		const username = request.input("username")
        const email = request.input("email")
        const password = request.input("password")

		let user = new User()
		user.username = username
		user.email = email
		user.password = password

		user = await user.save()
		let accessToken = await auth.withRefreshToken().generate(user)
		return response.status(200).json({
			user: user,
			token: accessToken
		})
	}

	async login({ request, auth, response }) {
		const email = request.input('email')
		const password = request.input('password')

		try {
			let accessToken = auth.withRefreshToken().attempt(email, password)
			return response.status(200).json({
				token: token
			})
		}
		catch(error) {
			return response.status(403).json({
				message: error
			})
		}
	}

	async profile({ response, auth }) {
		return response.send(auth.current.user)
	}

	async refreshToken({ request, auth }) {
		const refreshToken = request.input('refresh_token')
		return await auth
			.newRefreshToken()
			.generateForRefreshToken(refreshToken)
	}

	async logout({ auth, response }) {
		const apiToken = auth.getAuthHeader()
		await auth
			.authenticator('jwt')
			.revokeTokens([apiToken])
		return response.send({ message: 'Logout successfully '})
	}
}

module.exports = AuthController
