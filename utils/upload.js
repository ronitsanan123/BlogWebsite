import multer from 'multer';
import { GridFsStorage } from 'multer-gridfs-storage';

const storage = new GridFsStorage({
    url: `mongodb://user:userdatabase@blogweb-shard-00-00.hraip.mongodb.net:27017,blogweb-shard-00-01.hraip.mongodb.net:27017,blogweb-shard-00-02.hraip.mongodb.net:27017/PROJECT0?ssl=true&replicaSet=atlas-cnxou8-shard-0&authSource=admin&retryWrites=true&w=majority`,
    // url: 'mongodb://localhost:27017/image-upload',
    options: { useUnifiedTopology: true, useNewUrlParser: true },
    file: (request, file) => {
        const match = ["image/png", "image/jpg"];

        if(match.indexOf(file.memeType) === -1) 
            return`${Date.now()}-blog-${file.originalname}`;//use of date to avoid duplicate in image names

        return {
            bucketName: "photos",
            filename: `${Date.now()}-blog-${file.originalname}`
        }
    }
});

export default multer({storage}); 