import React from "react";
import './FormTitle.css';

export function FormTitle(props) {
  const { className, text } = props;
  return <h1 className={`${className} `}>{text}</h1>;
}
