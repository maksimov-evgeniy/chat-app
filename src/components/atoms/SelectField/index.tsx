import React, { ChangeEvent, useEffect, useState } from "react";
import "./style.css";
import Select from "react-select";

interface ISelectField {
  options: any;
  onChange?: any;
  value?: any;
  name?: string;
}

export const SelectField: React.FC<ISelectField> = ({
  options,
  onChange,
  value,
  name
}) => {
  // console.log(options)
  return <Select options={options} name={name} onChange={onChange} />;
};
