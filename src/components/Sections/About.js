import styled, { keyframes } from "styled-components";
import rocket from "../../images/rocket_image.png";
import planet from "../../images/3dplanet.png";
import hand from "../../images/hand.svg";

const move = keyframes`
0% { transform: translateY(-5px)         }
    50% { transform: translateY(10px) translateX(10px)        }
    100% { transform: translateY(-5px)         }
`;



const Rocket = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  width: 100%;
  padding-bottom: 5rem;
  animation: ${move} 2.5s ease infinite;
  margin-top: 100px;
`;





const About = () => {
  return (
    <Rocket>
        <img src={rocket} alt="" width="400" height="400" />
    </Rocket>
  );
};

export default About;