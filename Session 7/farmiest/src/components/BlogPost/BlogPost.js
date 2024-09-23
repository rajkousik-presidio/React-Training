import React from "react";
import "./BlogPost.css";
import foodBlog from "../../images/foodblog.png";
import { FaLongArrowAltRight, FaRegUser } from "react-icons/fa";

const BlogPost = () => {
  const posts = [
    {
      id: 1,
      image: foodBlog,
      name: "Healthy Vegetables Salads To Try",
      date: "JANUARY 7, 2021",
      category: "Vegetables",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit nisi viverra enim curabitur nec vulputate scelerisque. Sapien mattis ullamcorper nulla nec nibh.",
    },
    {
      id: 2,
      image: foodBlog,
      name: "Healthy Vegetables Salads To Try",
      date: "JANUARY 7, 2021",
      category: "Vegetables",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit nisi viverra enim curabitur nec vulputate scelerisque. Sapien mattis ullamcorper nulla nec nibh.",
    },
    {
      id: 3,
      image: foodBlog,
      name: "Healthy Vegetables Salads To Try",
      date: "JANUARY 7, 2021",
      category: "Vegetables",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit nisi viverra enim curabitur nec vulputate scelerisque. Sapien mattis ullamcorper nulla nec nibh.",
    },
  ];

  return (
    <div className="blog-posts">
      <div class="heading">
        <h1>Fresh Organic Products</h1>
        <div className="underline" />
      </div>

      <div className="post-card-container">
        {posts &&
          posts.map((product) => (
            <div className="post-card">
              <div className="image">
                <img src={product.image} alt="Blog Post" />
              </div>
              <div className="description">
                <div className="date">{product.date}</div>
                <div className="category-details">
                  <p className="admin"> <span><FaRegUser/></span> ADMIN</p>
                  <p className="category">{product.category}</p>
                </div>

                <div className="product-details">
                <h2>{product.name}</h2>
                  <p>{product.description}</p>
                  </div>
              <span className="read-more">Read More <FaLongArrowAltRight /></span>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default BlogPost;
