import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { fadeIn } from "../variants";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  return (
    <section id="about" className="section" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          {/* image */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 bg-about bg-no-repeat h-[640px] mix-blend-lighten bg-top"
          ></motion.div>
          {/* text */}
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
            className="flex-1 "
          >
            <h2 className="h2 text-accent">About me</h2>
            <h3 className="h3 mb-4">
              I am a Freelance Front-end developer with 3 years of experience
            </h3>
            <p className="mb-6">
              I fell in love with programming during the covid pandemic and I
              have been having fun with it, I think… 🤷‍♂️ I am fluent in classics
              like React.js and Figma My field of Interest's are building new
              Web Technologies and Products and also in areas related to Deep
              Learning and Natural Language Processing. Whenever possible, I
              also apply my passion for developing products with Node.js and
              Modern Javascript Library and Frameworks like React.js and React
              Native
            </p>
            {/* stats */}
            <div className="flex gap-x-6 lg:gap-x-10 mb-12">
              <div>
                <div className="text-[20px] font-tertiary text-gradient mb-2 ">
                  {inView ? <CountUp start={0} end={3} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Years of <br /> Experience
                </div>
              </div>
              <div>
                <div className="text-[20px] font-tertiary text-gradient mb-2 ">
                  {inView ? <CountUp start={0} end={8} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Projects <br /> Completed
                </div>
              </div>
              <div>
                <div className="text-[20px] font-tertiary text-gradient mb-2 ">
                  {inView ? <CountUp start={0} end={130} duration={3} /> : null}
                  k+
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Satisfied <br /> Users
                </div>
              </div>
            </div>
            <div className="flex gap-x-8 items-center">
              <button className="btn btn-lg">
                <Link
                  activeClass="active"
                  smooth={true}
                  spy={true}
                  to="contact"
                  className="cursor-pointer flex items-center justify-center"
                >
                  Contact me
                </Link>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
