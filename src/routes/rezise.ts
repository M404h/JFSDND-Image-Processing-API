import fs from "fs";
import path from "path";
import sharp from "sharp";
import { Request, Response } from "express";

let imagePath_new :string;
const resize_image = async (
  imagePath: string,
  width: string,
  height: string,
  imageName: string,
) => {
  try {
    //in case of any error from sharp, to avoid termnnation of the server by an error.
    const resized_folder = path.join(__dirname, "../../assets/resized");

    if (!fs.existsSync(resized_folder)) {
      await fs.mkdirSync(resized_folder);
    }

    imagePath_new = path.join(
      resized_folder,
      `${imageName + "-" + width + "x" + height + ".jpg"}`
    );

    if (!fs.existsSync(imagePath_new)) {
      // validatie if image exisit before with the same width and height
      await sharp(imagePath)
        .resize(parseInt(width), parseInt(height))
        .toFile(imagePath_new);
    }
  
  } catch {
    return console.log(`incorrect handeling`);
  }
};

export {resize_image,imagePath_new};

