import React, { useContext } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { IconButton } from "@material-ui/core";
import { Button } from "@material-ui/core";
import Victor from "../../images/secondVictor.png";
import { CardContext3 } from "./context";
import { CardButton } from "./common";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Link } from "react-router-dom";

const OverviewContainer = styled(motion.div)`
  min-width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  background: url(${Victor}) center;
  background-size: cover;
  
  border-radius: 28px;
  padding-bottom: -2em;
  z-index: 10;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.2;
  margin-bottom: 1.8em;
`;


const Title = styled.h1`
  margin: 0;
  color: whitesmoke;
  font-size: 40px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 290px;
`;

const IconContainer = styled.div`
    min-height: 10%;
    min-width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 10px 10px;
`;

const BackIcon = styled(ArrowBackIcon)`
    color: whitesmoke;
    margin-bottom: 20px;
`;

const LinkIcon = styled(LinkedInIcon)`
    color: #0A66C2;
    
`;

const FaceIcon = styled(FacebookIcon)`
    color: #3b5998;
`;

const TweetIcon = styled(TwitterIcon)`
    color: #0084b4;
`;


export function Dev3Postview(props){

    const { active, setActive } = useContext(CardContext3);

    const switchToOver3 = () => {
        setActive("overview3");
      };

      let animate = {};
    if (active === "overview3") animate = { x: 300 };
    else if (active === "postview3") animate = { x: -300 };

    return <OverviewContainer animate={animate}>
        <IconButton>
        <BackIcon onClick={switchToOver3} />
        </IconButton>
        <TitleContainer>
            <Title>
                India
            </Title>
        </TitleContainer>
        <IconContainer>
            <IconButton>
                <a href="https://www.linkedin.com/in/victor-ramirez-martinez-80759416b" target="_blank">
                    <LinkIcon/>
                </a>
            </IconButton>
            <IconButton>
                <a href="https://twitter.com/VictorR65153076?t=Ts7bOft0rK9jalAoNWPHWw&s=09" target="_blank">
                <TweetIcon/>
                </a>
            </IconButton>
            <IconButton>
                <FaceIcon/>
            </IconButton>
        </IconContainer>
    </OverviewContainer>
}