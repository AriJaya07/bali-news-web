export function toObject(obj: any) {
  const newObj: any = {}
  for (const key of Object.keys(obj)) {
    const k = (key[0] !== '_') ? key : key.substr(1, key.length)
    newObj[k] = obj[key]
  }

  return newObj
}
