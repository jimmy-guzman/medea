import { useHistory } from 'react-router-dom'

interface UseNavigateReturn {
  home: () => void
  to: (path: string) => void
  toNote: (id: string) => void
}

export const useNavigate = (): UseNavigateReturn => {
  const history = useHistory()

  const to = (path: string) => history.push(path)

  return {
    to,
    home: () => to(`/`),
    toNote: (id: string) => to(`/notes/${id}`),
  }
}
