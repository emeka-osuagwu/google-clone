import * as React from 'react';

import Bookmark from '../components/Bookmark';

const bookmarks = [
    {
        id: 1,
        name: 'book1 fkerngvkjqenrkgverekrferferer',
    },
    {
        id: 2,
        name: 'book2 kfjnvkednfrvdkfnvedfnvdkfnkvdnjfkdnfkn',
    },
];

export default function App() {
    return (
        <div>
            <Bookmark bookmarks={bookmarks} />
        </div>
    );
}
