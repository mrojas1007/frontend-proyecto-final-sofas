// const dotenv = require('dotenv').config();

export const URLBASE = import.meta.env.URL_BACKEND;

export const ENDPOINT = {
  products: `${URLBASE}/producto`,
  users: `${URLBASE}/usuario`
}
