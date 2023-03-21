/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

function Checkbox({ label, type, className, ...props }: Props): JSX.Element {
  const { id } = props;
  const checkboxRef = React.useRef<any>(null);
  const toggleChecked = (): void => {
    const { checked } = checkboxRef.current;
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    checkboxRef.current.checked = !checked;
  };
  return (
    <div className="input-group" onClick={toggleChecked} aria-hidden="true">
      <input
        ref={checkboxRef}
        type="checkbox"
        className="input-group__control"
        {...props}
      />

      <label htmlFor={id} className="input-group__label">
        {label}
      </label>
    </div>
  );
}

export default Checkbox;
