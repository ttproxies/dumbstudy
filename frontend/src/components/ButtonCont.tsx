import React from 'react';
import type { ReactNode } from 'react'; 
import styled from 'styled-components';

interface Props {
    children?: ReactNode;
    alignment: string;
}

// The $* syntax denotes a "transient" prop which aren't rendered as part of the DOM element attributes
function ButtonCont({ children, alignment }: Props) {
    return (
        <InnerContainer $alignment={alignment}>
            {React.Children.map(children, (child) => (
              <li>{child}</li>
            ))}
        </InnerContainer>
    );
}

// We destructure props to only use { $alignment } and using it in the arrow function
// This is equivalent to writing ${(props.$alignment) => $alignment}
const InnerContainer = styled.ul<{ $alignment: string }>`
    display: flex;
    flex-flow: row nowrap;
    justify-content: ${({ $alignment }) => $alignment}; //
`

export default styled(ButtonCont)`
    display: flex;

`