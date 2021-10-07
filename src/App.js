import React,{Component} from 'react';
import SearchMovies from './Components/SearchMovies'
import   './App.css'



class App extends Component {
    state = {  }
    render() { 
        return ( 
            <div className='container'>
                <h1 className='title'>MOVIE Finder </h1>
                <SearchMovies/>
            </div>
         );
    }
}
 

export default App