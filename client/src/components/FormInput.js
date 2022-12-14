import React, { Component } from "react";

export class FormInput extends Component {
  render() {
    const {
      className,
      title,
      input,
      type,
      placeholder,
    } = this.props;
    return (
      <div className={`${className} form-input`}>
        <label className="form-input__title">{title}</label>
        <input
          className="form-input__input"
          type={type}
          {...input}
          placeholder={placeholder}
        />
      </div>
    );
  }
}
export default FormInput;