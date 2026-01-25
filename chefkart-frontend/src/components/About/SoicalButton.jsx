import { FaTwitter, FaInstagram, FaLinkedin, FaFacebookF } from "react-icons/fa";

// 1. Configuration: Easy to manage links in one place
const SOCIAL_LINKS = [
  {
    id: "twitter",
    icon: <FaTwitter />,
    href: "https://twitter.com/chefkart",
    label: "Follow us on Twitter",
    hoverColor: "hover:text-blue-400 hover:border-blue-400"
  },
  {
    id: "instagram",
    icon: <FaInstagram />,
    href: "https://instagram.com/thechefkart",
    label: "Follow us on Instagram",
    hoverColor: "hover:text-pink-600 hover:border-pink-600"
  },
  {
    id: "linkedin",
    icon: <FaLinkedin />,
    href: "https://linkedin.com/company/chefkart",
    label: "Connect on LinkedIn",
    hoverColor: "hover:text-blue-700 hover:border-blue-700"
  },
  // Easy to add more!
  {
    id: "facebook",
    icon: <FaFacebookF />,
    href: "https://facebook.com/chefkart",
    label: "Like us on Facebook",
    hoverColor: "hover:text-blue-600 hover:border-blue-600"
  }
];

const SocialSection = () => {
  return (
    <section className="flex flex-col items-center justify-center py-16 bg-white">

      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-8 tracking-tight">
        Let's Get Social
      </h2>

      {/* Icons Container */}
      <div className="flex space-x-6">
        {SOCIAL_LINKS.map((link) => (
          <a
            key={link.id}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label} // Critical for screen readers!
            className={`
              w-14 h-14 flex items-center justify-center rounded-full 
              border-2 border-gray-200 text-xl text-gray-600
              transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg
              ${link.hoverColor}
            `}
          >
            {link.icon}
          </a>
        ))}
      </div>

    </section>
  );
};

export default SocialSection;