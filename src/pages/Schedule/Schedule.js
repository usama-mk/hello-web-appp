import React from 'react';
import { Calendar } from 'antd';

function Schedule() {

    return (
        <div className="calendar-container">

            <div className="first-container">
                <Calendar fullscreen={false} />
            </div>

            <div className="second-container">

                <Calendar />
                
            </div>



        </div>
    )
}

export default Schedule;
