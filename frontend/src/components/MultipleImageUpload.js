import React, { useState } from 'react';
import { CloudinaryContext, Image, Transformation } from 'cloudinary-react';
import {CLOUD_NAME, UPLOAD_PRESET} from "../keys"
// import {Cloudinary, CloudinaryContext, Image, Transformation} from "@cloudinary/url-gen";

const MultipleImageUpload = () => {
  const [uploadedImages, setUploadedImages] = useState([]);

  const handleUpload = () => {
    window.cloudinary.openUploadWidget(
      {
        cloudName: CLOUD_NAME,
        uploadPreset: UPLOAD_PRESET,
        multiple: true,
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          const uploadedImage = result.info.secure_url;
          setUploadedImages(prevUploadedImages => [...prevUploadedImages, uploadedImage]);
        }
      }
    );
  };

  return (
    <div>
      <button onClick={handleUpload}>Upload Images</button>
      <CloudinaryContext cloudName={CLOUD_NAME}>
        {uploadedImages.map(imageUrl => (
          <div key={imageUrl}>
            <Image publicId={imageUrl}>
              <Transformation width="150" height="150" crop="fill" />
            </Image>
          </div>
        ))}
      </CloudinaryContext>
    </div>
  );
};

export default MultipleImageUpload;
