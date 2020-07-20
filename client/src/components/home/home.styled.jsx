import styled from "styled-components";

export const HomeContainer = styled.div`
    font-family: 'Lato';
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    width: 100%;
    background-color: white;
    overflow: hidden;
    @media screen and (max-width: 768px){
        flex-wrap: wrap;
        &.reverse {
            flex-direction: column-reverse;
        }
    }
`;
export const Main = styled.div`
    display: flex;
    width: 60%;
    height: 800px;
    padding: 2%;
    
    &.about {
        height: 800px;
        width: 60%;
        padding-left: 5%;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: space-evenly;

        div p{
            font-weight: 300;
            width: 75%;
            margin: 0;
            text-align: justify;
        }

        h1 {
            text-shadow: 1px 3px rgba(0, 0, 0, 0.144);
            font-size: 3em;
            font-weight: 500;
        }
        h2 {
            color: goldenrod;
            text-shadow: 1px 1px 1px  rgb(63, 63, 63) ;
        }
    }
    
    &.quote-container {
        width: 100%;
        height: 600px;
        background-color: #B6CCA1;
        color: white;
        padding: 10px;
        div {
            
        }
    }
    .quote {
        display: flex;
        font-size: 3em;
        text-align: center;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 100%;
        position: relative;
    }
    .quote:after {
        position: absolute;
        content: "";
        width: 50%;
        height: 50%;
        right: 20%;
        clip-path: polygon(0 0, 10% 0, 100% 100%, 90% 100%);
        
        background: #b68f4077;
    
    }
    .quote:before {
        position: absolute;
        content: "";
        width: 50%;
        height: 50%;
        left: 20%;
        clip-path: polygon(0 0, 10% 0, 100% 100%, 90% 100%);
        
        background: #b68f4077;
    
    }
    @media screen and (max-width: 768px){
        width: 100%;
        padding: 5%;
        height: 600px;
        overflow: hidden;
        justify-content: center;
 
        align-items: flex-start;

        &.about{
            width: 100%;

        }
        .quote {
            font-size: 2.8em;
            height: 100%;
        }
        
    }
`;
export const Aside = styled.div`
    display: flex;
    width: 40%;
    height: 800px;
    background-color: #B6CCA1;
    
    
    &.about{
        height: 800px;
        width: 40%;
        background-color: #B6CCA1;
        box-shadow: 10px 10px 20px black;
        .laptop-pic{
            width:100%;
            height: 100%;
            overflow: hidden;
            position: relative;
            display: flex;
            justify-content: center;
            flex-direction: row;
            img {
                height: 100%;
            }
        }
    }
    
    .picberet {
        overflow: hidden;
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        img {
            height: 100%;
            width: auto;
        }
    }
   .armspic{
       width:100%;
       height: 100%;
       position: relative;
   }
    .armspic div{
        width: auto;
        height: 50%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        position: absolute;
        top:45%;
        left: -5%;
        
        img{
            width: auto;
            height: 100%;
            box-shadow: 3px 3px 5px 5px rgba(75, 75, 75, 0.486);
        }
    }
    &.project {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;

        .h1 {
            padding: 5%;
            font-size: 3em;
            text-shadow: 1px 1px 1px white;
        }
    }
    @media screen and (max-width: 768px){
        width: 100%;
        height: 400px;
        overflow: hidden;
        justify-content: center;
        align-items: center;
        text-align: center;

        &.about {
            display: none;
        }
        .armspic div{
            height: 100%;
            width: 100%;
            position: static;
            display: flex;
            justify-content: center;
            flex-direction: row;
            img {
                width: auto;
                height: 100%;
            }
        }
    }
    .aside-title{
        text-shadow: 1px 1px 1px white;
    }

`;



export const ImageContainer = styled.div`

    width: 100%;
    position: relative;
    background-color: transparent;
    height: 600px;
    color: white;
    padding: 0;
	margin: 0;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    
    
    h1 {
        font-size: 3rem;
    }
    :after{
        content:'';
        position: absolute;
        opacity: 1;
        background: url("https://scontent-lax3-2.xx.fbcdn.net/v/t1.0-9/42645890_10212796284049303_53266828650086400_n.jpg?_nc_cat=107&_nc_sid=174925&_nc_oc=AQnSSh145cP2yFA0acjRTvBa9ScAp5ZlChjbJPePbKuAdOQs_epQ_tk6ImB6rMZWXX5zW2_Nvi-rJjQ4VQ1JzNzr&_nc_ht=scontent-lax3-2.xx&oh=f4a192ae623791a6314f28802890aca3&oe=5F2CE1D9") no-repeat center center;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
        background-attachment: fixed;
        background-position: 50% 90% !important;
        z-index:-1;
        width:100%;
        height: 600px;
        overflow:hidden;
        top: 0; 
        left: 0; 
    }
    
    @media screen and (max-width: 768px){
        :after{
            background-attachment: unset;
        }
    }


    
}

`;
export const ImageContainer2 = styled.div`
width: 100%;
position: relative;
background-color: transparent;
height: 600px;
color: white;
padding: 0;
margin: 0;
display: flex;
text-align: center;
justify-content: center;
align-items: center;

    h1 {
        font-size: 3rem;
    }
    

    :after{
        content:'';
        position: absolute;
        opacity: 1;
        background: url("fullstackdev.jpg") no-repeat center center;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
        background-attachment: fixed;
        background-position: 50% 10% !important;
        z-index:-1;
        width:100%;
        height: 600px;
        overflow:hidden;
        top: 0; 
        left: 0; 
        
    }
    @media screen and (max-width: 768px){
        :after{
            background-attachment: unset;
        }
    }
    
}

`;

export const SkillsSection = styled.div`
    position: relative;
    overflow: hidden;
    height: 2400px;
    width: 100%;
    background-color: transparent;
    display: flex;
    flex-direction: column;
    box-shadow: 1px 1px 5px black;
`;

export const SkillCategory = styled.div`
    position: relative;
    height: 25%;
    width: 100%;
    display: flex;
    background-color: transparent;
    flex-direction: column;
`;

export const SkillGrid = styled.div`
    height: 100%;
    width: 100%;
    overflow: hidden;
    display: grid;
    grid-template-columns: repeat(5,1fr);

    &.three{
        grid-template-columns: repeat(3,1fr);
    }
    picture {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    img {
        display: flex;
        justify-self: center;
        align-self: center;
        width: 60%;
        height: auto;
        max-height: 90%;
    }

    @media screen and (max-width: 768px){

        overflow-x: auto;
        grid-gap: 15px;
        padding: 0 2%;
        img {
            width: 100%
        }
    }
`;

export const SkillTitle= styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
    width: 100%;
    height: 100%;
    right: 0;
    transition: .2s;
    opacity: 1;
    background-color: #B68F40;

    h3 {
        font-size: 3em;
        text-align: center;
    }
`;

