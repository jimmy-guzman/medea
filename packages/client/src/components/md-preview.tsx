import MDEditor from '@uiw/react-md-editor'

interface MDPreviewProps {
  md: string
}

export const MDPreview = ({ md }: MDPreviewProps): JSX.Element => {
  return (
    <>
      <div className='container bg-white py-2 px-6 rounded-sm'>
        <MDEditor.Markdown source={md} />
      </div>
    </>
  )
}
