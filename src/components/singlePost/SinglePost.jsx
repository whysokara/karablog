import "./singlePost.css";
import winter from "../assets/winter.jpg";

const SinglePost = () => {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img src={winter} alt="winter" className="singlePostImg" />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
      </div>
    </div>
  );
};

export default SinglePost;
