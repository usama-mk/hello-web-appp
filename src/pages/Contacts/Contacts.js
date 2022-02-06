import { CaretDownOutlined, SearchOutlined } from '@ant-design/icons'
import Avatar from 'antd/lib/avatar/avatar'
import React, { useState } from 'react';
import { contacts } from './Data';


function Contacts() {
    const [selectedContact, setSelectedContact] = useState(contacts[0]);

    const renderContact = (contact) => {

        const { imgSrc, userName, title, } = contact;

        return (
            <div onClick={() => setSelectedContact(contact)} className={`c-contact-item ${selectedContact.id === contact.id && 'active'}`}>
                <Avatar src={imgSrc} size="large" />

                <div className="user-info">
                    <h4>{userName}</h4>
                    <span>{title}</span>
                </div>

                <div className="icons-container">
                    <img src={require('../../assets/images/phoneIcon.png').default} alt="" />
                    <img src={require('../../assets/images/videoCallIcon.png').default} alt="" />
                </div>

            </div>
        )
    }
    return (
        <div className="contacts-container">

            <div className="contacts-list-container">

                <div className="head">
                    <span>All Conversations (2) <CaretDownOutlined /></span>
                    <SearchOutlined />

                </div>

                <div className="contacts-list">
                    {contacts.map(contact => renderContact(contact))}
                </div>

            </div>

            {selectedContact && (
                <div className="contact-details-container">

                    <div className="head">
                        <Avatar src={selectedContact.imgSrc} className="avatar" alt="" />

                        <div className="info-container">

                            <h2>{selectedContact.userName}</h2>
                            <span className="title">{selectedContact.title}</span>
                            <span className="company">{selectedContact.company}</span>

                            <div className="">

                                <div>
                                    <span>Mobile no:{selectedContact.mobile}</span>
                                    <img src={require('../../assets/images/mobileIcon.png').default} alt="" />
                                </div>

                                <div>
                                    <span>Email:{selectedContact.mobile}</span>
                                    <img src={require('../../assets/images/emailIcon.png').default} alt="" />
                                </div>

                            </div>

                        </div>
                    </div>

                    <div className="call-history-container">

                        <h3>Call History</h3>

                        <div className="records-container">

                            <div className="record">
                                <div className='avatar'>
                                    <div className="user-img">
                                        <img className="" src={require('../../assets/images/sampleUser2.png').default} alt="" />
                                    </div>
                                    <img className="type-img" src={require('../../assets/images/Call-green.png').default} alt="" />
                                </div>

                                <div className="info-contianer">
                                    <span className="title">Ahmed Jain</span>
                                    <span className="date-time">Today 7:25 Pm</span>
                                </div>
                            </div>
                            <div className="record">
                                <div className='avatar'>
                                    <div className="user-img">
                                        <img className="" src={require('../../assets/images/sampleUser2.png').default} alt="" />
                                    </div>
                                    <img className="type-img" src={require('../../assets/images/Call-green.png').default} alt="" />
                                </div>

                                <div className="info-contianer">
                                    <span className="title">Ahmed Jain</span>
                                    <span className="date-time">Today 7:25 Pm</span>
                                </div>
                            </div>
                            <div className="record">
                                <div className='avatar'>
                                    <div className="user-img">
                                        <img className="" src={require('../../assets/images/sampleUser2.png').default} alt="" />
                                    </div>
                                    <img className="type-img" src={require('../../assets/images/Call-green.png').default} alt="" />
                                </div>

                                <div className="info-contianer">
                                    <span className="title">Ahmed Jain</span>
                                    <span className="date-time">Today 7:25 Pm</span>
                                </div>
                            </div>
                            <div className="record">
                                <div className='avatar'>
                                    <div className="user-img">
                                        <img title="" src={require('../../assets/images/sampleUser2.png').default} alt="" />
                                    </div>
                                    <img className="type-img" src={require('../../assets/images/Call-green.png').default} alt="" />
                                </div>

                                <div className="info-contianer">
                                    <span className="title">Ahmed Jain</span>
                                    <span className="date-time">Today 7:25 Pm</span>
                                </div>
                            </div>
                            <div className="record">
                                <div className='avatar'>
                                    <div className="user-img">
                                        <img  src={require('../../assets/images/sampleUser2.png').default} alt="" />
                                    </div>
                                    <img className="type-img" src={require('../../assets/images/Call-green.png').default} alt="" />
                                </div>

                                <div className="info-contianer">
                                    <span className="title">Ahmed Jain</span>
                                    <span className="date-time">Today 7:25 Pm</span>
                                </div>
                            </div>

                            
                        </div>

                    </div>
                </div>
            )}



        </div>
    )
}

export default Contacts
