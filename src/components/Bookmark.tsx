import * as React from 'react';

import { FaTwitter } from 'react-icons/fa';

import '../assets/css/bookmark.css';
import { truncate } from '../untils/helpers';

interface BookmarkType {
    name: string;
    id: string;
}

type BookmarkPropType = {
    bookmarks: Array<BookmarkType>;
};

function Bookmark(props: BookmarkPropType) {
    const { bookmarks } = props;

    return (
        <>
            {bookmarks.map((bookmark: BookmarkType, index: number) => (
                <ul className="bookmark-container">
                    <a
                        className="bookmark-link"
                        href={`https://${bookmark.name}`}
                    >
                        <li className="bookmark">
                            <FaTwitter style={{ color: 'white' }} />
                        </li>
                        <p>{truncate(`${bookmark.name}`, 12)}</p>
                    </a>
                </ul>
            ))}
        </>
    );
}

export default Bookmark;
