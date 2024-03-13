import PropTypes from 'prop-types';
const Blog = ({blog}) => {
    const {title, cover, author_img} = blog
    return (
        <div>
            <img src={cover} alt=""/>
            <h1 className='text-4xl'>{title}</h1>
            <div>
                <img src={author_img} alt="" srcset="" />
            </div>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}
export default Blog;