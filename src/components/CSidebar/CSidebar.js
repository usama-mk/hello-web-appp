import Icon from '@ant-design/icons/lib/components/Icon';
import React from 'react'
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
import { DashboardRoutes } from '../../routes';

function CSidebar() {

    const history = useHistory();
    const location = useLocation();

    const renderMenuItem = (menuItem) => {
        return (
            <div onClick={() => history.push(menuItem.path)} className={`menu-item ${location.pathname === menuItem.path && 'active'}`}>
                <Icon start component={menuItem.icon} />
                <span className="title">{menuItem.title}</span>
            </div>
        );
    }

    return (
        <div className="c-sidebar">
            <Link to="/"><img src={Logo} className="logo" alt="" /></Link>

            <div className="menu-container" >
                {Object.values(DashboardRoutes).filter(it=> !it.hidden).map(menuItem => (
                    renderMenuItem(menuItem)
                ))}
            </div>

        </div>
    )
}

export default CSidebar;
