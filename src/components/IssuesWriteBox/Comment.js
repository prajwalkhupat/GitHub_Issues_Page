import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Comment = () => {

    const[data,setData]=useState('');
    const[datas,setDatas]=useState([]);
    // const [cmt, setCmt] = useState([]);
     
    const {index}=useParams();
    // console.log(index);
    const [Comments, setComments] = useState([]);

    
    useEffect(() => {
        const storedIssues = JSON.parse(localStorage.getItem('issues') || '[]');
        setComments(storedIssues);
       
    }, []);

    const validIndex = parseInt(index, 10);
    if (isNaN(validIndex) || validIndex < 0 || validIndex >= Comments.length) {
        console.log('Invalid index');
        return null;
    }

    const comment = Comments[validIndex];
    //console.log(comment);


    const handleSubmit=(e)=>{
        e.preventDefault();
        if (data.trim() === '') return;

        // Add the new comment to the datas array
        setDatas(prevDatas => [...prevDatas, data]);
        setData('');
    }

   
  

  return (
    <div>

        <div className="description">
            <p>{comment.comment}</p>
        </div>
        <div className='comments'>

            {datas.map((comment, index) => (
                <div className='comment' key={index}>
                    <p className="user"><span>you</span> commented</p>
                    <p>{comment}</p>
                </div>
            ))}
        
        </div>

        <div className="new-comment">
            <h2>Write Comment</h2>
            <form onSubmit={handleSubmit}>
            <div className="input-group">
                <textarea id="comment" placeholder="Leave a comment" onChange={(e)=>setData(e.target.value)} value={data}/>
            </div>
                <button type="submit" className="cmt">Submit New Issue</button>
            </form>
        </div>

        {/* <div>
            <h1>{datas}</h1>
        </div> */}
    </div>
  )
}

export default Comment;