import { addressSchema } from '@/validations/address-Schema'
import { persist } from 'zustand/middleware'
import { create } from 'zustand'
import { z } from 'zod'

interface AddressStore {
    addressStore: Address | null
    isAddress: (data: Address) => void
}

type Address = z.infer<typeof addressSchema>

export const useAddress = create<AddressStore>()(
    persist((set, get) => ({
        addressStore: null,

        isAddress: (data) => {
            if (get().addressStore) {
                set({ addressStore: null })
            }

            set({ addressStore: data })
        }
    }),
        { name: "address-store" }
    )
)