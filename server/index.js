const express = require('express');
let cors = require('cors');

const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);


const app = express();
app.use(cors());
app.use(express.static(path.join(__dirname, 'client', 'build')));
app.use(express.json());

app.post(("/checkout"), async (req, res) => {
  const { items } = req.body;
  let lineItems = [];
  
  items.forEach(item => {
    const description = generateDescription(item);

    lineItems.push({
      price_data: {
        currency: 'usd',
        product_data: {
          name: item.name,
          description: description
        },
        unit_amount: item.price * 100,
      },
      quantity: item.quantity,
    })
  });

  const shippingCost = 8;

  lineItems.push({
    price_data: {
      currency: 'usd',
      product_data: {
        name: 'Shipping',
        description: 'Shipping Cost',
      },
      unit_amount: shippingCost * 100, // Convert to cents
    },
    quantity: 1,
  });
  
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: lineItems,
    mode: 'payment',
    success_url: "http://localhost:3000/success",
    cancel_url: "http://localhost:3000/products",
    shipping_address_collection: {
      allowed_countries: ['US'],
    },
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

  if (item.choice) {
    description += `, Choice: ${item.choice.name}`;
  }

  if (item.choiceFlavor && item.choiceFlavor.length > 0) {
    description += `, Choice Flavor: ${item.choiceFlavor}`;
  }

  return description;
};

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.listen(Number(process.env.PORT), () => console.log(`Listening in port ${process.env.PORT}!`));