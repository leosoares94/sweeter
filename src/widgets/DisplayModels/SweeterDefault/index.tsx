import React, { useEffect, useRef, useState } from 'react'
import Lottie from 'react-lottie'
import Linkify from 'linkify-react'
import 'linkify-plugin-hashtag'
import 'linkify-plugin-mention'

import delay from 'delay'

import {
  Column,
  Container,
  Row,
  Name,
  Username,
  Text,
  Time,
  Engagement,
  Source,
  MediaContainer,
  Image
} from './styles'
import { Avatar, ChakraProvider } from '@chakra-ui/react'
import { MdVerified } from 'react-icons/md'

import animationData from '../../../assets/animations/twitter/sweeter_bubble_icon.json'
import { formatDate } from '../../../utils/dateUtils'
import { AiOutlineRetweet, AiOutlineHeart } from 'react-icons/ai'
import { FaRegComment } from 'react-icons/fa'

import { Tweet } from '../../../store/Tracks'
import { Item } from '../../../store/Playlist'

interface BubbleProps {
  data: Tweet & Item
  onStartTimer: (duration: number) => void
}

const SweeterDefault: React.FC<BubbleProps> = ({ data, onStartTimer }) => {
  const [content, setContent] = useState<BubbleProps['data']>(data)
  const [visible, setVisible] = useState<boolean>(true)
  const [contentOpacity, setBoxOpacity] = useState(0)
  const [containerOpacity, setContainerOpacity] = useState(0)
  const [stoppedTweetIcon, setStoppedTweetIcon] = useState(true)

  const contentRef = useRef<HTMLDivElement>(null)

  const defaultOptions = {
    loop: false,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  const reveal = async (): Promise<void> => {
    setContainerOpacity(1)
    setBoxOpacity(1)
    await delay(200)
    setStoppedTweetIcon(false)
    await delay(200)
    onStartTimer(data.duration)
  }

  const hide = (): void => {
    setContainerOpacity(0)
    setBoxOpacity(0)
    onStartTimer(0)
  }

  useEffect(() => {
    void (async (): Promise<void> => {
      hide()
      await delay(120)
      setVisible(false)
      setContent(data)
      onStartTimer(0)
      await delay(50)
      setVisible(true)
      await delay(50)
      void reveal()
    })()
  }, [data])

  const options = {
    formatHref: {
      hashtag: (href: string) =>
        'https://twitter.com/hashtag/' + href.substr(1),
      mention: (href: string) => 'https://twitter.com/' + href.substr(1)
    }
  }

  return (

    <ChakraProvider>
      {visible && <Container
        opacity={contentOpacity}
        containerOpacity={containerOpacity}
        initial={{ height: '0rem' }}
        animate={{ height: contentRef.current?.getBoundingClientRect().height }}
        transition={{
          type: 'spring',
          stiffness: 260,
          damping: 41
        }}
      >
        <Column className="first-column" >
          <Row className="bubble-header" >
            <Avatar name={content.author.name} src={content.author.avatar} />
            <Column className="username">
              <Row>
                <Name>{content.author.name}&nbsp;</Name>
                <MdVerified size={18} color="#1d9af1" />
              </Row>
              <Username>@{content.author.username}</Username>
            </Column>
            <Lottie
              options={defaultOptions}
              height={60}
              width={60}
              isStopped={stoppedTweetIcon}
            />
          </Row>
          <Column className="bubble-tweet" ref={contentRef}>
            {(Boolean(content.retweet.id)) && (
              <Row style={{ paddingBottom: '.2rem', opacity: 0.8 }}>
                <AiOutlineRetweet
                  className="retweet-flag-icon"
                  style={{ marginTop: '-.1rem' }}
                  size={19}
                />
                <Text style={{ fontSize: '1.1rem', paddingLeft: '.2rem' }}>
                  Retweet
                </Text>
              </Row>
            )}
            <Text>
              <Linkify options={{ ...options, target: '_blank' }}>
                {(Boolean(content.retweet.id)) && (
                  <Avatar src={content.retweet.author_avatar ?? ''} size="sm" />
                )}
                {content.text.replace('RT', '')}
              </Linkify>
            </Text>
            <Time>
              {/* {formatHour(new Date(content.created_at))} -{" "} */}
              {formatDate(new Date(content.created_at))} -{' '}
              <Source>{content.source}</Source>
            </Time>
          </Column>
          <Row className="engagement-container">
            <Engagement>
              <FaRegComment size={15} />
              <span>&nbsp;{content.metrics.replies}</span>
            </Engagement>
            <Engagement>
              <AiOutlineRetweet size={18} />
              <span>&nbsp;{content.metrics.retweets}</span>
            </Engagement>
            <Engagement>
              <AiOutlineHeart size={18} />
              <span>&nbsp;{content.metrics.likes}</span>
            </Engagement>
          </Row>
        </Column>
        {content.images.length > 0 && (
          <MediaContainer style={{ height: contentRef.current?.getBoundingClientRect().height }}>
            <Image src={content.images[0]} />
          </MediaContainer>
        )}
      </Container>}
    </ChakraProvider>
  )
}

export default SweeterDefault
