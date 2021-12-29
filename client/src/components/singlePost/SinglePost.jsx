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
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>kara</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam
          libero vitae dolore veritatis earum. Alias quod non iste ex amet
          minus, itaque dignissimos accusamus maxime quasi corrupti quaerat,
          officiis beatae, atque aspernatur dolorum incidunt. Dicta labore
          voluptas ea cumque amet nam autem voluptatem sit consequatur id enim
          et totam earum, dolores accusantium ipsum quisquam suscipit. Quaerat
          ratione inventore, saepe excepturi expedita architecto, incidunt
          asperiores ducimus unde temporibus, animi minima! Animi dicta, et
          minima nostrum debitis laboriosam maxime voluptatem, corporis maiores
          optio officia. Explicabo consequatur nihil quam eveniet repellendus
          ipsam provident ea voluptate. Provident ad iusto atque autem minima
          debitis velit?
        </p>
      </div>
    </div>
  );
};

export default SinglePost;
