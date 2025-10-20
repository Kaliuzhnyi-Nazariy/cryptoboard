import React from "react";
import Section from "../HeroComponents/Section";
import PeopleSlider from "./PeopleSlider";
import PeopleCommentTable from "./PeopleCommentTable";

const WhatPeopleSay = () => {
  return (
    <Section extraStyles="bg-[var(--black0)] py-14">
      <h2 className="text-center">What People Are Saying</h2>
      <div className="min-[1440px]:hidden">
        <PeopleSlider />
      </div>
      <PeopleCommentTable />
    </Section>
  );
};

export default WhatPeopleSay;
