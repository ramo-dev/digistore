import Logo from "../assets/digistoreAssets/png/logo-no-background.png";
import {Flex} from 'antd'
import './ComingSoonStyles.css'
const ComingSoon = () => {
    return (
      <>
        <Flex
          className="comingSoon"
          vertical
          align="center"
          justify="center"
          gap="3rem"
        >
          <img src={Logo} alt="" />
          <Flex
            vertical
            align="center"
            justify="center"
            style={{ textAlign: "center" }}
          >
            <h1>Coming Soon</h1>
            <p>Sign Up to Our newsletter to get notified when we launch </p>
          </Flex>
          <Flex gap="small" style={{height : "50px"}}>
            <input type="text" className="input" placeholder="Enter your email..."/>
            <button className="btn">Subscribe</button>
          </Flex>
        </Flex>
        <footer>
          <Flex justify="center" style={{padding : "1rem"}}>
            {new Date().getFullYear()} &copy; DigiStore. All Rights Reserved.
          </Flex>
        </footer>
      </>
    );
}
 
export default ComingSoon;