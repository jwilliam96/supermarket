import { persist } from 'zustand/middleware'
import { Product } from '@/interface'
import { create } from 'zustand'

interface Favorite {
    favorites: Product[]
    isFavorite: (product: Product) => void
}

export const useFavoriteState = create<Favorite>()(
    persist((set, get) => ({
        favorites: [],
        isFavorite: (product) => set(() => {

            const { favorites } = get()

            // se valida si existe el producto en favoritos
            const validatedProduct = favorites.find(p => p.id === product.id)

            // si existe se elimina
            if (validatedProduct) {
                const newFavorite = favorites.filter(p => p.id !== product.id)
                return { favorites: newFavorite }
            }

            // si no existe se agrega a favoritos
            return { favorites: [...favorites, product] }
        })
    }),
        {
            name: "favorite-products"
        }
    )
)