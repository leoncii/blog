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
        display: grid;
        margin-top: 3rem;
        place-content:center;
        grid-template-columns: repeat(auto-fit, minmax(250px, 300px));
        grid-gap: 1.85rem;
      }
    `}</style>
  </>
}