import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Img1 from "../assets/smg.png";
import Img2 from "../assets/svtb.png";
// import Img3 from "../assets/pwa.png";
import Img4 from "../assets/nike.png";

const Work = () => {
  return (
    <section id="work" className="section">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0"
          >
            {/* text */}
            <div>
              <h2 className="h2 leading-tight text-accent">
                My Latest <br /> Work.
              </h2>
              <p className="max-w-sm mb-16">
                Here are a few of the live projects I have worked on
              </p>

              <button className="btn btn-sm">
                <a href="https://github.com/ifeanyiosi">View all on Github</a>
              </button>
            </div>

            {/* image */}

            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img
                className="group-hover:scale-125 transition-all duration-500 "
                src={Img1}
                alt=""
              />

              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-700 z-50">
                <a
                  className="lg:text-3xl text-[24px] text-white"
                  href="https://sourcemygadgets.com"
                >
                  SourceMyGadgets Homepage and E-commerce page
                </a>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-10 "
          >
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img
                className="group-hover:scale-125 transition-all duration-500 "
                src={Img2}
                alt=""
              />

              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-700 z-50">
                <a
                  className="lg:text-3xl text-[24px] text-white"
                  href="https://savetobuy.io"
                >
                  Save To Buy Application
                </a>
              </div>
            </div>

            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img
                className="group-hover:scale-125 transition-all duration-500 "
                src={Img4}
                alt=""
              />

              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-700 z-50">
                <a
                  className="lg:text-3xl text-[24px] text-white"
                  href="https://ifeanyi-nike.netlify.app"
                >
                  Nike E-commerce page
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
