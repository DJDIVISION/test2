import React from 'react';
import { Button } from "@material-ui/core";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Section, Container } from "./Elements";

import {InfoContainer, InfoWrapper, InfoRow, Column1, TextWrapper, TopLine, Heading, Subtitle, Column2, ImgWrap, Img, alt} from "./Elements";

const StyledButton = styled(Button)`
    &&&{
        
    }
`;


const InfoSection = ({ lightBg, imgStart, topLine, lightText, darkText, buttonLabel, img, alt, id, headline, description }) => {
    return (
       <>
        <InfoContainer lightBg={lightBg} id={id}>
            <InfoWrapper>
                <InfoRow imgStart={imgStart}>
                    <Column1>
                        <TextWrapper>
                            <TopLine>{topLine}</TopLine>
                            <Heading lightText={lightText}>{headline}</Heading>
                            <Subtitle darkText={darkText}>{description}</Subtitle>
                            <StyledButton to="home">{buttonLabel}</StyledButton>
                        </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                            <Img src={img} alt={alt}/>
                        </ImgWrap>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
       </>
           
    );
}

export default InfoSection;
