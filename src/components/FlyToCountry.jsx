import React from "react";
// import { MDBBtn, MDBContainer } from "mdb-react-ui-kit";

function FlyToCountry() {
    return (
      <div className="fly-div">
        <video
          className="fly-video"
          playsInline
          autoPlay
          loop
          muted
          controls
          alt="All the devices"
          src="https://media.istockphoto.com/id/1215197875/video/beautiful-moon-in-the-skies-flying-over-the-infinite-clouds-with-the-night-moon-shining.mp4?s=mp4-640x640-is&k=20&c=1h9IY7JA2WnRwTqxe6jc3IhYRcCRcXrngyCqyHwMWhA="
        />
        <h2 className="fly-h2">fly to a country</h2>
      </div>
    );
}

export default FlyToCountry;
