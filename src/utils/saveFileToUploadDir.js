import path from 'node:path';
import fs from 'node:fs/promises';
import { TEMP_UPLOAD_DIR, UPLOAD_DIR } from '../constants/index.js';
import { getEnvVar } from './getEnvVar.js';

export const saveFileToUploadDir = async (file) => {
  try {
    await fs.rename(
      path.join(TEMP_UPLOAD_DIR, file.filename),
      path.join(UPLOAD_DIR, file.filename),
    );

    const url = `${getEnvVar('APP_DOMAIN')}/uploads/${file.filename}`;

    return url;
  } catch (err) {
    console.error(err);
    throw createHttpError(500, 'Failed to upload image to local');
  }
};
