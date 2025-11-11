import { createContext, useContext, useEffect, useMemo, useState } from "react";
import {apiFetch} from '../api'
const STORAGE_KEY = ' shoplite_state_v1'
const defaultProducts = []
const StroreContext = createContext(null)
function readPersistedState(){
    try{
        const raw = localStorage.getItem(STORAGE_KEY)
        if (!raw) return null 
        return JSON.parse(raw)

    } catch{
        return null
    }
}
function writePersistedState(state){
    try{
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
    } catch{
        //ignore 
    }
}
export function AppStoreProvider({children}){
  const persisted = readPersistedState()
  const [products, setProducts] = useState(persisted?.products || defaultProducts)
  const [cartItems, setCartItems] = useState(persisted?.cartItems || []) // [{id, qty}]
  const [orders, setOrders] = useState(persisted?.orders || [])
  const [user, setUser] = useState(persisted?.user || null) // {id, name, email, role}
  const [token, setToken] = useState(persisted?.token || null)
  const [notifications, setNotifications] = useState([])

  useEffect(()=>{
    writePersistedState({products, cartItems, orders, user,token})
  }, [products, cartItems, orders, user,token])

  useEffect(()=>{
    async function loadProducts(){
        try{
            const list = await apiFetch('/api/products')
            setProducts(list)
        } catch{
            console.log(" bhaiya api kharab hai")
        }
    }
    loadProducts()
  },[])
  function notify (message, type = 'info'){
    const id = Date.now().toString()
    setNotifications((prev)=> [...prev, { id, message,type}])
    setTimeout(()=> dismissNotification(id), 2500 )
  }
  function dismissNotification(id){
    setNotifications((prev)=> prev.filter((n) => n.id !== id))
  }
  function getProductById(id){
    return products.find((p) => (p._id || p.id) === id) || null
  }
  function addToCart(productId, qty = 1) {
    setCartItems((prev) => {
      const found = prev.find((c) => c.id === productId)
      if (found) {
        return prev.map((c) => (c.id === productId ? { ...c, qty: c.qty + qty } : c))
      }
      return [...prev, { id: productId, qty }]
    })
    notify('Added to cart', 'success')
  }
  function updateCartQty(productId, qty){
    setCartItems((prev) => prev.map((c) => (c.id === productId ? {...c, qty} : c)))
  }
  

}
