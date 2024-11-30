import {useState} from "react";
import {Trans} from "@lingui/react/macro";

const themes = [
    "light",
    "dark",
    "cupcake",
    "bumblebee",
    "emerald",
    "corporate",
    "synthwave",
    "retro",
    "cyberpunk",
    "valentine",
    "halloween",
    "garden",
    "forest",
    "aqua",
    "lofi",
    "pastel",
    "fantasy",
    "wireframe",
    "black",
    "luxury",
    "dracula",
    "cmyk",
    "autumn",
    "business",
    "acid",
    "lemonade",
    "night",
    "coffee",
    "winter",
    "dim",
    "nord",
    "sunset",
];

export const ThemeSelector = () => {
    const [selectedTheme, setSelectedTheme] = useState<string>(localStorage.getItem("theme") || 'light');

    const changeTheme = (theme: string) => {
        localStorage.setItem("theme", theme);
        setSelectedTheme(theme);
    }

    return (
        <div className="dropdown dropdown-top">
            <div tabIndex={0} role="button"><Trans>Theme</Trans></div>
            <ul tabIndex={0}
                className="dropdown-content menu bg-neutral rounded-box z-[1] h-[28.6rem] max-h-[calc(100vh-10rem)] w-80 overflow-y-auto p-2 shadow">
                {themes.map((theme, index) => (
                    <li key={index}>
                        <input
                            type="radio"
                            name="theme-dropdown"
                            onChange={e => changeTheme(e.target.value)}
                            checked={selectedTheme === theme}
                            className="theme-controller btn btn-sm btn-block btn-neutral justify-start"
                            aria-label={theme}
                            value={theme}/>
                    </li>
                ))}
            </ul>
        </div>
    );
};
