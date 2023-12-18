import React from "react";
import img from "../assets/img/CG.png";
import Button from "../layouts/Button";

const openLinkInNewTab = (url) => {
  const newTab = window.open(url, '_blank');
  if (newTab) {
    newTab.focus();
  }
};

const About = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row justify-center items-center lg:px-32 px-5">
      <img src={img} alt="img" />

      <div className="space-y-4 lg:pt-14">
        <h1 className="font-semibold text-4xl text-center md:text-start">
          Why Choose Us?
        </h1>
        <p className=" text-brightColor">Welcome to Cluster Globals – Your Freshness Source!</p>
        <p>
        Cluster Globals exports top-quality products to bring the best to your table. Enjoy the goodness of nature with our Fresh Vegetables and Fruits, handpicked for freshness and flavor. Elevate your dishes with our Kitchen Spices & Purées, and discover the convenience of Dehydrated Flakes & Powder for easy and nutritious cooking.
        </p>
        <p>
        Choose Cluster Globals for a world of freshness delivered right to you!
        </p>
        <div className="flex justify-center lg:justify-start">
          <Button
            title="Learn More"
            onClick={() => openLinkInNewTab("https://wa.me/qr/RNVOTWNQ4SXCG1")}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
