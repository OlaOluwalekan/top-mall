let contentHeadImageDiv = document.getElementById("contentImage");

let contentHeadImage = [
  "./images/content-head-images/girl-colourful.jpg",
  "./images/content-head-images/fastest-dilevery.png",
  "./images/content-head-images/discount.png",
];

let ChangeImage = () => {
  let headImageInterval = 2000;
  for (let i = 0; i < contentHeadImage.length; i++) {
    // setTimeout(() => {
    //   contentHeadImageDiv.src = contentHeadImage[i];
    // }, headImageInterval + i * headImageInterval);
    setInterval(() => {
      contentHeadImageDiv.src = contentHeadImage[i];
    }, headImageInterval + i * headImageInterval);
    console.log(headImageInterval + i * headImageInterval);
  }
};

window.onload = () => {
  ChangeImage();
};
