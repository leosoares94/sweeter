import create from 'zustand'
import { devtools } from 'zustand/middleware'
import { mountStoreDevtool } from 'simple-zustand-devtools'

export interface Context {
  currentTheme: string
  editMode: boolean
  setCurrentTheme: (theme: string) => void
}

export const useAppContext = create<Context>()(
  devtools((set) => ({
    currentTheme: 'light',
    editMode: false,
    setCurrentTheme(theme) {
      set((state) => ({
        ...state,
        currentTheme: theme,
      }))
    },
  }))
)
