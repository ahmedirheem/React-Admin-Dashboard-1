import React, { useState, useContext, createContext } from 'react'

const StateContext = createContext()

const initialState = {
    chat: false,
    cart: false,
    notification: false,
    userProfile: false,
}

export const ContextProvider = ({ children }) => {
    const [activeMenu, setActiveMenu] = useState(true)
    const [isClicked, setIsClicked] = useState(initialState)
    const [screenSize, setScreenSize] = useState(undefined)
    const [currentMode, setCurrentMode] = useState('Light')
    const [currentColor, setCurrentColor] = useState('#03C9D7')
    const [themeSettings, setThemeSettings] = useState(false)

    const setMode = (e) => {
        setCurrentMode(e.target.value);
        localStorage.setItem('themeMode', e.target.value);
    };

    const setColor = (color) => {
        setCurrentColor(color);
        localStorage.setItem('colorMode', color);
    };

    const handleClick = (clicked) => setIsClicked({ ...initialState, [clicked]: true })

    return (
        <StateContext.Provider
            value={{
                activeMenu, setActiveMenu,
                isClicked, setIsClicked,
                screenSize, setScreenSize,
                handleClick, setMode,
                initialState, setColor,
                currentMode, setCurrentMode,
                currentColor, setCurrentColor,
                themeSettings, setThemeSettings,

            }}
        >
            {children}
        </StateContext.Provider>
    )
}
export const useStateContext = () => useContext(StateContext)