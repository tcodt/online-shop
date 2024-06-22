import { useEffect, useState } from "react";

// Constants for the dark mode class and theme values
const DARK_MODE_CLASS = "dark";
const DARK_MODE_THEME = "dark";
const LIGHT_MODE_THEME = "light";

// Custom hook to manage the theme state
const useTheme = () => {
  // State to track the current theme
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Effect to initialize the theme on component mount
  useEffect(() => {
    // Retrieve the stored theme from localStorage
    const storedTheme = localStorage.getItem("theme");

    // Check if the stored theme is 'dark'
    const isDark = storedTheme === DARK_MODE_CLASS;

    // Set the initial dark mode state
    setIsDarkMode(isDark);

    // Toggle the 'dark' class on the html element based on the theme
    document.documentElement.classList.toggle(DARK_MODE_CLASS, isDark);
  }, []);

  // Function to toggle the theme
  const toggleTheme = () => {
    // Determine the new theme based on the current state
    const newTheme = isDarkMode ? LIGHT_MODE_THEME : DARK_MODE_THEME;

    // Store the new theme in localStorage
    localStorage.setItem("theme", newTheme);

    // Toggle the 'dark' class on the html element based on the new theme
    document.documentElement.classList.toggle(DARK_MODE_CLASS, !isDarkMode);

    // Update the dark mode state
    setIsDarkMode(!isDarkMode);
  };

  // Return the current dark mode state and the toggleTheme function
  return [isDarkMode, toggleTheme];
};

export default useTheme;
