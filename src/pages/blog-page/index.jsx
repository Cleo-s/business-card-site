import React from 'react';

import './blog-page.scss';
import { Footer, Header } from '../../components/interface';

function BlogPage() {

    return (
        <>
            <Header />
            <h1 className='h1-blog'>Blog page</h1>
            <Footer />
        </>
    )
}

export default BlogPage;