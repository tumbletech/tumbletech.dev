import { useEffect, useRef, useState } from 'react';
import './Carousel.css';

const Carousel = ({ children, interval = 2000 }) => {
    const [index, setIndex] = useState(0);
    const itemRef = useRef(null);

    useEffect(() => {
        const height = itemRef.current?.offsetHeight || 0;
        const timer = setInterval(() => {
            setIndex(prev => (prev + 1) % children.length);
        }, interval);

        return () => clearInterval(timer);
    }, [children.length, interval]);

    return (
        <div className="carousel-container">
            <div
                className="carousel"
                style={{
                    transform: 'translateY(-$(index * (itemRef.current?.offsetHeight || 0)}px)'
                }}
            >
                {children.map((child, i) => (
                    <div key={i} ref={i === 0 ? itemRef : null} className='carousel-item'>
                        {child}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Carousel;