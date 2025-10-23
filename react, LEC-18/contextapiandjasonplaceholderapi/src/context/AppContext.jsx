import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const STORAGE_KEY = 'basic-react-demo:favorites'

const AppContext = createContext(null)

export function AppProvider({ children }) {
  const [favoritePostIds, setFavoritePostIds] = useState(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      return raw ? JSON.parse(raw) : []
    } catch {
      return []
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(favoritePostIds))
    } catch {
      // ignore write errors
    }
  }, [favoritePostIds])

  function toggleFavorite(postId) {
    setFavoritePostIds(prev => {
      return prev.includes(postId) ? prev.filter(id => id !== postId) : [...prev, postId]
    })
  }

  const value = useMemo(() => ({ favoritePostIds, toggleFavorite }), [favoritePostIds])

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export function useApp() {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useApp must be used within AppProvider')
  return ctx
}


