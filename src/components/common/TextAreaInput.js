/**
 * Created by dsstevenson on 7/26/2017.
 */
import React from 'react';
import PropTypes from 'prop-types';

const TextAreaInput = ({rows, cols, name, onChange, placeholder, value, error, disabled}) => {
    let wrapperClass = 'form-group';
    if (error && error.length > 0) {
        wrapperClass += " " + 'has-error';
    }

    function onTextChange(event){
        let item = {
            value: event.target.value
        };
        let fieldName = event.target.name;

        onChange(item, fieldName);
    }

    return (
        <div className={wrapperClass}>
            <div className="field">
                <textarea className="form-control" rows={rows} cols={cols} name={name} value={value} onChange={onTextChange} placeholder={placeholder}
                  disabled={disabled}/>
                {error && <div className="alert alert-danger">{error}</div>}
            </div>
        </div>
    );
};

TextAreaInput.propTypes = {
    rows: PropTypes.string,
    cols: PropTypes.string,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    error: PropTypes.string,
    disabled: PropTypes.bool
};

export default TextAreaInput;
