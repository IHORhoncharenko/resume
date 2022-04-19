import "./style.css";

const mainWrap = document.createElement('div');
mainWrap.classList.add('main-wrap');
document.body.insertAdjacentElement('afterbegin', mainWrap);

const mainHeaderBlock = document.createElement('header');
mainHeaderBlock.classList.add('main-header-block');
mainWrap.insertAdjacentElement('afterbegin', mainHeaderBlock);

const mainDivHeaderDocument = document.createElement('div');
mainDivHeaderDocument.classList.add('main-header-block-flex');
mainHeaderBlock.insertAdjacentElement('afterbegin', mainDivHeaderDocument);

const myPhoto = document.createElement('img');
myPhoto.src = 'ihor_honcharenko.jpg';
myPhoto.alt = 'Актуальна фотографія кандидата на посаду junior JS Developer';
myPhoto.classList.add('profile-photo')
mainDivHeaderDocument.insertAdjacentElement('beforeend', myPhoto);

const mainHgroup = document.createElement('hgroup');
mainDivHeaderDocument.insertAdjacentElement('beforeend', mainHgroup);

const mainH1 = document.createElement('h1');
mainH1.innerText = 'Ігор Гончаренко'
mainH1.classList.add('main-h1');
mainHgroup.insertAdjacentElement('beforeend', mainH1);

const mainH2 = document.createElement('h2');
mainH2.innerText = 'Кандидат на вакансію Front End Developer'
mainH2.classList.add('main-h2');
mainHgroup.insertAdjacentElement('beforeend', mainH2);

const socialList = document.createElement('ul');
socialList.classList.add('social-list-flex');
mainHgroup.insertAdjacentElement('afterend', socialList);

for (let i = 1; i < 3; i++) {
    const iconSocial = document.createElement('li');
    iconSocial.classList.add(`social-list-icon-social-${i}`);
    socialList.insertAdjacentElement('beforeend', iconSocial);

    const iconSocialSvg = document.createElement('svg');
    iconSocialSvg.setAttribute('viewBox', '0 0 24 24');
    iconSocialSvg.style.width = '24px';
    iconSocialSvg.style.height = '24px';
    iconSocialSvg.classList.add(`svg-social-icon-${i}`);
    iconSocial.insertAdjacentElement('beforeend', iconSocialSvg);
}

function inputSocialIconsPath(classNumberSvgIcon, fullPathtSvg) {
    const nameSvg = document.getElementsByClassName(`svg-social-icon-${classNumberSvgIcon}`)[0];
    nameSvg.insertAdjacentHTML('afterbegin', `${fullPathtSvg}`);
}

const twitterPath = `<path fill="currentColor" d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z" />`;

const fbPath = `<path fill="currentColor" d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z" />`;

inputSocialIconsPath(1, fbPath);
inputSocialIconsPath(2, twitterPath);

console.log('Hello')
