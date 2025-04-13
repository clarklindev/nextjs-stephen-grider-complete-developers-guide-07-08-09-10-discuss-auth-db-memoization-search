import {
    Input,
    Button,
    Textarea,
    Popover,
    PopoverTrigger,
    PopoverContent,
    Form
} from '@nextui-org/react';
import * as actions from '@/actions';
import FormButton from '@/components/common/form-button';

export default function PostCreateForm(){

    return (
        <Popover placement="left">
            <PopoverTrigger>
                <Button color="primary">
                    create a post
                </Button>
            </PopoverTrigger>
            <PopoverContent>
                <Form>
                    <div className="flex flex-col gap-4 p-4 w-80">
                        <h3 className="text-lg">create a post</h3>

                        <Input
                            name="title"
                            label="Title"
                            labelPlacement="outside"
                            placeholder="Title"
                        />
                        <Input
                            name="content"
                            label="Content"
                            labelPlacement="outside"
                            placeholder="Content"
                        />
                        <FormButton isLoading={false}>create post</FormButton>

                    </div>
                </Form>
            </PopoverContent>
        </Popover>
    )
}