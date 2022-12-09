import React, { Component } from 'react';

export class FormButton extends Component {
  render() {
    const {
      className,
      title,
      input,
      type,
      small,
      danger,
      onClick
    } = this.props;
    return (
      <div
        className={`${className} ${
          small ? "form-button-small" : "form-button"
        }`}
      >
        <button
          className={`${small ? "form-button-small" : "form-button"}__button  ${danger ? "form-button-small__danger" : ""}`}
          
          type={type}
          {...input}
          onClick={onClick}
        >
          {title}
        </button>
      </div>
    );
  }
}
