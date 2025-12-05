const services = [
  {
    id: 1,
    title: 'FastChat for Woo',
    category: 'Micro-SaaS / Plugin',
    description:
      "Extension pour WooCommerce permettant aux e-commerçants d'envoyer des messages WhatsApp pré-remplis à leurs clients en un clic depuis l'admin. Réduit le temps de SAV de 30%.",
    techStack: ['React', 'PHP', 'WooCommerce API', 'HPOS Compatible'],
    status: "Disponible à l'achat",
    link: 'https://wpcodelab.lemonsqueezy.com/buy/09f40a27-5ad2-4ec4-89d7-d1f7e12edf43',
    isPrimary: true, // Pour le mettre en avant
    iconType: 'saas',
  },
  {
    id: 2,
    title: 'Développement Sur-Mesure',
    category: 'Service Freelance',
    description:
      "Conception d'applications web complexes et de plugins WordPress sur-mesure. Architecture Headless, APIs robustes et interfaces modernes.",
    techStack: ['Next.js', 'Node.js', 'WordPress', 'Stripe', 'Angular', 'Tailwind CSS'],
    status: 'Disponible pour mission',
    link: '#contact',
    isPrimary: false,
    iconType: 'dev',
  },
]

export default services
