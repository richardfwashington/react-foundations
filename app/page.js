
import LikeButton from './like-button';
      
function Header({title}) {
  return (<h1>{isNew() ? '*NEW* ': ''}{`Cool title: ${title}`} by {author()}</h1>);
}

export default function HomePage() {
  const names = ['Ada LoveLace', 'Grace Hopper', 'Marie Curie'];



  return (
    <div><Header title="React"/><Header title="Also heading"/>
    <ul>
      {names.map((name, index) => (
        <li key={index}>{name}</li>
      ))}
    </ul>
    <LikeButton />
  </div>
    );
}

function author() {
  return 'P. Griffin';
}

function isNew() {
  return true;
}
