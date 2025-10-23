import { Link, Outlet } from 'react-router-dom'
import './App.css'

export default function App() {
  return (
    <div>
      <header style={{ display: 'flex', gap: 12, padding: 12, borderBottom: '1px solid #eee' }}>
        <nav style={{ display: 'flex', gap: 12 }}>
          <Link to="/">Home</Link>
          <Link to="/posts">Posts</Link>
        </nav>
      </header>
      <main style={{ padding: 12 }}>
        <Outlet />
      </main>
    </div>
  )
}
