import React from "react";
import "./Request.scss";
import Atlas3 from "../../Assets/Atlas Image/Atlas3.jpg";

function Request() {
  return (
    <div className="body">
      <div className="split-container">
        <div className="primary-container">
          <div className="image-container">
          <img alt="A woman holds the beautiful Atlas Card — the super-mirror finish surface reflects the person's face inside the card." class="image" decoding="async" loading="lazy" src={Atlas3}  />
          </div>
        </div>
        <div className="second-container"></div>
      </div>
    </div>
  );
}

export default Request;
