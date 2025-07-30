"use client";
import { BookOpen, Calendar, Clock, ExternalLink, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import SlideUpWrapper from "./SlideUpWrapper";

const Blog = () => {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6;
  useEffect(() => {
    fetch("https://dev.to/api/articles?username=muhammadfahad")
      .then((res) => res.json())
      .then(setArticles)
      .catch(console.error);
  }, []);

  const refineBlog = articles?.map(
    ({
      canonical_url,
      description,
      published_at,
      published_timestamp,
      created_at,
      cover_image,
      id,
      reading_time_minutes,
      tag_list,
      title,
    }) => ({
      canonical_url,
      description,
      published_at,
      published_timestamp,
      created_at,
      id,
      cover_image,
      reading_time_minutes,
      tag_list,
      title,
    })
  );

  const formatDate = (isoDate) => {
    const date = new Date(isoDate);

    const formatted = date.toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    return formatted;
  };
  const totalPages = Math.ceil(refineBlog?.length / blogsPerPage);
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = refineBlog?.slice(indexOfFirstBlog, indexOfLastBlog);

  return (
    <SlideUpWrapper
      id="blog"
      className={` bg-gray-50 shadow-sm py-20 px-3 md:px-6 `}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-3 font-mono">
            Technical Blog
          </h3>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8 rounded-full"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentBlogs?.map((post) => (
            <article
              key={post.id + Math.random()}
              className="group cursor-pointer flex flex-col justify-between bg-white p-5 rounded-xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
            >
              <Image
                src={post.cover_image}
                alt=""
                width={600}
                height={400}
                className="w-full h-full rounded-md mb-2 object-cover"
              />

              <span className="px-2 py-1 w-fit bg-slate-100 text-slate-700 text-xs font-medium rounded capitalize my-2">
                {post.tag_list[0]}
              </span>

              <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight hover:text-slate-700 transition-colors duration-300 font-mono">
                {post.title}
              </h3>

              <p className="text-gray-600 mb-4 text-sm leading-relaxed font-sans">
                {post.description}
              </p>

              <div className="flex items-center justify-between text-xs font-mono text-gray-500 mb-4">
                <div className="flex items-center space-x-1">
                  <Calendar className="w-3 h-3" />
                  <span>{formatDate(post.published_at)}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-3 h-3" />
                  {post.reading_time_minutes}{" "}
                  {post.reading_time_minutes > 1 ? "mins" : "min"} read
                </div>
              </div>

              <div className="flex flex-wrap gap-1 mb-4">
                {post.tag_list.slice(0, 3).map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <Link
                href={post.canonical_url}
                target="_blank"
                className="flex w-fit font-mono items-center gap-2 bg-blue-600 hover:scale-105 text-white font-medium text-sm px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300"
              >
                <BookOpen className="w-4 h-4" />
                Read Article
              </Link>
            </article>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="flex justify-center mt-10 space-x-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                aria-label={`Go to page ${index + 1}`}
                className={`w-9 h-9 flex items-center cursor-pointer justify-center rounded-full text-sm font-medium border transition-all duration-300 ${
                  currentPage === index + 1
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-blue-100 hover:text-blue-700"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        )}
      </div>
    </SlideUpWrapper>
  );
};

export default Blog;
