import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types'

const Blogs = ({handleBookmarks, handleRedingTime}) => {
    const [blogs, setBlogs]=useState([])
    console.log(blogs)
    useEffect(()=>{
        fetch('blogs.json')
        .then(res=>res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div className="md:w-2/3 mt-8">
            {
                blogs.map(blog => <Blog key={blog.id} blog = {blog} handleBookmarks = {handleBookmarks} handleRedingTime={handleRedingTime}></Blog>)
            }
        </div>
    );
};

Blogs.propTypes = {
    handleBookmarks: PropTypes.func.isRequired,
    handleRedingTime: PropTypes.func.isRequired
}


export default Blogs;