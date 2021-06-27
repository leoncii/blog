import { Post } from '../../components/Post'

export const FilteredPosts = ({ search, filteredPostsWithMemo }) => {
  return <>
    <div>
      {
        filteredPostsWithMemo.map((post) => {
          return <Post key={post.link} post={post} />
        })
      }
    </div>
    <style jsx>{`
      div {
        margin-top: 3rem;
      }
    `}</style>
  </>
}