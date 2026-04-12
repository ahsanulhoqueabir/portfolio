export const contactContentSeed = {
  slug: "default",
  isActive: true,
  methods: [
    {
      title: "Email",
      description: "Send me an email anytime",
      contact: "contact.ahsanul@gmail.com",
      href: "mailto:contact.ahsanul@gmail.com",
      images: ["/images/contact/email.svg"],
      colorClass: "from-blue-500 to-cyan-500",
    },
    {
      title: "Phone",
      description: "Call me during business hours",
      contact: "+880 1875 507852",
      href: "tel:+8801875507852",
      images: ["/images/contact/phone.svg"],
      colorClass: "from-green-500 to-emerald-500",
    },
    {
      title: "Location",
      description: "Based in Dhaka, Bangladesh",
      contact: "Dhaka, Bangladesh",
      href: "#",
      images: ["/images/contact/location.svg"],
      colorClass: "from-purple-500 to-pink-500",
    },
  ],
  socialLinks: [
    {
      name: "GitHub",
      href: "https://github.com/ahsanulhoqueabir",
      username: "@ahsanulhoqueabir",
      images: ["/images/social/github.svg"],
      colorClass: "hover:text-gray-900 dark:hover:text-gray-100",
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/ahsanulhoqueabir",
      username: "ahsanulhoqueabir",
      images: ["/images/social/linkedin.svg"],
      colorClass: "hover:text-blue-600",
    },
    {
      name: "Twitter",
      href: "https://x.com/Ahsanul_H_Abir",
      username: "@Ahsanul_H_Abir",
      images: ["/images/social/twitter.svg"],
      colorClass: "hover:text-blue-400",
    },
  ],
  faqs: [
    {
      question: "What's your typical response time?",
      answer:
        "I usually respond to emails and messages within 24 hours during business days.",
    },
    {
      question: "Do you work with international clients?",
      answer:
        "Yes! I work with clients from all around the world. I'm comfortable with different time zones and communication styles.",
    },
    {
      question: "What's your preferred project communication method?",
      answer:
        "I prefer using email for formal communications and Slack or Discord for real-time project discussions.",
    },
  ],
};
