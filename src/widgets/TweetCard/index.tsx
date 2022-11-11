import { useState } from "react";

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
} from "./styles";

import { formatDate } from "../../utils/dateUtils";
import { toTitleCase } from "../../utils/stringUtils";

import { BsTwitter, BsCheckLg } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";
import { BiAddToQueue } from "react-icons/bi";
import { AiOutlineRetweet, AiOutlineHeart } from "react-icons/ai";

import { ChakraProvider, Avatar, Button } from "@chakra-ui/react";
const TweetCard = (props: any) => {
  const [added, setAdded] = useState(false);

  return (
    <ChakraProvider>
      <Container>
        <Column>
          <Row className="user-info">
            <Row>
              <Avatar
                src="https://upload.wikimedia.org/wikipedia/commons/a/a1/Alan_Turing_Aged_16.jpg"
                name="Alan Turing"
                className="avatar"
              />
              <Column className="username">
                <Name>Ethan Hardy</Name>
                <Username>@ethanhardy</Username>
              </Column>
            </Row>
            <BsTwitter size={25} color="#ed64a6" className="tweet-icon" />
          </Row>
          <Column className="tweet-container">
            <Tweet>
              Twitter APIs handle enormous amounts of data. The way we ensure
              this data is secured for developers and users alike is through
              authentication. There are a few methods for authentication, each
              listed below.
            </Tweet>
          </Column>
          <Row>
            <Time>{toTitleCase(formatDate(new Date()))}</Time>
            <Source>&nbsp;· Twitter for iPhone</Source>
          </Row>

          <Row className="engagement">
            <EngagementButton>
              <FaRegComment size={15} />
              <EngagementNumber>206</EngagementNumber>
            </EngagementButton>
            <EngagementButton>
              <AiOutlineRetweet size={18} />
              <EngagementNumber>206</EngagementNumber>
            </EngagementButton>
            <EngagementButton>
              <AiOutlineHeart size={18} />
              <EngagementNumber>206</EngagementNumber>

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
