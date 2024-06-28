import React from "react";
import PageTemplate from "../templates/PageTemplate";
import Card from "../molecules/Card";

const About = () => {
  return (
    <PageTemplate>
      <div className="container mx-auto py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-2">
            <div className="col-span-full md:col-start-2 md:col-span-4 flex justify-center">
              <h1 className="font-bold mb-4 text-white text-4xl md:text-6xl">About Me</h1>
            </div>
            <div className="col-span-full md:col-start-1 md:col-span-2">
              <Card MyInfo="Hello" Details="details" />
            </div>
            <div className="col-span-full md:col-start-3 md:col-span-2">
              <Card MyInfo="Hello" Details="details" />
            </div>
            <div className="col-span-full md:col-start-5 md:col-span-2">
              <Card MyInfo="Hello" Details="details" />
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
};

export default About;