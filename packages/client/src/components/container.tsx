interface ContainerProps {
  children: React.ReactNode
}
export const Container = ({ children }: ContainerProps): JSX.Element => {
  return <div className='container mx-auto mt-8 pb-8'>{children}</div>
}
