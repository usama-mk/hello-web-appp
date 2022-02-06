import Icon from '@ant-design/icons'
import { Button } from 'antd';
import React  from 'react';
import TodoIcon from '../../components/CSidebar/Icons/TodoIcon';
import SmallCalendarIcons from './Icons/SmallCalendarIcons';

function Todo() {

    return (
            <div className="todos-container">

                <div className="first-container">

                    <img src={require('../../assets/images/todoIllustration.png').default} alt="" />

                    <div className="today-info">
                        <h3>Today</h3>
                        <h2>27 March, 2021</h2>
                    </div>

                    <Button htmlType="submit" className="c-button large">
                        <img className="icon" src={require('../../assets/images/addIcon.png').default} alt="" /> Add
                    </Button>

                </div>

                <div className="second-container">

                    <div className="stats-wrapper" >

                        <div className="statistics-container">
                            <div className="">
                                <Icon className="icon" start component={TodoIcon} />
                                Pending
                            </div>
                            <h3>2</h3>

                            <img className="mask" src={require('../../assets/images/todoMask.png').default} alt="" />
                        </div>

                        <div className="statistics-container green">
                            <div className="">
                                <Icon className="icon" start component={TodoIcon} />
                                Completed
                            </div>
                            <h3>100</h3>

                            <img className="mask" src={require('../../assets/images/todoMask.png').default} alt="" />

                        </div>

                    </div>

                    <div className="tasks-wrapper">

                        <div className="tasks-container grey">
                            
                            <span>Pending</span>
                            
                            <div className="task">
                                <span>Open Bank Account</span>
                                <div>
                                    <img src={require('../../assets/images/smallCalendar.png').default} alt="" />
                                    <span>Tue, 23 March 2021</span>
                                </div>
                            </div>

                            <div className="task">
                                <span>Pass One Aws Exam</span>
                                <div>
                                    <img src={require('../../assets/images/smallCalendar.png').default} alt="" />
                                    <span>Tue, 23 March 2021</span>
                                </div>
                            </div>

                        </div>

                        <div className="tasks-container">
                            
                            <span>Completed ( 100 )</span>
                            

                        </div>

                        <img className="more-icon" src={require('../../assets/images/rightArrow.png').default} alt="" />
                    </div>

                </div>



            </div>
        )
}

export default Todo
