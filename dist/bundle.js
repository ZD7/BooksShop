/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./styles/styles.css":
/*!***************************!*\
  !*** ./styles/styles.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./styles/stylesSlider.css":
/*!*********************************!*\
  !*** ./styles/stylesSlider.css ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./js/book.js":
/*!********************!*\
  !*** ./js/book.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   toCardBook: () => (/* binding */ toCardBook)
/* harmony export */ });
function toCardBook(items, booksFromCart) {
    let childComment = ""
    childComment += `
            <div class="book">
                <div class="wrapper">
                    <img src=${__webpack_require__(/*! ../images/dummy-image-212x300.gif */ "./images/dummy-image-212x300.gif")} data-src="${'imageLinks' in items.volumeInfo ? items.volumeInfo.imageLinks.thumbnail : __webpack_require__(/*! ../images/dummy-image-212x300.gif */ "./images/dummy-image-212x300.gif")}" class="poster lazyLoad" alt="poster">
                </div>
                <div class="infoBook">
                    <div class="open-sans authors">${"authors" in items.volumeInfo ? items.volumeInfo.authors : ""}</div>
                    <div class="name-book">${items.volumeInfo.title}</div>
                    <div class="info-rating">
                        <div class="open-sans average-rating">${'averageRating' in items.volumeInfo ? ratingSVG(items.volumeInfo.averageRating) : ""}</div>
                        <div class="open-sans">${'ratingsCount' in items.volumeInfo ? items.volumeInfo.ratingsCount + "M review" : ""}</div>
                    </div>
                    <div class="description open-sans">${'description' in items.volumeInfo ? items.volumeInfo.description : ""}</div>
                    ${'retailPrice' in items ? `<div class="retailPrice">${items.saleInfo}</div>` : ""}
                    <button class="addToCart style-button ${booksFromCart.includes(items.volumeInfo.title) ? "isInCart" : ""}" data-title = "${items.volumeInfo.title}">${booksFromCart.includes(items.volumeInfo.title) ? "IN THE CART": "BUY NOW"}</button>
                </div>
            </div>
        `
    return childComment
}


const ratingSVG = (rating) => {
    return `
    <svg width="64" height="14" viewBox="0 0 64 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 1L7.80568 4.5147L11.7063 5.1459L8.92165 7.9493L9.52671 11.8541L6 10.072L2.47329 11.8541L3.07835 7.9493L0.293661 5.1459L4.19432 4.5147L6 1Z" fill=${rating >= 1 ? "#F2C94C" : "#EEEDF5"}></path>
        <path d="M19 1L20.8057 4.5147L24.7063 5.1459L21.9216 7.9493L22.5267 11.8541L19 10.072L15.4733 11.8541L16.0784 7.9493L13.2937 5.1459L17.1943 4.5147L19 1Z" fill=${rating >= 2 ? "#F2C94C" : "#EEEDF5"}></path>
        <path d="M32 1L33.8057 4.5147L37.7063 5.1459L34.9216 7.9493L35.5267 11.8541L32 10.072L28.4733 11.8541L29.0784 7.9493L26.2937 5.1459L30.1943 4.5147L32 1Z" fill=${rating >= 3 ? "#F2C94C" : "#EEEDF5"}></path>
        <path d="M45 1L46.8057 4.5147L50.7063 5.1459L47.9216 7.9493L48.5267 11.8541L45 10.072L41.4733 11.8541L42.0784 7.9493L39.2937 5.1459L43.1943 4.5147L45 1Z" fill=${rating >= 4 ? "#F2C94C" : "#EEEDF5"}></path>
        <path d="M58 1L59.8057 4.5147L63.7063 5.1459L60.9216 7.9493L61.5267 11.8541L58 10.072L54.4733 11.8541L55.0784 7.9493L52.2937 5.1459L56.1943 4.5147L58 1Z" fill=${rating === 5 ? "#F2C94C" : "#EEEDF5"}></path>
    </svg>`
}

/***/ }),

/***/ "./js/cart.js":
/*!********************!*\
  !*** ./js/cart.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkCart: () => (/* binding */ checkCart),
/* harmony export */   isBookInTheCart: () => (/* binding */ isBookInTheCart)
/* harmony export */ });

const divNumberOfBooks = document.querySelector(".emptyCart")

function checkCart(books) {
    if (books.length > 0) {
      divNumberOfBooks.innerText = `${books.length}`
      divNumberOfBooks.classList.add("numberOfBooks")
    } else {
      divNumberOfBooks.innerText = ""
      divNumberOfBooks.classList.remove("numberOfBooks")
    }
}

const isBookInTheCart = (e, booksFromCart) => {
    if (e.target.classList.contains("addToCart")) {
      e.target.innerText === "BUY NOW" ? (e.target.innerText = "IN THE CART") : (e.target.innerText = "BUY NOW")
      e.target.classList.toggle("isInCart")
      let nameBook = e.target.dataset.title
      booksFromCart = JSON.parse(localStorage.getItem("books") || "[]")
  
      if (booksFromCart.includes(nameBook)) {
        booksFromCart = booksFromCart.filter((book) => book !== nameBook)
      } else {
        booksFromCart.push(nameBook)
      }
  
      checkCart(booksFromCart)
      localStorage.setItem("books", JSON.stringify(booksFromCart))

      return booksFromCart
    }
}

/***/ }),

/***/ "./js/slider.js":
/*!**********************!*\
  !*** ./js/slider.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

let images = [
    {
        url: __webpack_require__(/*! ../images/banner1.jpg */ "./images/banner1.jpg")
    }, 
    {
        url: __webpack_require__(/*! ../images/banner2.jpg */ "./images/banner2.jpg")
    }, 
    {
        url: __webpack_require__(/*! ../images/banner3.jpg */ "./images/banner3.jpg")
    }
];


function initslider(options) {
    if (!images || !images.length) return;

    options = options || {
        dots: true,
        titles: false
    };

    let sliderImages = document.querySelector(".slider__images");
    let sliderDots = document.querySelector(".slider__dots");

    initImages();

    if (options.dots) {
        initDots();
    }

    if (options.autoplay) {
        initAutoplay();
    }

    function initImages() {
        images.forEach((image, index) => {
            let imageDiv = `<div class="image n${index} ${index === 0 ? "active" : ""}" style="background-image:url(${images[index].url});" data-index="${index}"></div>`;
            sliderImages.innerHTML += imageDiv;
        });
    }

    function initDots() {
        images.forEach((image, index) => {
            let dot = `<div class="slider__dots-item n${index} ${index === 0 ? "active" : ""}" data-index="${index}"></div>`;
            sliderDots.innerHTML += dot;
        });
        sliderDots.querySelectorAll(".slider__dots-item").forEach(dot => {
            dot.addEventListener("click", function () {
                moveSlider(this.dataset.index);
                sliderDots.querySelector(".active").classList.remove("active");
                this.classList.add("active");
            })
        })
    }

    function moveSlider(num) {
        sliderImages.querySelector(".active").classList.remove("active");
        sliderImages.querySelector(".n" + num).classList.add("active");

        if (options.dots) {
            sliderDots.querySelector(".active").classList.remove("active");
            sliderDots.querySelector(".n" + num).classList.add("active");
        }
    }

    function initAutoplay() {
        setInterval(() => {
          let curNumber = +sliderImages.querySelector(".active").dataset.index;
          let nextNumber = curNumber === images.length - 1? 0 : curNumber + 1;
          moveSlider(nextNumber);
        }, options.autoplayInterval);
    }
}

let sliderOptoins = {
    dots: true,
    titles: true,
    autoplay: true,
    autoplayInterval: 5000
};

document.addEventListener("DOMContentLoaded", function () {
    initslider(sliderOptoins);
})

/***/ }),

/***/ "./utils/utils.js":
/*!************************!*\
  !*** ./utils/utils.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   observer: () => (/* binding */ observer)
/* harmony export */ });

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
  
const observer = new IntersectionObserver(callback, options)


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

/***/ }),

/***/ "./images/banner1.jpg":
/*!****************************!*\
  !*** ./images/banner1.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/banner1.be5bf2ccb48311e0e6cc.jpg";

/***/ }),

/***/ "./images/banner2.jpg":
/*!****************************!*\
  !*** ./images/banner2.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/banner2.815da81e274f2e0350a8.jpg";

/***/ }),

/***/ "./images/banner3.jpg":
/*!****************************!*\
  !*** ./images/banner3.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/banner3.089444d49af98fdb48ba.jpg";

/***/ }),

/***/ "./images/dummy-image-212x300.gif":
/*!****************************************!*\
  !*** ./images/dummy-image-212x300.gif ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/dummy-image-212x300.7aec074a230b83b25f39.gif";

/***/ }),

/***/ "./data/data.json":
/*!************************!*\
  !*** ./data/data.json ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"kind":"books#volumes","totalItems":200,"items":[{"kind":"books#volume","id":"H_kRDAAAQBAJ","etag":"f4UEW4cZ4+g","selfLink":"https://www.googleapis.com/books/v1/volumes/H_kRDAAAQBAJ","volumeInfo":{"title":"The Digital Hand","subtitle":"Volume II: How Computers Changed the Work of American Financial, Telecommunications, Media, and Entertainment Industries","authors":["James W. Cortada"],"publisher":"Oxford University Press on Demand","publishedDate":"2006","description":"The Digital Hand, Volume 2, is a historical survey of how computers and telecommunications have been deployed in over a dozen industries in the financial, telecommunications, media and entertainment sectors over the past half century. It is past of a sweeping three-volume description of how management in some forty industries embraced the computer and changed the American economy. Computers have fundamentally changed the nature of work in America. However it is difficult to grasp the full extent of these changes and their implications for the future of business. To begin the long process of understanding the effects of computing in American business, we need to know the history of how computers were first used, by whom and why. In this, the second volume of The Digital Hand, James W. Cortada combines detailed analysis with narrative history to provide a broad overview of computing\'s and telecomunications\' role in over a dozen industries, ranging from Old Economy sectors like finance and publishing to New Economy sectors like digital photography and video games. He also devotes considerable attention to the rapidly changing media and entertainment industries which are now some of the most technologically advanced in the American economy. Beginning in 1950, when commercial applications of digital technology began to appear, Cortada examines the ways different industries adopted new technologies, as well as the ways their innovative applications influenced other industries and the US economy as a whole. He builds on the surveys presented in the first volume of the series, which examined sixteen manufacturing, process, transportation, wholesale and retail industries. In addition to this account, of computers\' impact on industries, Cortada also demonstrates how industries themselves influenced the nature of digital technology. Managers, historians and others interested in the history of modern business will appreciate this historical analysis of digital technology\'s many roles and future possibilities in an wide array of industries. The Digital Hand provides a detailed picture of what the infrastructure of the Information Age really looks like and how we got there.","industryIdentifiers":[{"type":"ISBN_13","identifier":"9780195165876"},{"type":"ISBN_10","identifier":"019516587X"}],"readingModes":{"text":false,"image":true},"pageCount":646,"printType":"BOOK","categories":["Business & Economics"],"maturityRating":"NOT_MATURE","allowAnonLogging":false,"contentVersion":"1.1.1.0.preview.1","panelizationSummary":{"containsEpubBubbles":false,"containsImageBubbles":false},"imageLinks":{"smallThumbnail":"http://books.google.com/books/content?id=H_kRDAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api","thumbnail":"http://books.google.com/books/content?id=H_kRDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"},"language":"en","previewLink":"http://books.google.ru/books?id=H_kRDAAAQBAJ&printsec=frontcover&dq=%22subject:Business%22&hl=&as_pt=BOOKS&cd=1&source=gbs_api","infoLink":"http://books.google.ru/books?id=H_kRDAAAQBAJ&dq=%22subject:Business%22&hl=&as_pt=BOOKS&source=gbs_api","canonicalVolumeLink":"https://books.google.com/books/about/The_Digital_Hand.html?hl=&id=H_kRDAAAQBAJ"},"saleInfo":{"country":"RU","saleability":"NOT_FOR_SALE","isEbook":false},"accessInfo":{"country":"RU","viewability":"PARTIAL","embeddable":true,"publicDomain":false,"textToSpeechPermission":"ALLOWED","epub":{"isAvailable":false},"pdf":{"isAvailable":true,"acsTokenLink":"http://books.google.ru/books/download/The_Digital_Hand-sample-pdf.acsm?id=H_kRDAAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"},"webReaderLink":"http://play.google.com/books/reader?id=H_kRDAAAQBAJ&hl=&as_pt=BOOKS&source=gbs_api","accessViewStatus":"SAMPLE","quoteSharingAllowed":false},"searchInfo":{"textSnippet":"In this, the second volume of The Digital Hand, James W. Cortada combines detailed analysis with narrative history to provide a broad overview of computing&#39;s and telecomunications&#39; role in over a dozen industries, ranging from Old Economy ..."}},{"kind":"books#volume","id":"3hQ6AQAAMAAJ","etag":"G6W2FKK8fVE","selfLink":"https://www.googleapis.com/books/v1/volumes/3hQ6AQAAMAAJ","volumeInfo":{"title":"Industrial Arts Index","publishedDate":"1914","industryIdentifiers":[{"type":"OTHER","identifier":"CHI:097417329"}],"readingModes":{"text":false,"image":false},"pageCount":456,"printType":"BOOK","categories":["Business"],"maturityRating":"NOT_MATURE","allowAnonLogging":false,"contentVersion":"2.3.4.0.preview.0","panelizationSummary":{"containsEpubBubbles":false,"containsImageBubbles":false},"imageLinks":{"smallThumbnail":"http://books.google.com/books/content?id=3hQ6AQAAMAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api","thumbnail":"http://books.google.com/books/content?id=3hQ6AQAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"},"language":"en","previewLink":"http://books.google.ru/books?id=3hQ6AQAAMAAJ&dq=%22subject:Business%22&hl=&as_pt=BOOKS&cd=2&source=gbs_api","infoLink":"http://books.google.ru/books?id=3hQ6AQAAMAAJ&dq=%22subject:Business%22&hl=&as_pt=BOOKS&source=gbs_api","canonicalVolumeLink":"https://books.google.com/books/about/Industrial_Arts_Index.html?hl=&id=3hQ6AQAAMAAJ"},"saleInfo":{"country":"RU","saleability":"NOT_FOR_SALE","isEbook":false},"accessInfo":{"country":"RU","viewability":"NO_PAGES","embeddable":false,"publicDomain":false,"textToSpeechPermission":"ALLOWED","epub":{"isAvailable":false},"pdf":{"isAvailable":true},"webReaderLink":"http://play.google.com/books/reader?id=3hQ6AQAAMAAJ&hl=&as_pt=BOOKS&source=gbs_api","accessViewStatus":"NONE","quoteSharingAllowed":false}},{"kind":"books#volume","id":"nRlvAwAAQBAJ","etag":"nf/l2GvlsZ8","selfLink":"https://www.googleapis.com/books/v1/volumes/nRlvAwAAQBAJ","volumeInfo":{"title":"Power, Politics, and Paranoia","subtitle":"Why People are Suspicious of Their Leaders","authors":["Jan-Willem van Prooijen","Paul A. M. van Lange"],"publisher":"Cambridge University Press","publishedDate":"2014-05-29","description":"Why are people frequently suspicious of their political and corporate leaders? This book examines the psychological roots of political paranoia.","industryIdentifiers":[{"type":"ISBN_13","identifier":"9781107035805"},{"type":"ISBN_10","identifier":"1107035805"}],"readingModes":{"text":false,"image":true},"pageCount":339,"printType":"BOOK","categories":["Political Science"],"maturityRating":"NOT_MATURE","allowAnonLogging":false,"contentVersion":"preview-1.0.0","panelizationSummary":{"containsEpubBubbles":false,"containsImageBubbles":false},"imageLinks":{"smallThumbnail":"http://books.google.com/books/content?id=nRlvAwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api","thumbnail":"http://books.google.com/books/content?id=nRlvAwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"},"language":"en","previewLink":"http://books.google.ru/books?id=nRlvAwAAQBAJ&printsec=frontcover&dq=%22subject:Business%22&hl=&as_pt=BOOKS&cd=3&source=gbs_api","infoLink":"http://books.google.ru/books?id=nRlvAwAAQBAJ&dq=%22subject:Business%22&hl=&as_pt=BOOKS&source=gbs_api","canonicalVolumeLink":"https://books.google.com/books/about/Power_Politics_and_Paranoia.html?hl=&id=nRlvAwAAQBAJ"},"saleInfo":{"country":"RU","saleability":"NOT_FOR_SALE","isEbook":false},"accessInfo":{"country":"RU","viewability":"PARTIAL","embeddable":true,"publicDomain":false,"textToSpeechPermission":"ALLOWED","epub":{"isAvailable":false},"pdf":{"isAvailable":true,"acsTokenLink":"http://books.google.ru/books/download/Power_Politics_and_Paranoia-sample-pdf.acsm?id=nRlvAwAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"},"webReaderLink":"http://play.google.com/books/reader?id=nRlvAwAAQBAJ&hl=&as_pt=BOOKS&source=gbs_api","accessViewStatus":"SAMPLE","quoteSharingAllowed":false},"searchInfo":{"textSnippet":"Why are people frequently suspicious of their political and corporate leaders? This book examines the psychological roots of political paranoia."}},{"kind":"books#volume","id":"kPmOAAAAMAAJ","etag":"nHVpzhRtmsA","selfLink":"https://www.googleapis.com/books/v1/volumes/kPmOAAAAMAAJ","volumeInfo":{"title":"Grounding Globalization","subtitle":"Labour in the Age of Insecurity","authors":["Edward Webster","Rob Lambert","Andries Beziudenhout"],"publisher":"Wiley-Blackwell","publishedDate":"2008-06-23","description":"This work examines the claim that a new labour internationalism is emerging. Three distinct areas are analysed - Orange in Australia, Changwon in South Korea, and Ezakheni in South Africa.","industryIdentifiers":[{"type":"OTHER","identifier":"UOM:39015077633801"}],"readingModes":{"text":false,"image":false},"pageCount":284,"printType":"BOOK","categories":["Science"],"maturityRating":"NOT_MATURE","allowAnonLogging":false,"contentVersion":"0.2.1.0.preview.0","panelizationSummary":{"containsEpubBubbles":false,"containsImageBubbles":false},"imageLinks":{"smallThumbnail":"http://books.google.com/books/content?id=kPmOAAAAMAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api","thumbnail":"http://books.google.com/books/content?id=kPmOAAAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"},"language":"en","previewLink":"http://books.google.ru/books?id=kPmOAAAAMAAJ&dq=%22subject:Business%22&hl=&as_pt=BOOKS&cd=4&source=gbs_api","infoLink":"http://books.google.ru/books?id=kPmOAAAAMAAJ&dq=%22subject:Business%22&hl=&as_pt=BOOKS&source=gbs_api","canonicalVolumeLink":"https://books.google.com/books/about/Grounding_Globalization.html?hl=&id=kPmOAAAAMAAJ"},"saleInfo":{"country":"RU","saleability":"NOT_FOR_SALE","isEbook":false},"accessInfo":{"country":"RU","viewability":"NO_PAGES","embeddable":false,"publicDomain":false,"textToSpeechPermission":"ALLOWED","epub":{"isAvailable":false},"pdf":{"isAvailable":false},"webReaderLink":"http://play.google.com/books/reader?id=kPmOAAAAMAAJ&hl=&as_pt=BOOKS&source=gbs_api","accessViewStatus":"NONE","quoteSharingAllowed":false},"searchInfo":{"textSnippet":"The book contains a warning. At times, workers do turn inward and become fatalistic, even xenophobic. But there are also signs of hope. The book explores the possibilities of reempowering labor through engaging space and scale in new ways."}},{"kind":"books#volume","id":"e_YtngEACAAJ","etag":"jBw93XJ0VVg","selfLink":"https://www.googleapis.com/books/v1/volumes/e_YtngEACAAJ","volumeInfo":{"title":"GMAT Quantitative Review","subtitle":"The Official Guide","authors":["Graduate Management Admission Council"],"publisher":"Graduate Management Admission","publishedDate":"2005","industryIdentifiers":[{"type":"ISBN_10","identifier":"0976570920"},{"type":"ISBN_13","identifier":"9780976570929"}],"readingModes":{"text":false,"image":false},"pageCount":0,"printType":"BOOK","categories":["Business"],"maturityRating":"NOT_MATURE","allowAnonLogging":false,"contentVersion":"preview-1.0.0","panelizationSummary":{"containsEpubBubbles":false,"containsImageBubbles":false},"imageLinks":{"smallThumbnail":"http://books.google.com/books/content?id=e_YtngEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api","thumbnail":"http://books.google.com/books/content?id=e_YtngEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"},"language":"en","previewLink":"http://books.google.ru/books?id=e_YtngEACAAJ&dq=%22subject:Business%22&hl=&as_pt=BOOKS&cd=5&source=gbs_api","infoLink":"http://books.google.ru/books?id=e_YtngEACAAJ&dq=%22subject:Business%22&hl=&as_pt=BOOKS&source=gbs_api","canonicalVolumeLink":"https://books.google.com/books/about/GMAT_Quantitative_Review.html?hl=&id=e_YtngEACAAJ"},"saleInfo":{"country":"RU","saleability":"NOT_FOR_SALE","isEbook":false},"accessInfo":{"country":"RU","viewability":"NO_PAGES","embeddable":false,"publicDomain":false,"textToSpeechPermission":"ALLOWED","epub":{"isAvailable":false},"pdf":{"isAvailable":false},"webReaderLink":"http://play.google.com/books/reader?id=e_YtngEACAAJ&hl=&as_pt=BOOKS&source=gbs_api","accessViewStatus":"NONE","quoteSharingAllowed":false}},{"kind":"books#volume","id":"9pYEXjTQ_jgC","etag":"n+A+T4zZz90","selfLink":"https://www.googleapis.com/books/v1/volumes/9pYEXjTQ_jgC","volumeInfo":{"title":"Business America","publishedDate":"1979","description":"Includes articles on international business opportunities.","industryIdentifiers":[{"type":"OTHER","identifier":"MINN:31951D02932444K"}],"readingModes":{"text":false,"image":true},"pageCount":44,"printType":"BOOK","categories":["Business"],"maturityRating":"NOT_MATURE","allowAnonLogging":false,"contentVersion":"1.3.6.0.full.1","panelizationSummary":{"containsEpubBubbles":false,"containsImageBubbles":false},"imageLinks":{"smallThumbnail":"http://books.google.com/books/content?id=9pYEXjTQ_jgC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api","thumbnail":"http://books.google.com/books/content?id=9pYEXjTQ_jgC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"},"language":"en","previewLink":"http://books.google.ru/books?id=9pYEXjTQ_jgC&printsec=frontcover&dq=%22subject:Business%22&hl=&as_pt=BOOKS&cd=6&source=gbs_api","infoLink":"https://play.google.com/store/books/details?id=9pYEXjTQ_jgC&source=gbs_api","canonicalVolumeLink":"https://play.google.com/store/books/details?id=9pYEXjTQ_jgC"},"saleInfo":{"country":"RU","saleability":"FREE","isEbook":true,"buyLink":"https://play.google.com/store/books/details?id=9pYEXjTQ_jgC&rdid=book-9pYEXjTQ_jgC&rdot=1&source=gbs_api"},"accessInfo":{"country":"RU","viewability":"ALL_PAGES","embeddable":true,"publicDomain":true,"textToSpeechPermission":"ALLOWED","epub":{"isAvailable":false,"downloadLink":"http://books.google.ru/books/download/Business_America.epub?id=9pYEXjTQ_jgC&hl=&output=epub&source=gbs_api"},"pdf":{"isAvailable":false},"webReaderLink":"http://play.google.com/books/reader?id=9pYEXjTQ_jgC&hl=&as_pt=BOOKS&source=gbs_api","accessViewStatus":"FULL_PUBLIC_DOMAIN","quoteSharingAllowed":false},"searchInfo":{"textSnippet":"Includes articles on international business opportunities."}}]}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!******************!*\
  !*** ./index.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_stylesSlider_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/stylesSlider.css */ "./styles/stylesSlider.css");
/* harmony import */ var _js_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/slider */ "./js/slider.js");
/* harmony import */ var _js_slider__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_slider__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _js_book__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/book */ "./js/book.js");
/* harmony import */ var _js_cart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/cart */ "./js/cart.js");
/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/styles.css */ "./styles/styles.css");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/utils */ "./utils/utils.js");
/* harmony import */ var _data_data_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./data/data.json */ "./data/data.json");








const list = document.getElementById("list")
const categories = document.querySelector(".categories-block")
const moreData = document.querySelector(".getMoreData")

let startIndex = 0
let subject = "Architecture"

getDataBooks()
document.querySelector(".category-books").closest(".category-books-item").classList.add("active-group")
let booksFromCart = JSON.parse(localStorage.getItem("books") || "[]")
;(0,_js_cart__WEBPACK_IMPORTED_MODULE_3__.checkCart)(booksFromCart)

list.addEventListener("click", (e) => {
    booksFromCart = (0,_js_cart__WEBPACK_IMPORTED_MODULE_3__.isBookInTheCart)(e, booksFromCart)
})

function getDataBooks(isloadMoreBook=true) {
    let html
    fetch(
        `https://www.googleapis.com/books/v1/volumes?q=%22subject:${subject}%22&key=AIzaSyDNn9A9WE5oZMUbFqNeeqFdu8l_PnfA-l8&printType=books&startIndex=${startIndex}&maxResults=6&langRestrict=en`
        )
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            if ('error' in data) {
                data = _data_data_json__WEBPACK_IMPORTED_MODULE_6__
            }
            html = data.items.map((item)=>(0,_js_book__WEBPACK_IMPORTED_MODULE_2__.toCardBook)(item, booksFromCart)).join(" ")

            if (isloadMoreBook) {
                list.innerHTML = html
                document.querySelectorAll(".lazyLoad").forEach((image) => {_utils_utils__WEBPACK_IMPORTED_MODULE_5__.observer.observe(image)})
                moreData.classList.remove("getMoreData")
            } else {
                list.insertAdjacentHTML("beforeend", html)
                document.querySelectorAll(".lazyLoad").forEach((image) => {_utils_utils__WEBPACK_IMPORTED_MODULE_5__.observer.observe(image)})
            }
        }
    )
}

categories.addEventListener("click", (event) => {
  if (event.target.classList.contains("category-books")) {
    document.querySelector(".active-group").classList.remove("active-group")

    event.target.closest(".category-books-item").classList.add("active-group")
    subject = event.target.innerText
    startIndex = 0
    getDataBooks()
  }
})

moreData.addEventListener("click", () => {
  startIndex += 6
  getDataBooks(false)
})


})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map