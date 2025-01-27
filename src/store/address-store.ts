import { addressSchema } from '@/validations/address-Schema'
import { persist } from 'zustand/middleware'
import { create } from 'zustand'
import { z } from 'zod'

interface AddressStore {
    address: Address | null
    hasAddress: boolean
    setAddress: (data?: Address) => void
    toggleAddressState: () => void
}

type Address = z.infer<typeof addressSchema>

export const useAddress = create<AddressStore>()(
    persist(
        (set, get) => ({
            address: null,
            hasAddress: false,

            setAddress: (data?: Address) => {
                if (data) {
                    // Validar datos usando Zod
                    const parsedAddress = addressSchema.safeParse(data)
                    if (!parsedAddress.success) {
                        console.error('Invalid address:', parsedAddress.error)
                        return
                    }
                    set({ address: parsedAddress.data, hasAddress: true })
                } else {
                    set({ address: null, hasAddress: false })
                }
            },

            toggleAddressState: () => {
                set((state) => ({ hasAddress: !state.hasAddress }))
            },
        }),
        { name: 'address-store' }
    )
)
