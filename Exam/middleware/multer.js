import multer from "multer"
import { v4 as uuidv4 } from 'uuid';





const fileUpload = () => {

    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, 'https://res.cloudinary.com/demo/image/upload/getting-started/shoes.jpg')
        },
        filename: function (req, file, cb) {
            cb(null, uuidv4() + '-' + file.originalname)
        }
    })

    const upload = multer({ storage: storage })

    return upload
}


export default fileUpload ;