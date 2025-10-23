import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useApp } from '../context/AppContext.jsx'

export default function PostDetail() {
  const { id } = useParams()
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const { favoritePostIds, toggleFavorite } = useApp()

  useEffect(() => {
    let ignore = false
    setLoading(true)
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(r => {
        if (!r.ok) throw new Error('Failed to fetch')
        return r.json()
      })
      .then(data => {
        if (!ignore) setPost(data)
      })
      .catch(err => setError(err.message))
      .finally(() => setLoading(false))
    return () => {
      ignore = true
    }
  }, [id])

  if (loading) return <p>Loading…</p>
  if (error) return <p style={{ color: 'red' }}>{error}</p>
  if (!post) return <p>Not found</p>

  const isFav = favoritePostIds.includes(post.id)

  return (
    <div>
      <p><Link to="/posts">← Back to Posts</Link></p>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <button onClick={() => toggleFavorite(post.id)}>
        {isFav ? '★ Unfavorite' : '☆ Favorite'}
      </button>
    </div>
  )
}


