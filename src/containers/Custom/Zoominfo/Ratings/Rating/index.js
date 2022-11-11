import React from 'react';

const Rating = ({ rating }) => {
    const renderRating = () => {
        const renderedStars = [];
        let i = 1;
        for (; i <= rating; i++)
            renderedStars.push(<>&#9733;</>)

        if (!isNaN(parseFloat(rating))) {
            i++;
            renderedStars.push(<>&#11242;</>)
        }

        for (; i <= 5; i++)
            renderedStars.push(<>&#9734;</>)


        return renderedStars;
    }

    return (
        <>
            <div className='rating'>
                {renderRating()}
            </div>
            {rating} out of 5
        </>
    );
};

export default Rating;
