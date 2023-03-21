/* eslint-disable react/jsx-props-no-spreading */
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

interface Props extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
}
function Select({ label, className, children, ...props }: Props): JSX.Element {
  const { id } = props;
  return (
    <div className="input-group">
      {typeof label === 'string' ? (
        <label htmlFor={id} className="input-group__label">
          {label}
        </label>
      ) : null}
      <select {...props} className="input-group__control">
        {children}
      </select>
      <FontAwesomeIcon icon={faChevronDown} className="chevron" />
    </div>
  );
}

export default Select;

Select.defaultProps = {
  label: undefined,
};
