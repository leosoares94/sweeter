import create from 'zustand'
import { devtools } from 'zustand/middleware'
import { mountStoreDevtool } from 'simple-zustand-devtools'

export interface Context {
  currentTheme: string
  editMode: boolean
}

export const useAppContext = create<Context>()(
  devtools((set) => ({
    currentTheme: 'dark',
    editMode: false,
  }))
)
