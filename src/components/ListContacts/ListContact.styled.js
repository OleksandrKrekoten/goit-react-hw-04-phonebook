import styled from '@emotion/styled';

export const List = styled.ul`
    list-style: none;
`;
export const Item = styled.li`
    font-family: 'Courier New', Courier, monospace;
    display: flex;
    text-align: center;
    align-items: center;
`;
export const Name = styled.p`
    font-weight: 700;
    margin-right: 16px;
`;

export const DeleteBtn = styled.button`
    display: block;
    border: 1px solid #0b0e24;
    border-radius: 12px;
    height: 20px;
    color: #0b0e24;
    background-color: transparent;
    margin-left: 16px;
    transition: background-color 200ms ease-in;
    :hover,
    :focus {
        background-color: #0b0e24;
        color: white;
    }
`;
