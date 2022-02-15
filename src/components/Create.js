import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import AuthorGenerator from './AuthorGenerator';

const Create = () => {
    const [ title, setTitle ] = useState('');
    const [ body, setBody ] = useState('');
    const [ author, setAuthor ] = useState('');
    const [ isPending, setIsPending ] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        
        e.preventDefault();
        let blog = { title, body, author };

        setIsPending(true);

        blog.author = blog.author === 'generate' ? AuthorGenerator() : blog.author;
        
        fetch('https://foxblog-db.herokuapp.com/blogs', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(blog)
        }).then(() => {
          console.log('new blog added');
          setIsPending(false);
          history.push('/');
        })
    }

    return ( 
        <div className="create">
          <h2>Add A New Blog</h2>
          <form onSubmit={handleSubmit}>
            <label>Blog title:</label>
            <input 
              type="text"
              required
              value={ title }
              onChange={(e) => setTitle(e.target.value)}
            />
            <label>Blog body:</label>
            <textarea
              required
              value={ body }
              onChange={(e) => setBody(e.target.value)}
            ></textarea>
            <label>Blog author:</label>
            <select
              value={ author }
              onChange={(e) => setAuthor(e.target.value)}
            >
              {/* Add a random select function name generator "Laughing Octopus" etc... */}
              <option selected value="snake">Solid Snake</option>
              <option value="ocelot">Liquid Ocelot</option>
              <option value="solidus">Solidus</option>
              <option value={ "generate" }>Generate Random Author Name</option>
            </select>
            { !isPending && <button>Add Post</button> }
            { isPending && <button disabled >Adding Post...</button> }
          </form>
        </div>
     );
}
 
export default Create;