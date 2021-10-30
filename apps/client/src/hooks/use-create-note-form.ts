import { BaseSyntheticEvent } from 'react'
import { useForm, UseFormRegisterReturn, FieldError } from 'react-hook-form'

import { useCreateMedeaNote } from './notes'
import { useNavigate } from './use-navigate'

interface FormData {
  title: string
  description: string
}

export const useCreateNoteForm = (): [
  {
    props: { title: UseFormRegisterReturn; description: UseFormRegisterReturn }
    errors: {
      title?: FieldError
      description?: FieldError
    }
  },
  (formData?: BaseSyntheticEvent) => Promise<void>
] => {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()
  const mutation = useCreateMedeaNote()
  const onSubmit = async ({ title, description }: FormData) => {
    const { id } = await mutation.mutateAsync({
      title,
      description,
      text: `# This Is Your New Note\n\n> Thank you using Medea! ❤️\n\n## Tips\n* You can click the 👁 to preview\n* You can click the 📝 to edit\n\n`,
      tags: [],
    })

    navigate.toNote(id)
  }

  return [
    {
      props: {
        title: register('title', { required: 'This field is required' }),
        description: register('description', {
          required: 'This field is required',
        }),
      },
      errors,
    },
    handleSubmit(onSubmit),
  ]
}
