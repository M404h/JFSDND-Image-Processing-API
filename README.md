# JFSDND-Image-Processing-API

this project is part of udacity javascript fullstack developer program, the aim of this project is to display and image when only a valid image name is passed in the url
or to resize and display the resized image when the name of the image, width and height are passed.
along with using jasmine for unit testing along with supertest package to test endpoints. 
in addition, ESlint and preitter packages where used. 
 

## getting started
 - Use `npm install` at the start to install all the needed packages and modules.
 - Use `npm run build` to build the project, this need to be used after every edit on the source.
 - Use `npm run test` to run test the project, build was added with test to make sure its testing on the lastest edit. 
 - Use `npm run start` to start express server. 
 - Use `npm run lint` to start lint. 
 - Use `npm run prettier` to start prettier, all changes will be shown in the files. 


## API 
- the base is `http://localhost:3000/`
- to display image `http://localhost:3000/images_api?image=palmtunnel`
- to resize image `http://localhost:3000/images_api?image=palmtunnel&width=20010&height=200`

## useful resoures 

 - [params query](https://nodejs.org/en/knowledge/HTTP/clients/how-to-access-query-string-parameters/)
- [sharp](https://blog.logrocket.com/processing-images-sharp-node-js/#setting-up-a-sharp-image-project)
- [path](https://www.w3schools.com/nodejs/ref_path.asp)
- [supertest](https://www.npmjs.com/package/supertest)
- [preitter](https://prettier.io/docs/en/install.html)
- [not a number function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN)
