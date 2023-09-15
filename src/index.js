import "./styles/stylesSlider.css"
import "./js/slider"
import { toCardBook} from "./js/book"
import { checkCart, isBookInTheCart} from "./js/cart"
import "./styles/styles.css"
import { observer } from "./utils/utils"
import dataBooks from "./data/data.json"

const list = document.getElementById("list")
const categories = document.querySelector(".categories-block")
const moreData = document.querySelector(".getMoreData")

let startIndex = 0
let subject = "Architecture"

getDataBooks()
document.querySelector(".category-books").closest(".category-books-item").classList.add("active-group")
let booksFromCart = JSON.parse(localStorage.getItem("books") || "[]")
checkCart(booksFromCart)

list.addEventListener("click", (e) => {
    booksFromCart = isBookInTheCart(e, booksFromCart)
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
                data = dataBooks
            }
            html = data.items.map((item)=>toCardBook(item, booksFromCart)).join(" ")

            if (isloadMoreBook) {
                list.innerHTML = html
                document.querySelectorAll(".lazyLoad").forEach((image) => {observer.observe(image)})
                moreData.classList.remove("getMoreData")
            } else {
                list.insertAdjacentHTML("beforeend", html)
                document.querySelectorAll(".lazyLoad").forEach((image) => {observer.observe(image)})
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

