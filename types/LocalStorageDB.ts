export class LocalStorageDB {
  dbPrefix = 'store@'

  constructor() {
    const instance = (this.constructor as any).instance
    if (instance) {
      return instance
    }
    (this.constructor as any).instance = this
  }

  private getPrefix(key: string) {
    return this.dbPrefix + key
  }

  get(key: string) {
    const data = localStorage.getItem(this.getPrefix(key))
    return data ? JSON.parse(data) : undefined
  }

  put(key: string, value: any) {
    const _value = JSON.stringify(value)
    localStorage.setItem(this.getPrefix(key), _value)
    return true
  }

  delete(key: string) {
    localStorage.removeItem(this.getPrefix(key))
  }
}
