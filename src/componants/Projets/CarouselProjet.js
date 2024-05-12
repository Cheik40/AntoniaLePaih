// import React, { useState } from "react";
// // import Data from "../../data/dataAccueil.json";
// // import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
// import { GoArrowRight } from "react-icons/go";
// import { GoArrowLeft } from "react-icons/go";

// function Project1() {
//     const [current, setCurrent] = useState(0);
//     const Data = [
//         require("../../assets/Cache_cache/cache_cache_1.jpg"),
//         require("../../assets/Cache_cache/cache_cache_2.jpg"),
//         require("../../assets/Cache_cache/cache_cache_3.jpg"),
//         require("../../assets/Cache_cache/cache_cache_4.jpg"),
//         require("../../assets/Cache_cache/cache_cache_5.jpg"),
//     ];
//     const nextImage = () => setCurrent(current === 4 ? 0 : current + 1);
//     const prevImage = () => setCurrent(current === 0 ? 4 : current - 1);
//     return (
//         <React.Fragment>
//             <div>
//                 {/* <GoArrowLeft className='leftClick' onClick={prevImage} /> */}
//                 <GoArrowLeft onClick={prevImage} />
//                 {Data.map((image, index) => (
//                     <div
//                         className={index === current ? "slade active" : "slade"}
//                         key={index}
//                     >
//                         {index === current && (
//                             <img key={index} src={image} alt={image} />
//                         )}
//                     </div>
//                 ))}
//                 {/* <GoArrowRight className='rightClick' onClick={nextImage} /> */}
//                 <GoArrowRight onClick={nextImage} />
//             </div>
//         </React.Fragment>
//     );
// }

// export default Project1;

import React, { useState } from "react";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";

const Project1 = ({ current, images }) => {
    const [currentIndex, setCurrentIndex] = useState(current);

    const nextImage = () => {
        const newIndex = (currentIndex + 1) % images.length;
        setCurrentIndex(newIndex);
    };

    const prevImage = () => {
        const newIndex = (currentIndex - 1 + images.length) % images.length;
        setCurrentIndex(newIndex);
    };

    return (
        <div className='carousel'>
            <div className='carousel-inner'>
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={
                            index === currentIndex
                                ? "carousel-slide active"
                                : "carousel-slide"
                        }
                    >
                        {index === currentIndex && (
                            <img
                                src={image}
                                alt={`Slide ${index}`}
                                className='carousel-image'
                            />
                        )}
                    </div>
                ))}
            </div>
            <button className='carousel-control prev' onClick={prevImage}>
                <GoArrowLeft />
            </button>
            <button className='carousel-control next' onClick={nextImage}>
                <GoArrowRight />
            </button>
        </div>
    );
};

export default Project1;
