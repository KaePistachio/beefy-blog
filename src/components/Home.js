import useFetch from "./useFetch";
import BlogList from "./BlogList";

const Home = () => {
    const { data: blogs, isPending, error } = useFetch('https://foxblog-db.herokuapp.com/blogs');
    return ( 
        <div className="home">
          { error && <div>{ error }</div>}
          { isPending && <div>loading...</div> }
          { blogs && <BlogList blogs={ blogs } title="all blogs" />}
        </div>
     );
}
 
export default Home;