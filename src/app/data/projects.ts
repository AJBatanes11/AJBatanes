import penshoppeCard from "@/src/app/assets/images/projects/Penshoppe.jpg";
import oxgnCard from "@/src/app/assets/images/projects/OXGN.jpg";
import regattaCard from "@/src/app/assets/images/projects/Regatta.jpg";
import forMeCard from "@/src/app/assets/images/projects/ForMe.jpg";
import memoCard from "@/src/app/assets/images/projects/Memo.jpg";
import bocuCard from "@/src/app/assets/images/projects/Bocu.jpg";
import arianaSpicesCard from "@/src/app/assets/images/projects/ArianaSpices.jpg";
import chakoLabCard from "@/src/app/assets/images/projects/ChakoLab.png";
import henkanCollagenCard from "@/src/app/assets/images/projects/HenkanCollagen.jpg";
import hillsideGardenCard from "@/src/app/assets/images/projects/HillsideGarden.jpg";
import launchToProfitCard from "@/src/app/assets/images/projects/LaunchtoProfitMedia.jpg";
import modAndNobleCard from "@/src/app/assets/images/projects/ModandNoble.jpg";
import soulAesthetixCard from "@/src/app/assets/images/projects/SoulAesthetix.png";
import theCutBuddyCard from "@/src/app/assets/images/projects/TheCutBuddy.jpg";
import theHoopGangCard from "@/src/app/assets/images/projects/TheHoopGang.jpg";
// import tiwflixCard from "@/src/app/assets/images/projects/Tiwflix.png";
import { StaticImageData } from "next/image";

export interface Project {
  cardBanner?: string | StaticImageData;
  cardTitle?: string;
  cardDescription?: string;
  overview?: string;
  industry?: string;
  service?: string;
  technology?: string;
  website?: string;
  imageDesktop1?: string | StaticImageData;
  imageMobile1?: string | StaticImageData;
  heading1?: string;
  description1?: string;
  imageDesktop2?: string | StaticImageData;
  imageMobile2?: string | StaticImageData;
  heading2?: string;
  description2?: string;
  imageDesktop3?: string | StaticImageData;
  imageMobile3?: string | StaticImageData;
}

const projects: Project[] = [
  {
    cardBanner: penshoppeCard,
    cardTitle: "Penshoppe",
    cardDescription: "Design & Development",
    overview:
      "Penshoppe is a well-known Filipino fashion retail brand that offers trendy and affordable clothing and accessories for men and women. It has a strong presence both in physical stores and online platforms across Southeast Asia.",
    industry: "Fashion Retail / E-commerce",
    service:
      "Shopify Development, UI/UX Design, Performance Optimization, Ongoing Support & Maintenance",
    technology: "Shopify, Liquid, JavaScript, PHP",
    website: "https://www.penshoppe.com",
    imageDesktop1: "/project-images/project-dialog-placeholder-desktop-1.jpg",
    imageMobile1: "/project-images/project-dialog-placeholder-mobile-1.jpg",
    heading1: "Website Revamp for Enhanced UX",
    description1:
      "Executed a full front-end revamp of Penshoppe’s website to enhance the user journey—prioritizing clean design, mobile responsiveness, and performance optimization.",
    imageDesktop2: "/project-images/project-dialog-placeholder-desktop-2.jpg",
    imageMobile2: "/project-images/project-dialog-placeholder-mobile-2.jpg",
    heading2: "Exclusive Launches Web Development",
    description2:
      "Led the web development for Penshoppe’s exclusive online launches, ensuring smooth rollouts, optimized performance during high-traffic periods, and seamless shopping experiences for limited-edition drops.",
    imageDesktop3: "/project-images/project-dialog-placeholder-desktop-2.jpg",
    imageMobile3: "/project-images/project-dialog-placeholder-mobile-2.jpg",
  },
  {
    cardBanner: oxgnCard,
    cardTitle: "OXGN Fashion",
    cardDescription: "Design & Development",
    overview:
      "Developed the online presence of OXGN with a performance-first approach. Built custom landing pages and streamlined collections for marketing campaigns.",
    industry: "Apparel & Streetwear",
    service: "Theme Development, Campaign Pages, Technical Support",
    technology: "Shopify, Liquid, Tailwind CSS, metafields",
    website: "https://www.oxgnfashion.com",
    imageDesktop1: "/project-images/project-dialog-placeholder-desktop-1.jpg",
    imageMobile1: "/project-images/project-dialog-placeholder-mobile-1.jpg",
    heading1: "Campaign Landing Pages",
    description1:
      "Created high-conversion landing pages for seasonal drops and influencer collabs.",
    imageDesktop2: "/project-images/project-dialog-placeholder-desktop-1.jpg",
    imageMobile2: "/project-images/project-dialog-placeholder-mobile-1.jpg",
    heading2: "Mobile UX Enhancements",
    description2:
      "Improved mobile navigation and image optimization to reduce bounce rates and boost mobile sales.",
    imageDesktop3: "/project-images/project-dialog-placeholder-desktop-2.jpg",
    imageMobile3: "/project-images/project-dialog-placeholder-mobile-2.jpg",
  },
  {
    cardBanner: forMeCard,
    cardTitle: "ForMe Clothing",
    cardDescription: "Design & Development",
    overview:
      "ForMe is a women’s fashion brand built around the idea that style should be effortless, inclusive, and wearable every day. Known for its curated mix of on-trend and essential pieces, ForMe serves the modern Filipina by offering fashion that adapts to both casual and occasion-driven lifestyles. The brand champions body inclusivity through thoughtful silhouettes and emphasizes style that empowers women to feel confident, comfortable, and expressive. With a growing presence both in physical stores and online, ForMe continues to shape everyday fashion with a strong sense of identity, versatility, and relevance in the local fashion landscape.",
    industry: "Fashion Retail",
    service: "Design, Website Development, Marketing Collateral",
    technology: "Shopify, Liquid, JavaScript",
    website: "https://www.formeclothing.com",
    imageDesktop1: "/project-images/project-dialog-placeholder-desktop-1.jpg",
    imageMobile1: "/project-images/project-dialog-placeholder-mobile-1.jpg",
    heading1: "Custom design built into a custom Shopify Plus Theme.",
    description1:
      "Led a comprehensive redesign and development of ForMe’s Shopify storefront to reflect its refreshed brand identity — a shift toward modern, inclusive, and lifestyle-driven fashion. This involved rethinking layout structures, elevating the use of typography and color, and applying a consistent design system across the site. Key improvements included stronger visual hierarchy, simplified navigation, responsive enhancements, and intuitive user flows designed for everyday women.",
    imageDesktop2: "/project-images/project-dialog-placeholder-desktop-1.jpg",
    imageMobile2: "/project-images/project-dialog-placeholder-mobile-1.jpg",
    heading2: "Modular Sections for Engagement and Storytelling.",
    description2:
      "Designed and developed versatile, purpose-built sections to empower ForMe’s marketing team to tell richer brand stories. These included modules for campaigns, CRM integration, events, editorial content, and social proof. Each section was crafted to be modular, easy to update, and aligned with the brand’s evolving creative direction — offering flexibility without compromising design consistency or performance.",
    imageDesktop3: "/project-images/project-dialog-placeholder-desktop-2.jpg",
    imageMobile3: "/project-images/project-dialog-placeholder-mobile-2.jpg",
  },
  {
    cardBanner: regattaCard,
    cardTitle: "Regatta Lifestyle",
    cardDescription: "Design & Development",
    overview:
      "Handled Regatta’s Shopify platform with a focus on simplifying navigation and enriching the product display experience.",
    industry: "Casual Fashion / Outdoor Lifestyle",
    service: "Store Optimization, Navigation & Filtering, Bug Fixing",
    technology: "Shopify, Liquid, Theme Customization",
    website: "http://regattalifestyle.com/",
    imageDesktop1: "/project-images/project-dialog-placeholder-desktop-1.jpg",
    imageMobile1: "/project-images/project-dialog-placeholder-mobile-1.jpg",
    heading1: "Navigation Overhaul",
    description1:
      "Simplified menu structures and implemented collections tailored to user behavior.",
    imageDesktop2: "/project-images/project-dialog-placeholder-desktop-1.jpg",
    imageMobile2: "/project-images/project-dialog-placeholder-mobile-1.jpg",
    heading2: "Responsive Fixes",
    description2:
      "Addressed layout inconsistencies across devices to ensure full responsiveness.",
    imageDesktop3: "/project-images/project-dialog-placeholder-desktop-2.jpg",
    imageMobile3: "/project-images/project-dialog-placeholder-mobile-2.jpg",
  },
  {
    cardBanner: memoCard,
    cardTitle: "Memo Fashion",
    cardDescription: "Design & Development",
    overview:
      "Spearheaded Memo’s Shopify performance improvements and implemented refined UI to match the brand's smart-casual image.",
    industry: "Workwear & Fashion",
    service: "Shopify Dev, UI Improvements, A/B Testing",
    technology: "Shopify, Liquid, JavaScript, Analytics",
    website: "https://memofashion.com",
    imageDesktop1: "/project-images/project-dialog-placeholder-desktop-1.jpg",
    imageMobile1: "/project-images/project-dialog-placeholder-mobile-1.jpg",
    heading1: "Homepage Refresh",
    description1:
      "Redesigned homepage components to better communicate Memo’s brand identity and current promotions.",
    imageDesktop2: "/project-images/project-dialog-placeholder-desktop-1.jpg",
    imageMobile2: "/project-images/project-dialog-placeholder-mobile-1.jpg",
    heading2: "Optimized Checkout Funnel",
    description2:
      "Monitored and enhanced checkout flow for higher conversion rates via minor UX fixes and content clarity.",
    imageDesktop3: "/project-images/project-dialog-placeholder-desktop-2.jpg",
    imageMobile3: "/project-images/project-dialog-placeholder-mobile-2.jpg",
  },
  {
    cardBanner: bocuCard,
    cardTitle: "BOCU Lifestyle",
    cardDescription: "Design & Development",
    overview:
      "Developed BOCU’s e-commerce storefront with attention to fast product load times and striking visuals that match the streetwear vibe.",
    industry: "Urban Fashion",
    service: "Custom Shopify Dev, Page Speed, Visual Polish",
    technology: "Shopify, Liquid, GSAP, Tailwind CSS",
    website: "https://boculifestyle.com",
    imageDesktop1: "/project-images/project-dialog-placeholder-desktop-1.jpg",
    imageMobile1: "/project-images/project-dialog-placeholder-mobile-1.jpg",
    heading1: "Product Animation Concepts",
    description1:
      "Explored scroll effects and micro-interactions to match BOCU’s energetic brand voice.",
    imageDesktop2: "/project-images/project-dialog-placeholder-desktop-1.jpg",
    imageMobile2: "/project-images/project-dialog-placeholder-mobile-1.jpg",
    heading2: "Performance Optimization",
    description2:
      "Reduced image size and lazy-loaded assets to keep Core Web Vitals strong.",
    imageDesktop3: "/project-images/project-dialog-placeholder-desktop-2.jpg",
    imageMobile3: "/project-images/project-dialog-placeholder-mobile-2.jpg",
  },
  {
    cardBanner: chakoLabCard,
    cardTitle: "Chako Lab",
    cardDescription: "Design & Build",
    overview:
      "Refreshed Chako Lab’s storefront to feel more aligned with their playful brand and natural product positioning.",
    industry: "Pet Health & Wellness",
    service: "Website Redesign, Custom Sections, Theming",
    technology: "Shopify, Liquid, CSS Animations",
    website: "https://chakolabph.com/",
    imageDesktop1: "/project-images/project-dialog-placeholder-desktop-1.jpg",
    imageMobile1: "/project-images/project-dialog-placeholder-mobile-1.jpg",
    heading1: "Custom Product Pages",
    description1:
      "Built interactive product sections with natural ingredient highlights.",
    imageDesktop2: "/project-images/project-dialog-placeholder-desktop-1.jpg",
    imageMobile2: "/project-images/project-dialog-placeholder-mobile-1.jpg",
    heading2: "New Homepage Flow",
    description2:
      "Improved homepage UX and integrated educational content blocks.",
    imageDesktop3: "/project-images/project-dialog-placeholder-desktop-2.jpg",
    imageMobile3: "/project-images/project-dialog-placeholder-mobile-2.jpg",
  },
  {
    cardBanner: theCutBuddyCard,
    cardTitle: "The Cut Buddy",
    cardDescription: "Design & Development",
    overview:
      "Modernized layout and improved page performance for a grooming brand featured on Shark Tank.",
    industry: "Grooming Tools",
    service: "Redesign, Custom Dev, Speed Optimization",
    technology: "Shopify, Liquid, Lazy Load",
    website: "https://thecutbuddy.com/",
    imageDesktop1: "/project-images/project-dialog-placeholder-desktop-1.jpg",
    imageMobile1: "/project-images/project-dialog-placeholder-mobile-1.jpg",
    heading1: "Homepage Revamp",
    description1:
      "Focused hero sections and animated elements to engage shoppers.",
    imageDesktop2: "/project-images/project-dialog-placeholder-desktop-1.jpg",
    imageMobile2: "/project-images/project-dialog-placeholder-mobile-1.jpg",
    heading2: "Custom Cart & Promo Modules",
    description2: "Built custom cart modules for BOGO and discount logic.",
    imageDesktop3: "/project-images/project-dialog-placeholder-desktop-2.jpg",
    imageMobile3: "/project-images/project-dialog-placeholder-mobile-2.jpg",
  },
  {
    cardBanner: theHoopGangCard,
    cardTitle: "The Hoop Gang",
    cardDescription: "Design & Development",
    overview:
      "Redesigned The Hoop Gang’s Shopify store with a strong emphasis on identity and exclusive drops.",
    industry: "Streetwear & Lifestyle",
    service: "Visual Design, Shopify Dev, Custom Sections",
    technology: "Shopify, Liquid, JavaScript",
    website: "https://thehoopgang.com/",
    imageDesktop1: "/project-images/project-dialog-placeholder-desktop-1.jpg",
    imageMobile1: "/project-images/project-dialog-placeholder-mobile-1.jpg",
    heading1: "Custom Drop Pages",
    description1:
      "Created limited-edition drop templates with countdown and hype-focused design.",
    imageDesktop2: "/project-images/project-dialog-placeholder-desktop-1.jpg",
    imageMobile2: "/project-images/project-dialog-placeholder-mobile-1.jpg",
    heading2: "Mobile Shop Redesign",
    description2:
      "Optimized for mobile purchases with large visuals and quick-add features.",
    imageDesktop3: "/project-images/project-dialog-placeholder-desktop-2.jpg",
    imageMobile3: "/project-images/project-dialog-placeholder-mobile-2.jpg",
  },
  {
    // cardBanner: fundaySweetsCard,
    cardTitle: "Funday Sweets",
    cardDescription: "Build & Development",
    overview: "",
    industry: "",
    service: "Features, Responsiveness",
    technology: "Shopify, Liquid, Custom Sections",
    website: "https://www.fundaysweets.com/",
    imageDesktop1: "/project-images/project-dialog-placeholder-desktop-1.jpg",
    imageMobile1: "/project-images/project-dialog-placeholder-mobile-1.jpg",
    heading1: "Peaceful Visual Identity",
    description1:
      "Blended muted palettes and custom icons for a calming experience.",
    imageDesktop2: "/project-images/project-dialog-placeholder-desktop-1.jpg",
    imageMobile2: "/project-images/project-dialog-placeholder-mobile-1.jpg",
    heading2: "Shop By Plant Type",
    description2:
      "Created category filtering based on plant care and sunlight needs.",
    imageDesktop3: "/project-images/project-dialog-placeholder-desktop-2.jpg",
    imageMobile3: "/project-images/project-dialog-placeholder-mobile-2.jpg",
  },
  {
    // cardBanner: skoneCosmeticsCard,
    cardTitle: "Skone Cosmetics",
    cardDescription: "Build & Development",
    overview: "",
    industry: "",
    service: "Features, Responsiveness",
    technology: "Shopify, Liquid, Custom Sections",
    website: "https://skonecosmetics.com/",
    imageDesktop1: "/project-images/project-dialog-placeholder-desktop-1.jpg",
    imageMobile1: "/project-images/project-dialog-placeholder-mobile-1.jpg",
    heading1: "Peaceful Visual Identity",
    description1:
      "Blended muted palettes and custom icons for a calming experience.",
    imageDesktop2: "/project-images/project-dialog-placeholder-desktop-1.jpg",
    imageMobile2: "/project-images/project-dialog-placeholder-mobile-1.jpg",
    heading2: "Shop By Plant Type",
    description2:
      "Created category filtering based on plant care and sunlight needs.",
    imageDesktop3: "/project-images/project-dialog-placeholder-desktop-2.jpg",
    imageMobile3: "/project-images/project-dialog-placeholder-mobile-2.jpg",
  },
  {
    // cardBanner: maveroCard,
    cardTitle: "Mavero",
    cardDescription: "Design & Development",
    overview: "",
    industry: "",
    service: "Features, Responsiveness",
    technology: "Shopify, Liquid, Custom Sections",
    website: "https://mavero.store/",
    imageDesktop1: "/project-images/project-dialog-placeholder-desktop-1.jpg",
    imageMobile1: "/project-images/project-dialog-placeholder-mobile-1.jpg",
    heading1: "Peaceful Visual Identity",
    description1:
      "Blended muted palettes and custom icons for a calming experience.",
    imageDesktop2: "/project-images/project-dialog-placeholder-desktop-1.jpg",
    imageMobile2: "/project-images/project-dialog-placeholder-mobile-1.jpg",
    heading2: "Shop By Plant Type",
    description2:
      "Created category filtering based on plant care and sunlight needs.",
    imageDesktop3: "/project-images/project-dialog-placeholder-desktop-2.jpg",
    imageMobile3: "/project-images/project-dialog-placeholder-mobile-2.jpg",
  },
  {
    cardBanner: hillsideGardenCard,
    cardTitle: "Hillside Garden",
    cardDescription: "Design & Development",
    overview:
      "Overhauled Hillside Garden’s website with nature-inspired aesthetics and structured collection browsing.",
    industry: "Gardening & Landscaping",
    service: "Website Redesign, Dev, UX Enhancement",
    technology: "Shopify, Liquid, Custom Sections",
    website: "https://hillsidegarden.com.ph/",
    imageDesktop1: "/project-images/project-dialog-placeholder-desktop-1.jpg",
    imageMobile1: "/project-images/project-dialog-placeholder-mobile-1.jpg",
    heading1: "Peaceful Visual Identity",
    description1:
      "Blended muted palettes and custom icons for a calming experience.",
    imageDesktop2: "/project-images/project-dialog-placeholder-desktop-1.jpg",
    imageMobile2: "/project-images/project-dialog-placeholder-mobile-1.jpg",
    heading2: "Shop By Plant Type",
    description2:
      "Created category filtering based on plant care and sunlight needs.",
    imageDesktop3: "/project-images/project-dialog-placeholder-desktop-2.jpg",
    imageMobile3: "/project-images/project-dialog-placeholder-mobile-2.jpg",
  },
  {
    cardBanner: henkanCollagenCard,
    cardTitle: "Henkan Collagen",
    cardDescription: "Design & Development",
    overview:
      "Refreshed Henkan’s website to build trust and clarity around the product benefits and science.",
    industry: "Beauty & Wellness",
    service: "Redesign, Custom Dev, Brand Strategy",
    technology: "Shopify, Liquid, CSS",
    website: "https://henkancollagen.myshopify.com/",
    imageDesktop1: "/project-images/project-dialog-placeholder-desktop-1.jpg",
    imageMobile1: "/project-images/project-dialog-placeholder-mobile-1.jpg",
    heading1: "Educational Homepage Sections",
    description1:
      "Added ingredient info, benefits, and user reviews for credibility.",
    imageDesktop2: "/project-images/project-dialog-placeholder-desktop-1.jpg",
    imageMobile2: "/project-images/project-dialog-placeholder-mobile-1.jpg",
    heading2: "Optimized Product Page",
    description2: "Focused on product photography and key selling points.",
    imageDesktop3: "/project-images/project-dialog-placeholder-desktop-2.jpg",
    imageMobile3: "/project-images/project-dialog-placeholder-mobile-2.jpg",
  },
  {
    cardBanner: soulAesthetixCard,
    cardTitle: "Soul Aesthetix",
    cardDescription: "Design & Build",
    overview:
      "Translated Soul Aesthetix's vibrant branding into an interactive and seamless Shopify experience.",
    industry: "Skincare & Beauty",
    service: "Shopify Dev, Brand Integration",
    technology: "Shopify, Liquid, Custom Sections",
    website: "https://soulaesthetix.com.au/",
    imageDesktop1: "/project-images/project-dialog-placeholder-desktop-1.jpg",
    imageMobile1: "/project-images/project-dialog-placeholder-mobile-1.jpg",
    heading1: "Dynamic Product Grid",
    description1:
      "Created custom product grid that responds to brand color scheme.",
    imageDesktop2: "/project-images/project-dialog-placeholder-desktop-1.jpg",
    imageMobile2: "/project-images/project-dialog-placeholder-mobile-1.jpg",
    heading2: "Homepage Story Highlights",
    description2: "Introduced banners and blurbs to highlight brand story.",
    imageDesktop3: "/project-images/project-dialog-placeholder-desktop-2.jpg",
    imageMobile3: "/project-images/project-dialog-placeholder-mobile-2.jpg",
  },
  {
    cardBanner: arianaSpicesCard,
    cardTitle: "Ariana Spices",
    cardDescription: "Design & Development",
    overview:
      "Rebuilt Ariana Spices with a robust Shopify foundation and flavorful product presentation.",
    industry: "Spices & Food Retail",
    service: "Redesign, Dev, UX Improvements",
    technology: "Shopify, Liquid, JavaScript",
    website: "https://arianaspices.com/",
    imageDesktop1: "/project-images/project-dialog-placeholder-desktop-1.jpg",
    imageMobile1: "/project-images/project-dialog-placeholder-mobile-1.jpg",
    heading1: "Flavor-Driven PDPs",
    description1: "Showcased origin and usage tips for spices.",
    imageDesktop2: "/project-images/project-dialog-placeholder-desktop-1.jpg",
    imageMobile2: "/project-images/project-dialog-placeholder-mobile-1.jpg",
    heading2: "Clean Mobile Layout",
    description2: "Streamlined mobile experience for quick spice browsing.",
    imageDesktop3: "/project-images/project-dialog-placeholder-desktop-2.jpg",
    imageMobile3: "/project-images/project-dialog-placeholder-mobile-2.jpg",
  },
  {
    cardBanner: launchToProfitCard,
    cardTitle: "Launch to Profit Media",
    cardDescription: "Design & Development",
    overview:
      "Developed the marketing agency’s main site with clear service flows and brand consistency.",
    industry: "Digital Marketing & Media",
    service: "Design, Dev, Structure Optimization",
    technology: "Shopify, Liquid, Custom Sections",
    website: "https://www.launchtoprofitmedia.com/",
    imageDesktop1: "/project-images/project-dialog-placeholder-desktop-1.jpg",
    imageMobile1: "/project-images/project-dialog-placeholder-mobile-1.jpg",
    heading1: "Service Showcase",
    description1:
      "Built a grid of services with CTA clarity and hover effects.",
    imageDesktop2: "/project-images/project-dialog-placeholder-desktop-1.jpg",
    imageMobile2: "/project-images/project-dialog-placeholder-mobile-1.jpg",
    heading2: "Team & Culture",
    description2: "Created about/team pages with light interactions.",
    imageDesktop3: "/project-images/project-dialog-placeholder-desktop-2.jpg",
    imageMobile3: "/project-images/project-dialog-placeholder-mobile-2.jpg",
  },
  {
    cardBanner: modAndNobleCard,
    cardTitle: "Mod & Noble",
    cardDescription: "Design & Build",
    overview:
      "Handled end-to-end site creation with efficient code and process refinement.",
    industry: "Lifestyle & Design",
    service: "Full Website Dev, Process Consulting",
    technology: "Shopify, Liquid, Tailwind CSS, Analytics",
    website: "https://www.modandnoble.com/",
    imageDesktop1: "/project-images/project-dialog-placeholder-desktop-1.jpg",
    imageMobile1: "/project-images/project-dialog-placeholder-mobile-1.jpg",
    heading1: "Minimal Aesthetic",
    description1:
      "Used white space and large product photos to elevate perception.",
    imageDesktop2: "/project-images/project-dialog-placeholder-desktop-1.jpg",
    imageMobile2: "/project-images/project-dialog-placeholder-mobile-1.jpg",
    heading2: "SEO and Structure Cleanup",
    description2:
      "Refined structure for clean crawlability and analytics readiness.",
    imageDesktop3: "/project-images/project-dialog-placeholder-desktop-2.jpg",
    imageMobile3: "/project-images/project-dialog-placeholder-mobile-2.jpg",
  },
  // {
  //   cardBanner: tiwflixCard,
  //   cardTitle: "Tiwflix",
  //   cardDescription: "Design & Build",
  //   overview:
  //     "Built a mini Netflix-style platform using React, external API, and responsive layout.",
  //   industry: "Personal Project / Entertainment",
  //   service: "Design, Dev, API Integration",
  //   technology: "React JS, TMDB API, Tailwind CSS",
  //   website: "https://ajbatanes11.github.io/tiwflix/",
  //   imageDesktop1: "/project-images/project-dialog-placeholder-desktop-1.jpg",
  //   imageMobile1: "/project-images/project-dialog-placeholder-mobile-1.jpg",
  //   heading1: "Card-Based Layout",
  //   description1: "Grid system displaying shows from TMDB API.",
  //   imageDesktop2: "/project-images/project-dialog-placeholder-desktop-1.jpg",
  //   imageMobile2: "/project-images/project-dialog-placeholder-mobile-1.jpg",
  //   heading2: "Dark Mode + Mobile Friendly",
  //   description2: "Responsive layout with focus on dark-mode visuals.",
  //   imageDesktop3: "/project-images/project-dialog-placeholder-desktop-2.jpg",
  //   imageMobile3: "/project-images/project-dialog-placeholder-mobile-2.jpg",
  // },
];

export default projects;
