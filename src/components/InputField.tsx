import React from "react";

interface InputFieldProps {
  label?: string;
  type?: string;
  name?: string;
  value?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  error?: string;
}

function InputField(props: InputFieldProps) {
  const type = props.type ?? "text";
  const name = props.name;
  const value = props.value;
  const placeholder = props.placeholder;
  const onChange = props.onChange;
  const className = props.className;
  const label = props.label;
  const error = props.error;

  return (
    <div className="mb-4 w-full">
      {label && (
        <label htmlFor={name} className="block mb-1 font-medium">
          {label}
        </label>
      )}
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className={`border rounded px-3 py-2 outline-none w-full ${className}`}
      />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
}

export default InputField;
