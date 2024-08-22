import { environment } from "./env";


export function log(...args: any[]) {
	if (!environment.production) {
		console.log(args)
	}
}
