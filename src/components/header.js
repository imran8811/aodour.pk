import React, {Fragment} from 'react';
import Topbar from './topbar';
import MainMenu from './main-menu';

function Header(){
    return (
        <Fragment>
            <Topbar />
            <MainMenu />
        </Fragment>
    )
}

export default Header;