import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useApp } from '../context/AppContext.jsx'

export default function Posts() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const { favoritePostIds, toggleFavorite } = useApp()

  useEffect(() => {
    let ignore = false
    setLoading(true)
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(r => {
        if (!r.ok) throw new Error('Failed to fetch')
        return r.json()
      })
      .then(data => {
        if (!ignore) setPosts(data.slice(0, 15))
      })
      .catch(err => setError(err.message))
      .finally(() => setLoading(false))
    return () => {
      ignore = true
    }
  }, [])

  if (loading) return <p>Loading posts…</p>
  if (error) return <p style={{ color: 'red' }}>{error}</p>

  return (
    <div>
      <h2>Posts</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {posts.map(p => (
          <li key={p.id} style={{ marginBottom: 12, borderBottom: '1px solid #eee', paddingBottom: 8 }}>
            <Link to={`/posts/${p.id}`}>{p.title}</Link>
            <button style={{ marginLeft: 8 }} onClick={() => toggleFavorite(p.id)}>
              {favoritePostIds.includes(p.id) ? '★ Unfavorite' : '☆ Favorite'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}


