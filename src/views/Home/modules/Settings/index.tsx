import { ThemeAttributes } from '@/utils/appTheme'
import { FormControl, FormLabel } from '@chakra-ui/react'
import Switch from 'react-switch'
import React, { useEffect, useState } from 'react'
import { Container, OptionContainer, Title, Wrapper } from './styles'
import { CiSun } from 'react-icons/ci'
import { BiMoon } from 'react-icons/bi'
import { useAppContext } from '@/store/Context'

interface SettingsProps {
  theme?: ThemeAttributes
}

const Settings: React.FC<SettingsProps> = ({ theme }) => {

    const { currentTheme, setCurrentTheme } = useAppContext((state) => state);
    const [lightTheme, setLightTheme] = useState(currentTheme === "light" ? true : false);

    useEffect(() => {
        setCurrentTheme(lightTheme ? "light" : "dark")
    }, [lightTheme])

  return (
    <Wrapper>
      <Container>
        <Title style={{ color: currentTheme === "light" ? "#000" : "#fff" }}> Settings </Title>
      </Container>
      <OptionContainer
        style={{
          color: currentTheme === "light" ? "#000" : "#fff",
          border: `1px solid ${currentTheme === "light" ? "#000" : "#fff"}`,
        }}
      >
        <FormControl display="flex" alignItems="center">
          <FormLabel htmlFor="email-alerts" mb="0" fontSize=".8rem">
            Theme Color
          </FormLabel>
          <Switch
            onChange={() => setLightTheme(!lightTheme)}
            checked={lightTheme}
            height={18}
            width={35}
            onColor="#ED64A6"
            offColor="#2a1b5f"
            onHandleColor='#fff'
            offHandleColor='#7c7c7c'
            checkedIcon={false}
            uncheckedIcon={false}
            checkedHandleIcon={<CiSun color="#000" />}
            uncheckedHandleIcon={<BiMoon color="#fff" size={13} style={{marginTop: '.1rem', marginLeft: '.1rem'}}/>}
          />
        </FormControl>
      </OptionContainer>
    </Wrapper>
  )
}

export default Settings
