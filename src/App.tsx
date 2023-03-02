import React from 'react'

import { AppTheme, appTheme, ThemeAttributes } from './utils/appTheme'
import { useAppContext } from '@/store/Context'

import Home from '@views/Home'

const App: React.FC = () => {

  const { currentTheme } = useAppContext((state) => state)

  return (
    <Home theme={appTheme[currentTheme as keyof AppTheme]}/>
  )
}

export default App
