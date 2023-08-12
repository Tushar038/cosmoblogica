import Post from "../post/Post";
import "./posts.css";

export default function Posts({ posts }) {
  console.log("Posts prop:", posts);
  return (
    <div className="posts">
      {posts.map((p) => (
        <Post post={p} />
      ))}
    </div>
  );
}


// import React, { useEffect, useState } from "react";
// import Post from "../post/Post";
// import "./posts.css";

// export default function Posts({ posts }) {
//   const [postList, setPostList] = useState([]);

//   useEffect(() => {
//     // Assuming 'posts' is fetched asynchronously and stored in a state variable
//     setPostList(posts);
//   }, [posts]);

//   return (
//     <div className="posts">
//       {postList.map((p) => (
//         <Post post={p} key={p.id} />
//       ))}
//     </div>
//   );
// }
