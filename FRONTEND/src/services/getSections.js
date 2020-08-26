const API_URL = `https://api.tissini.app/api/v1/categories/sections`;

const fromApiResponseToGifs = (apiResponse) => {
  if (Array.isArray(apiResponse)) {
    const sections = apiResponse.map((section) => {
      const { name, image } = section;
      return { name, image };
    });
    return sections;
  }
  return [];
};

export default function getSections() {
  return fetch(API_URL)
    .then((res) => res.json())
    .then(fromApiResponseToGifs);
}
