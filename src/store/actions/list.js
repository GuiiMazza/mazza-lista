export const Types = {
  ADD_PODUCT: "ADD_PRODUCT",
}


export const Creators = {
  addProduct: (product, list) => ({
    type: Types.ADD_PODUCT,
    product,
    list,
  }),
}
