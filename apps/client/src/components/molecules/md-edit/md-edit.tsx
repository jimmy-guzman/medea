import MDEditor from '@uiw/react-md-editor'
import { useState, useEffect } from 'react'
import { Subject } from 'rxjs'
import { debounceTime, distinctUntilChanged } from 'rxjs/operators'

export interface MdEditProps {
  /**
   * This is only called when `markdownToEdit` is edited per `handleEditDebounceTime`
   */
  handleEdit: (editedMarkdown: string) => void
  /**
   * Time (ms) until `handleEdit` is called when changes stop happening
   * @default 400 ms
   */
  handleEditDebounceTime?: number
  /**
   * Original markdown to be edited
   */
  markdownToEdit: string
  /**
   * The max height of editable box
   * @default 200
   */
  maxHeight?: number
  /**
   * This is smartly debounced to avoid aggressive calls
   */
}

/**
 * Leverages `@uiw/react-md-editor` to edit markdown text
 */
export const MDEdit = ({
  handleEdit,
  handleEditDebounceTime = 400,
  markdownToEdit,
  maxHeight = 200,
}: MdEditProps): JSX.Element => {
  const [currentMd, setCurrentMd] = useState(() => markdownToEdit)
  const [onEdit$] = useState<Subject<string>>(() => new Subject())

  useEffect(() => {
    const subscription = onEdit$
      .pipe(debounceTime(handleEditDebounceTime), distinctUntilChanged())
      .subscribe(handleEdit)

    return () => subscription.unsubscribe()
  }, [onEdit$, handleEdit, handleEditDebounceTime])

  const handleChange = (editedMarkdown?: string) => {
    if (editedMarkdown) {
      setCurrentMd(editedMarkdown)
      onEdit$.next(editedMarkdown)
    }
  }

  return (
    <div className='container'>
      <MDEditor
        value={currentMd}
        onChange={handleChange}
        height={
          markdownToEdit.length < maxHeight ? maxHeight : markdownToEdit.length
        }
      />
    </div>
  )
}
