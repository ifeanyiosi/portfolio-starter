import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { fadeIn } from "../variants";

const services = [
  {
    name: "Front-End Developer",
    description:
      "As a front-end developer, my primary focus is on creating visually appealing and user-friendly websites and applications using web technologies such as HTML, CSS, JavaScript and React (Typescript too). My goal is to provide an exceptional user experience, regardless of the device or platform being used.",
    link: "Learn more",
  },
  {
    name: "React Native Developer",
    description:
      "As a React Native developer, my focus is on building mobile applications that are both visually appealing and functionally efficient. React Native is a popular framework that allows me to create cross-platform applications using JavaScript and React.",
    link: "Learn more",
  },
  {
    name: "CV Writing",
    description:
      "As a professional CV writer, my focus is on helping job seekers create impactful resumes and cover letters that effectively highlight their skills, experience, and achievements. I work closely with my clients to understand their career goals and tailor their documents to showcase their unique strengths and qualifications.",
    link: "Learn more",
  },
];

const Services = () => {
  return (
    <section id="services" className="section">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
            className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0"
          >
            <h2 className="h2 text-accent mb-6">What I Do</h2>
            <h3 className="h3 max-w-[455px] mb-16">
              I am a Freelance Front-end developer with 3 years of experience
            </h3>
            <button className="btn btn-sm">
              <Link
                activeClass="active"
                smooth={true}
                spy={true}
                to="work"
                className="cursor-pointer  flex items-center justify-center"
              >
                See my works
              </Link>
            </button>
          </motion.div>
          {/* services */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
            className="flex-1"
          >
            {/* services */}
            <div className="  ">
              {services.map((service, index) => {
                const { name, description } = service;
                return (
                  <div
                    className="border-b border-white/20 max-h-[100%] mb-[38px] flex"
                    key={index}
                  >
                    <div className="max-w-[476px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6 ">
                        {name}
                      </h4>
                      <p className="font-secondary leading-tight py-4">
                        {description}
                      </p>
                    </div>
                    {/* <div className="flex flex-col flex-1 items-end">
                      <a
                        className="btn w-9 h-9 mb-[42px] flex justify-center items-center"
                        href="#"
                      >
                        <BsArrowUpRight />
                      </a>
                      <a className="text-gradient text-[10px]" href="#">
                        {link}
                      </a>
                    </div> */}
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
