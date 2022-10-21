import { Request, Response, Router } from "express";
import images_api from "./images_api";

const route = Router();

route.use("/images_api", images_api);
route.get("/", async (req: Request, res: Response): Promise<void> => {
  res.status(404);
  res.send(`<Center><h1 style="Color:blue">404 Not Found</h1>
    <p style="Color:black">The page you are trying to reach have not been found !</p>
    </Center>`);
});

export default route;
