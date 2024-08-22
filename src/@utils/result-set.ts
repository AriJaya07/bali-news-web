import { camelize } from './camel'
import { isArray } from 'lodash'

export class ResultSet {
	public error = '' // just food-website
	public hasError = false
	public status = 200
	public pagination = {
		count: 0,
		current: 0
	}
	public message = ''
	public data: any
	public raw: any

	constructor(data: any) {
		// console.log(data)
		try {
			if (data) {
				if (data.data) {
					data.data = camelize(data.data)
				}

				this.status = data.status
				this.raw = data
				const d: any = data
				if (d.status >= 300) {

					let error = d.error
					if (!!d.error && !!d.error.error) {
						error = d.error.error
					}

					this.hasError = true
					this.status = d.status
					if (this.status == 401) {
						this.message = 'Your session has expired, Please logout and login again.'
					} else if (!!error && !!error.errors && Array.isArray(error.errors) && error.errors.length > 0) {
						this.message = error.errors[ 0 ]
					} else if (!!error && isArray(error) && !!error[ 0 ] && !!error[ 0 ].message) {
						this.message = error[ 0 ].message
					} else if (!!error && !!error.message) {
						this.message = error.message
					} else if (!!error && !!error.data && !!error.data.message) {
						this.message = error.data.message
					}

					if (!this.message) {
						this.message = 'Something wrong happened. Please try again.'
					}
				} else if(data.response?.data && data.response.status >= 300) {
					this.hasError = true
					this.message = data.response.data.message
					this.status = data.response.status
				} else if ((data.stack && data.message) || (!!data.code && data.code != 200)) {
					this.hasError = true
					this.message = data.message
					this.status = data.errno || 500
				}

				if (data.data) {
					if(data.data?.data?.rows) {
						this.data = data.data.data.rows
						this.pagination.count = data.data.data.count
						this.pagination.current = data.data.data.page
					}else if (data.data?.data) {
						this.data = data.data.data
						this.pagination.count = data.data.data.totalPage
					} else {
						this.data = data.data
						if (data.totalPage) {
							this.pagination.count = data.totalPage
						}
					}
				} else if (data.status && data.status >= 200 && data.status < 300) {
					this.data = data
					if (data.totalPage) {
						this.pagination.count = data.totalPage
					}
				} else {
					this.data = undefined
				}
			}
		} catch (e) {
			console.error(e)
			this.hasError = true
			this.status = 400
			this.message = 'Cannot fetch data!'
		}
	}

	public get hasData() {
		return !this.hasError && !!this.data && (!Array.isArray(this.data) || this.data.length > 0)
	}
}
