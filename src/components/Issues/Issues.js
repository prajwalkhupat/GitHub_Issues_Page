import React from 'react'
import "./Issues.scss";
import { Link } from 'react-router-dom';
const Issues = ({issues}) => {


  return (
    <div>
      {/* <Link to="/issuesWriteBox">
        <button className='new-issue'>New issue</button>
      </Link>
      <div className='issues'>
        <ul className="list-container">
            {issues.map((issue) => (
              <li key={issue.id}>
                <div className="list">
                  <div>
                  <div className="title">
                    <span className='icon'>⊙</span>
                    <Link to={`/comments/ ${issue.number}`}>
                    <a href={issue.body}>{issue.title} </a>
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
      </div> */}
    </div>
  )
}

export default Issues