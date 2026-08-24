import React from 'react';
import type { ReactNode } from 'react'; 
import styled from 'styled-components';

interface Props {
    children?: ReactNode;
    alignment: string;
}

function ButtonCont({ children, alignment }: Props) {
    return (
        <InnerContainer>
            {React.Children.map(children, (child) => (
              <li>{child}</li>  
            ))}
        </InnerContainer>
    );
}

const InnerContainer = styled.ul`
    display: flex;
    flex-flow: row nowrap;
`

export default styled(ButtonCont)`
    display: flex;

`