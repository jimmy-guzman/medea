/**
 * Truncates text based on the given length and adds an ellipsis
 * @example
 * truncate("this very large text") // this ...
 */
export const truncate = (input: string, length = 5): string => {
  return input.length > length ? `${input.substring(0, length)}...` : input
}
