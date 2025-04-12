import FormButton from '@/components/common/form-button';
import {
    Input,
    Textarea,
    Form
} from '@nextui-org/react';

import { useActionState, startTransition } from "react";
import * as actions from '@/actions';

const TopicForm = () => {
    const [formState, action, isPending] = useActionState(actions.createTopic, {errors: {}});

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
        <h3 className="text-lg">create a topic</h3>
        <Input
          name="name"
          label="Name"
          labelPlacement="outside"
          placeholder="Name"
          isInvalid={!!formState.errors.name}
          errorMessage={formState.errors.name?.join(", ")}
        />
        <Textarea
          name="description"
          label="Description"
          labelPlacement="outside"
          placeholder="Describe your topic"
          isInvalid={!!formState.errors.description}
          errorMessage={formState.errors.description?.join(", ")}
        />

        {formState.errors._form ? (
          <div className="rounded p-2 bg-red-200 border border-red-400">
            {formState.errors._form?.join(", ")}
          </div>
        ) : null}

        <FormButton isLoading={isPending}>Save</FormButton>
      </div>
    </Form>
  );
};

export {TopicForm}