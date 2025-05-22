interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  ariaLabel?: string;
  disabled?: boolean;
  id?: string;
  type?: "button" | "submit" | "reset";
  value?: string;
  form?: string;
  name?: string;
}

export default function Button({
  children,
  onClick,
  className = "",
  ariaLabel,
  disabled = false,
  id,
  type = "button",
  value,
  form,
  name,
}: ButtonProps) {
  const baseClasses = "btn btn-white";
  const disabledClasses = "bg-gray-400 text-gray-200 cursor-not-allowed";

  const buttonClasses = `${baseClasses} ${className} ${disabled ? disabledClasses : ""}`;

  return (
    <button
      className={buttonClasses}
      onClick={onClick}
      aria-label={ariaLabel}
      disabled={disabled}
      id={id}
      type={type}
      value={value}
      form={form}
      name={name}
    >
      {children}
    </button>
  );
}
