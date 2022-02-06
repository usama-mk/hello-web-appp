import React, { useState } from 'react';
import { RightOutlined } from '@ant-design/icons'
import MeetingIcon from '../../assets/images/meetingIcon.png';
import { Button, Input, Modal,Form ,Switch} from 'antd';
import { TimePicker } from 'antd';
function Meetings() {
    const [isModalVisible, setIsModalVisible] = useState(false);

    return (
        <div className="meetings-container">

            <div className="first-container">

                <span>History</span>

                <div className="no-record">
                    <img src={require('../../assets/images/nomeetigs-icon.png').default} alt="" />
                    <span>No Record Found</span>
                </div>

                <img className="meeting-icon" src={MeetingIcon} alt="" />


            </div>

            <div className="second-container">

                <span>General Options</span>



                <div className="actions-container">

                    <div className="action">
                        <img src={require('../../assets/images/phoneIconMeeting.png').default} alt="" />
                        <span>Start Meetings</span>
                    </div>


                    <div className="action">
                        <img src={require('../../assets/images/addIconMeetingDark.png').default} alt="" />
                        <span>Join Meeting</span>
                    </div>


                    <div className="action">
                        <img src={require('../../assets/images/addIconMeeting.png').default} alt="" />
                        <span>Schedule</span>
                    </div>


                    <div className="action">
                        <img src={require('../../assets/images/RadioIconMeeting.png').default} alt="" />
                        <span>Live</span>
                    </div>

                </div>

                <div className="my-meetings-container">

                    <span>My Meetings</span>

                    <div>
                        <img src={require('../../assets/images/meetingillustrator.png').default} alt="" />

                        <span className="msg">No Scheduling meeting today</span>
                    </div>

                    <Button onClick={()=>setIsModalVisible(true)} htmlType="submit" className="c-button large">
                        New Schedule
                    </Button>

                </div>

            </div>

            <Modal visible={isModalVisible} okText="Done" onCancel={()=>setIsModalVisible(false)} onOk={()=>setIsModalVisible(false)}>

                <div className="schedule-meeting">

                    <span>Schedule Meetings</span>

                    <Form.Item
                        name="email"
                    >
                        <Input type="email" placeholder="Meeting title" />
                    </Form.Item>

                    <label>Select Date & Time</label>

                    <div className="field-wrapper">
                        <TimePicker.RangePicker />
                    </div>

                    <div className="field-wrapper">
                        <div>
                            <img alt="" src={require('../../assets/images/addMemberSchdeule.png').default} />
                            <span>Invite Participants</span>
                        </div>
                        <RightOutlined className="icon" />
                    </div>

                    <div className="field-wrapper">
                        <div>
                            <img alt="" src={require('../../assets/images/callSchedule.png').default} />
                            <span>Video Conferencing</span>
                        </div>
                        <Switch  size='small' defaultChecked />

                    </div>

                    <div className="field-wrapper">
                        <div>
                            <img alt="" src={require('../../assets/images/bellSchedule.png').default} />
                            <span>15 Minutes Before, App Reminder</span>
                        </div>
                        <RightOutlined className="icon" />
                    </div>

                    <div className="field-wrapper">
                        <div>
                            <img alt="" src={require('../../assets/images/locationSchedule.png').default} />
                            <span>Location</span>
                        </div>

                        <RightOutlined className="icon" />
                    </div>

                </div>
            </Modal>

        </div>
    )
}

export default Meetings;
