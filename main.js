//========================================= Create Unique Event Listeners

//---------------------Selectors
const navButton = document.querySelectorAll('.menu-button');
const nav = document.querySelectorAll('li');
const header = document.querySelectorAll('h1');
const headerBG = document.querySelectorAll('.header');
const article = document.querySelectorAll('.article');
const articlesCont = document.querySelector('.articles');

//---------------------Color Generator
function randomColor(brightness){
  function randomChannel(brightness){
    let r = 255-brightness;
    let n = 0|((Math.random() * r) + brightness);
    let s = n.toString(16);
    return (s.length==1) ? '0'+s : s;
  }
  return randomChannel(brightness) + randomChannel(brightness) + randomChannel(brightness);
}
const baseTheme = randomColor(9);

function invertHex(hex) {
    return (Number(`0x1${hex}`) ^ 0xFFFFFF).toString(16).substr(1).toUpperCase()
  }
//----------------------Color declared
const theme = '#' + baseTheme;
const mainBG = '#'+'BF' + invertHex(baseTheme);
console.log(mainBG)
const bgTheme = '#' + invertHex(baseTheme);
console.log(bgTheme)
//----------------------On Load Events
window.addEventListener("load", e => {
  header[0].style.color = theme;
  headerBG[0].style.backgroundColor = bgTheme;
  nav.forEach(i => i.style.color = theme);
  article.forEach(i => i.style.color = theme);
  article.forEach(i => i.style.color = theme);
  article.forEach(i => i.style.backgroundColor = bgTheme);
  article.forEach(i => i.style.animation = 'slide-in-left 1.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both');
  menu[0].style.backgroundColor = bgTheme;
  menu[0].style.border = '5px solid';
  menu[0].style.borderColor =  theme;
  articlesCont.style.backgroundColor = mainBG;
});


//----------------------On Hover Events
navButton[0].addEventListener("mouseover", e => {
  TweenMax.to(navButton[0], 2, {scale:1.5, backgroundColor: theme})
});
navButton[0].addEventListener("mouseout", e => {
  TweenMax.to(navButton[0], 1, {scale:1, backgroundColor: bgTheme})
});
//----------------------
article.forEach(i => i.addEventListener("mouseover", e => {
    TweenMax.to(i, 1, {scale:1.05, backgroundColor: theme, color:bgTheme, margin: '30px 10%'})
  }));
  article.forEach(i => i.addEventListener("mouseout", e => {
    TweenMax.to(i, 1, {scale:1, backgroundColor: bgTheme, color:theme, margin: '20px 10%'})
  }));


