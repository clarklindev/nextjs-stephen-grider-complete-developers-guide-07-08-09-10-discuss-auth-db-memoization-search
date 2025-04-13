import {
    Button,
    Popover,
    PopoverTrigger,
    PopoverContent,
} from '@nextui-org/react';
import { PostForm } from './post-form';

export default function PostCreateForm(){

    return (
        <Popover placement="left">
            <PopoverTrigger>
                <Button color="primary">
                    create a post
                </Button>
            </PopoverTrigger>
            <PopoverContent>
                <PostForm/>
            </PopoverContent>
        </Popover>
    )
}