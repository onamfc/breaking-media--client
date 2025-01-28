'use client';

import { useEffect, useState } from 'react';

const DarkModeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        // Check if a theme is saved in localStorage
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

        // Determine the initial theme based on savedTheme or system preference
        const isDark = savedTheme
            ? savedTheme === 'dark'
            : prefersDark;

        // Sync state and the <html> class
        setIsDarkMode(isDark);
        document.documentElement.classList.toggle('dark', isDark);
    }, []);

    const toggleDarkMode = () => {
        const newMode = !isDarkMode;

        // Update state and the <html> class
        setIsDarkMode(newMode);
        if (newMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    };

    return (
        <button
            onClick={toggleDarkMode}
            className="bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 p-2 rounded"
        >
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
    );
};

export default DarkModeToggle;
