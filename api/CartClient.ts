import { waitingForServerResponse } from '@/helpers/wait'
import { products } from '../mocks/Product'
import { ICartItem } from '../types/ICart'
import { LocalStorageDB } from '../types/LocalStorageDB'

const db = new LocalStorageDB()

export class CartClient {
  async get() {
    await waitingForServerResponse()
    return db.get('cart') || {}
  }

  async add(id: number) {
    await waitingForServerResponse()
    const cart = db.get('cart') || {}
    const _id = id.toString()

    if (!cart[_id]) {
      cart[_id] = getCartItemFromProduct(id)
    } else {
      cart[_id].quantity += 1
    }

    db.put('cart', cart)
    return cart
  }

  async remove(id: number) {
    await waitingForServerResponse()
    const cart = db.get('cart') || {}
    const _id = id.toString()

    if (cart[_id] && cart[_id].quantity > 1) {
      cart[_id].quantity -= 1
    } else {
      delete cart[_id]
    }

    db.put('cart', cart)
    return cart
  }

  async removeAll() {
    await waitingForServerResponse()
    db.put('cart', {})
    return {}
  }
}

function getCartItemFromProduct(id: number): ICartItem | undefined {
  const product = products.find(x => id === x.id)
  if (product) {
    return {
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1
    }
  }
}
