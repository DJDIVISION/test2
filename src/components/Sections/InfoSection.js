import React from 'react'
import { Section, Container } from "./Elements";






const InfoSection = ({ image, title, desc }) => {
    return (
       <Section image={image}>
            <Container>
                <h1>{title}</h1>
                <p>{desc}</p>
            </Container>
       </Section>
           
    );
}

export default InfoSection;
