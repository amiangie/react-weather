import React from 'react';
import ReactDOM from 'react-dom';
import jQuery from 'jquery';
import CommentBox from './components/comment-box'


jQuery(() => {
  ReactDOM.render(
	<CommentBox />,
	document.getElementById('comment-box'),
    function() {
	  const five = 5;
      console.timeEnd('react-app')
	  console.log(`${five} - another test`)
    }
  );
})