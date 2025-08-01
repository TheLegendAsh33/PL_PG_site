import React, { useState } from "react";
import Masonry from "react-masonry-css";
import "../style/ImageCollage.css";
import images from "../data/images"; // Optional: use an array file or import like you were doing
import Modal from "./Modal"; // Create this for preview

const ImageCollage = () => {
  const [preview, setPreview] = useState(null);

  const handlePreview = (src) => {
    setPreview(src);
  };

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };

  return (
    <div className="collage-wrapper">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Collage ${i + 1}`}
            loading="lazy"
            className="collage-img"
            onClick={() => handlePreview(src)}
          />
        ))}
      </Masonry>

      {preview && <Modal src={preview} onClose={() => setPreview(null)} />}
    </div>
  );
};

export default ImageCollage;
