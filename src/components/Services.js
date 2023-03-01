import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const services = [
  {
    name: "SourceMyGadgets Website",
    description: "",
    link: "Learn more",
  },
  {
    name: "SaveToBuy Landing Page",
    description: "",
    link: "Learn more",
  },
  {
    name: "SaveToBuy Homepage",
    description: "",
    link: "Learn more",
  },
  {
    name: "Nike E-commerce page",
    description: "",
    link: "Learn more",
  },
  {
    name: "PWA Weather App",
    description: "",
    link: "Learn more",
  },
  {
    name: "Food Delivery App",
    description: "",
    link: "Learn more",
  },
];

const Services = () => {
  return (
    <section id="services" className="section">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text */}
          <div className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0">
            <h2 className="h2 text-accent mb-6">What I Do</h2>
            <h3 className="h3 max-w-[455px] mb-16">
              I am a Freelance Front-end developer with 3 years of experience
            </h3>
            <button className="btn btn-sm">See my work</button>
          </div>
          {/* services */}
          <div lassName="flex-1">
            {/* services */}
            <div className="">
              {services.map((service, index) => {
                const { name, description, link } = service;
                return (
                  <div key={index}>
                    <div className="max-w-[476px]">
                      <h4>{name}</h4>
                      <p>{description}</p>
                    </div>
                    <div>links</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
