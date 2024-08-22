import { now } from '@/@utils/common'

export class Entity {
	public id?: number
	public loopId?: number

	constructor(o?: any) {
	}

	public assign(o: any) {
		if (typeof o === 'string') {
			o = JSON.parse(o)
		}

		Object.assign(this, o)
	}

	public static toArray(a: Array<object>): any {
		const arr = []
		let i = 0
		const t = now()
		if (a && a.length > 0) {
			for (const n of a) {
				const o = (new this(n))
				arr.push(o)

				// For component loop that need id
				o.loopId = t + i
				i++
			}
		}
		return arr
	}

	public getObject(): any {
		const newObj = {}
		for (const key of Object.keys(this)) {
			const k = (key[ 0 ] !== '_') ? key : key.substr(1, key.length)
			// @ts-ignore: Only used inside entity
			newObj[ k ] = this[ key ]
		}

		return newObj
	}

	public setValue(field: string, value: any) {
		// @ts-ignore: global field changer.
		this[ field ] = value
	}
}
