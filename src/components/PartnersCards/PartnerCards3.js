import React from "react";
import styled from "styled-components";
import data3 from "./data3";
import { Button } from "@material-ui/core";



function PartnersCards3() {
    return (
        <PartnersCards3Styled>
            {
                data3.map((partner) => {
                    return (
                    <div className="partnerscards" key={partner.id}>
                       <div className="logo">
                            <img src={ partner.image} alt="" />
                            <div className="text">
                                <h4>{partner.name}</h4>
                            </div>
                            <div className="text">
                                <p>{partner.type}</p>
                            </div>
                            <div>
                                <CardButton>LEARN MORE</CardButton>
                            </div>
                        </div>
                    </div>
                    )
                })
            }
        </PartnersCards3Styled>
    )
}

const PartnersCards3Styled= styled.div`
     border-radius: 20px;
     background: #161F38;
     transition: all .4s ease-in-out;
     color: whitesmoke;
     
     &:hover{
             transform: translateY(-10px);
             
         }

     .partnerscards{
         display: flex;
         justify-content: center;
         align-items: center;
         
        

         .logo{
             display: column;
             img{
                 display: flex;
                 margin-top: 10px;
                 border-radius: 50%;
                 margin-bottom: 25px;
                 object-fit: cover;
                 border: 2px solid gold;
                 
             }

         }

         .text{
             
             h4{
                 font-size:48px;
                 display: flex;
                 align-items: center;
                 justify-content: center;
                 margin-bottom: 10px;

             }
             p{
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 24px;
                margin-bottom: 30px;
             }
         }
     }
`;

const CardButton = styled(Button)`
&&&{
  color: gold;
  border: 1px solid gold;
  padding: 8px 15px;
  margin-left: 40px;
  margin-bottom: 10px;
  &:hover{
      background-color: gold;
      color: black;
      transition: 0.2s all ease-in-out;
      font-weight: bold;
  }


}  
    
`;

export default PartnersCards3;
