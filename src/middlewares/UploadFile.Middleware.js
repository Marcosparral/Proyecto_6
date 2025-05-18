import multer from 'multer';
import { uploadFile } from '../services/files/Multerconfig.js';
import { FileServiceError } from '../errors/TypeError.js';

export const uploadPhoto = (folder, fieldname) => {
    try {
        const upload = multer ({ storage: uploadFile( folder ) }).single(fieldname);
        return upload;
    } catch (error) {
        throw new FileServiceError('Error al subir la foto', 500, error);
        
    };
};

export const uploadMultiPhotos = (folder, fields, maxCount = 5) => {
    try {
        const upload = multer ({ storage: uploadFile(folder)}).array(fields, maxCount);
        return upload;
    } catch (error) {
        throw new FileServiceError('Error al subir las fotos', 500, error);
        
    };
};