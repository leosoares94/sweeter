import {useState } from "react";

import { BsTwitter, BsCheckLg } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";
import { BiAddToQueue } from "react-icons/bi";
import { AiOutlineRetweet, AiOutlineHeart } from "react-icons/ai";
import { MdVerified } from "react-icons/md";
import { ChakraProvider, Avatar, Button, Link } from "@chakra-ui/react";
import Linkify from "linkify-react";
import "linkify-plugin-hashtag";
import "linkify-plugin-mention";
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
} from "./styles";

import { formatDate } from "../../utils/dateUtils";
import { toTitleCase } from "../../utils/stringUtils";

import { Tweet as TweetProps } from "../../store/Tracks";

interface TweetCardProps {
  onImageClick: (images: string[], index: number) => void;
}

const TweetCard = ({
  id,
  author,
  text,
  created_at,
  source,
  metrics,
  images,
  videos,
  retweet,
  onImageClick
}: (TweetProps & TweetCardProps)) => {
  const [added, setAdded] = useState(false);


  function redirectToProfile() {
    window.open(`https://twitter.com/${author.username}`);
  }

  function redirectToTweet(tweet_id: string | null) {
    window.open(`https://twitter.com/${author.username}/status/${tweet_id}`);
  }

  function redirectToTweetPic(index: number) {
    window.open(
      `https://twitter.com/${author.username}/status/${id}/photo/${index + 1}`
    );
  }

  const options = {
    formatHref: {
      hashtag: (href: string) =>
        "https://twitter.com/hashtag/" + href.substr(1),
      mention: (href: string) => "https://twitter.com/" + href.substr(1),
    },
  };

  return (
    <ChakraProvider>
      <Container>
     
        <Column>
          <Row className="user-info">
            <Row>
              <Avatar
                src={author.avatar}
                name={author.name}
                className="avatar"
                _hover={{
                  opacity: 0.5,
                  cursor: "pointer",
                }}
                onClick={() => redirectToProfile()}
              />
              <Column className="username">
                <Row>
                  <Name>{author.name}</Name>
                  &nbsp;
                  {author.verified && <MdVerified size={15} color="#1d9af1" />}
                </Row>
                <Username onClick={() => redirectToProfile()}>
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
            {retweet.id && (
              <Row className="retweet-flag">
                <AiOutlineRetweet size={16} className="retweet-flag-icon" />
                &nbsp;<span>Retweet</span>
              </Row>
            )}
            <Tweet
              key={id}
              style={{
                marginTop: `${retweet.id && "-1rem"}`,
              }}
            >
              {retweet.id && (
                <Avatar
                  src={retweet.author_avatar || ""}
                  name={author.name}
                  size="xs"
                />
              )}{" "}
              <Linkify options={{ ...options, target:"_blank" }}>
                {text.replace("RT", "")}
              </Linkify>
            </Tweet>
            {images.length > 0 && (
              <MediaContainer>
                {images.map((image, index) => (
                  <Image
                    src={image}
                    count={images.length}
                    onClick={() => onImageClick(images, index)}
                  />
                ))}
              </MediaContainer>
            )}
            {videos.length > 0 && (
              <MediaContainer>
                {videos.map((video, index) => (
                  <video src={video} controls={true} />
                ))}
              </MediaContainer>
            )}
          </Column>
          <Row>
            <Time>{toTitleCase(formatDate(new Date(created_at)))}</Time>
            <Source>&nbsp;· {source}</Source>
          </Row>

          <Row className="engagement">
            <EngagementButton>
              <FaRegComment size={15} />
              <EngagementNumber>
                {metrics.replies.toLocaleString()}
              </EngagementNumber>
            </EngagementButton>
            <EngagementButton>
              <AiOutlineRetweet size={18} />
              <EngagementNumber>
                {metrics.retweets.toLocaleString()}
              </EngagementNumber>
            </EngagementButton>
            <EngagementButton>
              <AiOutlineHeart size={18} />
              <EngagementNumber>
                {metrics.likes.toLocaleString()}
              </EngagementNumber>

              <Button
                colorScheme="teal"
                variant={added ? "solid" : "outline"}
                leftIcon={
                  added ? <BsCheckLg size={10} /> : <BiAddToQueue size={15} />
                }
                size="xs"
                className="add-button"
                onClick={() => setAdded(!added)}
              >
                {added ? "Added to playlist" : "Add to playlist"}
              </Button>
            </EngagementButton>
          </Row>
        </Column>
      </Container>
    </ChakraProvider>
  );
};

export default TweetCard;
