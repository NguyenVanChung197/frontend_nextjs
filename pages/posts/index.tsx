import { connect } from "react-redux"
import Link from "next/link"
import { getPosts } from "../../redux/actions/posts"

const Posts = (props: any) => {
  return (
    <>
      <Link href="/posts/create">link to create post</Link>
    </>
  )
}

const mapStateToProps = (state: any) => ({
  posts: state.posts,
})

const mapDispatchToProps = {
  getPosts,
}

export default  connect(mapStateToProps, mapDispatchToProps)(Posts);
