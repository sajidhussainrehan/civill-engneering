import { createContext, useContext, useMemo, useReducer } from 'react'
import { products } from '../data/siteData.js'

const CartContext = createContext(null)

function itemKey(productId, variant) {
  return `${productId}::${variant || ''}`
}

function reducer(state, action) {
  switch (action.type) {
    case 'ADD': {
      const { productId, variant, qty } = action.payload
      const key = itemKey(productId, variant)
      const existing = state.items.find((i) => i.key === key)
      if (existing) {
        return {
          ...state,
          items: state.items.map((i) =>
            i.key === key ? { ...i, qty: i.qty + qty } : i,
          ),
        }
      }
      return {
        ...state,
        items: state.items.concat([{ key, productId, variant: variant || '', qty }]),
      }
    }

    case 'REMOVE': {
      const { key } = action.payload
      return { ...state, items: state.items.filter((i) => i.key !== key) }
    }

    case 'SET_QTY': {
      const { key, qty } = action.payload
      if (qty <= 0) {
        return { ...state, items: state.items.filter((i) => i.key !== key) }
      }
      return {
        ...state,
        items: state.items.map((i) => (i.key === key ? { ...i, qty } : i)),
      }
    }

    case 'CLEAR':
      return { ...state, items: [] }

    default:
      return state
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, { items: [] })

  const detailedItems = useMemo(() => {
    return state.items
      .map((it) => {
        const product = products.find((p) => p.id === it.productId)
        if (!product) return null
        const price = Number(product.price) || 0
        return {
          ...it,
          product,
          unitPrice: price,
          lineTotal: price * it.qty,
        }
      })
      .filter(Boolean)
  }, [state.items])

  const itemCount = useMemo(() => {
    return state.items.reduce((sum, it) => sum + (Number(it.qty) || 0), 0)
  }, [state.items])

  const subtotal = useMemo(() => {
    return detailedItems.reduce((sum, it) => sum + (Number(it.lineTotal) || 0), 0)
  }, [detailedItems])

  const api = useMemo(() => {
    return {
      items: state.items,
      detailedItems,
      itemCount,
      subtotal,
      addItem: (productId, variant = '', qty = 1) =>
        dispatch({ type: 'ADD', payload: { productId, variant, qty } }),
      removeItem: (key) => dispatch({ type: 'REMOVE', payload: { key } }),
      setQty: (key, qty) => dispatch({ type: 'SET_QTY', payload: { key, qty } }),
      clear: () => dispatch({ type: 'CLEAR' }),
    }
  }, [detailedItems, itemCount, state.items, subtotal])

  return <CartContext.Provider value={api}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
