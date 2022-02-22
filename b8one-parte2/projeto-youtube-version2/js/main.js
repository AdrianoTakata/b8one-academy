import fetchJson from "./http.js";


async function main() {

  const url = "https://clone-youtube-api-d5dmr.ondigitalocean.app/";
  const dataApi = await fetchJson(url);
  renderCategories(dataApi.categories);
  renderBanner(dataApi.mainBanner);
  renderSubcriptions(dataApi.subscriptions);
  renderGallery(dataApi.videos);
  console.log(dataApi);
}

main();

function renderCategories(categories) {

  const ul = document.querySelector(".categories__list");

  categories.forEach( (category, index) => {
    let li = document.createElement("li");
    li.classList.add("categories__item");
    let button = document.createElement("button");
    button.classList.add("categories__button");
    if (index === 0){
      button.classList.add("categories__button--active")
    }
    button.textContent = `${category.name}`;
    li.append(button);
    ul.append(button);
  });

}

function renderBanner(bannerData) {

  const banner = document.querySelector(".banner");

  const imageBanner = document.createElement("img");
  imageBanner.src = bannerData.url;
  imageBanner.referrerPolicy = "no-referrer";
  imageBanner.classList.add("banner__image");
  banner.append(imageBanner);

  const divBannerInfo = document.createElement("div");
  divBannerInfo.classList.add("banner__info");
  banner.append(divBannerInfo);

  const imageLogo = document.createElement("img");
  imageLogo.src = bannerData.logo;
  imageLogo.classList.add("banner__logo");
  imageLogo.referrerPolicy = "no-referrer";
  divBannerInfo.append(imageLogo);

  const h2 = document.createElement("h2");
  h2.classList.add("banner__title");
  h2.textContent = `${bannerData.title}`;
  divBannerInfo.append(h2);

  const ancor = document.createElement("a");
  ancor.href = "#";
  ancor.classList.add("banner__link");
  ancor.textContent = `${bannerData.link}`;
  divBannerInfo.append(ancor);

  const button = document.createElement("button");
  button.classList.add("banner__close");
  button.textContent = "X";
  banner.append(button);

}

function renderSubcriptions(subscriptionsData) {

  const subscriptions = document.querySelector(".menu-group__list-3");
  let showMore = document.querySelector(".menu-group__item-list-3");
  let showMoreAncor = document.querySelector(".menu-group__item-list-3 .menu-group__link");

  showMore.innerHTML = "";

  subscriptionsData.forEach( subscription => {
    const li = document.createElement("li");
    li.classList.add("menu-group__item");
    const a = document.createElement("a");
    a.classList.add("menu-group__link");
    const img = document.createElement("img");
    img.classList.add("menu-group__icon");
    img.src = subscription.thumb;
    img.referrerPolicy = "no-referrer";
    const span = document.createElement("span");
    span.classList.add("menu-group__text");
    span.textContent = `${subscription.name}`
    a.append(img, span);
    li.append(a);
    subscriptions.append(li);
  })

  subscriptions.appendChild(showMoreAncor);

}

function renderGallery(galleryData){

  const gallery = document.querySelector(".gallery__list");

  galleryData.forEach( video => {
    const li = document.createElement("li");
    li.classList.add("gallery__item");
    const galleryVideo = document.createElement("div");
    galleryVideo.classList.add("gallery-video");

    const galleryVideoThumb = document.createElement("div");
    galleryVideoThumb.classList.add("gallery-video__thumb");
    const image = document.createElement("img");
    image.classList.add("gallery-video__image");
    image.src = video.thumb;
    image.referrerPolicy = "no-referrer";
    const galleryVideoTime = document.createElement("span");
    galleryVideoTime.classList.add("gallery-video__time");
    galleryVideoTime.textContent = `${video.seconds}`;
    galleryVideoThumb.append(image, galleryVideoTime);

    const galleryVideoInfo = document.createElement("div");
    galleryVideoInfo.classList.add("gallery-video__info");
    const galleryVideoBlockLeft = document.createElement("div");
    galleryVideoBlockLeft.classList.add("gallery-video__block--left");
    const imageAvatar = document.createElement("img");
    imageAvatar.classList.add("gallery-video__avatar");
    // imageAvatar.src = `${video.}`
    
    const galleryVideoBlockRight = document.createElement("div");
    galleryVideoBlockRight.classList.add("gallery-video__block--right");
    const galleryVideoName = document.createElement("span");
    galleryVideoName.classList.add("gallery-video__name");
    galleryVideoName.textContent = `${video.name}`;
    const galleryVideoNameUser = document.createElement("span");
    galleryVideoNameUser.classList.add("gallery-video__name-user");
    galleryVideoNameUser.textContent = "Name profile";
    if (video.verified){

    }

    const galleryVideoText = document.createElement("span");
    galleryVideoText.classList.add("gallery-video__text");
    galleryVideoText.textContent = `27K views • 1 day ago`

    galleryVideoBlockRight.append(galleryVideoName, galleryVideoNameUser, galleryVideoText);

    galleryVideoInfo.append(galleryVideoBlockLeft, galleryVideoBlockRight);
    galleryVideo.append(galleryVideoThumb, galleryVideoInfo);
    li.append(galleryVideo);

    gallery.append(li);
  })


}