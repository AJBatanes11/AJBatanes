type ContainerProps = {
  children: React.ReactNode;
  main?: boolean;
  dark?: boolean;
  small?: boolean;
  disableTheming?: boolean;
  ariaLabel?: string;
};

export default function Container({
  children,
  main = false,
  dark = false,
  small = false,
  disableTheming = false,
  ariaLabel = "Container",
}: ContainerProps) {
  const themeAttr = !disableTheming ? { "data-theme": dark } : {};

  return (
    <section
      {...themeAttr}
      aria-label={ariaLabel}
      className={`${small ? "" : "min-h-screen"} flex items-center justify-center ${main ? "" : "py-10"}`}
    >
      {children}
    </section>
  );
}
