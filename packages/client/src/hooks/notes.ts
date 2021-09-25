import {
  useQuery,
  UseQueryResult,
  useMutation,
  useQueryClient,
} from 'react-query'

import { MedeaNote } from '@medea/interfaces'

import {
  createMedeaNote,
  deleteMedeaNote,
  getMedeaNote,
  getMedeaNotes,
  updateMedeaNote,
} from '../api'
import { toastError, toastSuccess } from '../utils'

const NOTES_QUERY_KEY = 'notes'

export const useMedeaNote = (id: string): UseQueryResult<MedeaNote> => {
  return useQuery([NOTES_QUERY_KEY, id], () => getMedeaNote(id))
}

export const useMedeaNotes = (): UseQueryResult<MedeaNote[]> => {
  return useQuery([NOTES_QUERY_KEY], getMedeaNotes)
}

export const useCreateMedeaNote = (): typeof mutation => {
  const mutation = useMutation(createMedeaNote, {
    onError: toastError,
    onSuccess: () => toastSuccess(`note was successfully created`),
  })

  return mutation
}

export const useUpdateMedeaNote = (id: string): typeof mutation => {
  const client = useQueryClient()

  const mutation = useMutation((text) => updateMedeaNote(id, { text }), {
    onMutate: async (newText: string) => {
      await client.cancelQueries([NOTES_QUERY_KEY, id])

      const prevNote = client.getQueryData<MedeaNote>([NOTES_QUERY_KEY, id])

      if (prevNote) {
        client.setQueryData<MedeaNote>([NOTES_QUERY_KEY, id], {
          ...prevNote,
          text: newText,
        })
      }
      return { prevNote }
    },
    onError: (error, _variables, context) => {
      toastError(error)
      if (context?.prevNote) {
        client.setQueryData(
          [NOTES_QUERY_KEY, context.prevNote.id],
          context.prevNote
        )
      }
    },
    onSettled: (data) => {
      client.invalidateQueries([NOTES_QUERY_KEY, data?.id])
    },
  })

  return mutation
}

export const useDeleteMedeaNote = (): typeof mutation => {
  const mutation = useMutation(deleteMedeaNote, {
    onError: toastError,
    onSuccess: () => toastSuccess(`note was successfully deleted`),
  })

  return mutation
}
