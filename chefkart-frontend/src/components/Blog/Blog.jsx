import { motion } from "framer-motion";
import Hero from "./Hero";
import TabSwitch from "./BlogTab";

const Blog = () => {
    return (
        // 1. Semantic Tag: <main> tells Google this is the unique content of the page
        // 2. Animation: Smooth fade-in when the user navigates here
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen bg-gray-50" // Adds a subtle background color
        >
            {/* The Hero section usually spans full width */}
            <Hero />

            {/* The TabSwitch (content) needs constraints so it's readable */}
            <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <TabSwitch />
            </section>

        </motion.main>
    );
};

export default Blog;