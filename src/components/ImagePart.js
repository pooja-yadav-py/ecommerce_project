import React from "react";
import homepage from "../images/homepage.jpg";
import left from "../images/left.jpg";
import sale2 from "../images/sale2.jpg";
import "./ImagePart.css";

const ImagePart = () => {
  return (
    <div>
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col col-lg-2">
            <img src={left} alt="left1" className="left img-thumbnail mb-3" />
            <img src={sale2} alt="left2" className="right img-thumbnail" />
          </div>
          <div className="col-md-auto">
            <img
              src={homepage}
              alt="homepage"
              className="center img-thumbnail"
            />
          </div>
          <div className="col col-lg-2">
            <img src={left} alt="right1" className="left img-thumbnail mb-3" />
            <img src={sale2} alt="right2" className="right img-thumbnail" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImagePart;
