import React, { useState, useEffect }  from 'react';
import Pagination from './Pagination';
import axios from 'axios';
import { Link } from 'react-router-dom';

import "./Paginat.scss";

const Paginat = () => {
  const [issues, setIssues] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [issue, setIssue] = useState([]);
  const totalItems = issues.length;
  const totalPages =Math.ceil(totalItems / itemsPerPage);


  const handlePreviousPage = ()=> {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }
  const  handleNextPage = ()=> {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  }
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const res = await axios.get(
        `https://api.github.com/repos/rails/rails/issues?page=${currentPage}&per_page=25`
      );
    //   console.log(res.data);
      setIssues(res.data);
      
      setIsLoading(false);
    }
    fetchData();
  }, [currentPage]);


   let date=new Date();

    useEffect(() => {
      const storedIssues = JSON.parse(localStorage.getItem('issues') || '[]');
      setIssue(storedIssues);
    }, []);

    

  if (isLoading) {
    return(
      <>
      <p>Loading...</p>
      </>
    ) 
  }

  return (
  

    <div>
      <Link to="/issuesWriteBox">
        <button className='new-issue'>New issue</button>
      </Link>
      <div className='issues'>

   {/* Adding localStorage data      */}

      <ul className="list-container">
        {issue.map((issue, index) => (
          <li key={index}>
          <div className="list">
              <div>
                <div className="title">
                  <span className='icon'>⊙</span>
                  <Link to={`/comment/${index}`}>
                  <a href={issue.body}> {issue.title} </a>
                  </Link>
                  
                </div>
                  
                  <p className='date'>
                    # {index} opened on {date.toLocaleDateString()} by
                    <a href='#'> --You </a>
                  </p>

                </div>
                <p className="comment">
                  <span className='icon'>✉</span>
                  {issue.comments}1 comments
                </p>
              </div>
          </li>
        ))}
      </ul>
      

      {/* feaching API data */}

        <ul className="list-container">
            {issues.map((issue) => (
              <li key={issue.id}>
                <div className="list">
                  <div>
                  <div className="title">
                    <span className='icon'>⊙</span>
                    <Link to={`/comments/${issue.number}`}>
                    <a href={issue.body}> {issue.title} </a>
                    </Link>
                    
                  </div>
                    
                    <p className='date'>
                      # {issue.number} opened on {issue.updated_at} by
                      <a href={issue.user.html_url}> {issue.user.login}</a>
                    </p>
                  </div>
                  <p className="comment">
                    <span className='icon'>✉</span>
                    {issue.comments} comments
                  </p>
                </div>
              </li>
            ))}
          </ul>
      </div>
      <Pagination 
          currentPage={currentPage} 
          totalPages={totalPages} 
          handlePreviousPage={handlePreviousPage} 
          handleNextPage={handleNextPage} 
          paginate={paginate} 
        />
    </div>
  )
}

export default Paginat;