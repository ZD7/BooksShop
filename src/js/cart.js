
const divNumberOfBooks = document.querySelector(".emptyCart")

export function checkCart(books) {
    if (books.length > 0) {
      divNumberOfBooks.innerText = `${books.length}`
      divNumberOfBooks.classList.add("numberOfBooks")
    } else {
      divNumberOfBooks.innerText = ""
      divNumberOfBooks.classList.remove("numberOfBooks")
    }
}

export const isBookInTheCart = (e, booksFromCart) => {
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