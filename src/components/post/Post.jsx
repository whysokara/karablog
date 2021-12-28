import React from "react";
import "./post.css";
import girl from "../assets/girlset.jpg";

const post = () => {
  return (
    <div className="post">
      <img className="postImg" src={girl} alt="img1" />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit amet. </span>
        <hr />
        <span className="postDate">1 hr ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt nesciunt
        nihil sapiente minus nobis provident ad facere eos, placeat, totam iste
        iusto adipisci voluptate earum, reiciendis dolore labore eius dolorem
        nisi quae similique alias sed! Ut dolorum maxime ipsa. Dolorum quasi
        soluta adipisci perferendis, praesentium, consequatur quaerat est
        mollitia corrupti amet nostrum modi deleniti exercitationem facilis
        accusantium ea atque corporis rerum velit ad ipsa? Voluptate possimus
        numquam eos aliquid labore nihil odio sed mollitia eius accusantium unde
        asperiores, quisquam distinctio pariatur nostrum aspernatur earum
        quaerat! Possimus dolor, iure voluptatum ex sunt eligendi amet, rerum,
        ipsam vitae inventore esse odio ab!
      </p>
    </div>
  );
};

export default post;
