import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Heading from 'common/components/Heading';
import Input from 'common/components/Input';
import Recaptcha from 'react-google-recaptcha';

import FormWrapper, {
    FormGroup,
    FormGroupItem
} from './form.style';

const Form = ({ formGroup, title, slug }) => {
    const [fname, setFName] = useState("");
    const [lname, setLName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [verified, setVerified] = useState(false);
    const [formOk, setFormOk] = useState(false);

    useEffect(() => {
        if (fname.length > 0 & mobile.length > 0 & email.length > 0 & verified)
            setFormOk(true);
        else setFormOk(false);
    }, [fname, mobile, email,verified])

    const handleVerify = () => {
        setVerified(true);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch('https://api.corp.clodura.com/api/upload/', {
            method: 'post',
            body: new FormData(e.target)
        });

        if (response.ok) {
            const res = await response.json()
            const fileId = res[0].id;
            const body = { data: { firstName: fname, lastName: lname, email, mobile, resume: fileId, jobTitle: slug } };

            const fullFormResponse = await fetch("https://api.corp.clodura.com/api/career-opening-applications/", {
                method: 'POST',
                mode: 'cors',
                credentials: 'same-origin',
                headers: {
                    'Authorization': `bearer ${process.env.STRAPI_TOKEN}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body),
            });
            if (fullFormResponse.ok) {
                window.alert("Thank you for applying to Clodura.AI!")
            }
            else
                window.alert("Something went wrong, please try again");
        }
        else
            window.alert("File uploaded incorrectly");
    }

    return (
        <FormWrapper onSubmit={handleSubmit}>
            <FormGroup {...formGroup}>
                <Heading content={title} />
                <FormGroupItem>
                    <Input
                        inputType="text"
                        placeholder="First Name"
                        aria-label="first name"
                        onChange={(e) => setFName(e)}
                    />
                    <Input
                        inputType="text"
                        placeholder="Last Name"
                        aria-label="last name"
                        onChange={(e) => setLName(e)}
                    />
                </FormGroupItem>
                <FormGroupItem>
                    <Input
                        inputType="email"
                        placeholder="Your Email"
                        aria-label="email"
                        onChange={(e) => setEmail(e)}
                    />
                    <Input
                        inputType="text"
                        placeholder="Your mobile"
                        aria-label="mobile number"
                        onChange={(e) => setMobile(e)}
                    />
                </FormGroupItem>
                <label htmlFor='resume'>Upload Resume</label>
                <FormGroupItem>
                    <input
                        type="file"
                        accept='.txt, .pdf, .docx, .zip, .png, .jpg'
                        name="files"
                        id="resume"
                        placeholder="Upload Resume"
                        aria-label="resume upload"
                        className='file_upload'
                    />
                </FormGroupItem>
                <Recaptcha
                    sitekey={process.env.CAPTCHA_KEY}
                    onChange={handleVerify}
                />
                <button className={formOk ? 'submit-button' : 'submit-button disabled'} disabled={formOk ? false : true}>Submit</button>
            </FormGroup>
        </FormWrapper>
    );
};

Form.propTypes = {
    formGroup: PropTypes.object,
};

Form.defaultProps = {
    formGroup: {
        width: ['fit-content', 'fit-content', '40%', '40%', '40%'],
    },
};

export default Form;
