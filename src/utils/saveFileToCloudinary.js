import { unlink } from 'node:fs/promises';
import { v2 as cloudinary } from 'cloudinary';
import { env } from './env.js';
import { CLOUDINARY } from '../constants/index.js';

// Конфігурація Cloudinary
cloudinary.config({
  secure: true,
  cloud_name: env(CLOUDINARY.CLOUD_NAME),
  api_key: env(CLOUDINARY.API_KEY),
  api_secret: env(CLOUDINARY.API_SECRET),
});

// Функція для збереження файлу на Cloudinary
export const saveFileToCloudinary = async (file) => {
  try {
    // Завантаження файлу на Cloudinary
    const response = await cloudinary.uploader.upload(file.path);

    // Видалення локального файлу після завантаження
    await unlink(file.path);

    // Повернення URL файлу з Cloudinary
    return response.secure_url;
  } catch (error) {
    console.error('Cloudinary upload error:', error);
    throw error;
  }
};
