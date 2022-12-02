import React from 'react';
import {useState} from "react"

const bookDB = {
  Jazz: [
    { name: "Hossana", rating: "4/5" },
    { name: "Khaabon ke Parinday", rating: "5/5" }
  ],

  Rock: [
    { name: "Sadda Haq", rating: "5/5" },
    { name: "Saadi gali aaja", rating: "4/5" }
  ],

  Soul: [
    { name: "Moh Moh Ke Dhaage ", rating: "3/5" },
    { name: "Tere Sang Yaara", rating: "4/5" }
  ]
};

function App() {

  const [selectGenre, setGenre] = useState("Jazz");
  
  function genreClickHandler(genre) {
    setGenre(genre);
  }

  return (
    <div className="App">
    <h1> 🎵 Music Recommendation </h1>
      <p style={{ fontSize: 18 }}>
        These are some my favourite music on different genre
      </p>

      <div>
        {Object.keys(bookDB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              color: "red",
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {bookDB[selectGenre].map((book) => (
            <li
              key={book.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {book.name} </div>
              <div style={{ fontSize: "smaller" }}> {book.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
