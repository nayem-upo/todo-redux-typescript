import { useAppSelector } from "@/redux/hook";
import AddTodoModals from "./AddTodoModals";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";

const TodoContainer = () => {
    const todos = useAppSelector((state) => state.todoReducer.todos)
    // console.log(todos);
    return (
        <div>
            <div className="flex justify-between my-3">
                <AddTodoModals />
                <TodoFilter />
            </div>
            <div className="flex flex-col gap-4 bg-primary-gradient w-full min-h-40 h-full rounded-xl p-5">
                {!todos.length && <div className="text-2xl font-semibold text-center text-white">There is no task pending!</div>}
                {todos.map((todo) => <TodoCard key={todo.id} id={todo.id} task={todo.task} description={todo.description} isCompleted={todo.isCompleted} />)}
            </div>
        </div>
    );
};

export default TodoContainer;