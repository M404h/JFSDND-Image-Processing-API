"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var imageValidator = function (req, res, next) {
    var imageName = req.query.image;
    var height = req.query.height;
    var width = req.query.width;
    if (!imageName)
        //reject when imagename param is not passed in the link
        return res.status(404)
            .send("<Center><br><br><h1 style=\"Color:blue\">You should include the image name</h1>\n    <p style=\"Color:black\">use a valid link as (http://localhost:3000/images_api?image=<name of image>) </p>\n    </Center>");
    if (height != null && width != null && imageName != null) {
        ///reject if height and width or any of them is negtive number or equil to zero or not a number
        if ((Number.isNaN(parseInt(width)) || parseInt(width) <= 0) &&
            (Number.isNaN(parseInt(height)) || parseInt(height) <= 0))
            return res.status(404)
                .send("<Center><br><br><h1 style=\"Color:blue\">You should enter a vaild height and width </h1>\n        <p style=\"Color:black\">enter only postive numbers to resize the image </p>\n        </Center>");
        if (Number.isNaN(parseInt(height)) || parseInt(height) <= 0)
            return res.status(404)
                .send("<Center><br><br><h1 style=\"Color:blue\">You should enter a vaild height </h1>\n        <p style=\"Color:black\">enter only postive numbers to resize the image </p>\n        </Center>");
        if (Number.isNaN(parseInt(width)) || parseInt(width) <= 0)
            return res.status(404)
                .send("<Center><br><br><h1 style=\"Color:blue\">You should enter a vaild width </h1>\n        <p style=\"Color:black\">enter only postive numbers to resize the image </p>\n        </Center>");
    }
    next();
};
exports.default = imageValidator;
