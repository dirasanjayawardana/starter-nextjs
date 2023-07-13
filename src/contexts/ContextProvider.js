'use client'
import React, { createContext, useContext, useState, useEffect } from 'react'

// declare
export const stateContext = createContext();

// use in component
export const useStateContext = () => {
    return useContext(stateContext)
}

export const ContextProvider = ({ children }) => {

    const [currentMode, setCurrentMode] = useState('dark');
    const [currentColor, setCurrentColor] = useState("#0bc9c9");
    const [showMode, setShowMode] = useState(false);
    const [showSidebar, setShowSidebar] = useState(true);
    const [showActiveSide, setShowActiveSide] = useState();
    const [screenSize, setScreenSize] = useState(100);

    const handleChangeMode = (e) => {
        setShowMode(false);
        setShowSidebar(true);
        setCurrentMode(e.target.value);
        localStorage.setItem('themeMode', e.target.value);
    };

    const setColor = (color) => {
        setShowMode(false);
        setShowSidebar(true);
        setCurrentColor(color);
        localStorage.setItem('colorMode', color);
    };


    return (
        <stateContext.Provider value={{
            currentMode, setCurrentMode,
            handleChangeMode,
            showMode, setShowMode,
            showSidebar, setShowSidebar,
            screenSize, setScreenSize,
            showActiveSide, setShowActiveSide,
            currentColor, setCurrentColor, setColor
        }}>
            {children}
        </stateContext.Provider>
    )
}
