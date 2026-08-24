import { useState, useEffect } from 'react';
import styled from 'styled-components';

function Header(className: string) {
    return (
        <>
            <header className={className}>
                <div>
                    <HeaderLogo>dumbstudy</HeaderLogo>
                </div>
                <nav className="header__nav">
                    
                </nav>
            </header>
        </>
    );
}

// Internal CSS

const HeaderLogo = styled.h1``

// Export CSS

export default styled(Header)`
    border-bottom: 1px solid black;
`