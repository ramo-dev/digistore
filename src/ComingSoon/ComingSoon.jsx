import Logo from "../assets/digistoreAssets/png/logo-no-background.png";
import {toast, Toaster} from 'sonner'
import {Flex} from 'antd'
import './ComingSoonStyles.css'
import { useEffect } from "react";
const ComingSoon = () => {
    function handleFormsubmit(e){
        e.preventDefault()
        const email = e.target[0].value
        console.log(email)
        email ? toast.success(`Thank You for Subscribing, you will be notified when we launch`, { position: "top-right" }) : toast.error("Please enter a valid email", { position: "top-right" })
    }
    return (
      <>
        <Toaster richColors/>
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
}
 
export default ComingSoon;