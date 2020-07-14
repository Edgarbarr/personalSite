import styled from 'styled-components';

export const CustomFormInput = styled.div`

.group {
    position: relative;
    margin: 45px 0;

    .form-input {
        background: none;
        background-color: white;
        color: black;
        font-size: 18px;
        padding: 10px 10px 10px 5px;
        display: block;
        width: 100%;
        border: none;
        border-radius: 0;
        border-bottom: 1px solid #b68f40;
        margin: 25px 0;
        background-color: #f3f3f3;
        transition: background-color .4s;

        :focus{
            outline: none;
            background-color: #f3f3f3;
        }
        :focus ~ .form-input-label {
            top: -14px;
            font-size: 12px;
            color: darkgrey;
        }
    }
    .form-input-label {
        color: black;
        font-size: 16px;
        font-weight: normal;
        position: absolute;
        pointer-events: none;
        left: 5px;
        top: 10px;
        transition: 300ms ease all;

        &.shrink {
            top: -14px;
            font-size: 12px;
            color:  black;
        }
    }
}
`;
