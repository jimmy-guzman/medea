import MDEditor from '@uiw/react-md-editor'
import { useState, useEffect } from 'react'
import { Subject } from 'rxjs'
import { debounceTime, distinctUntilChanged } from 'rxjs/operators'

interface MdEditProps {
  id: string
  prevMd: string
  mutate: (text: string) => void
}

export const MDEdit = ({ id, prevMd, mutate }: MdEditProps): JSX.Element => {
  const [currentMd, setCurrentMd] = useState(() => prevMd)
  const [onEdit$] = useState<Subject<string>>(() => new Subject())

  useEffect(() => {
    const subscription = onEdit$
      .pipe(debounceTime(400), distinctUntilChanged())
      .subscribe(mutate)

    return () => subscription.unsubscribe()
  }, [onEdit$, mutate, id])

  const handleEdit = (text?: string) => {
    if (text) {
      setCurrentMd(text)
      onEdit$.next(text)
    }
  }

  return (
    <div className='container'>
      <MDEditor
        value={currentMd}
        onChange={handleEdit}
        height={prevMd.length < 200 ? 200 : prevMd.length}
      />
    </div>
  )
}
