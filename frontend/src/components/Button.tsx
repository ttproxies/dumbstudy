import type { ReactNode } from "react"
import styled from "styled-components";

interface Props {
    children: ReactNode;
    type: "button" | "a";
    icon?: string;
    onClick: () => void
}

export default function Button({children, type, icon, onClick}: Props) {
    return (
        <ButtonInner as={type} onClick={onClick}>
            {children}
            {icon && <i className={icon}></i>}
        </ButtonInner>
    );
}

const ButtonInner = styled.button`
    background-color: #eee;
    border: none;
    padding: 1rem;
    font-size: 1.5rem;
    font-family: "Noto Sans Mono", monospace;
    font-weight: 700;
    border-radius: 0.5rem;
    text-transform: uppercase;
    cursor: pointer;
`



