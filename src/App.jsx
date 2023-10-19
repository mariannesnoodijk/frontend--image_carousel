import './App.css';
import ImageSlider from "./ImageSlider";
import image1 from './assets/image-1.jpg'
import image2 from './assets/image-2.jpg'
import image3 from './assets/image-3.jpg'
import image4 from './assets/image-4.jpg'
import image5 from './assets/image-5.jpg'

function App() {
    const slides = [ //creates an array of objects: []=array, [{}]=object within array
        { img: image1, title: "beach" },
        { img: image2, title: "boat" },
        { img: image3, title: "forest" },
        { img: image4, title: "city" },
        { img: image5, title: "italy" },
    ];

    return (
        <div>
            <h1>image carousel</h1>
            <div className="containerStyles">
                <ImageSlider slides={slides} />
            </div>
        </div>
    );
}

export default App;