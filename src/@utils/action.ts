import { objToFormData } from './obj-to-form-data'
import { ResultSet } from './result-set'
import { snakify } from './snake'
import axios from 'axios'
import { toObject } from '@/@utils/to-object'
import * as process from 'process'

const isDev = process.env.NODE_ENV == 'development'

export class Action {

	private http = axios
	private uri: string
	private type: 'post' | 'get' | 'put' | 'delete' | 'patch'
	private header: any
	private additionalObj: any
	private obj: any
	private isMultipart: boolean | undefined
	private isSnakeCase: boolean | undefined

	public async setHttp(
		uri: string,
		type: 'post' | 'get' | 'put' | 'delete' | 'patch',
		header: any,
		isMultipart: boolean | undefined,
		isSnakeCase: boolean | undefined,
		additionalObj?: any,
		obj?: any,
	) {
		this.uri = uri
		this.type = type
		this.header = header
		this.isMultipart = isMultipart
		this.isSnakeCase = isSnakeCase
		this.additionalObj = additionalObj
		this.obj = obj
	}

	public async doHttp(): Promise<ResultSet> {
		let r: any

		try {
			const h = this.header
			let additional = this.additionalObj
			let obj = this.obj

			if (this.isMultipart) {
				delete additional[ 'Content-Type' ]
				delete additional.Accept
			}

			const headers = { ...h, ...additional }
			if (obj && this.isSnakeCase) {
				obj = snakify(toObject(obj))
				additional = snakify(additional)
				if (isDev) {
					console.log('snakified', obj, additional)
				}
			}

			if (this.isMultipart) {
				obj = objToFormData(obj)
				headers[ 'Content-Type' ] = 'multipart/form-data'
			}

			if (['post', 'put', 'patch'].includes(this.type)) {
				r = await this.http[ this.type ](this.uri, obj, { headers: headers, data: obj })
			} else if (['get'].includes(this.type)) {
				r = await this.http[ this.type ](this.uri, { headers: headers, params: obj })
			} else if (['delete'].includes(this.type)) {
				r = await this.http.delete(this.uri, { headers: headers })
			} else {
				throw 'Unsupported method!'
			}
		} catch (e) {
			console.error('action error', e)
			r = e
		}

		console.log(`Request: [${ this.type?.toUpperCase() }] ${ this.uri }`)
		return new ResultSet(r)
	}
}
