import './../../index.css'
import { useNavigate } from 'react-router-dom'
import { Button } from '../Button/Button'
import { Post } from '../../types/posts.props'

export const PostLists = ({ id, title, body }: Post) => {
  const navigate = useNavigate()

  return (
    <>
      <article className='article'>
        <div className='posts-title'>
          <h3>{ title }</h3>
        </div>
        <div className='posts-list'>
          {body?.substring(0, 120) + ' ...'}
        </div>
        <div className='posts-button'>
          <Button onClick={() => { navigate(`/post/${id}`) }}>подробнее #{id}</Button>
        </div>
      </article>
    </>
  )
}