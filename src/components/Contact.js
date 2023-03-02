import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Contact = () => {
  return (
    <section id="contact" className=" py-16 lg:section ">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row mb-8">
          {/* text */}

          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex justify-start items-center"
          >
            <div>
              <h4 className="text-xl uppercase text-accent font-medium mb-2 tracking-wide">
                Get in touch
              </h4>
              <h2 className="text-[45px] lg:text-[90px] leading-none mb-12 ">
                Let's work <br /> together!
              </h2>
              <p className="">
                I’m interested in freelance opportunities <br /> especially
                ambitious or large projects. <br /> However, if you have other
                request or question, <br /> don’t hesitate to use the form.
              </p>
            </div>
          </motion.div>
          {/* form */}
          <motion.form
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 border rounded-2xl flex flex-col gap-y-6 mb-24 mt-4 p-6 items-start "
          >
            <div className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all ">
              <span>Ifeanyi Osi-Okeke</span>
            </div>
            <div className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all ">
              <span>ifeanyi.osi.okeke@gmail.com</span>
            </div>
            <div className="bg-transparent  py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all ">
              <span>+2348034476993</span>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
