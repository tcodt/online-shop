/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export default function Button(props) {
  const { className, children, href, to, type, onClick, disabled } = props;

  if (to) {
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    );
  } else if (href) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  } else {
    return (
      <button
        className={className}
        type={type}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </button>
    );
  }
}
