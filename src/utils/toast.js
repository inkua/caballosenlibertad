import { toast } from 'react-toastify';

export function useToast() {
  const showToast = (toatsConfig) => {
    const {type, message} = toatsConfig
    const validTypes = ['info', 'success', 'warning', 'error']

    const toastFunction = validTypes.includes(type) ? toast[type] : toast

    toastFunction(message, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    })
  }

  return { showToast }
}