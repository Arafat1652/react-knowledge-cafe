import PropTypes from 'prop-types';
import { FaRegBookmark } from "react-icons/fa6";
const Blog = ({blog, handleBookmarks, handleRedingTime}) => {
    const {title, cover,author, author_img, posted_date, reading_time, hashtags,id} = blog
    return (
        <div className='mb-20'>
            <img  className='w-full rounded-lg mb-8' src={cover} alt=""/>
            
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-6'>
                <img className='w-16' src={author_img} alt=""/>
                <div>
                    <h3 className='text-2xl font-bold'>{author}</h3>
                    <p>{posted_date}</p>
                </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>

                    <button className='ml-2' onClick={()=>handleBookmarks(blog)}><FaRegBookmark></FaRegBookmark></button>
                </div>
            </div>
            <h1 className='text-4xl w-[740px] my-3'>{title}</h1>
            <p>
                {
                    hashtags.map((hash, idx)=> <span key={idx}><a href=''>#{hash}</a> </span>)
                }
            </p>
            <button className='text-purple-800 underline mt-5' onClick={()=>handleRedingTime(id, reading_time)}>Mark As Read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleBookmarks: PropTypes.func.isRequired,
    handleRedingTime: PropTypes.func.isRequired
}
export default Blog;