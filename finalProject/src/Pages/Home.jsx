import React from 'react'
import Header from '../Components/Header'
import Search from '../Components/Search'
import IntroPost from '../Components/IntroPost'
import BlogList from '../Components/BlogList'
import Footer from '../Components/Footer'

function Home() {
  return (
    <div>
        <Header/>
        <Search/>
        <IntroPost/>
        <BlogList/>
        <Footer/>
    </div>
  )
}

export default Home