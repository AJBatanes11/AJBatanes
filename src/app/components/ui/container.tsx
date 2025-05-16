type ContainerProps = {
    children: React.ReactNode;
    dark?: boolean;
}

export default function Container({children, dark = false}: ContainerProps) {
    return (
      <section data-theme={dark} className="min-h-screen flex items-center justify-center">
        {children}
      </section>
    );
}