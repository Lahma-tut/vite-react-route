import '../../index.css'
import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { PostLists } from '../../iu/PostLists/PostLists'
import { useGetPostsQuery } from '../../api/apiPosts'
import { Post } from '../../types/posts.props'

export default function Posts() {
  const [data, setData] = useState<Post[]>([])
  const [page, setPage] = useState<number>(1)

// useInView
  const options ={
    threshold: 0
  }

  const {ref, inView} = useInView(options)

// RTK Query
  const {data: resData, isLoading, isError} = useGetPostsQuery(page)

  useEffect(() => {
    if (resData) {
      setData(prev => [...prev, ...resData])
    }
  }, [resData])

  useEffect(() => {
    if (data && inView) {
      setPage(prev => (prev + 1))
    }
  }, [inView])

  if (isLoading) return <h3>Loading...</h3>
  if (isError) return <h3>Error: useGetArtworkQuery</h3>

  return (
    <>
      <div>
        <div className="stisky">{ inView ? '💋' : '👀'}</div>
        <div className="posts">
          {data && data.map(post => <PostLists key={post.id} {...post}/>)}
        </div>
        <div>
          {data && <div ref={ref}></div>}
        </div>
      </div>
    </>
  )
}