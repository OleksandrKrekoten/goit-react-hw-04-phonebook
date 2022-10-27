import { Form as FormikForm, Field as FormikInput } from 'formik';
import styled from '@emotion/styled';

export const Form = styled(FormikForm)`
    position: relative;
    display: flex;
    width: 400px;
    flex-direction: column;
    font-family: Courier New;
    gap: 20px;
    padding: 20px;
    border: 2px solid #0b0e24;
    div {
        position: absolute;
        color: #c70039;
        font-size: 12px;
    }
    span {
        font-weight: 700;
        display: block;
        font-size: 14px;
        color: #0b0e24;
        cursor: pointer;
        margin-bottom: 10px;
    }
`;
export const Field = styled(FormikInput)`
    display: flex;
    flex-direction: column;
    font-family: Courier New;
    height: 24px;
    border-radius: 12px;
    padding-left: 12px;
    border: none;
    background-color: #8f96a3;
    color: #0b0e24;
    transition: outline 200ms ease-in;
    :hover,
    :focus {
        outline: 2px solid #0e7807;
    }
`;
export const Button = styled.button`
    display: block;
    width: 150px;
    padding: 4px 8px;
    border-radius: 12px;
    border: none;
    :disabled {
        background-color: #8f96a3;
        color: white;
    }
    :hover,
    :focus {
        outline: 2px solid #0e7807;
    }
`;
