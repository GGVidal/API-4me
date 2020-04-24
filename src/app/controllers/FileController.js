import File from '../models/File';

class FileController {
    async store(req, res) {
        try {
            const { originalname: name, filename: path } = req.file;

            const file = await File.create({
                name,
                path,
            });
            return res.json(file);
        } catch (error) {
            console.log(error);
        }
    }
}

export default new FileController();
