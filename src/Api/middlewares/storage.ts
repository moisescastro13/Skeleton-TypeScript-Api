import multer, { diskStorage, DiskStorageOptions, Multer } from "multer";
import { join } from "path";

const storage = diskStorage({
  destination: (req, file, cb) => {
    const pathStorage = join(__dirname, "../../../files");
    cb(null, pathStorage);
  },
  filename: (req, file, cb) => {
    const splitName: Array<string> = file.originalname.split(".");
    const ext: string | undefined = splitName.pop();
    const filename: string = `${splitName.shift()}-${Date.now()}.${ext}`;
    cb(null, filename);
  },
} as DiskStorageOptions);

export const uploadFileMiddleware: Multer = multer({
  storage,
});
