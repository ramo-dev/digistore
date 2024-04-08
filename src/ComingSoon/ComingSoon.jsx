import { useState } from "react";
import { toast, Toaster } from "sonner";
import { Flex } from "antd";
import "./ComingSoonStyles.css";
import { db } from "../utils/firebase";
import Logo from "../assets/digistoreAssets/png/logo-no-background.png";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";

const ComingSoon = () => {
  const [email, setEmail] = useState("");


  async function MailSubscriber(email) {
    try {
      await fetch(import.meta.env.VITE_APP_SENDSUB_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email }), // Send only the email
      });
    } catch (err) {
      console.error(err);
    }
  }

  const handleFormsubmit = async (e) => {
    e.preventDefault();
    const inputEmail = e.target[0].value;

    if (inputEmail) {
      const emailExists = await emailAlreadyExists(inputEmail);
      if (!emailExists) {
        await addSubscriber(inputEmail);
        toast.success(
          `Thank you for subscribing! You will be notified when we launch.`
        );
        setTimeout(()=>{
          toast.info("If you don't receive an email, please check your spam folder.")
        },2000)
        await MailSubscriber(inputEmail);
      } else {
        toast.error(`This email is already subscribed.`);
      }
    } else {
      toast.error(`Please enter a valid email.`);
    }

    e.target.reset();
  };

  const emailAlreadyExists = async (inputEmail) => {
    const q = query(
      collection(db, "subscribers"),
      where("email", "==", inputEmail)
    );
    const querySnapshot = await getDocs(q);
    return !querySnapshot.empty;
  };

  const addSubscriber = async (inputEmail) => {
    try {
      await addDoc(collection(db, "subscribers"), { email: inputEmail });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Toaster richColors position="top-right" />
      <Flex
        className="comingSoon"
        vertical
        align="center"
        justify="center"
        gap="3rem"
      >
        <img
          src={Logo}
          alt="DigiStore - Premier Platform for Talented Individuals"
        />
        <Flex
          vertical
          align="center"
          justify="center"
          style={{ textAlign: "center" }}
        >
          <h1>Coming Soon</h1>
          <p>Sign Up to Our newsletter to get notified when we launch </p>
        </Flex>
        <form action="" className="subscribeForm" onSubmit={handleFormsubmit}>
          <input
            type="email"
            className="input"
            placeholder="Enter your email..."
            required
          />
          <button className="btn">Subscribe</button>
        </form>
      </Flex>
      <footer>
        <Flex justify="center" style={{ padding: "1rem" }}>
          {new Date().getFullYear()} &copy; DigiStore. All Rights Reserved.
        </Flex>
      </footer>
    </>
  );
};

export default ComingSoon;
