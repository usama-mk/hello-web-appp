import { CaretDownOutlined, SearchOutlined } from '@ant-design/icons'
import Avatar from 'antd/lib/avatar/avatar'
import React, { useState } from 'react';
import { options } from './Data';


function Settings() {
    const [selectedOption, setSelectedOption] = useState(options[0]);

    const renderOption = (option) => {

        const { imgSrc, title, id } = option;

        return (
            <div key={id} onClick={() => setSelectedOption(option)} className={`c-option-item ${selectedOption.id === option.id && 'active'}`}>

                <img src={imgSrc} alt="" />

                <span>{title}</span>

            </div>
        )
    }

    return (
        <div className="settings-container">

            <div className="list-container">

                <div className="head">
                    <span>General Details</span>

                </div>

                <div className="options-list">
                    {options.map(option => renderOption(option))}
                </div>

            </div>

            <div className="option-details-container">

                <div className="head">

                    <div className='info-wrapper'>
                        <Avatar src={require('../../assets/images/settingUserIMg.png').default} className="avatar" alt="" />

                        <div className="info-container">

                            <h2>Waniya</h2>

                            <div className="">

                                <div>
                                    <img src={require('../../assets/images/emailIcon.png').default} alt="" />
                                    <span>Email: waniya@springtechnologies.net</span>
                                </div>

                            </div>

                        </div>

                    </div>

                    <div className='qr-code'>
                        <img src={require('../../assets/images/qrcode.png').default} alt="" />
                        <span>Scan QR Code</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Settings;
