import React from 'react';
import styled from "styled-components";



export const Section = styled.section`
    background: url(${({ image }) => image && image});
    background-color: white;
    background-position: center;
    
    height: 600px;
    background-repeat: no-repeat;
    background-size: 300px 300px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    background-attachment: inherit;
    
    




`;

export const Container = styled.div`
    color: black;
    padding: 2rem;
    backdrop-filter: blur(10px);
    background-color: #4a4743;
    opacity: 0.8;
    margin: 3rem;
    border-radius: 10px;
    
    
    @media screen and (max-width: 880px) {
        margin-left: auto;
        margin-right: auto;
        
    }

    h1 {
        font-size: clamp(2rem, 8vw, 4rem);
        color: lightgoldenrodyellow;
        margin-bottom: 15px;

        @media screen and (min-width: 880px) {
            
        }
    }
    
    p {
        font-size: clamp(1rem, 6vw, 2.5rem);
        margin-bottom: 1rem;
        
        color: lightgoldenrodyellow;

        @media screen and (max-width: 880px){
            
            
        }
    }

    button {
        font-size: 16px;
        text-transform: none;
        padding: 5px 20px;
        color: lightgoldenrodyellow;
        background: transparent;
        border-radius: 4px;
        margin-top: 0.6rem;
        border: 1px solid lightgoldenrodyellow;
        cursor: pointer;
        
        
        &:hover{
          background: lightgoldenrodyellow;
          color: black;
          font-weight: bold;  
          border: 1px solid black;
          transition: 0.2s all ease-in-out;
        }
    }
`;