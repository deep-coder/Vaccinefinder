import React, { useEffect } from 'react'
import { useQuery, gql } from '@apollo/client'
import Card from '../../components/Card'
import Style from './moviestyle.module.css'
import useIntersectionObserver from '../../util/useIntersect'

const GET_MOVIES_LIST = gql`
  query fetchMovies($offset: Int, $limit: Int, $cursor: ID) {
    movies(offset: $offset, limit: $limit, cursor: $cursor) {
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        node {
          _id
          title
          poster
        }
        cursor
      }
    }
  }
`
const Movies: React.FC = (): JSX.Element => {
  console.log("rendering");
  const inputref = React.useRef(null)
  const [ref, setRef] = React.useState<HTMLDivElement | null>(null)
  //const { isIntersecting } = useIntersectionObserver(ref)
  const { loading, error, data } = useQuery(GET_MOVIES_LIST, {
    variables: {
      offset: 0,
      limit: 1,
      cursor: null,
    },
  })
  console.log(error,data)
  // useEffect(() => {
  //   console.log('Fetch data inside use effect')
  //   //inputref.current.focus
  //   if (isIntersecting) {
  //     console.log('Fetch data --->')
  //     fetchMore({
  //       variables: {
  //         offset: 0,
  //         limit: 1,
  //         cursor: data.movies.pageInfo.endCursor,
  //       },
  //     })
  //   }
  // }, [isIntersecting])
  const fetchData = (): void => {
    console.log('Fetch data')
  }

  if (loading) return <div>...loading</div>
  if (error) return <div>...error</div>
  return (
    <>
      <div className={Style.movie}>
        {data.movies.edges.node.map((movie) => {
          return (
            <div className={Style.item} key={movie._id}>
              <Card poster={movie.poster} title={movie.title} />
            </div>
          )
        })}
      </div>
      <div ref={setRef} className="sentinel">
        Load More
      </div>
      <input ref={inputref}></input>
    </>
  )
}

export default Movies
