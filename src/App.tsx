import React, { useState } from 'react'

import { AppTheme, appTheme, ThemeAttributes } from './utils/appTheme'
import { useAppContext } from '@/store/Context'

import Home from '@views/Home'
import ThemeContext from './ThemeContext'

const App: React.FC = () => {
  const { currentTheme } = useAppContext((state) => state)

  const theme = appTheme[currentTheme as keyof AppTheme]

  return (
    <ThemeContext.Provider value={theme}>
      <Home />
    </ThemeContext.Provider>
  )
}

export default App
