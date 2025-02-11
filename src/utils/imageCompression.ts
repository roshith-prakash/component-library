/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import imageCompression from "browser-image-compression";

export const compressImage = async (file) => {
  const options = {
    maxSizeMB: 1, // Maximum file size (in MB)
    useWebWorker: true, // Improves performance
  };

  try {
    const compressedFile = await imageCompression(file, options);
    return compressedFile;
  } catch (error) {
    console.error("Error during image compression:", error);
    throw error;
  }
};