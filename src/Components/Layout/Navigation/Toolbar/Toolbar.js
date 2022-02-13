import React from 'react'
import './Toolbar.css'
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import Logo from '../../../Logo/Logo'
import NavigationItems from '../NavigatioItems/NavigationItems'
import DrawerToggle from '../../../Sidedrawer/DrawerToggle/DrawerToggle'
const Toolbar = (props) => {
  
    return (
        <div>
            <header className="Toolbar">
            <div><Logo/></div>

           <div className="mobile_menu_icon" onClick={props.opened}> <MenuOpenIcon/></div>

                <DrawerToggle clicked={props.drawerToggleClicked}/>               
                <div className="desktopOnly">
                <ul>
                  <NavigationItems/>
                </ul>
                </div>
            </header>
        </div>
    )
}

export default Toolbar
