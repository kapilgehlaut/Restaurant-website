import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">
             
Welcome to Foodie, your destination for culinary excellence in Law Gate. Our menu boasts a delightful array of dishes crafted from the finest local ingredients, expertly prepared by our skilled chefs. From classic favorites to innovative creations, each dish is a celebration of flavor and creativity. Our warm and inviting ambiance, coupled with attentive service, ensures a memorable dining experience every time you visit. Whether you're stopping by for a quick bite or enjoying a leisurely meal with loved ones, we invite you to indulge in the delicious flavors and exceptional hospitality that define "Foodie".
            </p>
            <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
