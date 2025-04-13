import {
    Button,
    Popover,
    PopoverTrigger,
    PopoverContent,
} from '@nextui-org/react';

import { TopicForm } from '@/components/topics/topic-form';

export default function TopicCreateForm(){
    return (
        <Popover placement="left">
            <PopoverTrigger>
                <Button color="primary">Create a topic</Button>
            </PopoverTrigger>
            <PopoverContent>
                <TopicForm/>
            </PopoverContent>
        </Popover>
    )
}