import { FaTwitter, FaLinkedin } from "react-icons/fa";

// 1. Data Configuration (Easy to add new people later!)
const TEAM_MEMBERS = [
  {
    id: 1,
    name: "Vaibhav Gupta",
    role: "CEO, Co-founder",
    image: "https://thechefkart.com/_next/image?url=https%3A%2F%2Fchefkart-strapi-media.s3.ap-south-1.amazonaws.com%2FVaibhav_01_1db5d1c3eb.webp&w=1920&q=75",
    social: {
      twitter: "https://twitter.com/Vaibhavthechef",
      linkedin: "https://www.linkedin.com/in/vaibhav-gupta-iitkgp/"
    }
  },
  {
    id: 2,
    name: "Aman Gupta",
    role: "CTO, Co-founder",
    image: "https://thechefkart.com/_next/image?url=https%3A%2F%2Fchefkart-strapi-media.s3.ap-south-1.amazonaws.com%2FAman_01_a6144820a0.webp&w=1920&q=75",
    social: {
      twitter: "https://x.com/a_man__gupta?mx=2",
      linkedin: "https://www.linkedin.com/in/aman-gupta1995/"
    }
  },
  {
    id: 3,
    name: "Ameya Kannamwar",
    role: "COO",
    image: "https://thechefkart.com/_next/image?url=https%3A%2F%2Fchefkart-strapi-media.s3.ap-south-1.amazonaws.com%2FAmeya_01_31f6b17ce0.webp&w=1920&q=75",
    social: {
      twitter: "https://x.com/ameyakannamwar",
      linkedin: "https://www.linkedin.com/in/ameya-kannamwar-a6bb8242/"
    }
  }
];

// 2. Reusable Sub-Component
const ProfileCard = ({ member }) => (
  <div className="p-4 md:w-1/3 flex flex-col items-center text-center">

    {/* Image Container with Hover Effect */}
    <div className="relative w-64 h-64 sm:w-80 sm:h-80 mb-4 group">
      <img
        alt={`Portrait of ${member.name}`}
        className="w-full h-full object-cover rounded-full shadow-lg transition-transform duration-300 group-hover:scale-105 group-hover:shadow-xl"
        src={member.image}
        loading="lazy"
      />
    </div>

    {/* Text Info */}
    <h2 className="text-xl font-bold title-font text-gray-900 mt-2">
      {member.name}
    </h2>
    <h3 className="text-sm font-semibold text-red-500 uppercase tracking-wider mb-3">
      {member.role}
    </h3>

    {/* Social Links */}
    <div className="flex space-x-5">
      <SocialLink href={member.social.twitter} icon={<FaTwitter />} color="text-blue-400" label="Twitter" />
      <SocialLink href={member.social.linkedin} icon={<FaLinkedin />} color="text-blue-700" label="LinkedIn" />
    </div>
  </div>
);

// 3. Tiny helper for links
const SocialLink = ({ href, icon, color, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`${color} text-2xl transition-opacity hover:opacity-75`}
    aria-label={label}
  >
    {icon}
  </a>
);

// 4. Main Component
const GallerySection = () => {
  return (
    <section className="text-gray-600 body-font bg-gray-50/50">
      <div className="container px-5 py-24 mx-auto">

        {/* Header */}
        <div className="flex flex-col mb-16 text-center">
          <h1 className="sm:text-4xl text-3xl font-bold title-font text-gray-900 mb-4">
            The People Behind <span className="text-red-500">ChefKart</span>
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Meet the visionaries driving our mission to revolutionize your kitchen experience.
          </p>
        </div>

        {/* Dynamic Grid */}
        <div className="flex flex-wrap justify-center gap-y-10 sm:gap-y-0">
          {TEAM_MEMBERS.map((member) => (
            <ProfileCard key={member.id} member={member} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default GallerySection;