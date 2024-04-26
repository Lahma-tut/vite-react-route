import '../../index.css'
import { useNavigate, useParams } from 'react-router-dom'
import { useGetPostQuery } from '../../api/apiPosts'
import { Button } from '../../iu/Button/Button'


export default function Post() {
  const { id } = useParams()
  const navigate = useNavigate()

  const { data: post, isLoading, isError } = useGetPostQuery(Number(id))

  if (isLoading) return <h3>Loading...</h3>
  if (isError) return <h3>Error: useGetArtworkQuery</h3>


  return (
    <>
      <div className='button-back'>
        <Button onClick={() => {navigate('/')}}>&#8592; назад</Button>
      </div>
      <h1>{post.title}</h1>
      <div>{post.body}</div>
      <p>#{post.id}</p>
    </>
  )
}