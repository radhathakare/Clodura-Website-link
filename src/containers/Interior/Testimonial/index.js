import React from 'react';
import TestimonialsWrapper from './testimonial.style';
import Container from 'common/components/UI/Container';
import Form from '../../Custom/Contact/Form';

const Testimonials = () => {
    return (
        <Container width="1360px">
          <div className='formcontent'>
            <TestimonialsWrapper>
              <div>
              <Form/>
              </div>    
            </TestimonialsWrapper>
            
          </div>
            

        </Container>
        
    );
};

export default Testimonials;
