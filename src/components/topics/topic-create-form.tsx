'use client';

import {
    Input,
    Button,
    Textarea,
    Popover,
    PopoverTrigger,
    PopoverContent
} from '@nextui-org/react';
import * as actions from '@/actions';

import { useActionState } from "react";

export default function TopicCreateForm(){
    const [formState, action] = useActionState(actions.createTopic, 5);

    return (
        <Popover placement="left">
            <PopoverTrigger>
                <Button color="primary">Create a topic</Button>
            </PopoverTrigger>
            <PopoverContent>
                <form action={action}>
                    <div className="flex flex-col gap-4 p-4 w-80">
                        <h3 className="text-lg">create a topic</h3>
                        <Input name="name" label="Name" labelPlacement="outside" placeholder="Name"></Input>
                        <Textarea 
                            name="description"
                            label="Description" 
                            labelPlacement="outside" 
                            placeholder="Describe your topic"
                        />
                        <Button type="submit">Submit</Button>
                    </div>
                </form>
            </PopoverContent>
        </Popover>
    )
}