import { useEffect } from "react";
import { checkDarkModePreference, toggleDarkMode } from "../utils/Darkmode";


export default function Header() {

    useEffect(() => {
        checkDarkModePreference();
    }, []);

    return (
        <header>
            <div className="header-container">
                <h1>yuki6942</h1>
                <p>Currently learning React</p>
                <div className="social-links">
                    <a href="https://discord.com/users/594627968668794896" target="_blank" class="social-icon">
                        <i class="fab fa-discord"></i> Discord
                    </a>
                    <a href="https://bsky.app/profile/yuki6942.bsky.social" target="_blank" class="social-icon">
                        <i class="fab fa-bluesky"></i> Bluesky
                    </a>
                    <a href="https://github.com/yuki6942/" target="_blank" class="social-icon">
                        <i class="fab fa-github"></i> GitHub
                    </a>
                    <a href="mailto:contact@yuki6942.de" class="social-icon">
                        <i class="fas fa-envelope"></i> Email
                    </a>
                </div>
                <button id="darkModeToggle" class="dark-mode-toggle" onClick={toggleDarkMode}>
                    <span class="icon" id="toggleIcon"><i class="fa fa-moon"></i></span>
                </button>
            </div>
               
        </header>
    );
}

