import styled from "styled-components";

export const ProjectsContainer = styled.div`
    
    :first-child::before{
        content: "";
        height: 100%;
        width: 100%;
        position: absolute;
        top: -100px;
        background-color: #484848;
        z-index: -2;  
    } 
    
`;

export const Project = styled.div`
    width: 100%;
    height: fit-content;
    position: relative;
    transform: skewY(-11deg);    
    padding: 0 5%;
    :last-child::before {
        content: "";
        height: 100%;
        width: 100%;
        position: absolute;
        bottom: -300px;
        background-color: #e6e6e6;
    }
    :last-child{
        z-index: -1;
    }
    
`;
export const ContentContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    .media {
        width: 58% !important;
    }
    @media screen and (max-width: 768px){
        justify-content: center;
        .media{
            width: 100% !important;
        }
    }
`;
export const DiagLayout = styled.div`
    --skew-padding: calc(100vw * 0.09719); 
    background-color: transparent;
    transform: skewY(11deg);
    width: 100%;
    padding: var(--skew-padding) 0;
`;

export const Description = styled.div`
    display: flex;
    width: 38%;
    margin: 2%;
    height: fit-content;
    border: 0 solid #b68f40;
    border-width: 3px 0 3px 0;
    padding: 1% 0;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    p {
        width: 100%;
        text-align: center;
    }
    h2 {
        width: 100%;
        text-align: center;
    }
    align-items: center;
    @media screen and (max-width: 768px){
        width: 75%
    }
    @media screen and (max-width: 425px){
        width: 100%
    }
    
    
`;