import { TableOutlined, UnorderedListOutlined } from '@ant-design/icons';
import React, { useState } from 'react'
import Tasks from '../Tasks/Tasks';
import Todo from '../Todo/Todo';

function TodoContainer() {
    const [isListView, setIsListView] = useState(true);

    return (
        <div className="todo-container">
            <div className="toggler">
                <div onClick={()=>setIsListView(true)} className={`${isListView && 'active'}`}>
                    <UnorderedListOutlined />
                </div>
                <div onClick={()=>setIsListView(false)} className={`${!isListView && 'active'}`}>
                    <TableOutlined />
                </div>

            </div>

            {isListView ? <Todo /> : <Tasks />}
        </div>
    )
}

export default TodoContainer
