
import { Action } from './action'
import { ResultSet } from './result-set'

export interface IRequest {
	url: string
	data?: any | undefined
	header?: { [ key: string ]: string } | undefined
	bearer?: string | undefined
	isMultipart?: boolean | undefined
	isSnakeCase?: boolean | undefined
}

export async function goGet(request: IRequest): Promise<ResultSet> {
	const a = new Action()
	const additional: { [ key: string ]: string } = {}

	if (!request.header) {
		request.header = { accept: '*/*' }
	}

	if (request.bearer) {
		additional.Authorization = `Bearer ${ request.bearer }`
	}

	await a.setHttp(request.url, 'get', request.header, request.isMultipart, request.isSnakeCase, additional, request.data)
	return a.doHttp()
}

export async function goPost(request: IRequest): Promise<ResultSet> {
	const a = new Action()
	const additional: { [ key: string ]: string } = {}

	if (!request.header) {
		request.header = { accept: 'application/json' }
	}

	if (request.bearer) {
		additional.Authorization = `bearer ${ request.bearer }`
	}

	await a.setHttp(request.url, 'post', request.header, request.isMultipart, request.isSnakeCase, additional, request.data)
	return a.doHttp()
}

export async function goPut(request: IRequest): Promise<ResultSet> {
	const a = new Action()
	const additional: { [ key: string ]: string } = {}

	if (!request.header) {
		request.header = { accept: 'application/json' }
	}

	if (request.bearer) {
		additional.Authorization = `bearer ${ request.bearer }`
	}

	await a.setHttp(request.url, 'put', request.header, request.isMultipart, request.isSnakeCase, additional, request.data)
	return a.doHttp()
}

export async function goPatch(request: IRequest): Promise<ResultSet> {
	const a = new Action()
	const additional: { [ key: string ]: string } = {}

	if (!request.header) {
		request.header = { accept: 'application/json' }
	}

	if (request.bearer) {
		additional.Authorization = `bearer ${ request.bearer }`
	}

	await a.setHttp(request.url, 'patch', request.header, request.isMultipart, request.isSnakeCase, additional, request.data)
	return a.doHttp()
}

export async function goDel(request: IRequest): Promise<ResultSet> {
	const a = new Action()
	const additional: { [ key: string ]: string } = {}

	if (!request.header) {
		request.header = { accept: 'application/json' }
	}

	if (request.bearer) {
		additional.Authorization = `bearer ${ request.bearer }`
	}

	await a.setHttp(request.url, 'delete', request.header, request.isMultipart, request.isSnakeCase, additional, request.data)
	return a.doHttp()
}
