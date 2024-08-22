import { snakeCase } from 'lodash'

export function snakify(obj: any): any {
  if (Array.isArray(obj)) {
    return obj.map(v => snakify(v))
  } else if (obj !== null && !!obj && obj.constructor === Object) {
    return Object.keys(obj).reduce(
      (result, key) => ({
        ...result,
        [snakeCase(key)]: snakify(obj[key]),
      }),
      {},
    )
  }
  return obj
}

