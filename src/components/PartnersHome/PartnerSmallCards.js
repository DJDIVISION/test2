import React from "react";
import styled from "styled-components";
import { SectionStyled } from "../Sections/Layouts/InnerLayout.js";
import  MainTitle  from "../Sections/Layouts/MainTitle";
import  SmallHeading  from "../Sections/Layouts/SmallHeading";


function PartnerSmallCards() {
    return (
        <StyledCards>
            <SectionStyled>
                <div className="title-con">
                    <MainTitle title={"OUR PARTNERS"} />
                </div>
            </SectionStyled>
        </StyledCards>
    )
}

const StyledCards = styled.div`

`;

export default PartnerSmallCards;
