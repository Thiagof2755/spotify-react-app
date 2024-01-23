import styled from "styled-components";

export const Button = styled.button`

    background-color: ${props => props.Backgroundcolor || '#fff'};
    color: ${props => props.color || '#000'};
    font-size: ${props => props.fontSize || '16px'};
    font-weight: bold;
    margin-top: ${props => props.marginTop || '0'};
    margin-bottom: ${props => props.marginBottom || '0'};
    margin-left: ${props => props.marginLeft || '0'};
    margin-right: ${props => props.marginRight || '0'};
    border: ${props => props.border || '0'};
    border-radius: 40px;
    cursor: pointer;
    padding: ${props => props.padding || '14px 30px'};

`