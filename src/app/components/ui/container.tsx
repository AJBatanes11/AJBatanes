type ContainerProps = {
    children: React.ReactNode;
    main?: boolean;
    dark?: boolean;
}

export default function Container({children, main = false, dark = false}: ContainerProps) {
  return (
    <section data-theme={dark} className={`min-h-screen flex items-center justify-center ${ main ? "" : "py-10"}`}>
      {children}
    </section>
  );
}
