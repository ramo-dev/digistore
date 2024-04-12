import React, { useState } from "react";
import { RocketOutlined, FileSearchOutlined } from "@ant-design/icons";
import { Flex, Rate } from "antd";
import HeroImg from "../../assets/HeroImg.jpg";
import HeroImg2 from "../../assets/Hero2.jpg";
import HeroImg3 from "../../assets/Hero4.jpg";
import "./HomeStyles.css";
import Footer from "../Footer/Footer";
import MouseScroll from "./UI/MouseScroll";
const HomeComponent = () => {
  const [fadeIn, setFadeIn] = useState(false);

  if (window.scrollY > 0 && !fadeIn) {
    setFadeIn(true);
  }

  return (
    <>
      <MouseScroll />
      <Flex className="MainComponent" wrap="wrap">
        <Flex vertical className="HeroText">
          <h1>
            <span>DigiStore.</span> The Digital Marketplace for{" "}
            <span style={{ color: "var( --color)" }}>Everyone!</span>
          </h1>
          <p>
            Where talent meets opportunity, discover and share diverse services
            with ease
          </p>
          <Flex gap="1rem" style={{ margin: "1rem 0" }} className="HeroButtons">
            <button className="btn">Sell Services</button>
            <button className="btn inverse-btn">Buy Services</button>
          </Flex>
        </Flex>
        <img src={HeroImg} alt="Photo By Bwana Omar on Unsplash" />
      </Flex>
      <Flex className="Homesection" wrap="wrap">
        <img
          src={HeroImg2}
          alt="Photo By Bwana Omar on Unsplash"
          className={`circleImage ${fadeIn ? "fadeInLeft" : ""}`}
        />
        <Flex vertical className={`TextArea1 ${fadeIn ? "fadeInRight" : ""}`}>
          <h3>Explore, Connect, and Share Your Unique Skills and Services</h3>
          <p>
            DigiTalent, the premier platform where talented individuals like you
            converge to showcase their exceptional abilities and connect with a
            global audience hungry for unique services. Whether you're a master
            craftsman, a green-thumbed gardener, a visionary painter, or possess
            any other remarkable talent, DigiTalent is your stage to shine.
          </p>
        </Flex>
      </Flex>
      <Flex
        className="Homesection Homesection2"
        style={{ flexDirection: "row-reverse" }}
      >
        <img
          src={HeroImg3}
          alt="Photo By Bwana Omar on Unsplash"
          className="circleImage"
        />
        <Flex vertical className="TextArea1 TextArea2">
          <h3>
            Browse a World of Skills and join the fastest growing network in
            Africa
          </h3>
          <p>
            Dive into our diverse repository of talents spanning various
            categories, from artisanal craftsmanship to organic vegetable
            cultivation, from mesmerizing paintings to captivating performances.
            Discover the breadth and depth of human ingenuity right at your
            fingertips.
          </p>
        </Flex>
      </Flex>


      {/* Register options */}
      <Flex
        className="Homesection Homesection3"
        align="center"
        justify="center"
        wrap="wrap"
      >
        <div className="textArea3">
          <div className="backgroundImg"></div>
          <h3>Built with Entrepreneurs for Entrepreneurs</h3>

          <Flex gap="3rem" style={{ marginTop: "1.5rem" }} wrap="wrap" className="HomeSectoion3Wrapper">
            <Flex
              vertical
              style={{ maxWidth: "450px" }}
              gap="1.35rem"
              className="inverse"
            >
              <div className="iconCircle">
                <RocketOutlined rotate={40} />
              </div>
              <h2>Create a seller Profile to sell your services</h2>
              <p>
                Create a profile and showcase your skills on DigiStore.
                Highlight your work, expertise, and experience in your
                respective field to attract potential buyers.
              </p>
              <button className="btn">Register as a seller</button>
            </Flex>

            <Flex
              vertical
              style={{ maxWidth: "450px", textAlign: "start" }}
              gap="1.3rem"
              className="not-inverse"
            >
              <div className="iconCircle">
                <FileSearchOutlined />
              </div>
              <h2>Discover and buy services around you.</h2>
              <p>
                Discover a diverse range of talents and services posted by
                individuals across Africa on DigiStore. Explore categories like
                photography, baking, catering, and more
              </p>
              <button className="btn inverse-btn">Register as a buyer</button>
            </Flex>
          </Flex>
        </div>
      </Flex>
      {/* Testimonials */}
      <Flex vertical className="testimonials" gap="1rem" wrap="wrap">
        <h1>Testimonials</h1>
        <p>see what people are saying about DigiStore</p>

        <Flex
          gap="3rem"
          style={{ textAlign: "center" }}
          className="testimonials-container"
          wrap="wrap"
        >
          <Flex vertical gap=".6rem">
            <img src={HeroImg} alt="" />
            <h3>Belinda . O</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
              quos!
            </p>
          </Flex>
          <Flex vertical gap=".6rem">
            <img src={HeroImg2} alt="" />
            <h3>John Doe</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa,
              maxime?
            </p>
          </Flex>
          <Flex vertical gap=".6rem">
            <img
              src="https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg"
              alt=""
            />
            <h3>Mary . A</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
              quibusdam?
            </p>
          </Flex>
        </Flex>
      </Flex>
      {/* Our Community */}
      <Flex vertical align="center" gap="2rem" className="CommunityCount">
        <h1>Join our growing community</h1>
        <Flex className="CommCountCont">
          <Flex vertical>
            <h2>19k+</h2>
            <p>Products Sold</p>
          </Flex>
          <Flex vertical>
            <h2>9000+</h2>
            <p>Digistore members</p>
          </Flex>
          <Flex vertical>
            <h2>90k+</h2>
            <p>Subscribers</p>
          </Flex>
        </Flex>
      </Flex>
      {/* Subscribe to our newsLetter */}
      <div className="newsLetter">
        <h1>Get Insights About Digistore</h1>
        <Flex gap="3rem" align="center" className="NewsLetterWrapper">
          <Flex vertical className="newsLetterText">
            <h2>
              Subscrbe to Our newsletter to get latest updates on DIgiStore
            </h2>
            <p>
              Join 90,000 Subscribers from the everywhere in the world. We'll
              also send you updates when new versions are published.
            </p>
          </Flex>
          <form>
            <Flex>
              <input type="email" placeholder="Enter your email" />
              <button className="btn">Subscribe</button>
            </Flex>
          </form>
        </Flex>
      </div>
      {/* Footer */}
      <Footer />
    </>
  );
};

export default HomeComponent;
/* bwana-omar-ZK84kFphriI-unsplash 1 */
