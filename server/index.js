const express = require('express');
let cors = require('cors');

const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);


const app = express();
app.use(cors());
app.use(express.static('public'));
app.use(express.json());

app.post(("/checkout"), async (req, res) => {
  const items = req.body.items;
  let lineItems = [];
  
  items.forEach(item => {
    const description = generateDescription(item);

    lineItems.push({
      // price: item.priceId,
      price_data: {
        currency: 'usd',
        product_data: {
          name: item.name,
          description: description
        },
        unit_amount: item.price * 100,
      },
      quantity: item.quantity,
      // // add sku number
      // description: `Flavor: ${item.flavor}`,
    })
  });
  
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: lineItems,
    mode: 'payment',
    success_url: "http://localhost:3000/success",
    cancel_url: "http://localhost:3000/products",
  });

  res.send(JSON.stringify({
    url: session.url
  }));
});

const generateDescription = item => {
  let description = `Main Option: ${item.option.name}`;

  if (item.flavor && item.flavor.length > 0) {
    description += `, Main Flavor: ${item.flavor}`;
  }

  if (item.choice && item.choice.length > 0) {
    description += `, Choice: ${item.choice.name}`;
  }

  if (item.choiceFlavor && item.choiceFlavor.length > 0) {
    description += `, Choice Flavor: ${item.choiceFlavor}`;
  }

  return description;
}

app.listen(Number(process.env.PORT), () => console.log(`Listening in port ${process.env.PORT}!`));