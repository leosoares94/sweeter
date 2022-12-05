import Lottie from "react-lottie";
import Linkify from "linkify-react";
import "linkify-plugin-hashtag";
import "linkify-plugin-mention";

import {
  Column,
  Container,
  Row,
  Name,
  Username,
  Text,
  Time,
  Engagement,
} from "./styles";
import { Avatar, ChakraProvider } from "@chakra-ui/react";
import { MdVerified } from "react-icons/md";

import animationData from "../../../assets/animations/twitter/sweeter_bubble_icon.json";
import { formatDate, formatHour } from "../../../utils/dateUtils";
import { AiOutlineRetweet, AiOutlineHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";

import { Tweet } from "../../../store/Tracks";
import { Item } from "../../../store/Playlist";

type BubbleProps = {
  data: Tweet & Item;
  onStartTimer: (duration: number) => void;
};

const Bubble1 = ({ data, onStartTimer }: BubbleProps) => {
  const [contentOpacity, setBoxOpacity] = useState(0);
  const [containerOpacity, setContainerOpacity] = useState(1);
  const [stoppedTweetIcon, setStoppedTweetIcon] = useState(true);

  const contentRef = useRef<HTMLDivElement>(null);

  const defaultOptions = {
    loop: false,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  function reveal() {
    setBoxOpacity(1);
    setTimeout(() => {
      setStoppedTweetIcon(false);
    }, 200);
    setTimeout(() => {
      onStartTimer(data.duration);
    }, 400);
  }

  function hide() {
    setContainerOpacity(0);
    setBoxOpacity(0);
    setTimeout(() => {}, 200);
  }

  useEffect(() => {
    setTimeout(() => {
      reveal();
      data.duration > 0 &&
        setTimeout(() => {
          hide();
        }, data.duration * 1000 + 600);
    }, 600);
  }, []);

  const options = {
    formatHref: {
      hashtag: (href: string) =>
        "https://twitter.com/hashtag/" + href.substr(1),
      mention: (href: string) => "https://twitter.com/" + href.substr(1),
    },
  };

  return (
    <ChakraProvider>
      <Container
        opacity={contentOpacity}
        containerOpacity={containerOpacity}
        initial={{ height: "0rem" }}
        animate={{ height: contentRef.current?.getBoundingClientRect().height }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 41,
        }}
      >
        <Column className="first-column">
          <Row className="bubble-header">
            <Avatar name={data.author.name} src={data.author.avatar} />
            <Column className="username">
              <Row>
                <Name>{data.author.name}&nbsp;</Name>
                <MdVerified size={18} color="#1d9af1" />
              </Row>
              <Username>@{data.author.username}</Username>
            </Column>
            <Lottie
              options={defaultOptions}
              height={60}
              width={60}
              isStopped={stoppedTweetIcon}
            />
          </Row>
          <Column className="bubble-tweet" ref={contentRef}>
            <Text>
              <Linkify options={{ ...options, target: "_blank" }}>
                {data.text.replace("RT", "")}
              </Linkify>
            </Text>
            <Time>
              {formatHour(new Date(data.created_at))} -{" "}
              {formatDate(new Date(data.created_at))}
            </Time>
          </Column>
          <Row className="engagement-container">
            <Engagement>
              <FaRegComment size={15} />
              <span>&nbsp;5</span>
            </Engagement>
            <Engagement>
              <AiOutlineRetweet size={18} />
              <span>&nbsp;5</span>
            </Engagement>
            <Engagement>
              <AiOutlineHeart size={18} />
              <span>&nbsp;5</span>
            </Engagement>
          </Row>
        </Column>
      </Container>
    </ChakraProvider>
  );
};

export default Bubble1;
