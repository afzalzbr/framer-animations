import React from "react";
import { useMotionValue } from "framer-motion";

import chrome from "./images/chrome.svg";
import docs from "./images/docs.svg";
import excel from "./images/excel.svg";
import gmail from "./images/gmail.svg";
import photoshop from "./images/photoshop.svg";
import powerpoint from "./images/powerpoint.svg";
import safari from "./images/safari.svg";
import slack from "./images/slack.svg";
import spotify from "./images/spotify.svg";
import steam from "./images/steam.svg";
import vlc from "./images/vlc.svg";
import youtube from "./images/youtube.svg";

import Img from "./img";

import "./styles.css";

const images = [
  {
    img: chrome,
    url: "www.google.com/chrome/",
  },
  {
    img: docs,
    url: "docs.google.com/",
  },
  {
    img: excel,
    url: "www.microsoft.com/en-ww/microsoft-365/excel",
  },
  {
    img: gmail,
    url: "mail.google.com/",
  },
  {
    img: photoshop,
    url: "www.photoshop.com/en",
  },
  {
    img: powerpoint,
    url: "www.microsoft.com/en-us/microsoft-365/powerpoint",
  },
  {
    img: safari,
    url: "www.apple.com/safari/",
  },
  {
    img: slack,
    url: "slack.com/",
  },
  {
    img: spotify,
    url: "www.google.com",
  },
  {
    img: steam,
    url: "store.steampowered.com/",
  },
  {
    img: youtube,
    url: "www.youtube.com/",
  },
  {
    img: vlc,
    url: "www.videolan.org/vlc/index.html",
  },
];

function Dock() {
  const mouseX = useMotionValue(null);

  return (
    <div className="dock">
      <div
        className="icons"
        onMouseMove={(event) => mouseX.set(event.nativeEvent.x)}
        onMouseLeave={() => mouseX.set(null)}
      >
        {images.map((image, index) => (
          <Img src={image.img} key={index} mouseX={mouseX} url={image.url} />
        ))}
      </div>
    </div>
  );
}

export default Dock;
