import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['The Simpsons']);

    return (
        <>
            <h2>GifExpertApp</h2>
            {/*Le enviamos en las props la referencia a la funcion del hook*/}
            <AddCategory setCategories={ setCategories } />
            <hr />
           
            <ol>
                {
                    categories.map( category => (
                        <GifGrid 
                            key={category}
                            category={category} 
                        />
                    ))
                }
            </ol>
        </>
    );
};

export default GifExpertApp;
