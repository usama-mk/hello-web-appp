import React, { useMemo } from 'react'
import { useLocation } from 'react-router';
import { DashboardRoutes } from '../../routes';
import MeetingIcon from '../../assets/images/meetingIcon.png';
import SettingsIcon from '../../assets/images/settingsIcon.png';
import { UserOutlined, LogoutOutlined, CaretDownOutlined  } from '@ant-design/icons';
import { Menu, Dropdown } from 'antd';
import SampleUserImg from '../../assets/images/sampleUser.png';
import Avatar from 'antd/lib/avatar/avatar';
import { Link } from 'react-router-dom';

/**
 * This is a shared header for all the screens
 * @returns null
 */
function CHeader() {
    const location = useLocation();
    const getRouteTitle = useMemo(() => location.pathname === '/' ? DashboardRoutes.Chats.title : Object.values(DashboardRoutes).find(route => route.path === location.pathname).title, [location.pathname]);

    const menu = (
        <Menu>
            <Menu.Item>
                <UserOutlined /> My Account
            </Menu.Item>
            <Menu.Item>
                <LogoutOutlined /> Sign Out
            </Menu.Item>
        </Menu>
    );

    return (
        <div className="c-header">

            <h2 className="title">{getRouteTitle}</h2>

            <div className="actions-container">
                <div>
                    <Link to="/web-meetings"><img className="icon" src={MeetingIcon} alt="" /></Link>
                    <Link to="/settings"><img className="icon" src={SettingsIcon} alt="" /></Link>
                </div>

                <Dropdown overlay={menu} placement="bottomLeft" arrow>
                    <div>
                        <span className="username">Sampath Perera <CaretDownOutlined /></span>
                        <Avatar size="large" className="avatar" src={SampleUserImg} />
                    </div>
                </Dropdown>

            </div>


        </div>

    )
}

export default CHeader;
