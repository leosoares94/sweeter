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

import { Avatar, Button } from "evergreen-ui";
import { formatDate } from "../../utils/dateUtils";
import { toTitleCase } from "../../utils/stringUtils";
import { BsTwitter } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";
import { BiAddToQueue } from "react-icons/bi";
import { AiOutlineRetweet, AiOutlineHeart } from "react-icons/ai";

const TweetCard = (props: any) => {
  const [added, setAdded] = useState(false);

  return (
    <Container>
      <Column>
        <Row className="user-info">
          <Row>
            <Avatar
              src="https://upload.wikimedia.org/wikipedia/commons/a/a1/Alan_Turing_Aged_16.jpg"
              name="Alan Turing"
              size={42}
            />
            <Column className="username">
              <Name>Ethan Hardy</Name>
              <Username>@ethanhardy</Username>
            </Column>
          </Row>
          <BsTwitter size={25} color="#ff4784" className="tweet-icon" />
        </Row>
        <Column className="tweet-container">
          <Tweet>
            {`-Em março também foram zerados os impostos de importação sobre o café, margarina, macarrão, óleo de soja, açúcar e do álcool que vai na mistura da gasolina. \n\n-Os impostos federais sobre o diesel e o gás de cozinha também foram zerados, além de muitos outros desde 2019.`}
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
              intent="success"
              size="small"
              iconBefore={<BiAddToQueue size={15} />}
              className="add-button"
              appearance={added ? "primary" : undefined}
              onClick={() => setAdded(!added)}
            >
              {added ? "Added to playlist" : "Add to playlist"}
            </Button>
          </EngagementButton>
        </Row>
      </Column>
    </Container>
  );
};

export default TweetCard;
