import React from "react";

const Blog = () => {
  const blogArticles = [
    {
      id: 1,
      date: "15 Jun 2024",
      category: "Rank Revamp",
      title: "Crafting Digital Triumphs, One Click at a Time",
      image:
        "https://images.yourstory.com/cs/wordpress/2017/02/52-Blog.jpg?w=1152&fm=auto&ar=2:1&mode=crop&crop=faces",
      link: "blog-details.html",
    },
    {
      id: 2,
      date: "18 Aug 2024",
      category: "Analytics Ace",
      title: "Transforming Traffic into Triumphs",
      image:
        "https://images.yourstory.com/cs/wordpress/2017/02/52-Blog.jpg?w=1152&fm=auto&ar=2:1&mode=crop&crop=faces",
      link: "blog-details.html",
    },
    {
      id: 3,
      date: "14 Sep 2024",
      category: "Rank Craft",
      title: "Unlock Success with Our SEO Keys",
      image:
        "https://images.yourstory.com/cs/wordpress/2017/02/52-Blog.jpg?w=1152&fm=auto&ar=2:1&mode=crop&crop=faces",
      link: "blog-details.html",
    },
  ];

  return (
    <section className="space-bottom" id="blog-sec">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-5">
            <div className="title-area">
              <span className="sub-title">Blog</span>
              <h2 className="sec-title">Check Out My Articles & Tutorials</h2>
            </div>
          </div>
          <div className="col-lg-auto align-self-end">
            <div className="sec-btn">
              <a href="blog-details.html" className="th-btn link-anim">
                <span className="text-anime">
                  <span className="text">VIEW ALL NEWS</span>
                </span>
                <i className="fa-solid fa-arrow-right ms-2"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="row gy-4 justify-content-center">
          <div className="col-md-6">
            <div className="blog-card">
              <div className="blog-img">
                <a href="blog-details.html">
                  <img src={blogArticles[0].image} alt="blog image" />
                </a>
              </div>
              <div className="blog-content">
                <div className="blog-date">
                  <span>{blogArticles[0].date.split(" ")[0]}</span>{" "}
                  {blogArticles[0].date.split(" ").slice(1).join(" ")}
                </div>
                <a href="blog-details.htm)l" className="blog-category">
                  {blogArticles[0].category}
                </a>
                <h3 className="box-title">
                  <a href="blog-details.html">{blogArticles[0].title}</a>
                </h3>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="blog-card">
              <div className="blog-img">
                <a href="blog-details.html">
                  <img src={blogArticles[1].image} alt="blog image" />
                </a>
              </div>
              <div className="blog-content">
                <div className="blog-date">
                  <span>{blogArticles[1].date.split(" ")[0]}</span>
                  {blogArticles[1].date.split(" ").slice(1).join(" ")}
                </div>
                <a href="blog-details.html" className="blog-category">
                  {blogArticles[1].category}
                </a>
                <h3 className="box-title">
                  <a href="blog-details.html">{blogArticles[1].title}</a>
                </h3>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="blog-card">
              <div className="blog-img">
                <a href="blog-details.html">
                  <img src={blogArticles[2].image} alt="blog image" />
                </a>
              </div>
              <div className="blog-content">
                <div className="blog-date">
                  <span>{blogArticles[2].date.split(" ")[0]}</span>{" "}
                  {blogArticles[1].date.split(" ").slice(2).join(" ")}
                </div>
                <a href="blog-details.html" className="blog-category">
                  {blogArticles[2].category}
                </a>
                <h3 className="box-title">
                  <a href="blog-details.html">{blogArticles[2].title}</a>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
