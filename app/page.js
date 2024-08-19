import { useState } from 'react';
      
function Header({title}) {
  return (<h1>{isNew() ? '*NEW* ': ''}{`Cool title: ${title}`} by {author()}</h1>);
}

export default function HomePage() {
  const [likes, setLikes] = useState(0);
  const names = ['Ada LoveLace', 'Grace Hopper', 'Marie Curie'];

  function handleClick() {
    setLikes(likes + 1);
  }

  return (
    <div><Header title="React"/><Header title="Also heading"/>
    <ul>
      {names.map((name, index) => (
        <li key={index}>{name}</li>
      ))}
    </ul>
    <button onClick={handleClick}>Likes {likes}</button>
  </div>
    );
}

function author() {
  return 'P. Griffin';
}

function isNew() {
  return true;
}
