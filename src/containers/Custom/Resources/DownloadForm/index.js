import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from 'common/components/Button';
import LogoImageAlt from 'common/assets/image/saasModern/logo.png';
import Logo from 'common/components/UIElements/Logo';
import DownloadFormWrapper, { FormHeader, InputGroup, InputGroup2 } from './downloadForm.style';

const DownloadForm = ({ resource, file, button }) => {
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [checked, setChecked] = useState(false);
    const [emailInvalid, setEmailInvalid] = useState(false);

    const valid = checked & (email.length > 0) & (firstName.length > 0);

    const onSubmitForm = async (e, url) => {
        e.preventDefault();
        const domain = email.split("@")[1];
        const response = await fetch(`https://mapi.clodura.ai/freemailpros?msp_eq=${domain}`, {
            method: 'GET',
            mode: 'cors',
            credentials: 'same-origin',
        });
        if (response.ok) {
            const res = await response.json();
            if (res.length === 0) {
		    const publishedAt = null;
		    const downloadURL = url;
                const body = { data: { firstName, lastName, email, domain, resource, publishedAt, downloadURL } };
		
                try {
                    const resourceResponse = await fetch("https://api.corp.clodura.com/api/database-center-users-data/", {
                        method: 'POST',
                        mode: 'cors',
                        credentials: 'same-origin',
                        headers: {
                            'Authorization': `bearer ${process.env.STRAPI_TOKEN}`,
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(body),
                    });
                    if (resourceResponse.ok) {
                        setFirstName("");
                        setLastName("");
                        setEmail("");
                        setChecked(false);
                        //window.open(url);
                        window.location.href = "/thank-you-for-downloading-free-database/"

                    }
                    else alert("Something went wrong")
                } catch (error) { alert("Something went wrong") }
            }
            else {
                setEmailInvalid(true);
                setTimeout(() => {
                    setEmailInvalid(false);
                }, 5000);
                alert("Please enter your valid work email");
            }
        }
    }

    return (
        <DownloadFormWrapper>
            <form onSubmit={(e) => onSubmitForm(e, `${file}`)} >
                <FormHeader>
                    <Logo
                        href="/"
                        logoSrc={LogoImageAlt}
                        title="Portfolio"
                        className="main-logo"
                    />
                    <p>To download this database, fill out the form below</p>
                </FormHeader>
                <InputGroup>
                    <label htmlFor="fname">First Name</label>
                    <input className="download-input" type="text" id="fname" name="firstname" onChange={(e) => setFirstName(e.target.value)} value={firstName} />
                </InputGroup>
                <InputGroup>
                    <label htmlFor="lname">Last Name</label>
                    <input className="download-input" type="text" id="lname" name="lastname" onChange={(e) => setLastName(e.target.value)} value={lastName} />
                </InputGroup>
                <InputGroup>
                    <label htmlFor="email" style={{ color: emailInvalid ? "red" : "black" }}>Work Email {emailInvalid && "!!"}</label>
                    <input className="download-input" type="text" id="email" name="workemail" onChange={(e) => setEmail(e.target.value)} value={email} />
                </InputGroup>
                <InputGroup2>
                    <input className="download-input" type="checkbox" id="checkbox" name="checkbox" onChange={(e) => setChecked(e.target.checked)} checked={checked} />
                    <label htmlFor="checkbox">I agree to receive emails from Clodura.AI. I understand I can unsubscribe at any time.</label>
                </InputGroup2>
                <InputGroup>
                    <Button {...button}
                        title="DOWNLOAD NOW"
                        type="submit"
                        disabled={!valid}
                        style={{ backgroundColor: valid ? null : "gray", cursor: valid ? "pointer" : "not-allowed" }} />
                </InputGroup>
            </form>
        </DownloadFormWrapper>
    );
};

DownloadForm.propTypes = {
    button: PropTypes.object,
};

DownloadForm.defaultProps = {
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
    }
};

export default DownloadForm;
