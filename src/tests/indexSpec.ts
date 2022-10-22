import app from "../index";
import supertest from "supertest";
import {resize_image} from "../routes/rezise";
import { buffer } from "stream/consumers";
import path from "path";
import fs from "fs";


const req = supertest(app);

describe("Testing endpoints", () => {
  it("test the display of image palmtunnel", async () => {
    await req.get("/images_api?image=palmtunnel").expect(200);
  });
  it("test the display of image fjord", async () => {
    await req.get("/images_api?image=fjord").expect(200);
  });
  it("test the display of non existing image ", async () => {
    await req.get("/images_api?image=kfhks").expect(404);
  });
  it("test the display of non existing image name start with exisitng ", async () => {
    await req.get("/images_api?image=fjorddjs").expect(404);
  });
});

describe("Testing resize of images", () => {
  it("test successful resizing", async () => {
    await req
      .get("/images_api?image=palmtunnel&width=400&height=400")
      .expect(200);
  });
  it("test the display of non existing image ", async () => {
    await req
      .get("/images_api?image=palmtunnell&width=400&height=400")
      .expect(404);
  });
  it("test if the image have been processed", async () => {
    const imagePath = path.join(
      __dirname,
      "../../assets/images",
      `fjord.jpg`
    );
    const resized_folder = path.join(__dirname, "../../assets/resized");

    if (!fs.existsSync(resized_folder)) {
      await fs.mkdirSync(resized_folder);
    }
    const imagePath_new = path.join(
      resized_folder,
      "fjord-200x200.jpg"
    );
    const rezise_function = resize_image(imagePath,"200", "200", "fjord");
    rezise_function.then(() => {
      expect(fs.existsSync(imagePath_new)).toBeTrue;
    });
  });
});

describe("Testing validatior", () => {
  it("test the incorrect passing of link", async () => {
    await req.get("/images_api?").expect(404);
  });
  it("test the incorrect passing of negitve value to height and width ", async () => {
    await req
      .get("/images_api?image=palmtunnell&width=-100&height=-100")
      .expect(404);
  });
  it("test the incorrect passing of zero value to height and width ", async () => {
    await req.get("/images_api?image=palmtunnell&width=0&height=0").expect(404);
  });
});

export default req;
