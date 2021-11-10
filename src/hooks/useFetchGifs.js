//el nombre es un standar. Porque esto es un custom hook

import { useEffect } from "react";
import { useState } from "react"
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) =>{

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect( ()=> {
        getGifs(category)
            .then(img =>{
                setState({
                    data: img,
                    loading: false
                    }
                )
            });

    }, [category]);

    return state;
}