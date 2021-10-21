import { LazyMotion, domAnimation, m } from 'framer-motion'

interface TransitionProps {
  children: React.ReactNode
}

export const Transition = ({ children }: TransitionProps): JSX.Element => {
  return (
    <LazyMotion features={domAnimation}>
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {children}
      </m.div>
    </LazyMotion>
  )
}
