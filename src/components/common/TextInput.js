import React, {Component} from 'react';
import PropTypes from 'prop-types'

class TextInput extends Component {
  render() {
    let {name, label, onChange, value, placeholder, error} = this.props;
    let wrapperClass = 'form-group';
    if (error && error.length > 0) {
      wrapperClass += " " + 'has-error';
    }

    return (
        <div className={wrapperClass}>
          <div className="field">
        <textarea
            name={name}
            className="form-control"
            placeholder={placeholder}
            onChange={onChange}>{value}</textarea>
            {error && <div className="alert alert-danger">{error}</div>}
          </div>
        </div>
    );
  }
}

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string
};

export default TextInput;
