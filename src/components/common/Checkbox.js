import React from 'react';
import PropTypes from 'prop-types';

class Checkbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: props.checked,
    };

    this._handleChange = this._handleChange.bind(this);
  }

  _handleChange() {
    let item = {
       value: !this.state.checked
    };

    let fieldName = this.props.name;

    this.props.onChange(item, fieldName);
    this.setState({
      checked: !this.state.checked,
    });
 }

render() {
    return (
      <div className="form-group">
        <div className="field">
          <input
              type="checkbox"
              checked={this.props.checked}
              disabled = {this.props.disabled}
              name={this.props.name}
              className="form-control"
              onChange={this._handleChange}/>
          {this.props.error && <div className="alert alert-danger">{this.props.error}</div>}
        </div>
      </div>
    );
  }
}

Checkbox.propTypes = {
  checked: PropTypes.bool.isRequired,
  disabled: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string
};

export default Checkbox;
