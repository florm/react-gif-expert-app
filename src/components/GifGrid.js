import React, { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {
    
    // const [images, setImages] = useState([]);
    const { data: images, loading } = useFetchGifs(category);
    
    // useEffect(()=>{

    //     getGifs(category).then(imgs => {
    //         setImages(imgs);
    //     });
    //     //o simplificando
    //     getGifs(category).then(setImages);

    // }, [category]) //los [] indican que la función se va a ejecutar 1 sola vez
    // //si agrego algo entre los [] indica que cuando lo que este ahi adentro cambie, entonces se vuelve a ejecutar. En este caso ponermos la category para que no de el warning,
    // //porque la categoria no va a cambiar nunca en este caso

    
    
    //con este metodo aca, cada vez que se renderice el componente se va a ejecutar
    //y por lo tanto se va a llamar a la pai por cada vez. 
    //lo comento, y lo uso en un useEffect
    //getGifs();
    
        
    return (
        <>
            <h3 className="animate__animated animate__fadeIn"> { category } </h3> 
            
            { loading && <p className = "animate__animated animate__flash" >Loading...</p>}
            <div className='card-grid'>
                {
                    images.map( img => {
                        //esta es una forma de mandar la prop img. Cada uno de los atributos se reciben en una única prop en GifGridItem
                        //si en GifGridItem yo quiero desestructurar puedo hacer {prop1, prop2} etc. Pero img corresponderia a prop1.
                            // return <GifGridItem key={img.id} img ={img}/>
                            //Entonces lo que necesito es 
                            //desestructurar a su vez img para poder recibir todos ssus componentes (id, title, url) por separado. Uso:
                            return <GifGridItem key={img.id} {...img}/>
                            //Es como si mandara cada una de las propiedad de img como una propiedad independiente. Lo de arriba quedaria como escribir esto:
                            // return <GifGridItem key={img.id} id={img.id} title={img.title} url={img.url}/>
                    })
                }
            
            </div>
        </>
    )
}
