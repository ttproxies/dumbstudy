import styled, { createGlobalStyle } from "styled-components";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Clock from "./components/Clock";

const BACKEND_PORT = 5123;

export default function App() {
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(true);

    // useEffect is a react hook to run ""side-effects"".
    // Run code on mount (empty array for dependencies)
    useEffect(() => {
        const fetchApiMessage = async () => {
            try {
                const res = await fetch(
                    `http://localhost:${BACKEND_PORT}/api/hai`,
                );
                const data = await res.json();

                setMessage(data.message);
                setLoading(false);
            } catch (err) {
                console.error(err);
                setLoading(false);
            }
        };

        fetchApiMessage();
    }, []);

    return (
        <>
            <GlobalStyle></GlobalStyle>
            <main>
                <Header></Header>
                <Clock></Clock>
                <ServerMessage>{loading ? <p>loading ...</p> : <p>{message}</p>}</ServerMessage>
            </main>
        </>
    );
}

const ServerMessage = styled.h1`
    font-style: oblique;
    font-size: 0.75rem;
`

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    body {
        font-family: "Noto Sans Mono", monospace
    }

    body > * {
        max-width: 800px;
        margin: auto;
    }
`;
