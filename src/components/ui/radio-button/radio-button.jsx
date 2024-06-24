import React from 'react';
import { VisuallyHiddenInput, Label } from "./styled";

// Радиокнопка
function RadioButton({ labelComponent, selectValue, name, value, children, onChange, ...props}) {
  const LabelComponent = labelComponent;
  const isChecked = value === selectValue;

  return (
    <Label>
      <VisuallyHiddenInput hide value={value} checked={isChecked} name={name} onChange={onChange} {...props} type="radio"/>
      <LabelComponent $isChecked={isChecked}>{children}</LabelComponent>
    </Label>
  );
}

export default RadioButton;