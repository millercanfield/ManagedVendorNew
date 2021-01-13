/**
 * Created by dsstevenson on 7/19/2017.
 */
import React from 'react';
import PropTypes from 'prop-types';

const TextInput = ({name, label, onChange, placeholder, value, error, disabled}) => {
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
                <input
                    type="text"
                    name={name}
                    className="form-control"
                    placeholder={placeholder}
                    value={value}
                    onChange={onTextChange}
                    disabled={disabled}/>
                {error && <div className="alert alert-danger">{error}</div>}
            </div>
        </div>
    );
};

TextInput.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    error: PropTypes.string,
    disabled: PropTypes.bool
};

export default TextInput;
