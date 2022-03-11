import { formatPerfilIcon } from '../utils.js';

function renderHeaderInfo(data) {

  const headerInfoBusiness = document.querySelector(".header__info-business");

  const headerLink = document.createElement("a");
  headerLink.classList.add("header__link")
  headerLink.href = "#";
  headerLink.innerText = formatPerfilIcon(data.organization);

  const spanNameBusiness = document.createElement("span");
  spanNameBusiness.classList.add("header__name--business");
  spanNameBusiness.textContent = data.organization;
  headerInfoBusiness.append(headerLink, spanNameBusiness)

  const headerNavPerfil = document.querySelector(".header-nav__perfil");

  const imagePerfil = document.createElement("img");
  imagePerfil.classList.add("header-nav__perfil-image");
  imagePerfil.referrerPolicy = "no-referrer";
  imagePerfil.src = data.photo;

  const namePerfil = document.createElement("span");
  namePerfil.classList.add("header-nav__perfil-name");
  namePerfil.textContent = data.username;

  headerNavPerfil.append(imagePerfil, namePerfil);

}

export default renderHeaderInfo;