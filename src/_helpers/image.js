let c = "http://localhost:3001/";
export const parsing = imageName => {
  if (imageName !== undefined) {
    let im = imageName.substring(8);
    return c + im;
  }
  return "https://www.blubirdinteractive.com/assets/img/image-not-found.jpg";
};
