import styled from 'styled-components';

const PlansWrapper = styled.section`
    display: flex;
    justify-content: center;
    max-width: 70%;
    margin: -120px auto 150px;
    padding: 0;
  

    @media screen and (max-width: 850px) {
        flex-direction: column;
        align-items: center;
    }
`;

export const PlanBox = styled.div`
    margin-right: 20px;
    max-width: 360px;
    flex: 0.33;

    > p {
        margin: 0;
        margin-top: 10px;
        font-size: 12px;
        color: black;
    }

    .recommendation {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #F58634;
        border-top-left-radius: 6px;
        border-top-right-radius: 6px;
        font-size: 12px;
        color: white;
        padding: 5px;
    }

    @media screen and (max-width: 850px) {
        width: 60%;
        max-width: 100%;
        margin-bottom: 20px;
        margin-right: 0;
    }
    @media screen and (max-width: 650px) {
        width: 70%;
    }
    @media screen and (max-width: 425px) {
        width: 90%;
    }
`;

export const BulletBox = styled.div`
    border: 2px solid;
    border-color: ${props => props.borderColor};
    border-radius: 16px;
    // border-top-left-radius: ${props => props.borderTop};
    // border-top-right-radius: ${props => props.borderTop};
    background-color: white;
    padding: 30px;
    height: 110%;
    display: flex;
    flex-direction: column;

    > .plan-heading {
        margin: 0;
        font-size: 24px;
        min-height: 100px;
        text-align: center;
    }

    > .plan-heading > h1 {
        margin: 0;
        // font-size: 24px;
        color: black;
        display: inline;
        margin-right: 5px;
    }

    > .plan-heading > span {
        font-weight: 500;
        font-size: 12px;
        display: block;
    }

    .last-bullet {
        font-style: italic;
        margin-top: auto;
        font-size: 11px !important;
    }

    h2 {
        height: 60px;
        font-size: 20px;
        color: #391400;
    }

    h5 {
        color: #98857B;
        font-weight: 600;
        margin-bottom: 5px;
        font-size: 15px;
    }

    button {
        width: 100%;
        margin-bottom: 20px;
    }
`;


export const ListDiv = styled.div`
    display: flex;
    margin-bottom: 10px;

    p {
        margin: 0;
        font-size: 14px;
        color: black;
    }
`;

export const ListBullet = styled.div`
    min-width: 2rem;
    max-width: 3rem;
    min-height: 1rem;
    max-height: 3rem;
    font-size: 8px;
    padding: 1px;
    color: #8E3A8D;
    // border: 1px solid #8E3A8D;
    border-radius: 50% 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 6px;
`;

export const PlansFootnote = styled.div`
    background-color: #F2FBFE;
    padding: 20px;
    color: #98857B;
    font-size: 12px;
    text-align: center;
    margin-top: 180px;

    @media screen and (max-width: 850px) {
        margin-top: 60px;
    }
`;



export default PlansWrapper;
