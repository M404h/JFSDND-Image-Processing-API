import { NextFunction, Request, Response } from "express";

const imageValidator = (req: Request, res: Response, next: NextFunction) => {
  const imageName = req.query.image;
  const height: string = req.query.height as string;
  const width: string = req.query.width as string;

  if (!imageName)
    //reject when imagename param is not passed in the link
    return res.status(404)
      .send(`<Center><br><br><h1 style="Color:blue">You should include the image name</h1>
    <p style="Color:black">use a valid link as (http://localhost:3000/images_api?image=<name of image>) </p>
    </Center>`);

  if (height != null && width != null && imageName != null) {
    ///reject if height and width or any of them is negtive number or equil to zero or not a number

    if (
      (Number.isNaN(parseInt(width)) || parseInt(width) <= 0) &&
      (Number.isNaN(parseInt(height)) || parseInt(height) <= 0)
    )
      return res.status(404)
        .send(`<Center><br><br><h1 style="Color:blue">You should enter a vaild height and width </h1>
        <p style="Color:black">enter only postive numbers to resize the image </p>
        </Center>`);

    if (Number.isNaN(parseInt(height)) || parseInt(height) <= 0)
      return res.status(404)
        .send(`<Center><br><br><h1 style="Color:blue">You should enter a vaild height </h1>
        <p style="Color:black">enter only postive numbers to resize the image </p>
        </Center>`);

    if (Number.isNaN(parseInt(width)) || parseInt(width) <= 0)
      return res.status(404)
        .send(`<Center><br><br><h1 style="Color:blue">You should enter a vaild width </h1>
        <p style="Color:black">enter only postive numbers to resize the image </p>
        </Center>`);
  }

  next();
};

export default imageValidator;
