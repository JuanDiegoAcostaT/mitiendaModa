
const fromApiResponseToGifs = (apiResponse) => {
  const { categories = [] } = apiResponse;
  const { categories: categories__ } = categories
  if (Array.isArray(categories__)) {
    const categories = categories__.map(category => {
      const { id, image , name} = category
      return { id, image, name }
    })
    return categories

  }
  return []

};

export default function getSections({ i }) {
  return fetch(`https://api.tissini.app/api/v2/categories/${i}/products`)
    .then((res) => res.json())
    .then(fromApiResponseToGifs);
}
