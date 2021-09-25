export type JSONPrimitive = string | number | boolean | null
export type JSONValue = JSONPrimitive | JSONObject | JSONArray
export type JSONObject = { [member: string]: JSONValue }
export type JSONArray = Array<JSONValue>
export type JSONLike = JSONObject | JSONArray

export type Nullable<T> = T | null
export type Emptiable<T> = T[] | []
export type KnownKeys<T> = keyof {
  [K in keyof T as string extends K
    ? never
    : number extends K
    ? never
    : K]: never
}

export type Medea<T = JSONLike> = {
  id: string
  createdAt: string
  updatedAt: string
  json: T
}

export type MedeaTag = {
  id: string
  title: string
  medeaNoteId: string
}

export type MedeaNote = {
  id: string
  createdAt: string
  updatedAt: string
  title: string
  description: Nullable<string>
  text: string
  medeaUserId: Nullable<string>
  tags: Emptiable<MedeaTag>
}

export interface CreateMedeaNoteRequestBody {
  text: string
  title: string
  description?: string
  tags: string[]
}

export interface UpdateMedeaNoteRequestBody {
  text: string
}

export interface GetMedeaNoteRequestParams {
  id: string
}
