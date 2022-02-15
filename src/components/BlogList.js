import { Link } from 'react-router-dom';

const BlogList = ({ blogs, title }) => {


    return ( 
        <div className="blog-list">
          <h2>{ title }</h2>
          {blogs.map((blog) => (
            <div className="blog-preview" key={blog.id}>
              <Link 
                className="bloglink"
                to={`/blogs/${blog.id}`}>
              <h2 className="bloglink">{ blog.title }</h2>
              </Link>
              <p>Written by { blog.author }</p>
            </div>
          ))}
        </div>
     );
}
 
export default BlogList; 