import bread from 'react-hot-toast'

import { SadFaceIcon, HappyFaceIcon } from '../icons'

export const toastError = (error: Error | unknown): void => {
  bread.error(`Something went wrong: ${(error as Error).message}`, {
    className: 'bg-witch-haze-50 text-gray-800',
    icon: SadFaceIcon(),
  })
}

export const toastSuccess = (message: string): void => {
  bread.success(message, {
    className: 'bg-spring-green-250 text-gray-800',
    icon: HappyFaceIcon(),
  })
}
