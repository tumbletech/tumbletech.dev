import Carousel from './Carousel';
import './App.css';

function App() {
    const images = [
        './assets/img/001.mainlogo-a.png',
        './assets/img/001.mainlogo-b.png',
        './assets/img/002.favicon-a.png',
        './assets/img/002.favicon-b.png',
        './assets/img/003.service01.png',
        './assets/img/003.service02.png',
        './assets/img/003.service03.png',
        './assets/img/003.service04.png',
        './assets/img/003.service05.png',
        './assets/img/003.service06.png',
        './assets/img/004.project01.png',
        './assets/img/004.project02.png',
        './assets/img/004.project03.png',
        './assets/img/004.project04.png',
    ];

    return (
        <div className="App">
            <Carousel>
                {images.map((src, idx) => (
                    <img key={idx} src={src} alt={'img-${idx}'} />
                ))}
            </Carousel>
        </div>
    );
}

export default App;