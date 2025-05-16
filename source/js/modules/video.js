const imgContainer = document.querySelector('.video');
const imgVideo = imgContainer.querySelector('.video__img');
const buttonVideo = document.querySelector('.video__button');
const videoLink = document.querySelector('.video__link');

const createFrameVideo = () => {
  const iframeVideo = document.createElement('iframe');
  iframeVideo.src = 'https://www.youtube.com/embed/9TZXsZItgdw?si=1xRuJxy0liH9_EaH&autoplay=1';
  iframeVideo.classList.add = 'video__play';
  iframeVideo.setAttribute('frameborder', '0');
  iframeVideo.setAttribute('allowfullscreen', 'true');
  iframeVideo.setAttribute('allow', 'autoplay', 'accelerometer; clipboard-write; encrypted-media;gyroscope;picture-in-picture');
  imgContainer.appendChild(iframeVideo);
};

const videoPlay = () => {
  buttonVideo.addEventListener('click', () => {
    buttonVideo.remove();
    imgVideo.remove();
    videoLink.remove();
    createFrameVideo();
  });
};

videoPlay();
