import React from 'react';

const Radiobtn = ({handleChange, value, id, name, labelText, is_disable, defaultValue}) => {
    return (

        <label className="me-2" htmlFor={id}>
            <input className="me-2" type="radio" id={id} name={name}
                   disabled={is_disable} checked={defaultValue}
                   value={value} onChange={handleChange}/>

            {labelText}

        </label>
    );
};

export default Radiobtn;