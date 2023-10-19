import { useState } from "react";

const slideStyles = {
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    backgroundSize: "cover",
    backgroundPosition: "center",
};


const ImageSlider = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    console.log(slides)
    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };
    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };
    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    const slideStylesWidthBackground = {
        ...slideStyles,
        backgroundImage: `url(${slides[currentIndex].img})`,
    };

    return (
        <div className="slider-styles">
            <div>
                <div onClick={goToPrevious} className="left-arrow-styles">
                    ❰
                </div>
                <div onClick={goToNext} className="rightArrowStyles">
                    ❱
                </div>
            </div>
            <div style={slideStylesWidthBackground}></div>
            <div className="dots-container-styles">
                {slides.map((slide, slideIndex) => (
                    <div className="dot-style"
                        key={slideIndex}
                        onClick={() => goToSlide(slideIndex)}
                    >
                        ●
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ImageSlider;


// import {useState} from "react";
//
//
// const ImageSlider = ({ slides }) => {
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const goToPrevious = () => {
//         const isFirstSlide = currentIndex === 0;
//         const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
//         setCurrentIndex(newIndex);
//     };
//     const goToNext = () => {
//         const isLastSlide = currentIndex === slides.length - 1;
//         const newIndex = isLastSlide ? 0 : currentIndex + 1;
//         setCurrentIndex(newIndex);
//     };
//     const goToSlide = (slideIndex) => {
//         setCurrentIndex(slideIndex);
//     };
//     const slideStylesWidthBackground = {
//         ...slideStyles,
//         backgroundImage: `url(${slides[currentIndex].url})`,
//     };
//
//     return (
//         <div style={sliderStyles}>
//             <div>
//                 <div onClick={goToPrevious} style={leftArrowStyles}>
//                     ❰
//                 </div>
//                 <div onClick={goToNext} style={rightArrowStyles}>
//                     ❱
//                 </div>
//             </div>
//             <div style={slideStylesWidthBackground}></div>
//             <div style={dotsContainerStyles}>
//                 {slides.map((slide, slideIndex) => (
//                     <div
//                         style={dotStyle}
//                         key={slideIndex}
//                         onClick={() => goToSlide(slideIndex)}
//                     >
//                         ●
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };
// export default ImageSlider;
//
// // function ImageSlider ( {slides, img, title}) {
// //     const [currentIndex, setCurrentIndex] = useState();
// //             return (
// //                 <article className="image">
// //                     <img src={image} alt={title}/>
// //                 </article>
// //             );
// // }
// // export default ImageSlider;