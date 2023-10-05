
import './App.css';
import ImageList from './components/ImageList';
import SearchBar from './components/SearchBar';
import searchImage from './api'; 
import { useState } from 'react';
// siblings components cannot directly communicate in react

// data is flowing from SearchBar(child) to app.js(parent)


function App() {
  // we used useState here because when user changes the text of input and enter then we want to change the image on the fly
 const [images, setImages] = useState([])

  // handleSubmit will recieve a term coming from searchBar component  
const handleSubmit = async (term) =>{
  // since below we used await so by convention we have to use async keyword in above function

  // term is input value user have entered
 const result = await searchImage(term)

//  setImages is used for changing the image as per user input
setImages(result)

 // we are using await because we want result after browser complete the process of fetching data from unsplash website
 console.log(result)
}

  return (
   <div><SearchBar onSubmit={handleSubmit}/>
   <ImageList images={images}/>
   </div>
  );
}

export default App;
