// Single source of truth for business facts. Update here and every page follows.
// Items marked CONFIRM came from the old website or the Slice listing and are not yet verified by the owners.

export const site = {
  name: "Bella Italia Ristorante & Pizzeria",
  shortName: "Bella Italia",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://bella-italia-website.vercel.app",
  phone: "973-940-8600", // CONFIRM: Slice lists 973-850-4598
  phoneHref: "tel:+19739408600",
  address: {
    street: "448 US-206",
    city: "Newton",
    region: "NJ",
    zip: "07860",
    full: "448 US-206, Newton, NJ 07860",
  },
  geo: { lat: 41.0237884, lng: -74.7690887 },
  hours: [
    { days: "Sunday to Thursday", time: "11:30 AM to 9:00 PM" }, // CONFIRM
    { days: "Friday and Saturday", time: "11:30 AM to 10:00 PM" }, // CONFIRM
  ],
  orderUrl: "https://slicelife.com/restaurants/nj/newton/07860/bella-italia-ristorante-pizzeria/menu",
  mapsUrl: "https://maps.google.com/?q=Bella+Italia+Ristorante+and+Pizzeria+448+US-206+Newton+NJ+07860",
  // pb value ending in !5e1 opens the satellite view first.
  mapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.067079029874!2d-74.77166362377034!3d41.02378837134847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3713a74cd58c3%3A0xdf6bd8475db7c51a!2sBella-Italia-Ristorante-%26-Pizzeria!5e1!3m2!1sen!2sus!4v1787866650390!5m2!1sen!2sus",
  nav: [
    { href: "/", label: "Home" },
    { href: "/menu", label: "Menu" },
    { href: "/specials", label: "Specials" },
    { href: "/catering", label: "Catering & Events" },
    { href: "/bar", label: "The Bar" },
    { href: "/gallery", label: "Gallery" },
    { href: "/about", label: "About" },
    { href: "/visit", label: "Visit & ATM" },
  ],
  accessibilityContact: "CONFIRM: accessibility contact email", // placeholder until the owners provide one
};

// ATM facts. Do not add the ATM owner's company name or phone number anywhere public.
export const atm = {
  fee: "$3",
  location: "Inside Bella Italia",
  availability: "During restaurant hours", // confirmed by client
  faqs: [
    ["Is there an ATM near me in Newton, NJ?", "Yes. There is an ATM inside Bella Italia Ristorante & Pizzeria at 448 US-206, Newton, NJ 07860."],
    ["Do I have to buy food to use the ATM?", "No. Anyone can use the ATM. No purchase is required."],
    ["How much does the ATM cost to use?", "The withdrawal fee is $3. Your own bank may also charge a fee."],
    ["When can I use the ATM?", "The ATM is available during Bella Italia's restaurant hours."],
    ["Is there parking?", "Yes, parking is free."],
    ["Who do I contact about a problem with the ATM?", "Please ask a team member at Bella Italia and we will help."],
  ],
};
