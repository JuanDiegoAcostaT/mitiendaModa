const API_URL = `https://api.tissini.app/api/v2/categories/1/products`;

const fromApiResponseToGifs = (apiResponse) => {
  const { categories = [] } = apiResponse;
  const { categories: categories__ } = categories
  if (Array.isArray(categories__)) {
    const categories = categories__.map(category => {
      const { id, image } = category
      return { id, image }
    })
    return categories

  }
  return []

};

export default function getSections() {
  return fetch(API_URL)
    .then((res) => res.json())
    .then(fromApiResponseToGifs);
}
