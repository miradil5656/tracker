'use client'
import { Button, Callout, TextArea, TextField } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import { useForm,Controller } from "react-hook-form"
import axios from "axios";
import "easymde/dist/easymde.min.css";
import { useRouter } from "next/navigation";
import { useState } from "react";


interface IssueFrom{
    title: string
    description : string
}

const NewIssuePage = () => {
    const router = useRouter()
    const {register,control,handleSubmit} = useForm<IssueFrom>()
    const [error,setError] = useState('')
    
  return (
    <div className="max-w-xl ">
    {error && <Callout.Root color="red" className="mb-5">
        <Callout.Text>{error}</Callout.Text>
        </Callout.Root>}
    <form className="space-y-6" onSubmit={handleSubmit(async(data)=> {
        try {
            await axios.post('/api/issues',data)
            router.push('/issues')
        } catch (error) {
            setError("An unexpected error occurred.")
        }
    
    })}>
      <TextField.Root>
        <TextField.Input placeholder="Title" {...register('title')}/>
      </TextField.Root>
      <Controller 
      name="description" 
      control={control}
      render={( {field})=>(<SimpleMDE placeholder="Reply to comment…" {...field}/>)}/>
      
      <Button>Submit New Issue</Button>
    </form>
    </div>
  );
};

export default NewIssuePage;
