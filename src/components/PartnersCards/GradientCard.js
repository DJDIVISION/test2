import React from 'react';
import styled from "styled-components";
import TelegramIcon from '@mui/icons-material/Telegram';
import LanguageIcon from '@mui/icons-material/Language';
import TwitterIcon from '@mui/icons-material/Twitter';
import { IconButton } from "@material-ui/core";
import { Link } from 'react-router-dom';


const Telegram = styled(TelegramIcon)`
    color: #0088cc;
`;

const Twitter = styled(TwitterIcon)`
    color: #0084b4;
`;

const Website = styled(LanguageIcon)`
    color: whitesmoke;
`;


function GradientCard({ image, logo, name, type, desc, ctaButton, TelegramLink, WebsiteLink, TwitterLink}) {
    return (
        <GradientCardStyled>
            <div className="g-card">
                <div className="inner-content">
                    <div className="image">
                        <img src={image} alt="" />
                        <div className="name">
                            <img src={logo} alt="" />
                            <p className="text">{name}</p>
                        </div>
                    </div>
                    <div className="card-content">
                        <h6 className="card-name">{type}</h6>
                        <p className="desc">{desc}</p>
                        <div className="footer">
                          <p><IconButton><Telegram onClick={event => window.open(TelegramLink, "_blank")}/></IconButton></p>
                          <p><IconButton><Website onClick={event => window.open(WebsiteLink, "_blank")}/></IconButton></p>
                          <p><IconButton><Twitter onClick={event => window.open(TwitterLink, "_blank")}/></IconButton></p>   
                        </div>
                    </div>
                </div>
            </div>
        </GradientCardStyled>
    )
}

const GradientCardStyled = styled.div`
    border-radius: 20px;
    font-size: 1rem;
    transition: all .4s ease-in-out;

    .g-card{
        margin: 2rem;
        .inner-content{
           background-color: #091026;
           padding: .8rem;
           border-radius: 20px;
           box-shadow: 0 2px 15px 1px whitesmoke;
           border: 1px solid darkblue;
           .image{
               width: 100%;
               position: relative;
               img:first-child{
                  width: 100%;
                  object-fit: fill;
                  height: 200px;
                  border-radius: 10px;
                  border: 1px solid gold;
               }

               .name{
                   position: absolute;
                   left: 50%;
                   bottom: -26px;
                   background-color: #03091f;
                   display: flex;
                   align-items: center;
                   transform: translateX(-50%);
                   width: 75%;
                   padding: .5rem .5rem;
                   border: 1px solid gold;
                   color: whitesmoke;
                   text-align: center;
                   font-size: 26px;
                   border-radius: 50px;
                   
                   
                   
                   
                   img{
                       width: 50px;
                       height: 50px;
                       border-radius: 50%;
                       object-fit: contain;
                       margin-right: 2rem;
                   }

                   .text{
                       margin-left: -15px;

                       @media screen and (max-width:880px) {
                            margin-left: -5px;
                       }
                   }
               }
           }

           .card-content{
               margin-top:60px;

               .card-name{
                color: whitesmoke;
                text-align: center;
                font-size: 48px;
               }

               .desc{
                   color: whitesmoke;
                   padding: 10px 25px;
                   text-align: justify;
                   line-height: 1.3;
                   margin-bottom: 20px;
               }

               .footer{
                   display: flex;
                   justify-content: space-between;
                   padding: 15px;
                   border-top: 1px solid lightgoldenrodyellow;
               }
           }
        }
    }
`;

export default GradientCard
