// main banner

// videos

// subscription

// categories

const urlAPI = "https://clone-youtube-api-d5dmr.ondigitalocean.app/";

async function fetchData() {
  const response = await fetch(urlAPI);
  const responseJson = await response.json();

  return responseJson;
}

function populateCategories(categories) {
  const categoriesListUl = document.querySelector(".categories__list");
  const categoriesHtmlArray = categories.map((category, index) => {
    return `
      <li class="categories__item">
        <button href="#" class="categories__button categories__button--${index === 0 ? "active" : "disabled"}"> 
          ${category.name} 
        </button>
      </li>
    `;
  })
  // console.log({categoriesHtmlArray})
  categoriesListUl.insertAdjacentHTML("beforeend", categoriesHtmlArray.join(""))
}

function populateSubscriptions(subscription) {
  const menuGroupListUl = document.querySelector(".subscriptions");
  const subscriptionsHtmlArray = subscription.map((subscription, index) => {
    return `
      <li class="menu-group__item">
        <a href="${subscription.link}" class="menu-group__link">
          <img class="menu-group__icon menu-group__icon--image" src="${subscription.thumb}" alt="Jacob Music" referrerPolicy = "no-referrer">
          <span class="menu-group__text">
            ${subscription.name}
          </span>
          <span class="menu-group__alert"></span>
        </a>
      </li>
    `;
  })
  menuGroupListUl.insertAdjacentHTML("afterbegin", subscriptionsHtmlArray.join(""));
}

function populateMainBanner(mainBanner) {
  const bannerSection = document.querySelector('.banner');
  const structureBanner = `
      <img class="banner__image" src="${mainBanner.url}"  alt="Tu contenido favorito, sin publicidad" referrerPolicy = "no-referrer">
        <div class="banner__info">
        <img class="banner__logo" src="${mainBanner.logo}"  alt="Tu contenido favorito, sin publicidad" referrerPolicy = "no-referrer">
          <h2 class="banner__title">
            ${mainBanner.title}
          </h2>
          <a href="#" class="banner__link">
            ${mainBanner.link}
          </a>
        </div>
  `;
  bannerSection.insertAdjacentHTML('beforeend', structureBanner)
}

function transformThousandsInK(views) {
  const viewsString = String(views);
  if(viewsString.length > 3) {
    const viewsThousand = Math.trunc(views / 1000);
    return viewsThousand;
  }
  return views;
}

function transformSeconds(secondsVideo) {
  if (secondsVideo < 3600){
    const minutes = Math.trunc(secondsVideo / 60);
    const seconds = secondsVideo % 60;
    return String(minutes) + ":" + String(seconds);
  }
  return "";
}

function videoPublishedAgo(createdAt){
  const createdAtDate = new Date(createdAt);
  const now = new Date()
  const t1 = createdAtDate.getTime();
  const t2 = now.getTime();
  const daysAgo = Math.floor((t2 - t1 ) / (24*3600*1000));
  return daysAgo > 1 ? `${daysAgo} days ago`: "";
}

function populateVideos(videos) {
  const galleryListUl = document.querySelector(".gallery__list");
  const videosHtmlArray = videos.map((video, index) => {
    return `
      <li class="gallery__item">
        <div class="gallery-video">
          <div class="gallery-video__thumb">
            <img src="${video.thumb}" alt="" class="gallery-video__image" referrerPolicy = "no-referrer">
            <span class="gallery-video__time">
              ${transformSeconds(video.seconds)}
            </span>
        </div>
        <div class="gallery-video__info">
          <div class="gallery-video__block--left">
            <img class="gallery-video__avatar" src="./assets/image/video-user-avatar.png" alt="">
          </div>
          <div class="gallery-video__block--right">
            <span class="gallery-video__name">
              ${video.name}
            </span>
            <span class="gallery-video__name-user">
              ${video.author}
              ${
                video.verified ? `
                <svg class="gallery-video__icon--check" width="12" height="12" viewBox="0 0 12 12" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M6 1C3.24 1 1 3.24 1 6C1 8.76 3.24 11 6 11C8.76 11 11 8.76 11 6C11 3.24 8.76 1 6 1ZM4.96 8.965L2.485 6.49L3.51 5.465L4.96 6.915L8.635 3.24L9.66 4.265L4.96 8.965Z"
                    fill="#727272" />
                </svg>
                ` : ''
              }
              
              </span>
              <span class="gallery-video__text">
                ${transformThousandsInK(video.views)}K views • ${videoPublishedAgo(video.createdAt)}
              </span>
            </div>
          </div>
        </div>
      </li>
    `;
  })
  galleryListUl.insertAdjacentHTML("beforeend", videosHtmlArray.join(""));

}

async function main() {
  const data = await fetchData();
  console.log({data});
  populateCategories(data.categories);
  populateSubscriptions(data.subscriptions);
  populateMainBanner(data.mainBanner);
  populateVideos(data.videos);
}

main();