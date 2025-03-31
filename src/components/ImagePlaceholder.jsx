import React from 'react';

const ImagePlaceholder = ({ width = 300, height = 200, text = 'Изображение', bgColor = 'purple-900', textColor = 'gold-400' }) => {
  return (
    <div 
      className={`bg-${bgColor} flex items-center justify-center rounded-lg overflow-hidden`} 
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      <div className={`text-${textColor} text-center p-4`}>
        <span className="block text-4xl mb-2">🖼️</span>
        <span className="block">{text}</span>
      </div>
    </div>
  );
};

export default ImagePlaceholder; 