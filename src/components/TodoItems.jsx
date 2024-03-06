import './CSS/TodoItems.css'
import right_image from './Assets/right_image.png'
import no_tick from './Assets/no_tick.png'
import cross_image from './Assets/cross_image.png'
const TodoItems = ({no,display,text,setTodos}) => {
    const deleteTodo=(no)=>{
        let data=JSON.parse(localStorage.getItem("todos"));
        data=data.filter((todo)=>todo.no!==no);
        setTodos(data);

    }

    const toggle=(no)=>{
        let data=JSON.parse(localStorage.getItem("todos"));
        for(let i=0;i<data.length;i++){
            if(data[i].no===no)
            {
                if(data[i].display===""){
                    data[i].display="line-through";
                }
                else{
                    data[i].display="";
                }
                break;

            }
        }
        setTodos(data);
    }
  return (
    <div className='todoitems'>
        <div className={`todoitems-container ${display}`} onClick={()=>{toggle(no)}}>
            {display===""?<img src={no_tick} alt=""/>:<img src={right_image} alt=""/>}
            
            <div className="todoitems-text">{text}</div>
        </div>
        <img className="todoitems-cross-icon" onClick={()=>{deleteTodo(no)}}src={cross_image} alt=""/>
    </div>
  )
}

export default TodoItems
