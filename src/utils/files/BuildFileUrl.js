import { FileServiceError } from '../../errors/TypeError.js';

export const buildFileUrl = (req, filename, folder) => {
    try {
        if(!filename) throw new FileServiceError('No se ha proporcionado el nombre del archivo', 400);
        if(!folder) throw new FileServiceError('No se ha proporcionado el archivo', 400);

        const domain = `${req.protocol}://${req.get('host')}`;

        return `${domain}/uploads/${folder}/${filename}`;
    } catch (error) {
        throw new FileServiceError('Error al construir la url del archivo', 500, error);
        
    }
}