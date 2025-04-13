import {
    Button,
    Popover,
    PopoverTrigger,
    PopoverContent,
} from '@nextui-org/react';
import { PostForm } from './post-form';

export interface PostCreateFormProps{
    slug:string;
}

export default function PostCreateForm({slug}:PostCreateFormProps){

    return (
        <Popover placement="left">
            <PopoverTrigger>
                <Button color="primary">
                    create a post
                </Button>
            </PopoverTrigger>
            <PopoverContent>
                <PostForm slug={slug}/>
            </PopoverContent>
        </Popover>
    )
}