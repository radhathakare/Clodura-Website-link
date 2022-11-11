import React from 'react';
import PropTypes from 'prop-types';
import Heading from 'common/components/Heading';
import Button from 'common/components/Button';
import Input from 'common/components/Input';
import Box from 'common/components/Box';
import FormWrapper, {
    FormGroup,
    FormGroupItem
} from './form.style';


const Form = ({  button, formGroup }) => {

    return (
        <FormWrapper>
            <Box>
            <FormGroup {...formGroup}>
            
                <Heading content="Request A Call Back" />
                <FormGroupItem>
                    <Input
                        inputType="text"
                        placeholder="First Name"
                        aria-label="first name"
                    />
                    <Input
                        inputType="text"
                        placeholder="Last Name"
                        aria-label="last name"
                    />
                </FormGroupItem>
                <FormGroupItem>
                    <Input
                        inputType="email"
                        placeholder="Your Email"
                        aria-label="email"
                    />
                    <Input
                        inputType="number"
                        placeholder="Your mobile"
                        aria-label="mobile number"
                    />
                </FormGroupItem>
                <Button {...button} title="Submit" />
                
            </FormGroup>
            </Box>
           
        </FormWrapper>
        
    );
};

Form.propTypes = {
    imageArea: PropTypes.object,
    button: PropTypes.object,
    formGroup: PropTypes.object,
};

Form.defaultProps = {
    imageArea: {
        width: ['50%', '50%', '40%', '40%', '40%'],
        mb: ['40px', '40px', '20px', '0', '0'],
    },
    formGroup: {
        width: ['50%', '50%', '40%', '40%', '40%'],
    },
    button: {
        type: 'button',
        fontSize: '13px',
        fontWeight: '700',
        borderRadius: '4px',
        pl: '15px',
        pr: '15px',
        colors: 'tertiaryWithBg',
        minHeight: 'auto',
        height: '40px',
        width: 'fit-content',
    },
};

export default Form;
