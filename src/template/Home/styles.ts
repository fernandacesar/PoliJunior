import styled from 'styled-components';

export const Title = styled.h1`
    font-size: 2rem;
    color: black;
`;

export const TitleContainer = styled.div`
    display: flex;
    align-items: center;
    background-color: yellow;
    border: 1px solid black;
    padding: 8px;
`;

export const SideBar = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 10px 0px;
    gap: 10px;

    width: 300px;
    height: 1080px;

    background: rgba(255, 133, 133, 0.14);

    flex: none;
    order: 0;
    flex-grow: 0;
`;

export const UserDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 8px 0px 8px 8px;
    gap: 8px;

    width: 300px;
    height: 138px;

    /* Inside auto layout */

    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
`;

export const NomesDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 16px 0px 16px 16px;
    gap: 16px;

    width: 233px;
    height: 86px;

    /* Inside auto layout */

    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
`;
export const FotoPerfil = styled.h1`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 16px 16px;
    gap: 16px;

    width: 80px;
    height: 80px;

    background: #fd4f00;
    border-radius: 40px;

    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
`;

export const Nome = styled.h1`
    width: 217px;
    height: 24px;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 26px;
    line-height: 24px;

    /* identical to box height, or 92% */

    letter-spacing: 0.5px;

    /* /OnSurface/HighEmphasis */

    color: #1e2732;
    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
`;

export const User = styled.h2`
    width: 106px;
    height: 16px;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 16px;
    /* identical to box height, or 100% */

    letter-spacing: 0.25px;

    color: #fd4f00;
`;

export const Icone = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 26px 33px 26px 16px;
    gap: 16px;

    width: 100%;
    height: 10px;

    background: #ffbd9f;
    border-radius: 0px 50px 50px 0px;

    letter-spacing: 0.5px;

    color: #000000;

    /* Inside auto layout */

    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
`;

export const NomeIcone = styled.h3`
    width: 50px;
    height: 24px;

    font-family: 'Poppins';
    font-style: normal;

    font-size: 20px;

    color: #000000;

    /* Inside auto layout */

    flex: none;
    order: 1;
    flex-grow: 0;
`;

/* TOP BAR */

export const TopBarDiv = styled.div`
    /* topbar */

    position: absolute;
    width: 80%;
    height: 100px;
    left: 300px;
    top: 1px;

    background: #ffbd9f;
`;

export const Search = styled.div`
    position: absolute;
    width: 600px;
    height: 50px;
    left: 25%;
    top: 35px;

    background: #ffffff;
    border-radius: 20px;
`;

/* TRENDING */

export const TrendingDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 143px 0px 0px 26px;
    gap: 80px;

    width: 1497px;
    height: 444px;

    border-radius: 20px;

    /* Inside auto layout */

    flex: none;
    order: 0;
`;

export const Box = styled.div`
    flex: none;
    order: 0;
    flex-grow: 0;

    position: absolute;
    width: 200px;
    height: 200px;
    left: 21%;
    top: 16%;

    background: #d9d9d9;
    border-radius: 10px;

    font-family: 'Poppins';
    font-style: normal;
`;
