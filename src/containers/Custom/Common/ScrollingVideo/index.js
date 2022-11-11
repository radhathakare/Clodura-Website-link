/**
 * Documenting this component as it can be pretty hard to manage
 * Animation files are currently fetched and hard coded, the number of these files needs to be equal to number of parts
 * Animation files are stored in video array
 * Duration in strapi refers to how long do you want the part displayed, not the video duration (personal recommendation is video duration + 2 seconds)
 * @todo Fetch anim files dyanimcally
 */

import React, { useRef, useEffect, useState, useMemo } from 'react';
import lottie from 'lottie-web';
import Container from 'common/components/UI/Container';
import Heading from 'common/components/Heading';
import ScrollVideoContainer, { Left, Right } from './scrollvideo.style';

import anim1 from 'common/assets/videos/home/Part1.json';
import anim2 from 'common/assets/videos/home/Part2.json';
import anim3 from 'common/assets/videos/home/Part3.json';

const ScrollingVideo = ({ data }) => {
    const [runningIntervals, setRunningIntervals] = useState([]);
    const [shownVideo, setShownVideo] = useState(0);
    const [start, setStart] = useState(false);
    const animationContainer = useRef();
    const myRefs = useRef([]);
    const svRef = useRef();

    const lengthOfData = data.length;

    const videos = useMemo(() => [
        anim1,
        anim2,
        anim3
    ], [])

    const isInView = () => {
        const top = svRef.current.getBoundingClientRect().top;
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
        setProgressBars(shownVideo);
        clearIntervals();

        if (shownVideo === lengthOfData - 1) {
            let progress = 0;
            let myInterval = setInterval(() => {
                progress += (100 / data[shownVideo].duration);
                if (progress >= 100)
                    progress = 100;
                if (progress >= 100)
                    setShownVideo(0);
            }, 1000);
            setRunningIntervals([...runningIntervals, myInterval]);
        }
        else {
            let progress = 0;
            let myInterval = setInterval(() => {
                progress += (100 / data[shownVideo].duration);
                if (progress >= 100)
                    progress = 100;
                myRefs.current[shownVideo].style.height = `${progress}%`;
                if (progress >= 100)
                    setShownVideo(shownVideo + 1);
            }, 1000);
            setRunningIntervals([...runningIntervals, myInterval]);
        }
    }

    useEffect(() => {
        const anim = lottie.loadAnimation({
            container: animationContainer.current,
            renderer: "svg",
            loop: false,
            autoplay: true,
            animationData: videos[shownVideo]
        });
        return () => anim.destroy();
    }, [videos, shownVideo, start]);

    useEffect(() => {
        if (start === true)
            startProgress();
    }, [shownVideo, start])

    useEffect(() => {
        document.addEventListener("scroll", isInView);

        return () => {
            document.removeEventListener("scroll", isInView);
        }
    }, [])

    return (
        <ScrollVideoContainer ref={svRef}>
            <Container className="Container">
                <Left>
                    {data.map((part, index, array) => {
                        if (array.length - 1 === index) {
                            // If this is the last element in the map
                            return (
                                <span onClick={() => setShownVideo(index)} role="none">
                                    <div className="progress-tracker-component">
                                        <span className="bullet">{index + 1}</span>
                                    </div>
                                    <div>
                                        <Heading as="h2" content={part.title} />
                                        <p className={`${shownVideo === index ? "para-shown" : "para-hidden"}`}>{shownVideo === index && part.description}</p>
                                    </div>
                                </span>
                            )
                        }
                        else {
                            return (
                                <span onClick={() => setShownVideo(index)} role="none">
                                    <div className="progress-tracker-component">
                                        <span className="bullet">{index + 1}</span>
                                        <span className="progress-bar-container">
                                            <span ref={(el) => (myRefs.current[index] = el)} className="progress-bar"></span>
                                        </span>
                                    </div>
                                    <div>
                                        <Heading as="h2" content={part.title} />
                                        <p className={`${shownVideo === index ? "para-shown" : "para-hidden"}`}>{shownVideo === index && part.description}</p>
                                    </div>
                                </span>
                            )
                        }
                    })}
                </Left>
                <Right>
                    <div ref={animationContainer}></div>
                </Right>
            </Container>
        </ScrollVideoContainer>
    );
};

export default ScrollingVideo;
