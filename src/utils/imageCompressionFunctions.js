import imageCompression from "browser-image-compression";

// Configuraciones predeterminadas para la compresión
const defaultOptions = {
    maxSizeMB: 1,
    maxWidthOrHeight: 1920,
    useWebWorker: true,
}

const compressImage = async (image) => {
    try {
        const compressedFile = await imageCompression(image, defaultOptions);
        return compressedFile;
    } catch (error) {
        console.error("Error al comprimir la imagen:", error);
        return image;
    }
};

export const handleImageUpload = async (event) => {
    const imageFile = event.target.files[0];
    if (!imageFile) return null;

    // Si la imagen excede el tamaño máximo definido en `defaultOptions`
    if (imageFile.size / (1024 * 1024) > defaultOptions.maxSizeMB) {
        const compressedFile = await compressImage(imageFile);
        return compressedFile;
    }

    return imageFile;
};

