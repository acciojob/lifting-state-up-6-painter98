import React,{useState} from 'react';


const List = ({words}) => {
    let [isComplete,SetComplete] = useState(false);
    return (
        <li>
             <span>{words}</span>
              {isComplete?'':<button onClick={()=>SetComplete(true)}>Complete</button>}
        </li>
    )
}

export default List;