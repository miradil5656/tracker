'use client'
import { Button, TextArea, TextField } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import { useForm,Controller } from "react-hook-form"
import axios from "axios";
import "easymde/dist/easymde.min.css";
import { useRouter } from "next/navigation";


interface IssueFrom{
    title: string
    description : string
}

const NewIssuePage = () => {
    const router = useRouter()
    const {register,control,handleSubmit} = useForm<IssueFrom>()
    
  return (
    <form className="max-w-xl space-y-6" onSubmit={handleSubmit(async(data)=> {
    await axios.post('/api/issues',data)
    router.push('/issues')
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
  );
};

export default NewIssuePage;
