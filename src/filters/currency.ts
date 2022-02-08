const DEFAULT_OPTIONS = { style: 'currency', currency: 'RUB' }

export default (value: number, options: any = null) => {
  return new Intl.NumberFormat(
    'ru-RU',
    options || DEFAULT_OPTIONS
  ).format(value)
}
