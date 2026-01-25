import { useForm } from "react-hook-form";

const Contacts = () => {
  // 1. Setup React Hook Form for easy state management and validation
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm();

  // 2. Handle the actual submission
  const onSubmit = async (data) => {
    console.log("Form Data:", data);
    // Simulate an API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    alert("Message sent successfully!");
  };

  return (
    <section className="text-gray-600 body-font relative">
      <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">

        {/* --- Left Side: Map/Image --- */}
        <div className="lg:w-2/3 md:w-1/2 w-full bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative min-h-[400px]">
          <img
            className="absolute inset-0 w-full h-full object-cover object-center"
            src="https://thechefkart.com/_next/image?url=https%3A%2F%2Fchefkart-strapi-media.s3.ap-south-1.amazonaws.com%2Fi_Stock_495494292_1_6e708dc61d_37ec0073ce.webp&w=1920&q=75"
            alt="ChefKart Operation Map in Gurgaon"
            loading="lazy" // Performance boost
          />

          {/* Optional: Overlay box with address info */}
          <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md w-full max-w-md opacity-90">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
              <p className="mt-1">Gurgaon, Haryana, India</p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
              <a href="mailto:contact@chefkart.com" className="text-orange-500 leading-relaxed">contact@chefkart.com</a>
            </div>
          </div>
        </div>

        {/* --- Right Side: Contact Form --- */}
        <div className="lg:w-1/3 md:w-1/2 w-full bg-white flex flex-col md:ml-auto md:py-8 mt-8 md:mt-0">
          <h2 className="text-gray-900 mb-1 text-3xl font-medium title-font text-center">
            Operating in Gurgaon!
          </h2>
          <p className="leading-relaxed mb-5 text-gray-600 text-center">
            Connect with us for the best chef services.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">

            {/* Name Field */}
            <div className="relative">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
              <input
                id="name"
                type="text"
                {...register("name", { required: "Name is required" })}
                className={`w-full bg-white rounded border text-base outline-none py-2 px-3 leading-8 transition-colors duration-200 ease-in-out ${errors.name ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200'}`}
              />
              {errors.name && <span className="text-red-500 text-xs">{errors.name.message}</span>}
            </div>

            {/* Email Field */}
            <div className="relative">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
              <input
                id="email"
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address"
                  }
                })}
                className={`w-full bg-white rounded border text-base outline-none py-2 px-3 leading-8 transition-colors duration-200 ease-in-out ${errors.email ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200'}`}
              />
              {errors.email && <span className="text-red-500 text-xs">{errors.email.message}</span>}
            </div>

            {/* Phone & City Row */}
            <div className="flex gap-2">
              <div className="relative w-1/2">
                <label htmlFor="phone" className="leading-7 text-sm text-gray-600">Phone</label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="+91"
                  {...register("phone", { required: true })}
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative w-1/2">
                <label htmlFor="city" className="leading-7 text-sm text-gray-600">City</label>
                <input
                  id="city"
                  type="text"
                  {...register("city")}
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>

            {/* Message Field */}
            <div className="relative">
              <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
              <textarea
                id="message"
                {...register("message")}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none py-2 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded text-lg transition-colors duration-300 disabled:bg-orange-300"
            >
              {isSubmitting ? "Sending..." : "Submit"}
            </button>

          </form>
        </div>
      </div>
    </section>
  );
};

export default Contacts;