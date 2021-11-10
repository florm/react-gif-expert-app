import React from 'react'

export const GifGridItem = ({id, title, url}) => { //si lo leo asi parece que cuando llame a <GifGridItem/> lo hice usando 3 atributos distintos, tipo:
    //<GifGridItem id={id} title={title} url={url}/>
    
    return (
        <div className='card animate__animated animate__fadeIn'>
             <img src={ url } alt={ title }/>
             <p>{ title }</p>
        </div>
    )
}
