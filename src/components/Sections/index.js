import React from 'react';
// import { Button } from "@material-ui/core";
// import { Section, Container } from "./Elements";
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, ImgWrap, Img, Button } from "./Elements";


const InfoSectionButton = ({lightBg, id, imgStart, topLine, lightText, headline, darkText, description, buttonLabel, logo, alt }) => {
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
                            <BtnWrap>
                                <Button to="home" dark={true} primary={true} >{buttonLabel}</Button>
                            </BtnWrap>
                        </TextWrapper> 
                    </Column1>
                    <Column2>
                       <ImgWrap>
                        <Img src={logo} alt={alt}/>
                       </ImgWrap> 
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
       </>
   ) 
}




export default InfoSectionButton;
