import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark';
const Bookmarks = ({bookmarks , readingTime}) => {
    return (

        <div className="md:w-1/3 bg-[#1111110D] ml-4 mt-8 p-4 rounded-lg">
            <div>
            <h3 className='text-center bg-purple-300 py-4 ml-4 rounded-lg'>Spent time on read: {readingTime}</h3>

            </div>
            <h2 className="text-3xl text-center mt-4">Bookmarked Blogs: {bookmarks.length}</h2>
            {
                bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};
Bookmarks.propTypes= {
    bookmarks: PropTypes.array.isRequired,
    readingTime: PropTypes.number.isRequired
}

export default Bookmarks;