import React, { useState } from 'react';
import { AntDesignOutlined, RightOutlined, UserOutlined } from '@ant-design/icons'
import MeetingIcon from '../../assets/images/meetingIcon.png';
import { Button, Input, Modal, Form, Switch, Avatar, Tooltip } from 'antd';
import { TimePicker } from 'antd';
import CalendarIcon from '../../components/CSidebar/Icons/CalendarIcon';

function Tasks() {

    const [isModalVisible, setIsModalVisible] = useState(false);

    const renderAvatars = () => {
        return <Avatar.Group
            maxCount={3}
            size="large"
            maxStyle={{ color: '#f56a00', backgroundColor: '#fde3cf' }}
        >
            <Avatar size="small" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            <Avatar size="small" style={{ backgroundColor: '#f56a00' }}>K</Avatar>
            <Avatar size="small" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />

        </Avatar.Group>
    }

    return (
        <div className="tasks-container">

            <div className="head">
                <h2>Today<b>27 March, 2021</b></h2>
                <img src={require('../../assets/images/addIcon.png').default} alt="" />
            </div>

            <div className="tasks-wrapper">

                <div className='day-tasks'>
                    <span>Monday</span>

                    <div className='task'>

                        <div>
                            <span className="title">Pass One Aws Exam</span>
                            <div className="tag">Completed</div>
                        </div>

                        <div>
                            <span className="date-time">
                                <CalendarIcon /> Tue, 23 March 2021
                             </span>
                        </div>
                        <div>
                            <div className="tag transparent">
                                Networking
                             </div>
                            {renderAvatars()}
                        </div>
                    </div>

                    <div className='task in-progress'>

                        <div>
                            <span className="title">Business Meeting</span>
                            <div className="tag in-progress">In Progress</div>
                        </div>

                        <div>
                            <span className="date-time">
                                <CalendarIcon /> Tue, 23 March 2021
                             </span>
                        </div>
                        <div>
                            <div className="tag transparent">
                                UI / UX
                            </div>
                            {renderAvatars()}
                        </div>
                    </div>


                </div>


                <div className='day-tasks'>
                    <span>Tuesday</span>
                    <div className='task pending'>

                        <div>
                            <span className="title">Business Meeting</span>
                            <div className="tag pending">Pending</div>
                        </div>

                        <div>
                            <span className="date-time">
                                <CalendarIcon /> Tue, 23 March 2021
                         </span>
                        </div>
                        <div>
                            <div className="tag transparent">
                                UI / UX
                            </div>
                            {renderAvatars()}
                        </div>
                    </div>
                </div>
                <div className='day-tasks'>

                <span>Wednesday</span>
                    <div className='task in-progress'>

                        <div>
                            <span className="title">Business Meeting</span>
                            <div className="tag in-progress">In Progress</div>
                        </div>

                        <div>
                            <span className="date-time">
                                <CalendarIcon /> Tue, 23 March 2021
                            </span>
                        </div>
                        <div>
                            <div className="tag transparent">
                                UI / UX
                             </div>
                            {renderAvatars()}
                        </div>
                    </div>
                    <div className='task'>
                        <div>
                            <span className="title">Pass One Aws Exam</span>
                            <div className="tag">Completed</div>
                        </div>

                        <div>
                            <span className="date-time">
                                <CalendarIcon /> Tue, 23 March 2021
                            </span>
                        </div>
                        <div>
                            <div className="tag transparent">
                                Networking
                            </div>
                            {renderAvatars()}s
                        </div>
                    </div>

                </div>
                <div className='day-tasks'>
                <span>Thursday</span>
                    <div className='task'>
                        <div>
                            <span className="title">Pass One Aws Exam</span>
                            <div className="tag">Completed</div>
                        </div>

                        <div>
                            <span className="date-time">
                                <CalendarIcon /> Tue, 23 March 2021
                            </span>
                        </div>
                        <div>
                            <div className="tag transparent">
                                Networking
                            </div>
                            {renderAvatars()}
                        </div>
                    </div>

                </div>


                <div className='day-tasks'>
                <span>Friday</span>
                    <div className='task pending'>

                        <div>
                            <span className="title">Business Meeting</span>
                            <div className="tag pending">Pending</div>
                        </div>

                        <div>
                            <span className="date-time">
                                <CalendarIcon /> Tue, 23 March 2021
                             </span>
                        </div>
                        <div>
                            <div className="tag transparent">
                                UI / UX
                            </div>
                            {renderAvatars()}
                        </div>
                    </div>

                    <div className='task in-progress'>

                        <div>
                            <span className="title">Business Meeting</span>
                            <div className="tag in-progress">In Progress</div>
                        </div>

                        <div>
                            <span className="date-time">
                                <CalendarIcon /> Tue, 23 March 2021
                            </span>
                        </div>
                        <div>
                            <div className="tag transparent">
                                UI / UX
                            </div>
                            {renderAvatars()}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Tasks;
