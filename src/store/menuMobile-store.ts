import { create } from 'zustand'

interface BearState {
    menuMobile: boolean
    changeMenuMobile: () => void
}

export const useMenuMobile = create<BearState>()((set) => ({
    menuMobile: false,
    changeMenuMobile: () => set((state) => ({ menuMobile: !state.menuMobile })),
}))