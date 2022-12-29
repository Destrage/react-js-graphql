import React, { useEffect, useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import { GET_ALL_TASKS } from '../graphql/queries';

function GetAllTasks() {

    const { error, loading, data } = useQuery(GET_ALL_TASKS)

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        if (data?.tasks)
            setTasks(data.tasks);
    }, [data])

    return (<div>
        <ul>
            {tasks.map((task, key) => {
                return (
                    <li key={key}>
                        {task.name}
                    </li>
                )
            })}
        </ul>
    </div>);
}

export default GetAllTasks;