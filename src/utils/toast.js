import { toast } from 'react-toastify';

export function useToast() {
    const showToast = (toatsConfig) => {
        const { type, message, time = 1900 } = toatsConfig
        const validTypes = ['info', 'success', 'warning', 'error']

        const toastFunction = validTypes.includes(type) ? toast[type] : toast

        toastFunction(message, {
            position: "top-right",
            autoClose: time,
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