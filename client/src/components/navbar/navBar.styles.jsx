import styled from "styled-components";

export const Nav = styled.nav`
    display: flex;
    position: fixed;
    width: 100vw;
    height: 210px;
    justify-content: center;
    align-items: center;
    background-color: rgb(240, 240, 240);
    flex-flow: column;
    border-style: solid;
    border-width: 0 0 2px 0;
    border-color: #B68F40;
    box-shadow: 1px 3px 5px rgba(10, 10, 10, 0.336);
    z-index: 2;
    transition: width .1s;
    backface-visibility: hidden;

    .x {
        display: flex;
        justify-content: center;
        width: 100%;
        height: auto;
    }

    .logo {
        height: 100px;
        width: 100px;
        transition: all .1s;
    }
    a {
        color: black;
        

    }
    .mobile-button{
        display: none;
    }

    #nav-list {
        display: flex;
        flex-direction: row;
        width: 350px;
        justify-content: space-evenly;
        color: black;
        a {
            display: flex;
            justify-content: center;
            align-items: center;
            
        }
        a:not(:last-child){
            border: none;
        }
    }

    @media screen and (max-width: 768px){
        #nav-list {
            display: flex;
            padding: 0;
            margin: 0;
            position: absolute;
            right: 0px;
            height: 68vh;
            top: 210px;
            background-color: #b68f40;
            color: white;
            flex-direction: column;
            text-align: center;
            width: 0%;
            transition: width .3s ease;
            overflow-x: hidden;
            
            a{
                width: 100%;
                height: 25%;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            a:not(:last-child){
                border-width: 0 0 1px 0;
                border-color: white;
                border-style: solid;
            }

            
        }
        .mobile-button {
            display: block;
            height: fit-content ;
            width: fit-content ;
            border: 1px solid lightgrey;
            border-radius: 10%;
            padding: 3px 6px;

        }

    }

`;