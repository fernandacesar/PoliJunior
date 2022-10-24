import styled from 'styled-components';

export const MainBody = styled.div`
    min-height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    font-family: 'Arial';
`;

export const SideBar = styled.div`
    width: 300px;
    height: auto;

    background: rgba(255, 133, 133, 0.14);
    box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.12),
        0px 1px 3px rgba(0, 0, 0, 0.2);
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

export const NavContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 36px;
`;

export const TopBarDiv = styled.div`
    /* topbar */
    position: absolute;
    width: 1620px;
    height: 100px;
    left: 300px;
    background: #ffbd9f;
    box-shadow: 2px 8px 8px rgba(0, 0, 0, 0.14), 0px 2px 8px rgba(0, 0, 0, 0.12),
        0px 1px 3px rgba(0, 0, 0, 0.2);
`;

export const Search = styled.div`
    position: absolute;
    width: 600px;
    height: 50px;
    left: 25%;
    top: 35px;

    background: #ffffff;
    border-radius: 20px;
    box-shadow: 2px 8px 8px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.12),
        0px 1px 3px rgba(0, 0, 0, 0.2);
`;

export const Piu = styled.input`
    position: absolute;
    width: 800px;
    height: 200px;
    left: 360px;
    top: 450px;
    font-size: 20px;
    border: 20px;
    border-radius: 2px;
    border-width: 2px 2px 2px 2px;
    border-style: solid;
    border-color: #1e2732;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.12),
        0px 1px 3px rgba(0, 0, 0, 0.2);
`;

export const SendPiuButton = styled.button`
    font-weight: bold;
    font-size: 20px;
    position: absolute;
    width: 100px;
    height: 50px;
    left: 1020px;
    top: 620px;
    background: #fd4f00;
    border-radius: 20px;
`;

export const Recente = styled.div`
    position: absolute;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    width: 700px;
    height: 200px;
    left: 1200px;
    top: 450px;
    text-align: center;
    border-width: 0px 2px 2px 0px;
    border-style: solid;
    border-color: #1e2732;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.12),
        0px 1px 3px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
`;

/* TOP BAR */

export const TrendingDiv = styled.div`
    display: flex;
    padding: 36px 0px 0px 26px;
    gap: 70px;
    width: 1620px;
    height: 300px;
    left: 0px;
    background-color: #5b5858;
    position: absolute;
    top: 100px;
    left: 300px;
    box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.12),
        0px 1px 3px rgba(0, 0, 0, 0.2);
`;

export const Box = styled.div`
    flex: none;
    order: 0;
    flex-grow: 0;
    position: flex;
    width: 200px;
    height: 200px;
    left: 21%;
    top: 16%;
    background: #d9d9d9;
    border-radius: 10px;
    font-family: 'Poppins';
    font-style: normal;
`;

export const PostsContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    position: absolute;
    flex-direction: column;
    overflow-y: scroll;
    top: 700px;
    left: 360px;
    padding-top: 10px;
    justify-content: space-between;
    gap: 24px;
`;
