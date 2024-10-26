import React from 'react'
import Banner from '../components/Banner'
import BlogComp from '../components/BlogComp'
import LatestBlogs from '../components/LatestBlogs'
import Contact from './Contact'

function Home() {
  return (
    <>
    <Banner/>

    <section>
    <LatestBlogs/>
    </section>
    
     
    <hr className='w-10/12 mx-auto border-2'/>

    <section className='w-full lg:w-10/12 mx-auto mt-5 '>
      <BlogComp/>
    </section>

    <section className='my-8'>
      <Contact/>
    </section>


    </>
  )
}

export default Home