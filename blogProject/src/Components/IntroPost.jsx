import React, { useEffect } from 'react'
import globalApi from '../Api/globalApi'
import blog from './../assets/blog0.jpg'
import { useNavigate } from 'react-router-dom'

function IntroPost({post}) {

  const navigate = useNavigate();

//   useEffect(() => {
//     getPost();
//   }, [])
// }

//   const getPost = async () => { 
//     globalApi.getPost.then((response) => {
//       console.log(response.data)
//       for (let i = 0; i < response.data.length; i++) {
//         console.log(response.data[i])
//       }
//     })

  return (
    <div className=' cursor-pointer grid grid-cols-1 items-center md:grid-cols-2 mt-10 px-10 md:px-15 lg:px-32 gap-8'
    onClick={()=>navigate('blogDetails/'+post.id)}>
      
      <img src={blog} alt="Indigenas de Colombia" 
      className='rounded-2xl object-cover w-full h-[250px]'/>   

      <div>
        <h2 className='text-[23px] font-bold mt-5'>{post.title}</h2>
        <h4 className='text-gray-400'>{post.ubication}</h4>
        <h4 className='line-clamp-3 text-gray-600 mt-5'>{post.description}</h4>

        <h3 className='text-gray-400 text-[12px]'>Información obtenida gracias a API Colombia</h3>
      </div>   
    </div>
  )
}

export default IntroPost