import React from 'react';

const ImagePage = ({ image, description }) => {
  return (
    <div className="content-page flex flex-col items-center justify-start min-h-screen overflow-y-auto p-4">
      {/* Image Section */}
      <img 
        src={image} 
        alt="Content" 
        className="w-full max-w-5xl h-auto object-contain mb-8" 
      />
      
      {/* Description Section */}
      <div className="content-text text-center">
        <h2 className="text-3xl font-bold mb-4">Image Description</h2>
        <p className="text-lg">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ImagePage;
