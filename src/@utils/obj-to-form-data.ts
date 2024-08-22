export function objToFormData(obj: any): FormData {
  const formData = new FormData()
  for (const key of Object.keys(obj)) {
    formData.append(key, obj[key])
  }
  return formData
}
