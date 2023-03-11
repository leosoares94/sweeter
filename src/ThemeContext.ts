import { createContext } from 'react'
import { ThemeAttributes } from './utils/appTheme'

const ThemeContext = createContext<ThemeAttributes | null>(null)

export default ThemeContext
