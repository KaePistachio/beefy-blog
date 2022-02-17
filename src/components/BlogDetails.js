import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import useFetch from './useFetch';

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, error, isPending } = useFetch('https://foxblog-db.herokuapp.com/blogs/' + id);
  const history = useHistory();

  const handleClick = () => {
    fetch('https://foxblog-db.herokuapp.com/blogs/' + blog.id, {
      method: 'DELETE',
    }).then(() => {
      history.push('/');
    });
  } 

  const handleUpdate = () => {
    history.push({
      pathname: '/update',
      state: { 
        title: blog.title, 
        author: blog.author,
        body: blog.body,
        id: id
      }
    });
  }

  return (
    <div className="blog-details">
      { isPending && <div>Loading...</div>}
      { error && <div>{ error }</div>}
      { blog && (
          <article className="blog-art">
              <h2>{ blog.title }</h2>
              <p>Written by { blog.author }</p>
              <div>{ blog.body }</div>
              <button onClick={handleClick}>Delete Post</button>
              <button onClick={handleUpdate}>Update Post</button>
          </article>
      )}
    </div>
  );
}
 
export default BlogDetails;