import React, { useEffect, useState } from 'react';
import globalApi from '../Api/globalApi';

function BlogDetails({ blogId }) {
  const [blogDetails, setBlogDetails] = useState(null);

  useEffect(() => {
    const fetchBlogDetails = async () => {
      try {
        const response = await globalApi.getBlogDetails(blogId); 
        setBlogDetails(response.data);
      } catch (error) {
        console.error('Error al obtener los detalles del blog:', error);
      }
    };

    fetchBlogDetails();
  }, [blogId]);

  if (!blogDetails) {
    return <div>Cargando detalles del blog...</div>;
  }

  return (
    <div>
      <h2>{blogDetails.title}</h2>
      <h4>{blogDetails.ubication}</h4>
      <p>{blogDetails.description}</p>
      <p>Información obtenida gracias a API Colombia</p>
    </div>
  );
}

export default BlogDetails;
