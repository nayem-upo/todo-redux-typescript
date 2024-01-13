import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "../textarea";
import { FormEvent, useState } from "react";
import { DialogClose } from "@radix-ui/react-dialog";

const AddTodoModals = () => {
    const [task, setTask] = useState('')
    const [description, setDescription] = useState('')

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log({ task, description });
    }
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant={"outline"}>Add Todo</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Add Task</DialogTitle>
                    <DialogDescription>
                        Click Add Task when you're done.
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="task" className="text-left">
                            Task
                        </Label>
                        <Input onBlur={(e) => setTask(e.target.value)} id="task" placeholder="Read Article" className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="description" className="text-left">
                            Description
                        </Label>
                        <Textarea onBlur={(e) => setDescription(e.target.value)} id="description" placeholder="Your task description" className="col-span-3" />
                    </div>
                    <DialogFooter>
                        <DialogClose asChild>
                            <Button type="submit">Add Task</Button>
                        </DialogClose>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default AddTodoModals;