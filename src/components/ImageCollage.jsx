// import React, { useState } from "react";
// import Masonry from "react-masonry-css";
// import "../style/ImageCollage.css";
// import images from "../data/images";
// import Modal from "./Modal";

// const ImageCollage = () => {
//   const [preview, setPreview] = useState(null);

//   const handlePreview = (src) => {
//     setPreview(src);
//   };

//   const breakpointColumnsObj = {
//     default: 4,
//     1100: 3,
//     700: 2,
//     500: 1
//   };

//   return (
//     <div className="collage-wrapper">
//       <h1><span id="color2">"</span><span id="color1">Woke up to this</span> <span id="color2">Hostel Dreams</span><span id="color1">"</span></h1>
//       <Masonry
//         breakpointCols={breakpointColumnsObj}
//         className="my-masonry-grid"
//         columnClassName="my-masonry-grid_column"
//       >
//         {images.map((src, i) => (
//           <img
//             key={i}
//             src={src}
//             alt={`Collage ${i + 1}`}
//             loading="lazy"
//             className="collage-img"
//             onClick={() => handlePreview(src)}
//           />
//         ))}
//       </Masonry>

//       {preview && <Modal src={preview} onClose={() => setPreview(null)} />}
//     </div>
//   );
// };

// export default ImageCollage;


import React, { useState } from "react";
import Masonry from "react-masonry-css";
import "../style/ImageCollage.css";
import images from "../data/images";
import Modal from "./Modal";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";


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

  const chunkArray = (arr, size) =>
    arr.reduce((acc, _, i) => (i % size === 0 ? [...acc, arr.slice(i, i + size)] : acc), []);

  const imageChunks = chunkArray(images, 4); // 4 images per slider

  return (
    <div className="collage-wrapper">
      <h1>
        <span id="color2">"</span>
        <span id="color1">Woke up to this </span>
        <span id="color2">Hostel Dreams</span>
        <span id="color1">"</span>
      </h1>

      {/* Masonry for desktop */}
      <div className="desktop-collage">
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
      </div>

      {/* Sliders for mobile */}
      <div className="mobile-collage">
        {imageChunks.map((chunk, idx) => (
          <Swiper 
            key={idx}
            spaceBetween={10}
            slidesPerView={1}
            pagination={{ clickable: true }}
            modules={[Pagination]}
          >

            {chunk.map((src, i) => (
              <SwiperSlide key={i}>
                <img
                  src={src}
                  alt={`Slide ${idx}-${i}`}
                  className="collage-img"
                  onClick={() => handlePreview(src)}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        ))}
      </div>

      {preview && <Modal src={preview} onClose={() => setPreview(null)} />}
    </div>
  );
};

export default ImageCollage;
