import { IProduct } from '../types/IProduct'
import { PRODUCTS_CATEGORIES_COUNT } from './ProductCategories'

const PRODUCTS_COUNT = 100

export const products: IProduct[] = new Array(PRODUCTS_COUNT).fill(null).map((x, i) => {
  const id = i + 1
  return {
    id,
    name: `Продукт ${id}`,
    price: id + PRODUCTS_COUNT,
    // eslint-disable-next-line max-len
    img: 'https://media.istockphoto.com/photos/stack-of-medical-student-textbooks-picture-id921644532?k=20&m=921644532&s=612x612&w=0&h=hezQpZ0uyUmbU4QJePKK5JPNWVXD_UWwWPYSg5Rspds=',
    // eslint-disable-next-line max-len
    description: id % 7 + ' Полностью новые главы по биохимии и клеточной биологии, генетике, нервной системе, костям, мышцам и коже, эндокринной и репродуктивной системам, сердечно-сосудистой системе, почечной системе, диете и питанию.',
    category: id % PRODUCTS_CATEGORIES_COUNT + 1
  }
})
