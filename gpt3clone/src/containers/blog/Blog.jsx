import React from "react";
import "./blog.css";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";
import Article from "../../component/article/Article";

const Blog = () => {
  return (
    <div className="gpt3-blog section-padding" id="blog">
      <div className="gpt3-blog-heading">
        <h1 className="gradient-text">
          a lot is happening we are blogging about it
        </h1>
      </div>
      <div className="gpt3-blog-container">
        <div className="gpt3-blog-container-groupA">
          <Article
            imgUrl={blog01}
            date="sep 7 2023"
            title="some title will be placed here!!"
          />
        </div>
        <div className="gpt3-blog-container-groupB">
          <Article
            imgUrl={blog02}
            date="sep 7 2023"
            title="some title will be placed here!!"
          />
          <Article
            imgUrl={blog03}
            date="sep 7 2023"
            title="some title will be placed here!!"
          />
          <Article
            imgUrl={blog04}
            date="sep 7 2023"
            title="some title will be placed here!!"
          />
          <Article
            imgUrl={blog05}
            date="sep 7 2023"
            title="some title will be placed here!!"
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
