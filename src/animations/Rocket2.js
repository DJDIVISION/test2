import styled, { keyframes } from "styled-components";
import rocket from "../images/logoAirlines.png";
import BackImage from "../images/spaceBack1.jfif";

const move = keyframes`
0% { transform: translate3d(-1450px, 1400px, 0px)          }
    20% { transform: translate3d(20px, -20px, 0px)        }
    40% { transform: translate3d(-40px, 40px, 0px)        }
    60% { transform: translate3d(40px, -40px, 0px)        }
    80% { transform: translate3d(-40px, 40px, 0px)        }
    100% { transform: translate3d(1450px, -1500px, 0px)          }
`;



const Rocket = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  width: 100%;
  padding-bottom: 5rem;
  animation: ${move} 5s ease infinite;
  margin-top: 200px;
  
`;




const Rocket2 = () => {
  return (
      
          <Rocket>
            <img src={rocket} alt="" width="300" height="300" />
        </Rocket>
     
    
  );
};

export default Rocket2;