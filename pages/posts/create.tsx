import { connect } from "react-redux"
import { createPost } from "../../redux/actions/posts"


const CreatePost = (props: any) => {
  const {
    createPost,
  } = props;

  const handleCreate = () => {
    createPost(123);
  }

  return (
    <>
      <h1>Create Posts</h1>
      <input></input>
      <div onClick={handleCreate}>Create</div>
    </>
  )
}

const mapStateToProps = (state: any) => ({
  posts: state.posts,
})

const mapDispatchToProps = {
  createPost,
}

export default connect(mapStateToProps, mapDispatchToProps)(CreatePost);
