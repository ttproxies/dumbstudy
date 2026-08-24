import type { ReactNode } from 'react'; 
import styled from 'styled-components';
import ButtonCont from './ButtonCont';
import { BaseButton } from './Button';

function Header(props: { className?: string} ) {
    return (
        <>
            <header className={props.className}>
                <div>
                    <HeaderLogo>dumbstudy</HeaderLogo>
                </div>
                <nav>
                    <ButtonCont alignment="flex-end">
                        <BaseButton onClick={() => console.log("hello")}>options</BaseButton>
                        <BaseButton onClick={() => console.log("hello")}>options</BaseButton>
                    </ButtonCont>
                </nav>
            </header>
        </>
    );
}

// Internal CSS

const HeaderLogo = styled.h1``

// Export CSS

export default styled(Header)`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    padding: 1rem 0;
    margin-bottom: 1rem;
    border-bottom: 1px solid #ccc;
`