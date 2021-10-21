import { useParams } from 'react-router-dom'

import { Alert, JsonBox, Link, Loading } from '../components'
import { useMedeaNote } from '../hooks'

export const Json = (): JSX.Element => {
  const { id } = useParams<{ id: string }>()
  const { isLoading, isSuccess, data } = useMedeaNote(id)

  if (isLoading) return <Loading message='note as json' />

  return isSuccess && data ? (
    <div className='mb-4'>
      <JsonBox id={data.id} date={data.updatedAt} json={data} />
      <div className='grid grid-flow-col auto-cols-max gap-1 justify-between mt-1'>
        <Link to={`/notes/${id}`}>VIEW NOTE</Link>
      </div>
    </div>
  ) : (
    <Alert>{`Note as json failed to load!`}</Alert>
  )
}
