import { camelCase } from 'lodash'

export function camelize(obj: any): any {
  if (Array.isArray(obj)) {
    return obj.map(v => camelize(v))
  } else if (obj !== null && obj.constructor === Object) {
    return Object.keys(obj).reduce(
      (result, key) => ({
        ...result,
        [camelCase(key)]: camelize(obj[key]),
      }),
      {},
    )
  }
  return obj
}
