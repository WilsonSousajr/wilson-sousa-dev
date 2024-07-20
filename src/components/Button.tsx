import * as React from "react";

interface ButtonProps {
  label: string;
  onClick: () => void;
  type?: "primary" | "secondary";
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  type = "primary",
}) => {
  return (
    <button className={`button ${type}`} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
