import React from 'react';
import {useEffect, useState} from "react";
import {Navigate, useParams} from "react-router-dom";
const EditPage = () => {
    const {id} = useParams();
  const [title,setTitle] = useState('');
  const [summary,setSummary] = useState('');
  const [content,setContent] = useState('');
  const [files, setFiles] = useState('');
  const [redirect,setRedirect] = useState(false);

  useEffect(() => {
    fetch('http://localhost:5001/post/'+id)
      .then(response => {
        response.json().then(postInfo => {
          setTitle(postInfo.title);
          setContent(postInfo.content);
          setSummary(postInfo.summary);
        });
      });
  }, []);
    return (
        <div>
            <h1>Edit Page</h1>
        </div>
    );
};

export default EditPage;