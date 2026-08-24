import type { ReactNode } from "react";
import styled from "styled-components";

interface Props {
    className: string; // styled-components components break down into the original one + classes
    children?: ReactNode;
    icon?: string;
}

interface ButtonProps extends Partial<Props> {
    onClick: () => void;
}

interface ButtonLinkProps extends Partial<Props> {
    to: string;
}

// Export base components

export function Button({ className, children, icon, onClick }: ButtonProps) {
    return (
        <button className={className} onClick={onClick}>
            {children}
            {icon && <i className={icon}></i>}
        </button>
    );
}

export function ButtonLink({ className, children, icon, to }: ButtonLinkProps) {
    return (
        <a href={to} className={className}>
            {children}
            {icon && <i className={icon}></i>}
        </a>
    );
}

// Export style classes
const BaseButtonStyle = styled(Button)`
    background: #eee;
    padding: 0.5rem;
    font-size: 1.3rem;
    border-radius: 0.5rem;
    border: none;
    font-family: inherit;
`

export const TimerButton = styled(BaseButtonStyle)`
    letter-spacing: -5%;
    text-transform: uppercase;
`;

export const ClockOptionButton = styled(BaseButtonStyle)`
    font-size: 1rem;
`;
