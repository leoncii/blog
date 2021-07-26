import { useState, useMemo, useEffect } from 'react'
import { Search } from '../../components/Search'
import { Chips } from '../../components/Chips'
import { FilteredPosts } from '../../components/FilteredPosts'
import { posts } from '../../getAllPosts'

export function Posts () {
  const [search, setSearch] = useState('')
  const [AllTags, setAllTags] = useState([])
  const [active, setActive] = useState(null)

  const [chips, setChips] = useState(null)

  const handleSearch = e => {
    setSearch(e.target.value)
  }
  const normalizeString = str => {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
  }
  const normalizeTags = tags => {
    tags.forEach(tag => {
      setAllTags(AllTags.push(tag))
    })
    setAllTags(AllTags.map(item => item))
  }
  const filteredPostsWithMemo =
    useMemo(() => {
      return posts.filter((post) => {
        const {
          module: { meta: { title, tags } }
        } = post
        const string = normalizeString(title)
        normalizeTags(tags)
        return string.toLowerCase().includes(search.toLowerCase())
      })
    }, [search])
  const filteredPostsWithMemoChips =
    useMemo(() => {
      return posts.filter((post) => {
        const {
          module: { meta: { tags } }
        } = post
        return tags.includes(chips)
      })
    }, [chips])

  const postFiltered = active === null ? filteredPostsWithMemo : filteredPostsWithMemoChips
  return (
    <>
      <div>
        <Chips
          onClick={setChips}
          AllTags={AllTags}
          active={active}
          setActive={setActive}
        />
        <Search
          onChange={handleSearch}
          value={search}
        />
        <FilteredPosts
          filteredPostsWithMemo={postFiltered}
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
