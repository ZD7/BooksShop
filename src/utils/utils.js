
const callback = (entries, observer) => {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.style.background = "#d1d5db"
        entry.target.src = entry.target.dataset.src
        entry.target.classList.remove("lazyLoad")
        observer.unobserve(entry.target)
      }
    })
}

const options = {
    // root: document.querySelector("#list"),
    threshold: 0.5,
  }
  
export const observer = new IntersectionObserver(callback, options)


// const observer = new IntersectionObserver((entries, observer) => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             console.log(entry)
//             // ссылка на оригинальное изображение хранится в атрибуте "data-src"
//             entry.target.src = entry.target.dataset.src
//             observer.unobserve(entry.target)
//         }
//     })
// }, { threshold: 0.5 })