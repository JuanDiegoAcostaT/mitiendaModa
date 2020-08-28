const ENDPOINT = "http://localhost:4000";

export default function getCartItems({ jwt }) {

  const requestOptions = {
    method: "GET",
    headers: {
        "Authorization" : jwt,
      "Content-Type": "application/json",
    } 
  }

  return (
    fetch(`${ENDPOINT}/cart`, requestOptions )
      .then((res) => {
        if (!res.ok) throw new Error("Response is not Ok");
        return res.json();
      })
      .then((res) => {
        const { cart } = res;
        return cart;
      })

    )
}
