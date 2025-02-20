import { useState } from "react";
import ConfirmDialog from "@/app/components/ConfirmDialog/ConfirmDialog";

export function useConfirmDialog() {
    const [isOpen, setIsOpen] = useState(false);
    const [resolvePromise, setResolvePromise] = useState(null);
    const [message, setMessage] = useState(null)

    const confirm = (message = null) => {
        setMessage(message)
        return new Promise((resolve) => {
            setResolvePromise(() => resolve);
            setIsOpen(true);
        });
    };

    const handleConfirm = (value) => {
        if (resolvePromise) {
            resolvePromise(value);
            setIsOpen(false);
        }
    };

    return {
        confirm,
        ConfirmDialogComponent: (
            <ConfirmDialog
                isModalOpen={isOpen}
                onConfirm={() => handleConfirm(true)}
                onCancel={() => handleConfirm(false)}
                message={message}
            />
        ),
    };
}
