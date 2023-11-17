import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function BlogList({ posts }) {
  const itemsPerPage = 20;
  const [visiblePosts, setVisiblePosts] = useState(itemsPerPage);

  const loadMore = () => {
    setVisiblePosts((prevVisiblePosts) => prevVisiblePosts + itemsPerPage);
  };

  const navigate = useNavigate();

  return (
    <div className='flex flex-col items-center'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 px-10 md:px-15 lg:px-32 gap-8'>
        {posts.slice(0, visiblePosts).map((item, index) => (
          <div className='m-4 cursor-pointer' key={index} onClick={()=>navigate('blogDetails/'+item.id)}>
            <h2 className='text-[23px] font-bold mt-5'>{item.title}</h2>
            <h4 className='text-gray-400'>{item.ubication}</h4>
            <h3 className='line-clamp-3'>{item.description}</h3>
            <h3 className='text-gray-400 text-[12px]'>Información obtenida gracias a API Colombia</h3>
          </div>
        ))}
      </div>
      {visiblePosts < posts.length && (
        <button className='bg-gray-300 rounded-full hover:font-bold flex items-center mt-4 p-4' onClick={loadMore}>
          Cargar más
        </button>
      )}
    </div>
  );
}

export default BlogList;
