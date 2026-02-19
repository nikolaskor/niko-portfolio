import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Nikolai",
  lastName: "Skor",
  name: `Nikolai Skor`,
  role: "Webutvikler & Gründer",
  avatar: "/images/avatar.jpg",
  email: "nikolai@norvalt.no",
  location: "Europe/Oslo", // Hønefoss, Norway
  languages: ["Norsk", "English"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: false, // Kan skrus på senere
  title: <>Abonner på nyhetsbrev</>,
  description: <>Tips om nettsider, SEO og digital vekst for lokale bedrifter</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/nikolaskor",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/nikolaiskor/",
    essential: true,
  },
  {
    name: "X",
    icon: "x",
    link: "https://x.com/nikolaiskor",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Hjem",
  title: `${person.name} - Webutvikler`,
  description: `Nettsider som faktisk rangerer. Ekte kode, ikke Wix-rot.`,
  headline: <>Nettsider som faktisk rangerer</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Arven Honning</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Siste prosjekt
        </Text>
      </Row>
    ),
    href: "/work/arven-honning",
  },
  subline: (
    <>
    Jeg er Nikolai, webutvikler og gründer av <Text as="span" size="xl" weight="strong">Norvalt</Text>. Jeg lager raske, <br /> SEO-optimerte nettsider for lokale bedrifter. Ekte kode, ikke Wix-rot.
</>
  ),
};

const about: About = {
  path: "/about",
  label: "Om meg",
  title: `Om – ${person.name}`,
  description: `Møt ${person.name}, ${person.role} fra Hønefoss`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com/nikolaiskor", // TODO: Sett opp Cal.com
  },
  intro: {
    display: true,
    title: "Introduksjon",
    description: (
      <>
        Jeg er en webutvikler fra Hønefoss som brenner for å lage nettsider som faktisk fungerer.
        Mens andre bruker Wix og Framer, bygger jeg med ekte kode: raskere lasting, bedre SEO,
        og full kontroll. Jeg driver også Norvalt, hvor vi hjelper bedrifter med AI og digital utvikling.
      </>
    ),
  },
  work: {
    display: true,
    title: "Erfaring",
    experiences: [
      {
        company: "Norvalt",
        timeframe: "2023 - Nå",
        role: "Gründer & Daglig leder",
        achievements: [
          <>
            Bygger AI-drevne løsninger og nettsider for lokale bedrifter i Norge.
          </>,
          <>
            Utviklet Autolead, en AI-plattform for bilforhandlere.
          </>,
        ],
        images: [],
      },
      {
        company: "USN",
        timeframe: "2025 - 2026",
        role: "Universitetslektor",
        achievements: [
          <>
            Kursansvarlig for PRO1000 Praktisk Prosjektstyring ved Universitetet i Sørøst-Norge.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Utdanning",
    institutions: [
      {
        name: "MBA",
        description: <>Executive MBA, pågående.</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Tekniske ferdigheter",
    skills: [
      {
        title: "Next.js & React",
        description: (
          <>Moderne webapplikasjoner med server-side rendering og optimal SEO.</>
        ),
        tags: [
          {
            name: "Next.js",
            icon: "nextjs",
          },
          {
            name: "React",
            icon: "react",
          },
        ],
        images: [],
      },
      {
        title: "Tailwind CSS",
        description: (
          <>Rask og responsiv styling som ser bra ut på alle enheter.</>
        ),
        tags: [
          {
            name: "Tailwind",
            icon: "tailwind",
          },
        ],
        images: [],
      },
      {
        title: "AI & Automasjon",
        description: (
          <>Integrerer AI-verktøy og automatisering for smartere løsninger.</>
        ),
        tags: [
          {
            name: "OpenAI",
            icon: "openai",
          },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blogg",
  title: "Tanker om web og teknologi",
  description: `Les hva ${person.name} skriver om`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Prosjekter",
  title: `Prosjekter – ${person.name}`,
  description: `Nettsider og utviklingsprosjekter av ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Galleri",
  title: `Bildegalleri – ${person.name}`,
  description: `Bilder fra ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
