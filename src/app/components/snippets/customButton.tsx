interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  ariaLabel?: string;
  buttonType?: "btn-white" | "btn-dark";
}

export default function Button({
  children,
  onClick,
  className = "",
  ariaLabel,
  buttonType = "btn-white",
}: ButtonProps) {
  const baseClasses = `btn ${buttonType}`;
  const buttonClasses = `${baseClasses} ${className}`;

  return (
    <button className={buttonClasses} onClick={onClick} aria-label={ariaLabel}>
      {children}
    </button>
  );
}
