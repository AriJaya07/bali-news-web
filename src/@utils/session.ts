import cookie from 'js-cookie'
import { ResultSet } from '@/@utils/result-set'
import { goGet } from '@/@utils/http'
import { UserList } from '@/@entities/userList'
import { ADDR } from '@/@utils/env'

export class Session {
	public static async isLoggedIn(): Promise<boolean> {
		return new Promise(async (res) => {
			const data = await Session.getData()
			// console.log('AUTH', data?.bearer)
			res(!!(data?.bearer))
		})
	}

	public static async setData(session: I_Session): Promise<void> {
		return new Promise((res) => {
			cookie.set('session', JSON.stringify(session))
			res()
		})
	}

	public static async getProfile(): Promise<UserList> {
		return new Promise(async (res) => {
			try {
				const url: string = `${ ADDR.BLOG_RENT }/user/profile`
				const rsProfile: ResultSet = await goGet({ url, bearer: await this.getBearer() })
				if (rsProfile.hasData) {
					const user = new UserList(rsProfile.data)
					// console.log(user)
					res(user)
					return
				}
			} catch (e) {
				console.error(e)
			}

			res(new UserList())
			return
		})
	}

	public static async getData(): Promise<I_Session> {
		return new Promise((res) => {
			try {
				res(JSON.parse(String(cookie.get('session'))))
			} catch (e) {
				res({
					bearer: '',
					expired: 0,
				})
			}
		})
	}

	public static async getBearer(): Promise<string> {
		const session = await Session.getData()
		return session.bearer
	}

	public static async reset(): Promise<void> {
		return new Promise((res) => {
			cookie.set('session', JSON.stringify({
				bearer: '',
				expired: 0,
			}))
			res()
		})
	}
}

interface I_Session {
	bearer: string,
	expired: number
}
