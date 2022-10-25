import styled from "styled-components";

export const PostContainder = styled.div `
    width: 70%;
    height: 150px;
    border-radius: 24px;
    padding: 20px;
    background: #FDFDFE;
    border: 1px solid #556586;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
`

export const Column = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`

export const ColumnCenter = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const TitleText = styled.h1 `
    font-size: 28px;
    font-weight: 700;
    color: #000000;
    font-family: 'Open Sans';
    margin-bottom: 20px;
`

export const SubtitleText = styled.p `
    font-size: 16px;
    font-weight: 500;
    color: #000000;
    font-family: 'Open Sans';
`

export const ImageAuthor = styled.img `
    width: 70px;
    height: 70px;
    border-radius: 35px;
    border: 3px solid #FFFFFF;
`

export const NomeAuthor = styled.h2 `
    font-size: 14px;
    font-family: 'Open Sans';
    color: #8e8d8d;
    font-weight: 500;
`