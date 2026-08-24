import React from "react";
import type { ReactNode } from "react";
import styled from "styled-components";
import Button from "./Button";

interface Props {
    children: ReactNode;
    direction: "horizontal" | "vertical";
    alignment: string;
}

export default function ButtonCont({ direction, alignment }: Props) {
    return (
        <Container dir={direction}>
            <li>
                <Button type="button" onClick={() => console.log("clicked!")}>
                    helo
                </Button>
            </li>
            <li>
                <Button type="button" onClick={() => console.log("clicked!")}>
                    helo2
                </Button>
            </li>
            <li>
                <Button type="button" onClick={() => console.log("clicked!")}>
                    helo3
                </Button>
            </li>
        </Container>
    );
}

const Container = styled.ul`
    display: flex;
    flex-flow: ${(props) =>
            props.dir === "horizontal" ? "row" : "column"}
        nowrap;
    justify-content: center;
    gap: 1rem;

    list-style-type: none;
`;
