import React, { useEffect, useState } from "react";
import "./comments.scss";
import axios from "axios";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";

const Comments = () => {
  const { number } = useParams();
  // console.log(number);
  const [issues, setIssues] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [comment, setComment] = useState([]);
  const [Comments, setComments] = useState([]);

//   console.log(comment[0].body)
// console.log(issues.user.login);

  // const arr=comment.map((item)=>item.body);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const res = await axios.get(
        `https://api.github.com/repos/rails/rails/issues/${number}`
      );
      const res1 = await axios.get(
        `https://api.github.com/repos/rails/rails/issues/${number}/comments`
      );
      setIssues(res.data);
      setComment(res1.data);
    //   console.log(res1.data);

    //   console.log(res.data);
      setIsLoading(false);
    }
    fetchData();
  }, [number]);


  if (isLoading) {
    return(
      <>
      <p>Loading...</p>
      </>
    ) 
  }

  return (
    <div >
      {/* <p className="user-description">{issues.user.login}  </p> */}
     <div className="description">
          <ReactMarkdown>{issues.body}</ReactMarkdown>
     </div>
      <div className="comments">
      
      
      {
          comment.map((item)=>(
            <div key={item.id} className='comment'>
              <p className="user"><span>{item.user.login}</span>  commented {item.created_at}</p>
                <p>{item.body}</p>
                
            </div>
          )) 
       }
       
      </div>

      <div className="new-comment">
        <h2>Write Comment</h2>
        <form>
          <div className="input-group">
            <textarea id="comment" placeholder="Leave a comment"/>
          </div>
            <button type="submit" className="cmt">Submit New Issue</button>
        </form>
      </div>
        
    </div>
  );
};

export default Comments;


