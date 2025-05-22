type ContainerProps = {
  children: React.ReactNode;
  main?: boolean;
  dark?: boolean;
  small?: boolean;
};

export default function Container({
  children,
  main = false,
  dark = false,
  small = false,
}: ContainerProps) {
  return (
    <section
      data-theme={dark}
      className={`${small ? "" : "min-h-screen"} flex items-center justify-center ${main ? "" : "py-10"}`}
    >
      {children}
    </section>
  );
}
