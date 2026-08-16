import { useState, useEffect } from "react";
import "./App.css";

const BACKEND_PORT = 5123;

export default function App() {
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(true);

    // useEffect is a react hook to run ""side-effects"".
    // Run code on mount (empty array for dependencies)
    useEffect(() => {
        // using async-await syntax for funsies
        const fetchApiMessage = async () => {
            try {
                const res = await fetch(
                    `http://localhost:${BACKEND_PORT}/api/hai`,
                );
                const data = await res.json();

                setMessage(data);
                setLoading(false);
            } catch (err) {
                console.error(err);
                setLoading(false);
            }
        };

        fetchApiMessage();
    }, []);

    return (
        <div className="App">
            <h1>my awesome app using react-ts and Express.js</h1>
            {loading ? <p>loading ...</p> : <p>{message}</p>}
        </div>
    );
}
