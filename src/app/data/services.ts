export interface Services {
  label: string;
  description: string;
  tag: string;
  href: string;
  banner: string;
}

const services: Services[] = [
  {
    label: "Development",
    description:
      "Clean, performant code tailored for modern web standards—from custom Shopify themes to fully responsive experiences.",
    tag: "Shopify development, e-commerce, custom themes, frontend, responsive web",
    href: "/services#development",
    banner: "/expertise-banners/placeholder.webp",
  },
  {
    label: "UI/UX Design",
    description:
      "Purposeful design rooted in user behavior—crafted to elevate your brand, drive engagement, and make every interaction count.",
    tag: "UI design, UX design, wireframes, user experience, user interface, design systems",
    href: "/services#design",
    banner: "/expertise-banners/placeholder.webp",
  },
  {
    label: "Optimization",
    description:
      "From speed improvements to conversion-focused tweaks, I help your site perform better—for users and for search engines.",
    tag: "website speed, SEO, performance optimization, conversion rate, Core Web Vitals",
    href: "/services#optimization",
    banner: "/expertise-banners/placeholder.webp",
  },
  {
    label: "Consultation",
    description:
      "Get expert insights, audits, and strategic direction to ensure your website supports your goals—today and as you grow.",
    tag: "web strategy, e-commerce audit, tech consulting, design feedback, business growth",
    href: "/services#consultation",
    banner: "/expertise-banners/placeholder.webp",
  },
];

export default services;
