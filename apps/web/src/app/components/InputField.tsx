import React from 'react';

const InputField = ({ type, label, value, onChange, disabled }: {
  type: string,
  label: string,
  value: string,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  disabled: boolean
}) => {
  return (
    <div className="mb-4">
      <label htmlFor={label.toLowerCase()} className="block text-sm mb-2 text-gray-300">{label}</label>
      <input
        type={type}
        id={label.toLowerCase()}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className="w-full px-3 py-2 border border-gray-700 rounded-md focus:outline-none bg-gray-800 text-gray-300 placeholder-gray-500"
        placeholder={`Enter ${label}`}
      />
    </div>
  );
};

export default InputField;

