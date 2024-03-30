import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
    const [greeting, setGreeting] = useState("");

    useEffect(() => {
        fetch("/api").then((response) => {
            response.text().then((text) => {
                setGreeting(text);
            });
        });
    }, []);

    return (
        <>
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img
                        src={reactLogo}
                        className="logo react"
                        alt="React logo"
                    />
                </a>
            </div>
            <h1>{greeting}</h1>
        </>
    );
}

export default App;
