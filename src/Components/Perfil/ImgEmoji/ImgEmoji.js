import React from "react";
import "../ImgEmoji/ImgEmoji.css"
import ImgEmojiStyle from "./ImgEmoji.module.scss"

function ImgEmoji({Img}) {
    return (
    <div className={ImgEmojiStyle.odivemoji}>
      <img src={Img}></img>
    </div>
    );
  }
  
  export default ImgEmoji;