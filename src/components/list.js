import React,{useState} from 'react';


const List = ({words}) => {
    let [todo,SetTodo] = useState('notcompleted');
    return (
        <li>
             <span>{words}</span>
             {todo=='completed'?'':<button onClick={()=>SetTodo('completed')}>Complete</button>}
        </li>
    )
}

export default List;