const navLinks = [
  {
        name: "Work",
        link: "#work",
  },
  {
        name: "Experience",
        link: "#experience",
  },
  {
        name: "Skills",
        link: "#skills",
  },
  {
        name: "Testimonials",
        link: "#testimonials",
  },
  ];

const words = [
  { text: "Ventures", imgPath: "/images/ideas.svg" },
  { text: "Startups", imgPath: "/images/concepts.svg" },
  { text: "Ecosystems", imgPath: "/images/designs.svg" },
  { text: "Growth", imgPath: "/images/code.svg" },
  { text: "Ventures", imgPath: "/images/ideas.svg" },
  { text: "Startups", imgPath: "/images/concepts.svg" },
  { text: "Ecosystems", imgPath: "/images/designs.svg" },
  { text: "Growth", imgPath: "/images/code.svg" },
  ];

const counterItems = [
  { value: 12, suffix: "+", label: "Years of Experience" },
  { value: 3, suffix: "", label: "Companies Built" },
  { value: 50, suffix: "+", label: "Startups Backed" },
  { value: 90, suffix: "%", label: "Founder Retention Rate" },
  ];

const logoIconsList = [
  {
        imgPath: "/images/logos/company-logo-1.png",
  },
  {
        imgPath: "/images/logos/company-logo-2.png",
  },
  {
        imgPath: "/images/logos/company-logo-3.png",
  },
  {
        imgPath: "/images/logos/company-logo-4.png",
  },
  {
        imgPath: "/images/logos/company-logo-5.png",
  },
  {
        imgPath: "/images/logos/company-logo-6.png",
  },
  {
        imgPath: "/images/logos/company-logo-7.png",
  },
  {
        imgPath: "/images/logos/company-logo-8.png",
  },
  {
        imgPath: "/images/logos/company-logo-9.png",
  },
  {
        imgPath: "/images/logos/company-logo-10.png",
  },
  {
        imgPath: "/images/logos/company-logo-11.png",
  },
  ];

const abilities = [
  {
        imgPath: "/images/seo.png",
        title: "Strategic Vision",
        desc: "Identifying market opportunities and helping founders navigate inflection points to build enduring companies.",
  },
  {
        imgPath: "/images/chat.png",
        title: "Founder-First Approach",
        desc: "Working closely with entrepreneurs to sharpen strategy, unlock new markets, and compound long-term value.",
  },
  {
        imgPath: "/images/time.png",
        title: "Execution at Scale",
        desc: "Proven track record of scaling businesses from zero to market-defining platforms across e-commerce and fintech.",
  },
  ];

const techStackImgs = [
  {
        name: "React Developer",
        imgPath: "/images/logos/react.png",
  },
  {
        name: "Python Developer",
        imgPath: "/images/logos/python.svg",
  },
  {
        name: "Backend Developer",
        imgPath: "/images/logos/node.png",
  },
  {
        name: "Interactive Developer",
        imgPath: "/images/logos/three.png",
  },
  {
        name: "Project Manager",
        imgPath: "/images/logos/git.svg",
  },
  ];

const techStackIcons = [
  {
        name: "React Developer",
        modelPath: "/models/react_logo-transformed.glb",
        scale: 1,
        rotation: [0, 0, 0],
  },
  {
        name: "Python Developer",
        modelPath: "/models/python-transformed.glb",
        scale: 0.8,
        rotation: [0, 0, 0],
  },
  {
        name: "Backend Developer",
        modelPath: "/models/node-transformed.glb",
        scale: 5,
        rotation: [0, -Math.PI / 2, 0],
  },
  {
        name: "Interactive Developer",
        modelPath: "/models/three.js-transformed.glb",
        scale: 0.05,
        rotation: [0, 0, 0],
  },
  {
        name: "Project Manager",
        modelPath: "/models/git-svg-transformed.glb",
        scale: 0.05,
        rotation: [0, -Math.PI / 4, 0],
  },
  ];

const expCards = [
  {
        review:
                "Vishesh co-founded Shiprocket and scaled it from zero to a market-defining e-commerce enablement platform, powering logistics for 3 lakh+ entrepreneurs across India.",
        imgPath: "/images/exp1.png",
        logoPath: "/images/logo1.png",
        title: "Co-Founder & Strategic Advisor",
        date: "January 2013 - Present",
        responsibilities: [
                "Co-founded and scaled Shiprocket into India's leading e-commerce enablement platform.",
                "Led strategic initiatives across product, growth, and partnerships for over 12 years.",
                "Transitioned to Strategic Advisor role in 2025, continuing to guide the company's vision.",
              ],
  },
  {
        review:
                "As Managing Partner at Tribe Capital India, Vishesh works closely with founders building the next generation of AI, fintech, and commerce infrastructure companies.",
        imgPath: "/images/exp2.png",
        logoPath: "/images/logo2.png",
        title: "Managing Partner - Tribe Capital India",
        date: "January 2024 - Present",
        responsibilities: [
                "Investing in and advising early-stage AI, fintech, and commerce infrastructure startups.",
                "Helping entrepreneurs navigate inflection points and unlock new markets.",
                "Building long-term engines of compounding value for portfolio companies.",
              ],
  },
  {
        review:
                "Vishesh leads Kraken India as General Manager, shaping the country's crypto and digital asset ecosystem with a focus on trust and regulatory alignment.",
        imgPath: "/images/exp3.png",
        logoPath: "/images/logo3.png",
        title: "General Manager - Kraken India",
        date: "January 2025 - Present",
        responsibilities: [
                "Leading Kraken's expansion and operations in the Indian market.",
                "Building trust and strengthening regulatory alignment for digital assets.",
                "Enabling institutions and individuals to participate in the future of financial infrastructure.",
              ],
  },
  ];

const expLogos = [
  {
        name: "logo1",
        imgPath: "/images/logo1.png",
  },
  {
        name: "logo2",
        imgPath: "/images/logo2.png",
  },
  {
        name: "logo3",
        imgPath: "/images/logo3.png",
  },
  ];

const testimonials = [
  {
        name: "Saahil Goel",
        mentions: "@saahilgoel",
        review:
                "Vishesh has been an incredible co-founder and partner at Shiprocket. His vision for e-commerce enablement and his relentless drive to build have been instrumental in making Shiprocket what it is today.",
        imgPath: "/images/client1.png",
  },
  {
        name: "Arjun Sethi",
        mentions: "@arjunsethi",
        review:
                "Working with Vishesh at Tribe Capital India has been outstanding. His deep understanding of the Indian startup ecosystem combined with his operational experience makes him an invaluable partner for founders.",
        imgPath: "/images/client3.png",
  },
  {
        name: "Gautam Kapoor",
        mentions: "@gautamkapoor",
        review:
                "Vishesh brings a unique combination of entrepreneurial grit and strategic thinking. His journey from co-founding Shiprocket to leading investments at Tribe Capital is a testament to his versatility.",
        imgPath: "/images/client2.png",
  },
  {
        name: "Akshay Ghulati",
        mentions: "@akshayghulati",
        review:
                "Vishesh's ability to identify market opportunities and help founders scale is remarkable. His hands-on approach and deep domain expertise make him a trusted advisor in the ecosystem.",
        imgPath: "/images/client5.png",
  },
  {
        name: "Rohit Sood",
        mentions: "@rohitsood",
        review:
                "Having partnered with Vishesh since the early days of Shiprocket, I've witnessed firsthand his exceptional ability to build, scale, and lead. He is one of the most driven entrepreneurs I know.",
        imgPath: "/images/client4.png",
  },
  {
        name: "Pankaj Makkar",
        mentions: "@pankajmakkar",
        review:
                "Vishesh is a visionary leader who combines deep market insight with relentless execution. His contributions to India's e-commerce and startup ecosystem are truly remarkable.",
        imgPath: "/images/client6.png",
  },
  ];

const socialImgs = [
  {
        name: "insta",
        imgPath: "/images/insta.png",
  },
  {
        name: "fb",
        imgPath: "/images/fb.png",
  },
  {
        name: "x",
        imgPath: "/images/x.png",
  },
  {
        name: "linkedin",
        imgPath: "/images/linkedin.png",
  },
  ];

export {
    words,
    abilities,
    logoIconsList,
    counterItems,
    expCards,
    expLogos,
    testimonials,
    socialImgs,
    techStackIcons,
    techStackImgs,
    navLinks,

};
