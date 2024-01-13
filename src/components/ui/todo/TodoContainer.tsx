import AddTodoModals from "./AddTodoModals";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";

const TodoContainer = () => {
    return (
        <div>
            <div className="flex justify-between my-3">
                <AddTodoModals />
                <TodoFilter />
            </div>
            <div className="flex flex-col gap-4 bg-primary-gradient w-full h-full rounded-xl p-5">
                <div className="text-2xl font-semibold text-center">There is no task pending!</div>
                <TodoCard />
                <TodoCard />
                <TodoCard />
                <TodoCard />
            </div>
        </div>
    );
};

export default TodoContainer;