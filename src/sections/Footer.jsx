import { socialImgs } from "../constants";

const Footer = () => {
    return (
          <footer className="footer">
                <div className="footer-container">
                        <div className="flex flex-col justify-center">
                                  <p>Terms & Conditions</p>p>
                        </div>div>
                        <div className="socials">
                          {socialImgs.map((socialImg, index) => (
                        <div key={index} className="icon">
                                      <img src={socialImg.imgPath} alt="social icon" />
                        </div>div>
                      ))}
                        </div>div>
                        <div className="flex flex-col justify-center">
                                  <p className="text-center md:text-end">
                                    {new Date().getFullYear()} Vishesh Khurana. All rights reserved.
                                  </p>p>
                        </div>div>
                </div>div>
          </footer>footer>
        );
};

export default Footer;</footer>
