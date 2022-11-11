import React, { useRef, useState, useEffect } from 'react';
import Container from 'common/components/UI/Container';
import Heading from 'common/components/Heading';

import ScrollVideoContainer, { Left, Right } from './scrollImage.style';

const ScrollingImages = ({ data }) => {
    const [runningIntervals, setRunningIntervals] = useState([]);
    const [shownImage, setShownImage] = useState(0);
    const [start, setStart] = useState(false);
    const siRef = useRef();
    const myRefs = useRef([]);

    const lengthOfData = data.length;

    const isInView = () => {
        const top = siRef.current.getBoundingClientRect().top;
        if (top < 100 && top > -800) {
            setStart(true);
        }
    }

    const clearIntervals = () => {
        runningIntervals.forEach(interval => {
            clearInterval(interval);
            setRunningIntervals([]);
        });
    }

    const setProgressBars = (number) => {
        for (let i = 0; i < lengthOfData - 1; i++) {
            myRefs.current[i].style.height = "0";
        }
        for (let i = 0; i < number; i++) {
            myRefs.current[i].style.height = "100%";
        }
    }

    const startProgress = () => {
        setProgressBars(shownImage);
        clearIntervals();

        if (shownImage === lengthOfData - 1) {
            let progress = 0;
            let myInterval = setInterval(() => {
                progress += 12;
                if (progress >= 100)
                    progress = 100;
                if (progress >= 100) setShownImage(0);
            }, 1000);
            setRunningIntervals([...runningIntervals, myInterval]);
        }
        else {
            let progress = 0;
            let myInterval = setInterval(() => {
                progress += 12;
                if (progress >= 100)
                    progress = 100;
                myRefs.current[shownImage].style.height = `${progress}%`;
                if (progress >= 100) setShownImage(shownImage + 1);
            }, 1000);
            setRunningIntervals([...runningIntervals, myInterval]);
        }
    }

    useEffect(() => {
        if (start === true)
            startProgress();
    }, [shownImage, start])

    useEffect(() => {
        document.addEventListener("scroll", isInView);

        return () => {
            document.removeEventListener("scroll", isInView);
        }
    }, [])

    return (
        <ScrollVideoContainer ref={siRef}>
            <Container className="Container">
                <Left>
                    {data.map((part, index, array) => {
                        if (array.length - 1 === index) {
                            // If this is the last element in the map
                            return (
                                <span onClick={() => setShownImage(index)} role="none">
                                    <div className="progress-tracker-component">
                                        <span className="bullet">{index + 1}</span>
                                    </div>
                                    <div>
                                        <Heading as="h2" content={part.title} />
                                        <p className={`${shownImage === index ? "para-shown" : "para-hidden"}`}>{shownImage === index && part.description}</p>
                                    </div>
                                </span>
                            )
                        }
                        else {
                            return (
                                <span onClick={() => setShownImage(index)} role="none">
                                    <div className="progress-tracker-component">
                                        <span className="bullet">{index + 1}</span>
                                        <span className="progress-bar-container">
                                            <span ref={(el) => (myRefs.current[index] = el)} className="progress-bar"></span>
                                        </span>
                                    </div>
                                    <div>
                                        <Heading as="h2" content={part.title} />
                                        <p className={`${shownImage === index ? "para-shown" : "para-hidden"}`}>{shownImage === index && part.description}</p>
                                    </div>
                                </span>
                            )
                        }
                    })}
                </Left>
                <Right>
                    <img
                        src={
                            (data[shownImage].media.localFile !== null) | undefined
                                ? data[shownImage].media.localFile.publicURL
                                : {}
                        }
                        alt="Scrolling Information"
                    />
                </Right>
            </Container>
        </ScrollVideoContainer>
    );
};

export default ScrollingImages;
