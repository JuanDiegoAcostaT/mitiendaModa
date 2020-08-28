const fromApiResponseToGifs = (apiResponse) => {
  const { products = [] } = apiResponse;
  if (Array.isArray(products)) {
    const productos = products.map((product) => {
      const { price, images, id, name } = product;
      return { price, id, name, images };
    });
    return productos;
  }
  return [];
};

export default function getProducts({ id }) {
  return fetch(`https://api.tissini.app/api/v2/categories/${id}/products`)
    .then((res) => res.json())
    .then(fromApiResponseToGifs);
}
