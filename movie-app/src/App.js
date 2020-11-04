
import React ,{useState,useEffect} from 'react'
import './App.css';
import Movie from './components/Movies';
import Header from './components/Header'

// import Search from './components/Search'

const apiFeature ="https://api.themoviedb.org/3/discover/movie?api_key=04c35731a5ee918f014970082a0088b1";
const searchUrl ="https://api.themoviedb.org/3/search/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1";


function App() {
  
  const [stateMovies, setMovie] = useState([]);
  const [stateSearchTerm, setSearchTerm] = useState("");
  const [pageNum, setpageNum] = useState(1);
  const [total_pages, setTotal_pages] = useState(null);


  useEffect(() => {
    if(stateSearchTerm === ""){
       getMovie(apiFeature +"&page="+ pageNum);
    }else{
      getMovie(searchUrl +"&page="+ pageNum +"&query="+ stateSearchTerm)
    }
  }, [pageNum])

  const getMovie = (API) =>{
    fetch(API)
    .then((res)=>res.json())
    .then((data)=>{
      let movieData = data.results;
      setTotal_pages(data.total_pages);
      setMovie(movieData)
    })
  }

  const handleOnSubmit = (e) =>{
    e.preventDefault();
    setpageNum(1)
    if(stateSearchTerm){
      getMovie(searchUrl +"&page="+ pageNum +"&query="+ stateSearchTerm)
    }
  }
  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  }


  const handlePageNext = (e) =>{
    setpageNum((pageNums) => Math.min(pageNums + 1, total_pages));
    if(stateSearchTerm === ""){
      getMovie(apiFeature +"&page="+ pageNum);
    }else{
      getMovie(searchUrl +"&page="+ pageNum +"&query="+ stateSearchTerm)
    }

  }

  const handlePagePrev = (e) =>{
    setpageNum((pageNums) => Math.max(pageNums - 1, 1));
    if(stateSearchTerm === ""){
      getMovie(apiFeature +"&page="+ pageNum);
    }else{
      getMovie(searchUrl +"&page="+ pageNum +"&query="+ stateSearchTerm)
    }
    
  }
return (
  <div className="App">
    <Header  handleOnSubmit={handleOnSubmit}  handleOnChange={handleOnChange}/>
    <header className="App-header">
      <h1>WELCOME TO MOVIE APP</h1>
    </header>
    <main>
      <div className="movieWrap">
        { stateMovies.length > 0 && stateMovies.map((movie) =>
          <Movie {...movie} key={movie.id}/>
        )}
        
      </div>
      <div className="pagination">
          <ul>
            <li className="next"><button onClick={handlePagePrev}>Prev</button></li>
            <li className="prev"><button onClick={handlePageNext} >Next</button></li>
          <li className="total_page"><p>Total Page({pageNum}/{total_pages})</p></li>
          </ul>
        </div>
    </main>

  </div>
);
}


export default App;
