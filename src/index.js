import React, { useState } from "react";
import { render } from "react-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import "./styles.css";

const imgUrl = [
  "https://cdn.beam.usnews.com/dims4/USNEWS/241f6e1/2147483647/resize/1200x%3E/quality/90/?url=http%3A%2F%2Fcom-usnews-beam-media.s3.amazonaws.com%2F58%2Fd0%2Fc38e91d94df88b1dddfdcbd26a8b%2F1-intro-slide-getty.jpg",
  "https://cdn.beam.usnews.com/dims4/USNEWS/e4ed23d/2147483647/resize/1200x%3E/quality/90/?url=http%3A%2F%2Fcom-usnews-beam-media.s3.amazonaws.com%2F37%2F3e%2Fd8c78d154cb5873477909425a07e%2F1-lexington-kentucky-getty.jpg",
  "https://cdn.beam.usnews.com/dims4/USNEWS/6653ef6/2147483647/resize/1200x%3E/quality/90/?url=http%3A%2F%2Fcom-usnews-beam-media.s3.amazonaws.com%2F53%2F03%2F06a699dd448b97223c509ee11709%2F2-cayman-islands-getty.jpg",
  "https://images.unsplash.com/photo-1546486610-e9fe4f1e6751?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=722&q=80",
  "https://images.unsplash.com/photo-1546486868-e09a5452ec2f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80",
  "https://images.unsplash.com/photo-1546530255-92bddc9bdb74?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
];

const ImageSlide = ({ url, index }) => {
  const styles = {
    backgroundImage: `url("${url}")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100vw",
    height: "70vh"
  };

  return (
    <TransitionGroup>
      <CSSTransition classNames="fade" key={index} timeout={300}>
        <div className="image-slide" style={styles} />
      </CSSTransition>
    </TransitionGroup>
  );
};

const Arrow = ({ direction, clickFunction, glyph }) => (
  <span
    className={`slide-arrow ${direction}`}
    onClick={clickFunction}
    style={{ cursor: "pointer", textAlign: "center" }}
  >
    {glyph}
  </span>
);

function Carousel() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const previousSlide = () => {
    const lastIndex = imgUrl.length - 1;
    const resetIndex = currentImageIndex === 0;
    const index = resetIndex ? lastIndex : currentImageIndex - 1;
    setCurrentImageIndex(index);
  };

  const nextSlide = () => {
    const lastIndex = imgUrl.length - 1;
    const resetIndex = currentImageIndex === lastIndex;
    const index = resetIndex ? 0 : currentImageIndex + 1;
    setCurrentImageIndex(index);
  };

  return (
    <div className="carousel">
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Arrow direction="left" clickFunction={previousSlide} glyph="&#9664;" />
        <Arrow direction="right" clickFunction={nextSlide} glyph="&#9654;" />
      </div>
      <ImageSlide url={imgUrl[currentImageIndex]} index={currentImageIndex} />
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<Carousel />, rootElement);
