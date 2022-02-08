export default (value: string, length = 15) => {
  if (!value) return ''
  if (value.length <= length) return value
  return value.substring(0, length) + '...'
}
