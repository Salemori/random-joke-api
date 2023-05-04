const axios = require('axios');

const API_KEY = 'ac36004e64msh2f03d5e28e75ab5p1a32bfjsn9dc87404b637';
const API_URL = 'https://dad-jokes.p.rapidapi.com/random/joke';

async function getDadJoke() {
  try {
    const response = await axios.get(API_URL, {
      headers: {
        'x-rapidapi-key': API_KEY,
        'x-rapidapi-host': 'dad-jokes.p.rapidapi.com'
      }
    });
    const joke = response.data.body[0].setup + ' ' + response.data.body[0].punchline;
    return joke;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to get dad joke');
  }
}

module.exports = {
  getDadJoke
};
