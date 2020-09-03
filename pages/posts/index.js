import React from 'react'
import Link from 'next/link'
// import  styles from "Post.module.css";
// import styles from './Post.module.css';
// import styles from './Post.module.scss';
// import  './posts.scss';
import styled from 'styled-components'
// const ButtonLink = styled.a`
//     color: red;
//     padding: 5px 20px;
//     background: orange;
//   &:hover{
//         background:#ccc;
//         color: #000;
//         text-decoration: none;
//   }
// `
const Posts = ({ posts }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="section-title text-center mb-4">
            <h2>Our Latest Posts</h2>
          </div>
        </div>
        <div className="row ">
          {posts.slice(0, 6).map((post) => {
            return (
              <div className="col-lg-4" key={post.id}>
                <div className="singlePost">
                  <div className="post-img">
                    <img src={`/images/posts/${post.id}.jpg`} alt="" />
                  </div>
                  <h3 className="post-title">
                    <Link href={`/posts/${post.id}`} as={`/posts/${post.id}`}>
                      {post.title.substring(0, 20)}
                    </Link>
                  </h3>
                  <p>{post.body.substring(0, 700)}</p>
                  <h5 className="themebtn">
                    <Link href={`/posts/${post.id}`}>Read More</Link>
                  </h5>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

// net na thakle internal server error dakabe 500
export async function getServerSideProps() {
  const response = await fetch(`${process.env.API_BASE_URL}/posts`)
  const posts = await response.json()
  return {
    props: {
      posts: posts,
    },
  }
}

export default Posts
