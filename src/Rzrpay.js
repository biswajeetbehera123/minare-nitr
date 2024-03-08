import React, { useEffect, useState } from "react";
import { loadScript } from "./utils";
import { Button } from "@mui/material";

const Rzrpay = () => {
  const [orderCreationId, setOrderCreationId] = useState("");
  const [rzrpayPaymentId, setRzrpayPaymentId] = useState("");
  const [rzrpayOrderId, setRzrpayOrderId] = useState("");
  const [rzrpaySignature, setRzrpaySignature] = useState("");

  useEffect(() => {
    const loadRazorpayScript = async () => {
      await loadScript("https://checkout.razorpay.com/v1/checkout.js");
    };
    loadRazorpayScript();
  }, []);

  const displayRazorpay = async () => {
    try {
      const res = await fetch(
        "http://localhost:5000/register",
        { method: "POST" },
        { headers: { "Content-Type": "application/json" } },
        { body: JSON.stringify({ orderCreationId }) }
      );
      const data = await res.json();
      console.log(data);
      const options = {
        key: "rzp_test_jrLdOWZ8X6G3F8",
        amount: data.amount.toString(),
        currency: "INR",
        name: "Minare-NITR",
        description: "Test Transaction",
        image: "https://example.com/your_logo",
        order_id: data.id,
        handler: function (response) {
          setRzrpayPaymentId(response.razorpay_payment_id);
          setRzrpayOrderId(response.razorpay_order_id);
          setRzrpaySignature(response.razorpay_signature);
        },
        prefill: {
          name: "Gaurav Kumar",
          email: "gouravKumar@gmail.com",
        },
        notes: {
          address: "Hello World",
        },
        theme: {
          color: "#3399cc",
        },
      };
      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Button outlined onClick={displayRazorpay}>
        Pay the registration fees
      </Button>
    </div>
  );
};

export default Rzrpay;
