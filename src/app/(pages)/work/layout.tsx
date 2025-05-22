import { ReactNode } from "react";

export default function WorkLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="">
      <body>{children}</body>
    </html>
  );
}
