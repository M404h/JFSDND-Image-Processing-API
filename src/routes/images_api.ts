import { Request, Response, Router } from "express";
import fs from "fs";
import path from "path";
import imageValidator from "../middleware/validator";
import { resize_image } from "./rezise";
import { imagePath_new } from "./rezise";

const route = Router();

route.get("/", imageValidator, async (req: Request, res: Response) => {
  const imageName: string = req.query.image as string;
  const height: string = req.query.height as string;
  const width: string = req.query.width as string;
  const imagePath = path.join(
    __dirname,
    "../../assets/images",
    `${imageName}.jpg`
  );

  if ((height == null || width == null) && imageName != null) {
    //display when pass image name alone
    if (fs.existsSync(imagePath)) {
      return res.status(200).sendFile(imagePath);
    } else {
      res.status(404)
        .send(`<Center><br><<h1 style="Color:blue"><Image have not been found</h1>
        <p style="Color:black">The image you are trying to reach, have not been found!</p>
        </Center>`);
    }
  } else if (height != null && width != null && imageName != null) {
    //resize when height and width are passed
    if (fs.existsSync(imagePath)) {
      await resize_image(imagePath, width, height, imageName);
      if(imagePath_new!=null){
        if (fs.existsSync(imagePath_new)) {
          return res.sendFile(imagePath_new);
        }
      }
    } else {
      res.status(404)
        .send(`<Center><br><<h1 style="Color:blue"><Image have not been found</h1>
    <p style="Color:black">The image you are trying to rezise, have not been found!</p>
    </Center>`);
    }
  }
});

export default route;
