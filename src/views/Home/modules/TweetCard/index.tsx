/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/naming-convention */
import React, { useState } from 'react'

import Linkify from 'linkify-react'
import 'linkify-plugin-hashtag'
import 'linkify-plugin-mention'

import { useMediaQuery } from 'react-responsive'

import { BsTwitter, BsCheckLg } from 'react-icons/bs'
import { FaRegComment } from 'react-icons/fa'
import { BiAddToQueue } from 'react-icons/bi'
import { AiOutlineRetweet, AiOutlineHeart } from 'react-icons/ai'
import { MdVerified } from 'react-icons/md'

import { ChakraProvider, Avatar, Button, theme } from '@chakra-ui/react'

import {
  Container,
  Row,
  Column,
  Username,
  Name,
  Tweet,
  Time,
  Source,
  EngagementButton,
  EngagementNumber,
  MediaContainer,
  Image,
} from './styles'

import { formatDate } from '@utils/dateUtils'
import { toTitleCase } from '@utils/stringUtils'

import { Tweet as TweetProps } from '@store/Tracks'

interface TweetCardProps {
  onImageClick: (images: string[], index: number) => void
  backgroundColor?: string
  textColor?: string
  trackSize?: string
}

const TweetCard: React.FC<TweetProps & TweetCardProps> = ({
  id,
  author,
  text,
  created_at,
  source,
  metrics,
  images,
  videos,
  retweet,
  onImageClick,
  backgroundColor,
  textColor,
  trackSize,
}) => {
  const [added, setAdded] = useState(false)

  function redirectToProfile(): void {
    window.open(`https://twitter.com/${author.username}`)
  }

  function redirectToTweet(tweet_id: string | null): void {
    window.open(`https://twitter.com/${author.username}/status/${tweet_id}`)
  }

  // function redirectToTweetPic (index: number): void {
  //   window.open(
  //     `https://twitter.com/${author.username}/status/${id}/photo/${index + 1}`
  //   )
  // }

  const options = {
    formatHref: {
      hashtag: (href: string) =>
        'https://twitter.com/hashtag/' + href.substr(1),
      mention: (href: string) => 'https://twitter.com/' + href.substr(1),
    },
  }

  const isHd = useMediaQuery({
    query: '(max-width: 1368px)',
  })

  return (
    <ChakraProvider>
      <Container
        backgroundColor={backgroundColor}
        textColor={textColor}
        trackSize={trackSize}
      >
        <Column>
          <Row className="user-info">
            <Row>
              <Avatar
                src={author.avatar}
                name={author.name}
                className="avatar"
                _hover={{
                  opacity: 0.5,
                  cursor: 'pointer',
                }}
                onClick={() => redirectToProfile()}
              />
              <Column className="username">
                <Row>
                  <Name>{author.name}</Name>
                  &nbsp;
                  {author.verified === true && (
                    <MdVerified size={15} color="#1d9af1" />
                  )}
                </Row>
                <Username
                  onClick={() => redirectToProfile()}
                  style={{
                    color: textColor === '#fff' ? '#bbbbbb' : textColor,
                  }}
                >
                  @{author.username}
                </Username>
              </Column>
            </Row>
            <BsTwitter
              size={25}
              color="#ed64a6"
              className="tweet-icon"
              onClick={() => redirectToTweet(id)}
            />
          </Row>
          <Column className="tweet-container">
            {Boolean(retweet.id) && (
              <Row
                className="retweet-flag"
                style={{
                  paddingBottom: isHd ? '.2rem' : '0',
                }}
              >
                <AiOutlineRetweet
                  size={isHd ? 14 : 16}
                  style={{ marginTop: isHd ? '.02rem' : '-.15rem' }}
                  className="retweet-flag-icon"
                />
                &nbsp;<span>Retweet</span>
              </Row>
            )}
            <Tweet
              key={id}
              style={{
                marginTop: `${Boolean(retweet.id) && '-1rem'}`,
                color: textColor,
              }}
            >
              {Boolean(retweet.id) && (
                <Avatar
                  src={retweet.author_avatar ?? ''}
                  name={author.name}
                  size="xs"
                  marginTop={isHd ? '-.2rem' : '0'}
                />
              )}{' '}
              <Linkify options={{ ...options, target: '_blank' }}>
                {text.replace('RT', '')}
              </Linkify>
            </Tweet>
            {images.length > 0 && (
              <MediaContainer>
                {images.map(
                  (image, index) =>
                    index < 4 && (
                      <Image
                        src={image}
                        count={images.length}
                        onClick={() => onImageClick(images, index)}
                        key={index}
                      >
                        {' '}
                        {images.length > 4 && index === 3 && (
                          <span className="has-more-indicator">
                            {images.length - 4}+
                          </span>
                        )}
                      </Image>
                    )
                )}
              </MediaContainer>
            )}
            {videos.length > 0 && (
              <MediaContainer>
                {videos.map((video, index) => (
                  <video src={video} controls={true} key={index} />
                ))}
              </MediaContainer>
            )}
          </Column>
          <Row>
            <Time
              style={{
                color: textColor === '#fff' ? '#bbbbbb' : textColor,
                fontSize: trackSize === 'small' ? '.75rem' : '0.92rem',
              }}
            >
              {toTitleCase(formatDate(new Date(created_at)))}
            </Time>
            <Source
              style={{ fontSize: trackSize === 'small' ? '.75rem' : '0.92rem' }}
            >
              &nbsp;· {source}
            </Source>
          </Row>

          <Row className="engagement">
            <EngagementButton>
              <FaRegComment size={15} color={textColor} />
              <EngagementNumber
                style={{ color: textColor === '#fff' ? '#bbbbbb' : textColor }}
              >
                {metrics.replies.toLocaleString()}
              </EngagementNumber>
            </EngagementButton>
            <EngagementButton>
              <AiOutlineRetweet size={18} color={textColor} />
              <EngagementNumber
                style={{ color: textColor === '#fff' ? '#bbbbbb' : textColor }}
              >
                {metrics.retweets.toLocaleString()}
              </EngagementNumber>
            </EngagementButton>
            <EngagementButton>
              <AiOutlineHeart size={18} color={textColor} />
              <EngagementNumber
                style={{ color: textColor === '#fff' ? '#bbbbbb' : textColor }}
              >
                {metrics.likes.toLocaleString()}
              </EngagementNumber>
              {trackSize !== 'small' && (
                <Button
                  colorScheme={textColor === '#fff' ? 'green' : 'teal'}
                  variant={added ? 'solid' : 'outline'}
                  leftIcon={
                    added ? <BsCheckLg size={10} /> : <BiAddToQueue size={15} />
                  }
                  size="xs"
                  className="add-button"
                  onClick={() => setAdded(!added)}
                >
                  {added ? 'Added to playlist' : 'Add to playlist'}
                </Button>
              )}
            </EngagementButton>
          </Row>
        </Column>
        {trackSize === 'small' && (
          <Row style={{ marginTop: '.7rem' }}>
            <Button
              colorScheme={textColor === '#fff' ? 'green' : 'teal'}
              variant={added ? 'solid' : 'outline'}
              leftIcon={
                added ? <BsCheckLg size={10} /> : <BiAddToQueue size={15} />
              }
              size="xs"
              className="add-button"
              onClick={() => setAdded(!added)}
              w="100%"
              pb={1}
              pt={0.5}
            >
              {added ? 'Added to playlist' : 'Add to playlist'}
            </Button>
          </Row>
        )}
      </Container>
    </ChakraProvider>
  )
}

export default TweetCard
