import React from 'react';
import ClientLogosWrapper, { Row, SpecialImage } from './clientLogos.style';

const ClientLogos = ({ logos }) => {
    return (
        <ClientLogosWrapper>
            <Row>
                {
                    logos.slice(0, 5).map(logo => (
                        <SpecialImage src={logo.localFile.publicURL} alt="Logo" propHeight={logo.height} propWidth={logo.width} />
                    ))
                }
            </Row>
            <Row>
                {
                    logos.slice(5, 10).map(logo => (
                        <SpecialImage src={logo.localFile.publicURL} alt="Logo" propHeight={logo.height} propWidth={logo.width} />
                    ))
                }
            </Row>
            <Row>
                {
                    logos.slice(10, 15).map(logo => (
                        <SpecialImage src={logo.localFile.publicURL} alt="Logo" propHeight={logo.height} propWidth={logo.width} />
                    ))
                }
            </Row>
        </ClientLogosWrapper>
    );
};

export default ClientLogos;
