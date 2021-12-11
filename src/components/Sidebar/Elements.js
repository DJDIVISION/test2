import styled from "styled-components";
import { Link as LinkS } from "react-scroll";
import { Link as LinkR } from "react-router-dom";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import PeopleIcon from '@mui/icons-material/People';
import CasinoIcon from '@mui/icons-material/Casino';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import BrushIcon from '@mui/icons-material/Brush';
import TwitterIcon from '@mui/icons-material/Twitter';



export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: black;
    display:grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
    top: ${({ isOpen }) => (isOpen ? "0" : "-100%")}; 
    
`;

export const CloseIcon = styled(HighlightOffIcon)`
    color: whitesmoke;
`;

export const Icon1 = styled(NewspaperIcon)`
    margin-right: 10px;

`;

export const Icon2 = styled(PeopleIcon)`
    margin-right: 10px;
`;

export const Icon3 = styled(CasinoIcon)`
    margin-right: 10px;
`;

export const Icon4 = styled(SupervisedUserCircleIcon)`
    margin-right: 10px;
`;

export const Icon5 = styled(BrushIcon)`
    margin-right: 10px;
`;

export const Icon6 = styled(TwitterIcon)`
    margin-right: 10px;
`;

export const Logo1 = styled.img`
    width: 30px;
    margin-right: 15px;

`;


export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`;

export const SidebarWrapper = styled.div`
    color: whitesmoke;
`;

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(8, 60px);
    text-align: center;

    @media screen and (max-width: 480px) {
       grid-template-rows: repeat(8, 40px);
    }

`;

export const SidebarLinkS = styled(LinkS)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: whitesmoke;
    cursor: pointer;
    margin-left: -40px;
    

    &:hover {
        color: blue;
        transition: 0.2 ease-in-out;
    }
`;

export const SidebarLinkR = styled(LinkR)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: whitesmoke;
    cursor: pointer;
    margin-left: -40px;
    

    &:hover {
        color: blue;
        transition: 0.2 ease-in-out;
    }
`;

export const SidebarRoute = styled(LinkR)`
    border-radius: 50px;
    background: blue;
    white-space: nowrap;
    padding: 16px 64px;
    color: green;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0,2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: whitesmoke;
        color: blue;
    }
`;

