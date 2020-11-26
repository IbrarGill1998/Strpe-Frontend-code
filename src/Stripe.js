import React from "react";
import ReactDOM from "react-dom";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "./index.css";

toast.configure();

export  function App() {
  const [product] = React.useState({
    name: "Tesla Roadster",
    price: 64998.67,
    description: "Cool car"
  });

  async function handleToken(token, addresses) {
    const response = await axios.post(
      "http://localhost:8080/checkout",
      { token, product }
      
    );

   // console.log(token)

    const { status } = response.data;
    console.log("Response:", response.data);
    if (status === "success") {
      toast("Success! Check email for details", { type: "success" });
    } else {
      toast("Something went wrong", { type: "error" });
    }
  }

  return (
    <div className="container">
      <div className="product">
        <h1>{product.name}</h1>
        <h3>On Sale · ${product.price}</h3>
      </div>
      <StripeCheckout
        stripeKey="pk_test_51HqkVCAXTFLHhrkDO7bPcUn24Cc1ldZqcimfA1xHmUt8RiyYXzIICysRYDmumt0yToUptGyRxRGVpGqPKfVpfyR3000Et4a9pL"
        token={handleToken}
        amount={product.price * 100}
        name="Tesla Roadster"
        billingAddress
        shippingAddress
      />
    </div>
  );
}

// const rootElement = document.getElementById("root");
//  ReactDOM.render(<App />, rootElement);
