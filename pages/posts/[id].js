import { useRouter } from 'next/router';


const Post = ({ post}) => {
//   console.log(post);
  const router = useRouter()
  const { id } = router.query

    if (router.isFallback) {
        return <h4>Loading page data....</h4>
    }
  return (
        <div className="container">
          <div className="row">
              <div className="col-lg-12">
                  <div className="singlePost">
                      <div className="post-img">
                        <img src={`/images/posts/${post.id}.jpg`} alt="" />
                      </div>
                      <h3>{post.title}</h3>
                      <p>{post.body}</p>
                </div>
              </div>
            </div>
        </div>
  )
}

// export async function getStaticPaths(){
//     const paths = ["/posts/1", "/posts/2"]
//     return {paths, fallback: true}
// }

export async function getServerSideProps({query}){
const {id} = query 
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  const post = await response.json();
  return {
    props: {
        post,
    }
  }
}

export default Post