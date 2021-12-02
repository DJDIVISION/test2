
 import React from 'react';
 import styled from "styled-components";
 import FortisLogo from "../images/fortis_logo.png";
 import TelosLogo from "../images/telos_logo.png";
 import NftfyLogo from "../images/nftfy_logo.png";
 import { Button } from "@material-ui/core";

 export const CardMain = styled.div`
    height: 990px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #010606;

    @media screen and (max-width: 760px) {
        height: 2200px;
    }

    @media screen and (max-width: 480px) {
        height: 2300px;
    }
`;
 
 const CardContainer = styled.div`
    width: 300px;
    height: 550px;
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    border-radius: 25px;
    box-shadow: 0 2px 15px 1px whitesmoke;  
    background-color: #1d1f21;
    color: whitesmoke;
    position: relative;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    
`;

const CircleWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    min-width: 100%;
    min-height: 100%;
    overflow: hidden;
    border-top-right-radius: 25px;
    border-top-left-radius: 25px;
    display: grid;
    

`;

const Circle1 = styled.div`
    position: absolute;
    width: 350px;
    height: 350px;
    top: -4.2em;
    left: -10em;
    z-index: 5;
    background-color: gold;
    border-radius: 50%;
    
`;

const Circle2 = styled.div`
    position: absolute;
    width: 450px;
    height: 450px;
    top: -5.2em;
    
    z-index: 5;
    background-color: purple;
    border-radius: 50%;
`;

const Circle3 = styled.div`
    position: absolute;
    width: 400px;
    height: 400px;
    top: 2.2em;
    right: -8em;
    z-index: 5;
    background-color: blue;
    border-radius: 50%;
`;

export const CardMainWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 80px;
    padding: 0 50px; 

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 760px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
        width: 300px;
    }
`;

const TopCardContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    flex: 1.2;
    position: relative;
    align-items: center;
    justify-content: flex-end;
    
`;

const BottomCardContainer = styled.div`
   display: flex;
   flex: 0.8;
   padding: 0 20px;
   align-content: center;
   margin-top: 50px;
   text-align: justify;
   line-height: 1.4rem;
`;

const CardText = styled.h1`
    color: whitesmoke;
    text-transform: uppercase;
    margin: 0;
    z-index: 10;
    font-size: 76px;
    font-weight: 900;
`;

const LogoWrapper = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;

`;

const Logo = styled.div`
    width: auto;
    height: 150px;
    z-index: 20;
    user-select: none;
    margin-top: -60px;

    img {
        width: auto;
        height: 100%;
        user-select: none;
    }
`;

const CardButton1 = styled(Button)`
    width: 200px;
    
    &&& {
        border: 1px solid gold;
        margin-bottom: 20px;
        color: gold;
        border-radius: 10px;

        &:hover{
            background-color: gold;
            color: black;
            transition: 0.3s ease-in-out;
            font-weight: bold;
        }
    }
`;

const CardButton2 = styled(Button)`
    width: 200px;
    
    &&& {
        border: 1px solid purple;
        margin-bottom: 20px;
        color: purple;
        border-radius: 10px;

        &:hover{
            background-color: purple;
            color: black;
            transition: 0.3s ease-in-out;
            font-weight: bold;
        }
    }
`;

const CardButton3 = styled(Button)`
    width: 200px;
    
    &&& {
        border: 1px solid blue;
        margin-bottom: 20px;
        color: blue;
        border-radius: 10px;

        &:hover{
            background-color: blue;
            color: black;
            transition: 0.3s ease-in-out;
            font-weight: bold;
        }
    }
`;

const Title = styled.h1`
    font-size: 60px;
    color: whitesmoke;
`;




export function PartnersCard(props) {
    return <CardMain>
        <Title>Our Partners</Title>
        <CardMainWrapper>
            <CardContainer>
                <TopCardContainer> 
                    <CircleWrapper>
                        <Circle1/>
                    </CircleWrapper>
                    <LogoWrapper>
                        <Logo>
                            <img src={FortisLogo} />
                        </Logo>
                    </LogoWrapper>
                    <CardText>Fortis</CardText>
                </TopCardContainer>
                <BottomCardContainer>Fortis is a decentralised, open, digital money. This means that everyone can use it and transfer money to anyone they want, without having to worry about arbitrary limitations like borders or censorship’s.</BottomCardContainer>
                <CardButton1>GO TO PARTNERS</CardButton1>
            </CardContainer>
            <CardContainer>
                <TopCardContainer> 
                    <CircleWrapper>
                        <Circle2/>
                    </CircleWrapper>
                    <LogoWrapper>
                        <Logo>
                            <img src={TelosLogo} />
                        </Logo>
                    </LogoWrapper>
                    <CardText>Telos</CardText>
                </TopCardContainer>
                <BottomCardContainer>Telos is the ideal network for real world use across multiple industries – Telos based Tokens NFT’s and Smart Contracts are already used for DeFi, Gaming, Social Media amongst a backdrop of almost unlimited real world use cases.</BottomCardContainer>
                <CardButton2>GO TO PARTNERS</CardButton2>
            </CardContainer>
            <CardContainer>
                <TopCardContainer> 
                    <CircleWrapper>
                        <Circle3/>
                    </CircleWrapper>
                    <LogoWrapper>
                        <Logo>
                            <img src={NftfyLogo} />
                        </Logo>
                    </LogoWrapper>
                    <CardText>Nftfy</CardText>
                </TopCardContainer>
                <BottomCardContainer>Nftfy is a permissionless Decentralized Application (DApp) that fractionalizes Non-Fungible Tokens, generating ERC20-compliant fractions fully backed by the NFTs.</BottomCardContainer>
                <CardButton3>GO TO PARTNERS</CardButton3>
            </CardContainer>
        </CardMainWrapper>
    </CardMain> 
   
}
 

 