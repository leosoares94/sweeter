import React from 'react'

import { Item, Playlist, usePlaylists } from '../../store/Playlist'
import { Tweet } from '../../store/Tracks'
import Accordion from '../Accordion'

import { Container } from './styles'

import { BlockPicker } from 'react-color'
import { Checkbox, Stack } from '@chakra-ui/react'
import { IoColorPaletteOutline } from 'react-icons/io5'
import { BsCircleFill } from 'react-icons/bs'
import { AiOutlineEye } from 'react-icons/ai'
import TextControls from './TextControls'

interface EditControlsProps {
  playlist: Playlist
  tweet: Tweet & Item
}

const EditControls: React.FC<EditControlsProps> = ({ tweet, playlist }) => {
  const { textColor, backgroundColor, linkColor } = playlist
  const {
    showTime,
    showAvatar,
    showMedia,
    showSource,
    showEngagement,
    images,
    videos,
  } = tweet

  const { updateItem } = usePlaylists((state) => state)

  return (
    <>
      <Container>
        <TextControls />
        <Accordion
          title={['Fundo']}
          icons={[<IoColorPaletteOutline key={1} />]}
        >
          <Accordion
            title={['Cor']}
            defaultOpen={true}
            icons={[<BsCircleFill size={13} key={1} color={textColor} />]}
          >
            <BlockPicker
              triangle="hide"
              color={textColor}
              onChange={(color) =>
                updateItem(playlist.id, { textColor: color.hex })
              }
            />
          </Accordion>
        </Accordion>

        <Accordion
          title={['Mostrar/Ocultar']}
          icons={[<AiOutlineEye key={1} />]}
        >
          <Stack
            direction="column"
            sx={{ fontFamily: 'League Spartan' }}
            paddingLeft="1rem"
          >
            <Checkbox
              size="md"
              colorScheme="pink"
              textColor="#000000a3"
              isChecked={showTime}
              onChange={(e) => {
                const updated = [
                  ...playlist.tweets,
                  (tweet.showTime = e.target.checked),
                ]
                return updateItem(playlist.id, { tweets: updated })
              }}
            >
              Data
            </Checkbox>
            <Checkbox
              size="md"
              colorScheme="pink"
              textColor="#000000a3"
              isChecked={showMedia}
              onChange={(e) => {
                const updated = [
                  ...playlist.tweets,
                  (tweet.showMedia = e.target.checked),
                ]
                return updateItem(playlist.id, { tweets: updated })
              }}
              disabled={images.length === 0 && videos.length === 0}
            >
              Mídia
            </Checkbox>
            <Checkbox
              size="md"
              colorScheme="pink"
              textColor="#000000a3"
              isChecked={showAvatar}
              onChange={(e) => {
                const updated = [
                  ...playlist.tweets,
                  (tweet.showAvatar = e.target.checked),
                ]
                return updateItem(playlist.id, { tweets: updated })
              }}
            >
              Avatar
            </Checkbox>
            <Checkbox
              size="md"
              colorScheme="pink"
              textColor="#000000a3"
              isChecked={showEngagement}
              onChange={(e) => {
                const updated = [
                  ...playlist.tweets,
                  (tweet.showEngagement = e.target.checked),
                ]
                return updateItem(playlist.id, { tweets: updated })
              }}
            >
              Métricas
            </Checkbox>
            <Checkbox
              size="md"
              colorScheme="pink"
              textColor="#000000a3"
              isChecked={tweet.showSource}
              onChange={(e) => {
                const updated = [
                  ...playlist.tweets,
                  (tweet.showSource = e.target.checked),
                ]
                return updateItem(playlist.id, { tweets: updated })
              }}
            >
              Dispositivo
            </Checkbox>
          </Stack>
        </Accordion>
      </Container>
    </>
  )
}

export default EditControls
