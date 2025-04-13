'use client';

import FormButton from '@/components/common/form-button';
import {
    Input,
    Form,
    Textarea
} from '@nextui-org/react';
import { useActionState, startTransition } from "react";

import * as actions from '@/actions';
import type { PostCreateFormProps } from '@/components/posts/post-create-form';

const PostForm = ({slug}:PostCreateFormProps)=>{
    const [formState, action, isPending ] = useActionState(actions.createPost.bind(null,slug), {errors:{}})

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        startTransition(() => {
          action(formData);
        });
    }

    return (
        <Form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-4 p-4 w-80">
                <h3 className="text-lg">create a post</h3>

                <Input
                    isInvalid={!!formState.errors.title}
                    errorMessage={formState.errors.title?.join(', ')}
                    name="title"
                    label="Title"
                    labelPlacement="outside"
                    placeholder="Title"
                />
                <Textarea
                    isInvalid={!!formState.errors.content}
                    errorMessage={formState.errors.content?.join(', ')}
                    name="content"
                    label="Content"
                    labelPlacement="outside"
                    placeholder="Content"
                />

                {formState.errors._form ? (
                <div className="rounded p-2 bg-red-200 border border-red-400">
                    {formState.errors._form?.join(", ")}
                </div>
                ) : null}

                <FormButton isLoading={isPending}>save</FormButton>

            </div>
        </Form>
    )
}

export {PostForm};


