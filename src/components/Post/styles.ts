import styled from 'styled-components';

export const PostContainer = styled.div`
    background-color: #ffffff;
    display: flex;
    width: 800px;
    top: 1000px;
    flex-direction: column;
    height: fit-content;
    justify-content: space-between;
    row-gap: 10px;
    border-radius: 10px;
    border-width: 2px 2px 2px 2px;

    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.12),
        0px 1px 3px rgba(0, 0, 0, 0.2);
`;

export const PostTitle = styled.h1`
    font-size: 30px;
    background-color: #d9d9d9;
    width: 800px;
    border-radius: 10px;
    border-width: 0px 2px 0px 2px;
    font-family: 'Arial';
    border-color: #1e2732;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.12),
        0px 1px 3px rgba(0, 0, 0, 0.2);
    font-weight: bold;
`;

export const PostText = styled.p`
    padding-left: 8px;
    padding-right: 8px;
    padding-top: 8px;
    padding-bottom: 8px;
    font-size: 20px;
    text-align: justify;
`;

export const PostImage = styled.img`
    height: 500px;
    width: auto;
`;

export const PostLike = styled.img`
    height: 40px;
    width: 40px;
`;
