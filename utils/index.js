export const formatNumber = (number) => {
  return new Intl.NumberFormat("en-US").format(number);
};

export const toLowerWithHyphen = (string) => {
  return string.toLowerCase().replace(/ /g, "-");
};

/* 
  This function is not used in the app, but I wanted to keep it for future reference.  It is a way to get the dimensions of an image before it is loaded.  This is useful for setting the dimensions of an image before it is loaded, so that the you can take advantage of next Image component.  
  
  export async function getImageDimensions(url) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
        resolve({ width: img.width, height: img.height });
      };
      img.onerror = () => {
        reject(`Failed to load image: ${url}`);
      };
      img.src = url;
    });
  }
**/
