const Razorpay = require("razorpay");
const crypto = require("crypto");

const secret_key = "123456";

const key_id = "rzp_test_jrLdOWZ8X6G3F8";
const key_secret = "BMf3wkYBI1sWKYhvOosSv9Ia";

const createRegistration = async (req, res) => {
  // initializing razorpay
  const razorpay = new Razorpay({
    key_id: key_id,
    key_secret: key_secret,
  });

  // setting up options for razorpay order.
  const options = {
    handler: async (response) => {
      res.json(response);
      console.log("payment successful!")
    },
    amount: req.body.accommodation ? 100000 : 50000, // Adjust amount based on accommodation
    currency: "INR",
    receipt: "receipt#1",
    payment_capture: 1,
  };
  try {
    const response = await razorpay.orders.create(options);
    res.json({
      order_id: response.id,
      currency: response.currency,
      amount: response.amount,
    });
  } catch (err) {
    res.status(400).send("Not able to create order. Please try again!");
  }
};

const paymentCapture = async (req, res) => {
  // validation

  const data = crypto.createHmac("sha256", secret_key);

  data.update(JSON.stringify(req.body));

  const digest = data.digest("hex");

  if (digest === req.headers["x-razorpay-signature"]) {
    console.log("request is legit");

    //We can send the response and store information in a database.

    res.json({
      status: "ok",
    });
  } else {
    res.status(400).send("Invalid signature");
  }
};

module.exports = { createRegistration, paymentCapture };
