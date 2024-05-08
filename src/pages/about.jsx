import React from "react";
import Layout from "../layouts/Layout";
import Profile from "../components/About/Profile";
import Experience from "../components/About/Experience";
import Education from "../components/About/Education";
import Skill from "../components/About/Skill";
import Utility from "../components/About/Utility";

const about = () => {
  return (
    <Layout>
      <Profile />
      <Experience />
      <Education />
      <Skill />
      <Utility />
    </Layout>
  );
};

export default about;
