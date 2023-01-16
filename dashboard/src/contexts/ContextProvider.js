import React, {useState, useContext, createContext} from 'react'

const StateContext = createContext()

const initialState = {
    chat: false,
    cart: false,
    notification: false,
    userProfile: false,
}

export const ContextProvider = ({children}) => {
    const [activeMenu, setActiveMenu] = useState(true)
    const [isClicked, setIsClicked] = useState(initialState)
    const [screenSize, setScreenSize] = useState(undefined)

    const handleClick = (clicked) => setIsClicked({...initialState, [clicked] : true})

    return (
        <StateContext.Provider 
        value={{
            activeMenu,
            setActiveMenu,
            isClicked,
            setIsClicked,
            screenSize,
            setScreenSize,
            handleClick,
            initialState
        }}
        >
            {children}
        </StateContext.Provider>
    )
}
export const useStateContext = () => useContext(StateContext)