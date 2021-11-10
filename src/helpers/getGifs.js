

export const getGifs = async (category)=>{
    const apiKey = 'gSk5zm0h3WCFoUDtY7AHBZuCOBFLW3N9';
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=${apiKey}`;
    const respuesta = await fetch(url);
    const { data } = await respuesta.json();

    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    });

    //recordar que como es async, esta funcion devuelve una promesa que 
    //resuelve la coleccion de las imagenes
    return gifs;

}
