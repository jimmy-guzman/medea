import ky from 'ky'

import {
  CreateMedeaNoteRequestBody,
  MedeaNote,
  UpdateMedeaNoteRequestBody,
} from '@medea/interfaces'

const api = ky.create({ prefixUrl: 'http://127.0.0.1:7000' })

export const getMedeaNotes = async (): Promise<MedeaNote[]> => {
  return api.get('notes').json<MedeaNote[]>()
}

export const getMedeaNote = async (id: string): Promise<MedeaNote> => {
  return api.get(`notes/${id}`).json<MedeaNote>()
}

export const createMedeaNote = async (
  json: CreateMedeaNoteRequestBody
): Promise<{ id: string; createAt: string }> => {
  return api.post(`notes`, { json }).json()
}

export const updateMedeaNote = async (
  id: string,
  json: UpdateMedeaNoteRequestBody
): Promise<{ id: string; updateAt: string }> => {
  return api.put(`notes/${id}`, { json }).json()
}

export const deleteMedeaNote = async (id: string): Promise<{ id: string }> => {
  return api.delete(`notes/${id}`).json<{ id: string }>()
}
