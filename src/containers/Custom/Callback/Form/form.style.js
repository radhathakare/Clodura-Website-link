import styled from "styled-components";

const FormWrapper = styled.form`
    margin: auto;
    margin-top: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 0 10px 0 lightgray;
    width: fit-content;
    padding: 30px;
    border-radius: 3%;

    h2 {
        font-size: 20px;
    }

    label {
        font-size: 16px;
    }

    .submit-button {
        font-size: 13px;
        font-weight: 700;
        border-radius: 4px;
        padding-left: 15px;
        padding-right: 15px;
        margin-top: 10px;
        min-height: auto;
        height: 40px;
        background-color: #03BAED;
        color: white;
        border: none;
        width: fit-content;
    }

    .disabled {
        background-color: gray !important;
    }
`;

export const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
`;

export const FormGroupItem = styled.div`
    display: flex;
    margin-bottom: 20px;

    .file_upload {
        @media only screen and (max-width: 425px) {
            width: 90%;
        }
    }
    input {
        border: 1px solid #C396C2;
    }
    div {
        margin-right: 6px;
        margin-bottom: 6px;
    }
`;

export default FormWrapper;