import React,{useState} from 'react';
import ResultCard from './ResultCard';

function Add() {
  const [query,setQuery]=useState("");
  const [results, setResults] = useState([]);

   const searchMovieHandler= (e) => {
     e.preventDefault();
     fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1&include_adult=false&query=${query}`)
     .then((res) => res.json())
     .then((data) => {
       //console.log(data)
       if (!data.errors) {
         setResults(data.results);
       } else {
         setResults([]);
       }
     });
   }

  return  <div className="add-page">
  <div className="container">
    <div className="add-content">
      <div className="input-wrapper">
        <form onSubmit={searchMovieHandler}>
          <input
            type="text"
            placeholder="Search for a movie"
            value= {query}
            onChange= {(e)=>setQuery(e.target.value)}
          />
          <button className='btn-search'>Search</button>
        </form>
        {results.length > 0 && (
            <ul className="results">
              {results.map((movie) => (
                <li key={movie.id}>
                  <ResultCard movie={movie} />
                </li>
              ))}
            </ul>
          )}
      </div>
    </div>
  </div>
</div>;
}

export default Add;
