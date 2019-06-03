export const Types = {
  ADD_PODUCT: "ADD_PRODUCT",
  DELETE_PRODUCT: "DELETE_PRODUCT",
  TOGGLE_PRODUCT: "TOGGLE_PRODUCT",
}


export const Creators = {
  addProduct: (product, list) => ({
    type: Types.ADD_PODUCT,
    product,
    list,
  }),

  deleteProduct: productId => ({
    type: Types.DELETE_PRODUCT,
    productId,

  }),

  toggleProduct: productId => ({
    type: Types.TOGGLE_PRODUCT,
    productId,
  }),
}


