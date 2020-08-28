const ENDPOINT = "http://localhost:4000";

export default function deleteCartItem({ id, jwt }) {
  const requestOptions = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ jwt }),
  };

  return fetch(`${ENDPOINT}/cart/${id}`, requestOptions)
    .then((res) => {
      if (!res.ok) throw new Error("Response is not Ok");
      return res.json();
    })
    .then((res) => {
      const { cart } = res;
      return cart;
    });
}
