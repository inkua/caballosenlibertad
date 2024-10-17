import imageCompression from "browser-image-compression";

export const options = {
  maxSizeMB: 1,
  maxWidthOrHeight: 1920,
  useWebWorker: true,
};

export const compressImage = (image, configs) => {
  try {
    const compressedFile = imageCompression(image, configs);

    if (compressedFile.size > image.size) {
      return image;
    } else {
      return compressedFile;
    }
  } catch (error) {
    console.error("Error al comprimir la imagen:", error);
  }
};

export const handleImageUpload = async (event, configs) => {
  const imageFile = event.target.files[0];
  if (!imageFile) return;
  const compressedFile = await compressImage(imageFile, configs);
  return compressedFile;
};
