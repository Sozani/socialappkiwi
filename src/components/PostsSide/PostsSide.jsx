import "./PostsSide.css";

import Posts from "./Posts/Posts";
import PostShare from "./PostShare/PostShare";
const PostsSide = () => {
  return (
    <div className="PostsSide">
      <PostShare />
      <Posts />
    </div>
  );
};

export default PostsSide;
