import axios from 'axios';
// axios is a library for making http requests

// react itself has no function for making http requests

// we are using async await because javascript will take time to request the data and send the response


// term is the keyword of which we want to get the image
const searchImage = async (term)=>{
 const response =  await axios.get('https://api.unsplash.com/search/photos',{
        headers: {
            // this is authentication
          Authorization: 'Client-ID -7s6GDn5oCSGp88UY4WCGxM7TYMwRpYplzRoXFDT13E',
        },
        params:{
            // this is query(which type of image our user want example car, games, bikes, etc)
          query: term,
          per_page: 30,
        }
    })
    // console.log(response)
    // because array is inside data and then results
    return response.data.results;
}
export default searchImage;
