import React from 'react';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks}) => {
    return (
        <div className='md:w-1/3'>
            <h2 className='text-3xl text-center bg-gray-300'>Bookmarked Blogs: {bookmarks.length}</h2>
            {
                bookmarks.map(bookmark=><Bookmarks key={bookmark.id} bookmark={bookmark}></Bookmarks>)
            }
        </div>
    );
};

export default Bookmarks;