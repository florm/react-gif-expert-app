import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const CategoryAdd = ({setCategories}) => {

    //esto me tira un error:
    //Warning: A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, 
    //which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component.
    //porque esta pasando de un estado undefined a un estado con valor
    //const [inputValue, setInputValue] = useState();

    //para evitar esto lo ponemos como un string vacio, para que no
    //sea undefined
    const [inputValue, setInputValue] = useState('');

    //con un estado inicializado esto no pasa
    //const [inputValue, setInputValue] = useState('Hola');
    

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault(); //siempre evitar comportamiento por defecto
        if(inputValue.trim().length > 2){
            setCategories(cat => [inputValue, ...cat]);
        }
        setInputValue('');
    }

    return (
        <form onSubmit = { handleSubmit }>
           <input
                type="text"
                value = {inputValue}
                onChange = { handleInputChange }
                
           />
        </form>
    )

    
}

CategoryAdd.propTypes = {
    setCategories: PropTypes.func.isRequired
}





