const dotenv = require('dotenv').config();

export const URLBASE = process.env.URL_BACKEND;

export const ENDPOINT = {
  products: `${URLBASE}/producto`,
  users: `${URLBASE}/usuario`
}
