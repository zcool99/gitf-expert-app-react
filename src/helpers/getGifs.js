const getGifs = async ( category ) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&limit=5&api_key=U2eH7yl5K0M5whcUvlB6juLDtlIJZEMP`;
  const respuesta = await fetch(url);
  const { data } = await respuesta.json();

  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized.url,
    };
  });

  return gifs;
  
};


export default getGifs;