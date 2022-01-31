import { useState } from "react";
import { CategoryAdd } from "./components/CategoryAdd";
import { GifGrid } from "./components/GifGrid";


const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    const handleAdd = ()=>{
        //este de aca lo comento porque ya tengo esa funcionalidad
        //en el nuevo componente CategoryAdd
        //setCategories([...categories, 'Hunter']);
        
        //otra frma. El set recibe como primer argunmento el valor del estado anterio
        //setCategories((cat) => [...cat, 'Hunter']);
    }

    return (
        <>
            <h2>GifExpertApp</h2>
            <CategoryAdd setCategories = { setCategories }/>
            <hr/>
            {/* <button onClick= { handleAdd }>Agregar</button> */}
            <ol>
                {
                    // categories.map( category => {
                    //     //el key NUNCA puede ser el indice
                    //     return <li key={category}>{category}</li>
                    // })
                    //para otra clase
                    categories.map( category => {
                        //el key NUNCA puede ser el indice
                        return <GifGrid key = { category } category = { category }/>
                    })
                }
            </ol>
        </>
    )
}

export default GifExpertApp;

