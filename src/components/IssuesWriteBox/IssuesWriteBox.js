import React, { useState } from 'react';
import "./IssuesWriteBox.scss";

const IssuesWriteBox = () => {
  const [title, setTitle] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    // console.log('Title:', title);
    // console.log('Comment:', comment);

    // Clear the form fields after submission
    setTitle('');
    setComment('');

    // Store data in local storage
    const existingIssues = JSON.parse(localStorage.getItem('issues') || '[]');
    const newIssue = { title, comment };
    if(newIssue.title.length!=0){
      const updatedIssues = [...existingIssues, newIssue];
      localStorage.setItem('issues', JSON.stringify(updatedIssues));
    }
  };

  return (
    <div className="issues-write-box"> 
      <div className="new-issue-form">
        <h2>Create New Issue</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              id="title"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="input-group">
            <textarea
              id="comment"
              placeholder="Leave a comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </div>

          <button type="submit">Submit New Issue</button>
        </form>
      </div>
    </div>
  );
}

export default IssuesWriteBox;
