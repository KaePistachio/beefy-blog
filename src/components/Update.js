import { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

const Update = () => {
    let location = useLocation();
    const history = useHistory();
    const [ title, setTitle ] = useState(location.state.title);
    const [ body, setBody ] = useState(location.state.body);
    const [ isPending, setIsPending ] = useState(false);
    const author = location.state.author;

    const handleSubmit = (e) => {
        e.preventDefault();
        let blog = { title, body, author };

        setIsPending(true);
        
        fetch('http://localhost:8000/blogs/' + location.state.id, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(blog)
        }).then(() => {
          console.log('blog updated');
          setIsPending(false);
          history.push('/');
        })
    }

    return ( 
        <div className="create">
          <h2>Update Blog Post</h2>
          <form onSubmit={ handleSubmit }>
            <label>Blog title:</label>
            <input 
              type="text"
              required
              value={ title }
              onChange={ (e) => setTitle(e.target.value) }
            />
            <label>Blog body:</label>
            <textarea
              required
              value={ body }
              onChange={ (e) => setBody(e.target.value) }
            ></textarea>
            <label>Blog author:</label>
            <div>{ author }</div>
            { !isPending && <button>Update Post</button> }
            { isPending && <button disabled >Updating Post...</button> }
          </form>
        </div>
     );
}
 
export default Update;