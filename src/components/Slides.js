import React, { useState, useEffect } from 'react';

const Slides = ({slides}) => {
    const [allSlides] = useState({...slides});
    const [count, setCount] = useState(0);
    const [currentSlide, setSlide] = useState({});
    const [nextButton, toggleNext] = useState(false)
    const [button, toggle] = useState(false)

    useEffect(() => {
        setSlide(allSlides[count])
        if (count === 0) {
            toggle(true)
        } else {
            toggle(false)
        }
        
        if (count ==  (slides.length - 1)) {
            toggleNext(true)
        } else {
            toggleNext(false)
        }
    })

    const handleClickNext = () => {
        setCount(count + 1)
    }

    const handleClickPrev = () => {
        setCount(count - 1)
    }

    const handleClickRestart = () => {
        setCount(0)
    }

    return (
        <div>
            <div id="navigation" className="text-center">
                <button data-testid="button-restart" className="small outlined" onClick={handleClickRestart} disabled={button}>Restart</button>
                <button data-testid="button-prev" className="small" onClick={handleClickPrev} disabled={button}>Prev</button>
                <button data-testid="button-next" className="small" onClick={handleClickNext} disabled={nextButton}>Next</button>
            </div>
            <div id="slide" className="card text-center">
                <h1 data-testid="title">{currentSlide.title}</h1>
                <p data-testid="text">{currentSlide.text}</p>
            </div>
        </div>
    );

}

export default Slides;
