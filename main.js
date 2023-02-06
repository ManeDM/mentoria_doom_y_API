fetch("https://www.googleapis.com/books/v1/volumes?q=search+terms&maxResults=40")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);

    // Obtener el elemento contenedor de las tarjetas de libros
    const bookContainer = document.querySelector("#book-container");

    // Iterar a través de cada libro en los datos de la API
    data.items.forEach((book) => {
      // Crear una tarjeta para cada libro
      const bookCard = document.createElement("div");
      bookCard.classList.add("book-card");

      // Agregar el nombre del libro a la tarjeta
      const bookTitle = document.createElement("h2");
      bookTitle.innerText = book.volumeInfo.title ? book.volumeInfo.title : "Sin título";
      bookCard.appendChild(bookTitle);

      // Agregar la portada del libro a la tarjeta
      const bookCover = document.createElement("img");
      bookCover.src = book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : "";
      bookCard.appendChild(bookCover);

      // Agregar el autor del libro a la tarjeta
      const bookAuthor = document.createElement("p");
      bookAuthor.innerText = book.volumeInfo.authors ? book.volumeInfo.authors[0] : "Sin autor";
      bookCard.appendChild(bookAuthor);

      const bookPublisher = document.createElement("p");
      bookPublisher.innerText = book.volumeInfo.publisher;
      bookCard.appendChild(bookPublisher);

      // Agregar la tarjeta al contenedor
      bookContainer.appendChild(bookCard);
    });
  })
  .catch((error) => {
    console.error("Error:", error);
  });