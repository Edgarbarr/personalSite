import React from 'react';
import {CustomFormInput} from './form-input.styles.jsx';

const FormInput =({handleChange, label, ...otherProps}) => (
    <CustomFormInput>
        <div className="group">
        <input className="form-input" onChange={handleChange} {...otherProps}/>
        {
            label ? <label className={`${otherProps.value.length ? "shrink" : ""} form-input-label`} >{label}</label> : null
        }
    </div>
    </CustomFormInput>
    
)
export default FormInput;