import { useState, useMemo } from 'react'
import { Search } from '../../components/Search'
import { Chips } from '../../components/Chips'
import { FilteredPosts } from '../../components/FilteredPosts'
import { posts } from '../../getAllPosts'

export function Posts () {
  const [search, setSearch] = useState('')

  const handleSearch = e => {
    setSearch(e.target.value)
  }
  const normalizeTitle = (str) => {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
  }

  const filteredPostsWithMemo = useMemo(() => {
    return posts.filter((post) => {
      const {
        module: { meta: { title } }
      } = post
      const string = normalizeTitle(title)
      return string.toLowerCase().includes(search.toLowerCase())
    })
  }, [search])

  return (
    <>
      <div>
        <Chips />
        <Search
          onChange={handleSearch}
          value={search}
        />
        <FilteredPosts
          search={search}
          filteredPostsWithMemo={filteredPostsWithMemo}
        />
      </div>
      <style jsx>{`
      div {
        width: 100%;
        text-align: center;
        padding: 0 10px;
      }
      h1 {
        width: 337px;
        margin: 2rem auto;
      }
      ul {
        display: grid;  
        list-style: none;
        padding: unset;
        max-width: 320px;
        place-content: center;
        margin: 0 auto;
      }

      @media only screen and (min-width: 992px) {
        ul {
          grid-template-columns: 1fr 1fr;
          grid-gap: .6rem;
        }
        h1 {
          min-width: 515px;
          padding: 1.8rem 0;
        }
      }
    `}
      </style>
    </>
  )
}
