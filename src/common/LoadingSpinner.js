import React from "react";
import "./LoadingSpinner.css";


function LoadingSpinner() {
  return (
    <div class="loader">
    <div class="loader-inner line-spin-fade-loader">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div><span class="tooltip">
      <p>line-spin-fade-loader</p></span>
  </div>
  );
}

export default LoadingSpinner;