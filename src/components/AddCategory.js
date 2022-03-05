//rafc
import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ( { setCategories } ) => {
  
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if ( inputValue.trim().length > 2 ) {
            //Otra forma de usar la funcion del hook tiene un callback con el estado anterior.
            //Util cuando no tenes la variable
            setCategories( prevCats => [inputValue, ...prevCats]);
            setInputValue('');
        }
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input 
                type="text"
                value={ inputValue }
                onChange={ handleInputChange }
            />
        </form>
    );

}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}