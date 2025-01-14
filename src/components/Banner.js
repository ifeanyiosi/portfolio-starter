import React from "react";
import Image from "../assets/avatar.svg";
import { FaGithub, FaBehance, FaLinkedin } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { fadeIn } from "../variants";

const Banner = () => {
  return (
    <section
      id="home"
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center "
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12 ">
          <div className="">
            {/* text */}
            <div className="flex-1 text-center font-secondary lg:text-left">
              <motion.h1
                variants={fadeIn("up", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="text-[55px] font-bold leading-[0.8] lg:text-[110px]"
              >
                IFEANYI <span>OSI-OKEKE</span>
              </motion.h1>
              <motion.div
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase items-center justify-center leading-[1]"
              >
                <span className="mr-4 text-white">I am a</span>
                <TypeAnimation
                  sequence={["Developer", 2000, "Gamer", 2000]}
                  speed={50}
                  className="text-accent"
                  wrapper="span"
                  repeat={Infinity}
                />
              </motion.div>
            </div>
            {/* image */}

            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 max-w-lg mx-auto lg:mx-0"
            >
              Hi Everyone, I am Ifeanyi Osi-Okeke I am a Web Designer and
              Developer. I love to solve problems using Javascript
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
            >
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
              <a
                href="https://drive.google.com/file/d/1d1wqvESH4yTn5O7JGnqwmaQCFIwlJ8qs/view?usp=share_link"
                className="text-gradient btn-link"
              >
                My Resume
              </a>
            </motion.div>
            {/* socials */}
            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0"
            >
              <a href="https://github.com/ifeanyiosi">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/ifeanyi-osi-okeke-0ba4447a/">
                <FaLinkedin />
              </a>
              <a href="https://www.behance.net/ifeanyiokeke">
                <FaBehance />
              </a>
            </motion.div>
          </div>

          {/* image */}
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]"
          >
            <img src={Image} alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
