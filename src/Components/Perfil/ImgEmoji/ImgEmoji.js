import React from "react";
import "../ImgEmoji/ImgEmoji.css"

function ImgEmoji({Img}) {
    return (
    <div className="o-divemoji">
      <img src={Img}></img>
    </div>
    );
  }
  
  export default ImgEmoji;