export type WebFilter = "ai" | "saas" | "shop" | "site";

export type WebProject = {
  key: string;
  title: string;
  filter: WebFilter;
  category: string;
  image: string;
  width: number;
  height: number;
  description: string;
  features: string[];
  url?: string;
};

export type MobileApp = {
  key: string;
  title: string;
  category: string;
  description: string;
  features: string[];
  playStore?: string;
  appStore?: string;
};

export const filters: { id: "all" | WebFilter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "ai", label: "AI products" },
  { id: "saas", label: "SaaS & dashboards" },
  { id: "shop", label: "Commerce & booking" },
  { id: "site", label: "Websites" },
];

export const webProjects: WebProject[] = [
  {
    key: "mealmind",
    title: "MealMind.ai",
    filter: "ai",
    category: "AI web app",
    image: "/img/mealmind.webp",
    width: 690,
    height: 390,
    description:
      "A smart web app that turns whatever is in your kitchen into meal ideas, powered by AI recipe generation and personalized suggestions.",
    features: ["AI-generated recipe suggestions", "Personalized meal planning", "Smart ingredient-based search", "Fast, fully responsive UI"],
  },
  {
    key: "kenrox",
    title: "KenroX",
    filter: "ai",
    category: "AI fitness app",
    image: "/img/kenrox.webp",
    width: 690,
    height: 390,
    description: "An AI coach that builds personalized workout and diet plans, then adapts them as you track your progress.",
    features: ["AI-personalized plans", "Smart workout planning", "Custom diet plans with calorie targets", "Progress tracking and analytics"],
  },
  {
    key: "gymflow",
    title: "GymFlow",
    filter: "saas",
    category: "Fitness SaaS",
    image: "/img/gymflow.webp",
    width: 1280,
    height: 853,
    description: "A fitness SaaS platform that helps gyms manage classes, members and trainers from one clean dashboard.",
    features: ["Class scheduling system", "Membership management", "Trainer profiles and booking", "Analytics dashboard"],
  },
  {
    key: "jarapha",
    title: "Jarapha Pharmacy",
    filter: "shop",
    category: "Health e-commerce",
    image: "/img/jarapha.webp",
    width: 1280,
    height: 853,
    description: "An online pharmacy store that makes healthcare products easy to browse, order and track.",
    features: ["Product catalog and search", "Cart and secure checkout", "Prescription upload", "Order tracking"],
  },
  {
    key: "hotel",
    title: "Hotel Management System",
    filter: "saas",
    category: "Operations dashboard",
    image: "/img/hotel.webp",
    width: 690,
    height: 385,
    description:
      "A complete hotel management system covering reservations, room inventory and daily operations in a single dashboard.",
    features: ["Reservation and booking management", "Room inventory tracking", "Staff roles and permissions", "Reporting and analytics"],
  },
  {
    key: "shehnai",
    title: "Shehnai Shadi",
    filter: "shop",
    category: "Wedding and events platform",
    image: "/img/shehnai.webp",
    width: 1280,
    height: 853,
    description: "A wedding and events platform connecting couples with venues and vendors, with packages and instant inquiries.",
    features: ["Vendor and venue listings", "Package booking", "Photo and video galleries", "Instant inquiry system"],
  },
  {
    key: "camping",
    title: "Camping Experience",
    filter: "shop",
    category: "Travel booking",
    image: "/img/camping.webp",
    width: 1400,
    height: 933,
    description: "A travel platform for discovering and booking camping trips, with rich imagery and a smooth booking flow.",
    features: ["Campsite discovery and filtering", "Online booking system", "Interactive photo galleries", "Traveler reviews and ratings"],
  },
  {
    key: "itbu",
    title: "ITBU University",
    filter: "site",
    category: "University portal",
    image: "/img/itbu.webp",
    width: 1280,
    height: 853,
    description: "A modern university portal giving students and applicants easy access to courses, admissions and campus life.",
    features: ["Course catalog and programs", "Admissions information flow", "Student portal access", "Events and news updates"],
  },
  {
    key: "ecogreen",
    title: "EcoGreen",
    filter: "site",
    category: "NGO website",
    image: "/img/ecogreen.webp",
    width: 1400,
    height: 933,
    description:
      "A mission-driven NGO website that inspires action on environmental causes with campaigns, donations and volunteer signups.",
    features: ["Campaign showcases", "Online donation flow", "Volunteer signup forms", "News and blog section"],
  },
  {
    key: "construction",
    title: "Construction Co.",
    filter: "site",
    category: "Corporate website",
    image: "/img/construction.webp",
    width: 1400,
    height: 933,
    description: "A bold corporate landing page for a construction company, built to win trust and turn visitors into project inquiries.",
    features: ["Services and expertise showcase", "Completed projects gallery", "Quote request form", "SEO-optimized structure"],
  },
];

export const mobileApps: MobileApp[] = [
  {
    key: "belinee",
    title: "Belinee",
    category: "Ride-sharing",
    description:
      "A simple, secure ride-sharing app. Riders set pickup and drop-off, see the fare before confirming, and track their verified driver in real time.",
    features: ["Fare estimates before booking", "Real-time driver tracking", "Secure in-app payments", "Trip history", "Verified drivers and GPS-tracked rides"],
    playStore: "https://play.google.com/store/apps/details?id=com.beline",
    appStore: "https://apps.apple.com/us/app/belinee/id6756457545",
  },
  {
    key: "gethomesafe",
    title: "Get Home Safe",
    category: "Student safety, DMAC Foundation",
    description:
      "A safety app for students run by DMAC Foundation. Students who haven't reached home can report it in one step, so trained responders can help right away.",
    features: ["University-based onboarding", "One-tap report when not home safe", "Real-time help from trained responders", "Exclusive student promo codes"],
    playStore: "https://play.google.com/store/apps/details?id=com.dmacfoundation.gethomesafe",
    appStore: "https://apps.apple.com/us/app/get-home-safe-with-dmac/id6749785177",
  },
  {
    key: "circletrack",
    title: "Circle Track Connections",
    category: "Dating",
    description:
      "A modern dating app for meeting people nearby, for friendship, casual dating or something serious, with smart matching and instant chat.",
    features: ["Discover singles nearby", "Instant messaging", "Photo and interest profiles", "Smart matching", "Privacy and safety controls"],
    playStore: "https://play.google.com/store/apps/details?id=com.circletrackconnections",
    appStore: "https://apps.apple.com/us/app/circle-track-connections/id6739785437",
  },
  {
    key: "velocityfbo",
    title: "Velocity FBO",
    category: "Aviation fleet operations",
    description:
      "A crew car platform for Fixed-Base Operators that replaces paper with a fast mobile flow, from issuing a car to return and inspection.",
    features: ["Issue crew cars to pilots and crew", "On-screen digital waiver signatures", "Mileage, fuel and condition photos", "Return logging with issue flags"],
    playStore: "https://play.google.com/store/apps/details?id=com.velocityfbo",
  },
  {
    key: "truckers",
    title: "Truckers Konnect",
    category: "Logistics and fleet",
    description:
      "A fleet management app for truck owners, fleet managers, drivers and service providers, with subscription plans for larger fleets.",
    features: ["Add trucks and build fleets", "Assign drivers", "Track maintenance and fuel services", "Subscriptions with a 3-day free trial", "Encrypted accounts"],
    playStore: "https://play.google.com/store/apps/details?id=com.truckerskonnect",
    appStore: "https://apps.apple.com/us/app/truckers-konnect/id6761205761",
  },
  {
    key: "thrive65",
    title: "Boomers Thrive65",
    category: "Senior care community",
    description:
      "Connects seniors with verified people nearby for errands, rides, home help, companionship and shared living, with safety built into every step.",
    features: ["Verified helpers with live selfie and license", "Errands, rides and personal care", "Secure chat and shared living", "One-tap SOS to emergency contacts"],
    playStore: "https://play.google.com/store/apps/details?id=com.boomersthrive65.app",
    appStore: "https://apps.apple.com/us/app/boomers-thrive65/id6811200411",
  },
  {
    key: "dots",
    title: "Dots Travel",
    category: "Social travel",
    description:
      "A social touring app for explorers: discover nearby tours and attractions, share experiences in real time, and follow other travelers.",
    features: ["Nearby attractions and tours", "Real-time experience sharing", "Traveler profiles and followers"],
    playStore: "https://play.google.com/store/apps/details?id=com.dotstravels.app",
    // TODO: replace with the direct App Store listing URL
    appStore: "https://apps.apple.com/us/iphone/search?term=Dots%20Travel",
  },
  {
    key: "rceventhub",
    title: "RC Event Hub",
    category: "Hobby events",
    description:
      "A guide to radio-control events for hobbyists and pros, with local, national and international listings and full details for each event.",
    features: ["Event categories for aircraft, boats and more", "Sort events by distance", "Dates, locations and full details", "Local, national and international listings"],
    playStore: "https://play.google.com/store/apps/details?id=com.rcenthusiast",
    appStore: "https://apps.apple.com/us/app/rc-event-hub/id6751675873",
  },
];

export const contact = {
  email: "huzaifashahid288@gmail.com",
  phone: "+92 310 2239483",
  location: "Karachi, Pakistan",
  github: "https://github.com/huzaifashahid9",
  linkedin: "https://www.linkedin.com/in/huzaifashahid9",
  instagram: "https://www.instagram.com/huzaifaa_.shahid",
};
