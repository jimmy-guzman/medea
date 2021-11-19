export type JSONPrimitive = boolean | number | string | null
// eslint-disable-next-line no-use-before-define
export type JSONValue = JSONArray | JSONObject | JSONPrimitive
// eslint-disable-next-line @typescript-eslint/consistent-indexed-object-style
export interface JSONObject {
  [member: string]: JSONValue
}
export type JSONArray = Array<JSONValue>
export type JSONLike = JSONArray | JSONObject

export type Nullable<T> = T | null
export type Emptiable<T> = T[] | []
export type KnownKeys<T> = keyof {
  [K in keyof T as string extends K
    ? never
    : number extends K
    ? never
    : K]: never
}
