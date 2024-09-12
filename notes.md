# The very first thing we have to do is npm init to create a package.json file. This file will contain all the information about our project, including the dependencies we need to install to make it work.

## after that we have to create our own script in the package.json file. This script will be used to run the project. We can do this by adding the following line to the scripts object in the package.json file:

```json

## In case we have to handle cors we can use proxy in vite.config.js file that will be created in the root of the project. We can add the following line to the vite.config.js file:
proxy will help us to avoid cors error also we can append api/localhost:3000 to the url to avoid cors error.
    proxy:{
      '/api': 'http://localhost:3000'
    }
```

we use multer for file upload in nodejs. Multer is a node.js middleware for handling multipart/form-data, which is primarily used for uploading files. It is written on top of busboy for maximum efficiency.

multer takes the file and it stores locally in our server in the next step we take the file from local server to the cloudinary

// if we want we can store it directly to the cloudinary
but it is done for security purpose to avoid the direct upload to the cloudinary

```js