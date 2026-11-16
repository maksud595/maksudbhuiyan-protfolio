export const profile = {
  name: "Md. Maksud Bhuiyan",
  role: "Senior Executive Backend Developer",
  location: "Dhaka, Bangladesh",
  email: "mdmaksudbhuiyan595@gmail.com",
  whatsapp: "https://wa.me/8801718306272",
  linkedin: "https://www.linkedin.com/in/md-maksud-bhuiyan-b10045185",
  github: "https://github.com/maksud595",
  cv: "/Md_Maksud_Bhuiyan_CV.pdf"
};

export const stats = [
  { value: "3+", label: "Years experience" },
  { value: "18+", label: "Live projects & products" },
  { value: "30+", label: "Tools & technologies" },
  { value: "AI", label: "Agents & automation" }
];

export const skills = [
  { title: "Backend Engineering", items: ["PHP", "Laravel", "Node.js", "Express.js", "REST APIs", "JWT & Sanctum", "Webhooks", "SaaS Architecture"] },
  { title: "AI & Agentic Automation", items: ["OpenAI API", "Claude API", "Gemini API", "AI Agents", "Function Calling", "n8n", "Prompt Engineering", "Human-in-the-Loop"] },
  { title: "Integrations", items: ["WhatsApp Cloud API", "Stripe", "Twilio", "AWS SES", "Google Maps API", "Payment Gateways"] },
  { title: "Frontend", items: ["JavaScript", "React.js", "Next.js", "Tailwind CSS", "HTML5", "CSS3", "AJAX", "jQuery"] },
  { title: "Data & Storage", items: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "Amazon S3", "Database Design"] },
  { title: "Cloud & DevOps", items: ["AWS", "Docker", "Nginx", "Linux", "DigitalOcean", "Cloudflare", "VPS", "CI/CD"] }
];

export type Category = "Websites" | "Web apps" | "Mobile apps" | "Open source";
export const categories: Category[] = ["Websites", "Web apps", "Mobile apps", "Open source"];

export const projects: {
  name: string;
  type: string;
  category: Category;
  description: string;
  url: string;
  stack: string[];
}[] = [
  { name: "Aurum Star Health", type: "Healthcare platform", category: "Web apps", description: "Healthcare web platform with backend and integration contributions.", url: "https://aurumstarhealth.com/", stack: ["Laravel", "PHP", "API"] },
  { name: "ABG Performance", type: "Business website", category: "Websites", description: "Professional business website with web development and implementation contributions.", url: "https://abgperformance.ch/", stack: ["Web Development", "Integration"] },
  { name: "VirtueHope", type: "Website", category: "Websites", description: "Collaborative website project with contributions to application functionality and integration.", url: "https://virtuehope.com/", stack: ["Web", "Backend"] },
  { name: "StudioSpace Dashboard", type: "Web dashboard", category: "Web apps", description: "Business dashboard project built collaboratively.", url: "https://dashboard.studiospace.art/", stack: ["Dashboard", "API"] },
  { name: "RentHepo", type: "Mobile application", category: "Mobile apps", description: "Rental marketplace mobile app available on Android and iOS.", url: "https://play.google.com/store/apps/details?id=com.anonymous.Renthapo", stack: ["Mobile", "API"] },
  { name: "SweetTReats", type: "Mobile application", category: "Mobile apps", description: "Food ordering mobile application available on Android and iOS.", url: "https://play.google.com/store/apps/details?id=com.INFINYTUM.SweetTReats", stack: ["Mobile", "Integration"] },
  { name: "DreamCompass", type: "Mobile application", category: "Mobile apps", description: "Personal development mobile application.", url: "https://play.google.com/store/apps/details?id=com.kevinpatrick.dreamcompass", stack: ["Mobile App"] },
  { name: "Doogoo", type: "Habit tracking app", category: "Mobile apps", description: "Habit tracking and productivity mobile application.", url: "https://play.google.com/store/apps/details?id=com.andrewdalyhabittracking.doogoo", stack: ["Mobile App"] },
  { name: "Pocketoire", type: "Website", category: "Websites", description: "Collaborative web project.", url: "https://pocketoire.com/", stack: ["Web Development"] },
  { name: "Mr Nice App", type: "Website", category: "Websites", description: "Collaborative website project.", url: "https://mrniceapp.com/", stack: ["Web Development"] },
  { name: "Solbridge Capital", type: "Website", category: "Websites", description: "Financial services website project.", url: "http://solbridge-capital.com/", stack: ["Web Development"] },
  { name: "DevFinder", type: "Web platform", category: "Web apps", description: "Collaborative web platform project.", url: "https://www.devfinder.lu/", stack: ["Web Platform"] },
  { name: "SkySail Coastal", type: "Website", category: "Websites", description: "Client website project.", url: "https://client.skysailcoastal.com/", stack: ["Web Development"] },
  { name: "ClearPath Pet", type: "Website", category: "Websites", description: "Pet services website project.", url: "https://clearpathpet.com/", stack: ["Web Development"] },
  { name: "Lovely's Meal Plans", type: "Website", category: "Websites", description: "Meal planning website project.", url: "https://lovelysmealplans.com/", stack: ["Web Development"] },
  { name: "Coverage Grader", type: "Web platform", category: "Web apps", description: "Collaborative web platform project.", url: "https://coveragegrader.com/", stack: ["Web Platform"] },
  { name: "Nails by Codie Dashboard", type: "Web dashboard", category: "Web apps", description: "Collaborative business dashboard project.", url: "https://dashboard.nailsbycodie.shop/", stack: ["Dashboard"] },
  { name: "Try On and Fit", type: "Web platform", category: "Web apps", description: "Fashion-related web platform project.", url: "https://www.tryonandfit.com/", stack: ["Web Platform"] },
  { name: "SparkTech Laravel Auth", type: "Open-source package", category: "Open source", description: "Reusable Laravel authentication package published on Packagist.", url: "https://packagist.org/packages/sparktech/laravel-auth", stack: ["PHP", "Laravel", "Composer"] }
];

export const aiProjects = [
  {
    name: "AI Business Radar",
    summary: "AI-powered business opportunity research platform.",
    stack: ["Laravel", "MySQL", "n8n", "OpenAI", "Claude", "Gemini", "Docker"],
    features: ["Automated opportunity discovery", "Multi-step research workflows", "Competitor analysis and opportunity scoring", "Evidence-based AI reports"]
  },
  {
    name: "WhatsApp AI Sales Agent",
    summary: "AI-powered WhatsApp automation for sales conversations.",
    stack: ["WhatsApp Cloud API", "OpenAI", "Laravel", "MySQL", "n8n"],
    features: ["Automated customer conversations", "AI product recommendations", "Lead collection", "Human handoff"]
  },
  {
    name: "AI Customer Service Agent",
    summary: "AI-powered support across WhatsApp, email and website live chat.",
    stack: ["LLM APIs", "Multi-channel integrations", "Backend workflows"],
    features: ["Automated order status checking", "Intelligent email responses", "Human escalation", "Multi-channel communication"]
  },
  {
    name: "AI Email Automation",
    summary: "AI-powered email processing and workflow automation.",
    stack: ["LLM APIs", "n8n", "Backend integrations"],
    features: ["Email classification", "Response drafting", "Customer inquiry management", "Integration with business systems"]
  }
];

export const aiWorkflow = [
  "AI-assisted development and faster API integration",
  "AI-assisted debugging and code optimization",
  "Boilerplate and reusable component generation",
  "AI-assisted database design, documentation and deployment workflows"
];

export const experiences = [
  {
    role: "Senior Executive – Backend Developer",
    company: "Spark Tech Agency",
    period: "17 Aug 2024 – Present",
    current: true,
    highlights: [
      "Design and develop scalable backend systems with Laravel and PHP for web and mobile applications.",
      "Build REST APIs, SaaS platforms and business management systems for international clients.",
      "Integrate payment gateways and third-party services such as Stripe, WhatsApp Cloud API, Twilio and AWS SES.",
      "Manage deployments across VPS, AWS, Docker and Nginx; integrate AI APIs into application workflows."
    ]
  },
  {
    role: "Junior Web Developer",
    company: "SEO EXPATE BANGLADESH LTD.",
    period: "17 Dec 2023 – 31 May 2024",
    current: false,
    highlights: [
      "Developed, tested and maintained full-stack web applications using Laravel, PHP, JavaScript, AJAX and jQuery.",
      "Designed database components, built responsive interfaces and integrated AWS services.",
      "Performed debugging and unit testing in collaboration with product and design teams."
    ]
  },
  {
    role: "Trainee Programmer",
    company: "Kodeeo",
    period: "10 Mar 2023 – 10 Dec 2023",
    current: false,
    highlights: [
      "Developed and maintained full-stack web applications using PHP and Laravel.",
      "Worked on database design, CRUD operations, application logic and frontend integration.",
      "Followed coding standards, troubleshot issues and performed unit testing."
    ]
  }
];
