import React from "react";
import { Avatar } from "@mui/material";
import Header from "./components/Header";
import Button from "./components/Button";
import ProfilePic from "./assets/images/profile-pic.jpg"
import "./App.css";

const App: React.FC = () => {
  const navItems = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  const handleGetInTouch = () => {
    alert("Clicked");
  };

  return (
    <div className="App">
      <Header logo="WS" navItems={navItems} />
      <main>
        <section id="intro" className="intro">
          <Avatar
            alt="Wilson Sousa's profile picture"
            src={ProfilePic}
            sx={{ width: 213, height: 213 }}
          />
          <div className="title-group">
            <h1 className="title">
              I do code and <br/> turn it into <span>amazing things!</span>
            </h1>
          </div>

          <div className="paragraph-group">
            <p className="paragraph">
              With over 2 years of professional experience in Web Development
              and more than 4 years of active study in Software Development, I
              have focused my specialization on Back-end solutions with Python,
              Django, and PostgreSQL. I aim to develop professionally by
              increasing my experience as a programmer and creating effective
              solutions for complex problems.
            </p>
          </div>

          <div className="button-group">
            <Button
              label="Get in Touch"
              onClick={handleGetInTouch}
              type="primary"
            />
            <Button
              label="Download CV"
              onClick={handleGetInTouch}
              type="secondary"
            />
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;
