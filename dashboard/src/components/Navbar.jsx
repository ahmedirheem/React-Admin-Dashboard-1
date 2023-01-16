import React, { useEffect } from 'react'
import { AiOutlineMenu } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import avatar from '../data/avatar.jpg'
import { Chat, Cart, Notification, UserProfile } from '.'
import { useStateContext } from '../contexts/ContextProvider';

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
    <TooltipComponent content={title} position='BottomCenter'>
        <button type='button' onClick={() => customFunc()} style={{ color }}
            className='relative text-xl rounded-full p-3 hover:bg-light-gray'>
            <span className='absolute inline-flex rounded-full h-2 w-2 right-2 top-2' style={{ background: dotColor }} />
            {icon}
        </button>
    </TooltipComponent>
);


function Navbar() {
    const { activeMenu, setActiveMenu, screenSize, setScreenSize, isClicked, handleClick, currentColor, initialState } = useStateContext()

    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth)

        window.addEventListener('resize', handleResize)

        handleResize();

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    useEffect(() => {
        if(screenSize <= 900){
            setActiveMenu(false)
        }else{
            setActiveMenu(true)
        }
    }, [screenSize])

    const handleActiveMenu = () => setActiveMenu(!activeMenu)

    return (
        <div className='flex justify-between p-2 md:ml-6 md:mr-6 relative'>
            <NavButton title='Menu' customFunc={handleActiveMenu} color='blue' icon={<AiOutlineMenu />} />
            <div className='flex'>

                <NavButton title='Cart' customFunc={() => handleClick("cart")} color='blue' icon={<FiShoppingCart />} />
                <NavButton title='Chat' customFunc={() => handleClick("chat")} dotColor="#03C9D7" color='blue' icon={<BsChatLeft />} />
                <NavButton title='Notification' customFunc={() => handleClick("notification")} dotColor="rgb(254, 201, 15)" color='blue' icon={<RiNotification3Line />} />

                <TooltipComponent content='Profile' position='BottomCenter'>
                    <button type='button' onClick={() => handleClick("userProfile")}
                        className='flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg'>
                        <img className='rounder-full w-8 h-8' src={avatar} alt="user-profile" />
                        <p>
                            <span className='text-gray-400 text-14'>Hi,</span>{' '}
                            <span className='text-gray-400 text-14 front-bold ml-1'>Michael</span>
                        </p>
                        <MdKeyboardArrowDown className="text-gray-400 text-14" />
                    </button>
                </TooltipComponent>

                {isClicked.cart && (<Cart />)}
                {isClicked.chat  && (<Chat />)}
                {isClicked.notification  && (<Notification />)}
                {isClicked.userProfile  && (<UserProfile />)}
            </div>
        </div>
    )
}

export default Navbar
