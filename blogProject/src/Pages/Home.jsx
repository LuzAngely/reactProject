import { useState, useEffect } from 'react'
import React from 'react'
import Search from '../Components/Search'
import IntroPost from '../Components/IntroPost'
import BlogList from '../Components/BlogList'
import Footer from '../Components/Footer'
import globalApi from '../Api/globalApi'

function Home() {
  const [post, setPosts] = useState([]);

  useEffect(() => {
    const getPost = async () => {
      try {
        const response = await globalApi.getPost();
        // console.log(response.data);
        const result = response.data.map((item) => ({
          title: item.name,
          id: item.nativeCommunity.id,
          ubication: item.department.name,
          description: item.nativeCommunity.description          
        }));
        console.log(result);
        setPosts(result);
      } catch (error) {
        console.error('Error al obtener los datos:', error);
      }
    };

    getPost();
  }, []); 

//   useEffect(() => {
//     getPost();
//   }, [])
// }

//   const getPost = async () => { 
//     globalApi.getPost.then((response) => {
//       // console.log(response.data)
//       for (let i = 0; i < response.data.length; i++) {
//         const result = response.data[i].map((item) => ({
//           id: item.nativeCommunity.id,
//           title: item.name,
//           description: item.nativeCommunity.description,
//           ubication: item.department.name
//         }));
//         console.log(result);
//         setPosts(result);
//       }
//     });

  return (
    <div>
        
        <Search/>
        {post.length>0? <IntroPost post={post[0]}/>: null}
        {post.length>0?<BlogList posts={post}/>: null}
        <Footer/>
    </div>
  )
}

export default Home