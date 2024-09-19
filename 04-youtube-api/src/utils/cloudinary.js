import {v2 as cloudinary} from 'cloudinary';
import fs from 'fs'; // fs is a Node.js module for reading and writing files

cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET // Click 'View API Keys' above to copy your API secret
});
// here we are setting up the file path for local file
const uploadOnCloudinary = async (localFilePath) => {
    try{
        if(!localFilePath) return null;
        // upload the file on cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: 'auto',
        })
        // file has been uploaded on cloudinary
        // console.log('File uploaded successfully on cloudinary', response.url);
        return response;
    }catch(error){
        fs.unlinkSync(localFilePath); // delete the file from local storage in case we were not able to upload it on cloudinary
        console.error('Error uploading file on cloudinary', error);
        return null;
    }
}

export default uploadOnCloudinary;