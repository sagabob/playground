import styled from '@emotion/styled';

export const TabContainer = styled.div` 
    display: ${props => props.isActive ? "block" : "none"};  
`;