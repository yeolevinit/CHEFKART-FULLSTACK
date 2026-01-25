import React, { useRef, useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import { motion } from "framer-motion";

// 1. Data Config
const VIDEOS = [
  "https://chefkart-strapi-media.s3.ap-south-1.amazonaws.com/v4_015b8116b1.mp4",
  "https://chefkart-strapi-media.s3.ap-south-1.amazonaws.com/v3_8de4acd8d1.mp4",
  "https://chefkart-strapi-media.s3.ap-south-1.amazonaws.com/v1_1_ce597e37d8.mp4",
  "https://chefkart-strapi-media.s3.ap-south-1.amazonaws.com/v6_b86f7e540a.mp4",
  "https://chefkart-strapi-media.s3.ap-south-1.amazonaws.com/v5_068121efcb.mp4",
];

// 2. Reusable Video Card Component
// This encapsulates the play logic so the parent doesn't need to manage refs array
const VideoCard = ({ src }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div
      className="relative group overflow-hidden rounded-xl shadow-lg cursor-pointer flex-shrink-0 w-80 md:w-auto snap-center"
      onClick={togglePlay}
    >
      <video
        ref={videoRef}
        src={src}
        className="object-cover w-full h-64 md:h-80 bg-black"
        loop
        playsInline
      // muted // Optional: Un-mute if you want sound by default
      />

      {/* Overlay - visible on hover or when paused */}
      <div className={`absolute inset-0 flex items-center justify-center bg-black/40 transition-opacity duration-300 ${isPlaying ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'}`}>
        <div className="bg-white/90 text-black p-4 rounded-full shadow-xl transform transition-transform duration-300 group-hover:scale-110">
          {isPlaying ? <FaPause className="text-xl" /> : <FaPlay className="text-xl ml-1" />}
        </div>
      </div>
    </div>
  );
};

// 3. Main Gallery Component
const VideoGallery = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-5">

        <h2 className="text-4xl font-bold text-center mb-10 text-gray-900">
          ChefKart <span className="text-orange-500">In Action</span>
        </h2>

        {/* THE MAGIC TRICK:
            1. 'flex overflow-x-auto': Makes it a horizontal scroller on mobile
            2. 'snap-x snap-mandatory': Makes it snap to each video like a slider
            3. 'md:grid md:grid-cols...': Switches to a Grid on desktop automatically
            No JavaScript needed for layout switching!
        */}
        <motion.div
          className="
            flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide
            md:grid md:grid-cols-3 lg:grid-cols-5 md:overflow-visible
          "
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {VIDEOS.map((videoSrc, index) => (
            <VideoCard key={index} src={videoSrc} />
          ))}
        </motion.div>

        {/* Mobile Swipe Hint */}
        <p className="text-center text-gray-400 text-sm mt-2 md:hidden">
          Swipe to explore videos &rarr;
        </p>

      </div>
    </section>
  );
};

export default VideoGallery;