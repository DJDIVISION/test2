import styled from "styled-components";

const InnerLayout = styled.div`
    padding: 10rem 5rem;

    @media screen and (max-width:880px){
        justify-items: center;
        padding: 10rem 5rem;
    }
    
`;

const SectionStyled = styled.section`
    padding: 4rem 0;
`;

export {InnerLayout, SectionStyled}