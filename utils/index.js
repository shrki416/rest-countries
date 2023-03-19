export const formatNumber = (number) => {
  return new Intl.NumberFormat("en-US").format(number);
};

export const toLowerWithHyphen = (string) => {
  return string.toLowerCase().replace(/ /g, "-");
};

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
