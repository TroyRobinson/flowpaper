import React, { useState, useEffect } from 'react';
// import PocketBase from 'pocketbase';

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const pb = new PocketBase('https://hundreds-table.pockethost.io');

    pb.collection('posts').getList(1, 50)
      .then(resultList => {
        setPosts(resultList.items);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      {posts.map(post => (
        <div key={post.id}>
          <h2>{post.Title}</h2>
          <p dangerouslySetInnerHTML={{ __html: post.Content }} />
        </div>
      ))}
    </div>
  );
}

export default Posts;