import React from "react";
import "./Contact.css";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";
const Contact = () => {
  return (
    <section className="c-wrapper">
  <div className="paddings innerwidth flexCenter c-container">
    {/* Left side */}
    <div className="flexColStart c-left">
      <span className="orangeText">Our Contacts</span>
      <span className="primaryText">Easy to Contact Us</span>
      <span className="secondaryText">
        We are always ready to help by providing the best services for you.<br/>
         We believe a good place to live can make your life better.
      </span>
      <div className="contactModes">
        {/* Mode 1 */}
        <div className="mode">
          <div className="flexStart">
            <div className="flexCenter icon">
              <MdCall size={25} />
            </div>
            <div className="flexColStart detail">
              <span className="primaryText">Call</span>
              <span className="secondaryText">021 123 145 14</span>
            </div>
          </div>
          <div className="flexCenter button">Call Now</div>
        </div>
        {/* Mode 2 */}
        <div className="mode">
          <div className="flexStart">
            <div className="flexCenter icon">
              <BsFillChatDotsFill size={25} />
            </div>
            <div className="flexColStart detail">
              <span className="primaryText">Chat</span>
              <span className="secondaryText">021 123 145 14</span>
            </div>
          </div>
          <div className="flexCenter button">Chat Now</div>
        </div>
        {/* Mode 3 */}
        <div className="mode">
          <div className="flexStart">
            <div className="flexCenter icon">
              <BsFillChatDotsFill size={25} />
            </div>
            <div className="flexColStart detail">
              <span className="primaryText">Video Call</span>
              <span className="secondaryText">021 123 145 14</span>
            </div>
          </div>
          <div className="flexCenter button">Video Call Now</div>
        </div>
        {/* Mode 4 */}
        <div className="mode">
          <div className="flexStart">
            <div className="flexCenter icon">
              <HiChatBubbleBottomCenter size={25} />
            </div>
            <div className="flexColStart detail">
              <span className="primaryText">Message</span>
              <span className="secondaryText">021 123 145 14</span>
            </div>
          </div>
          <div className="flexCenter button">Message Now</div>
        </div>
      </div>
    </div>
    {/* Right side */}
    <div className="c-right">
      <div className="image-container">
        <img src="./contact.jpg" alt="Contact Us" />
      </div>
    </div>
  </div>
</section>

  );
};
export default Contact;
