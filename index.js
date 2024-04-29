require('dotenv').config();


async function getImage(query, random = false) {
  try {
    const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=${query}&limit=25&offset=0&rating=g&lang=en`;
    const response = await fetch(endpoint);
    const data = await response.json();

    let gifUrl;
    if (random) {
      const randomIndex = Math.floor(Math.random() * 25);
      gifUrl = data.data[randomIndex].images.original.url;
    } else {
      const gifUrls = data.data.map((gif) => gif.images.original.url);
      return gifUrls;
    }

    console.log(gifUrl);
    return gifUrl;
  } catch (error) {
    console.error('Error fetching gif:', error);
    throw error;
  }
}

getImage('cats', true);
getImage('cats');



