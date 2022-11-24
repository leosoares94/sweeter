import React from "react";

import { TiUserOutline, TiUser } from 'react-icons/ti';
import { TbKey } from 'react-icons/tb';
import { BiBlock, BiDollar } from "react-icons/bi";
import { GoFileMedia } from "react-icons/go";
import { IoMdLink, IoMdImages } from 'react-icons/io';
import { MdOutlineVerified, MdOutlineSlowMotionVideo } from 'react-icons/md';
import { AiOutlineRetweet } from 'react-icons/ai';
import { RiChatQuoteLine } from 'react-icons/ri';
import { BsReply, BsChatLeftQuote } from 'react-icons/bs'
import { SiAdblock } from 'react-icons/si'
import { Table, TagInput } from "evergreen-ui";
import { CloseButton, Button, Tooltip } from "@chakra-ui/react";

import { Row } from "./styles";

import FadeIn from "react-fade-in";

const HasOptions = (props: any) => {

  const [enabledFilters, setEnabledFilters] = React.useState<string[]>([
    "hashtag",
    "mentions",
  ]);

  const [hashtags, setHashtags] = React.useState<string[]>([]);
  const [mentions, setMentions] = React.useState<string[]>([]);
  const [keywords, setKeywords] = React.useState<string[]>([]);

  const isEnabled = (filter: string) =>
    enabledFilters.find((element: string) => element === filter);

  const toggleFilter = (filter: string) =>
    isEnabled(filter)
      ? setEnabledFilters(
        enabledFilters.filter((element: string) => element !== filter)
      )
      : setEnabledFilters([...enabledFilters, filter]);

  return (
    <FadeIn>
      <Row>
        <Table width="100%" padding=".5rem" backgroundColor="#1989f82f" borderRadius={9}>
          <Table.Head
            marginBottom={5}
            paddingTop={3}
            borderBottom="none"
            height="1.8rem"
            backgroundColor="#ff6bb500"
          >
            <Table.TextHeaderCell fontSize=".7rem">
            HAS / HASN'T&nbsp;
              <span
                style={{
                  fontFamily: "arial",
                  textTransform: "uppercase",
                  fontSize: 12,
                  fontWeight: "normal",
                }}
              >- B</span>
               <span
                style={{
                  fontFamily: "arial",
                  textTransform: "lowercase",
                  fontSize: 12,
                  fontWeight: "normal",
                }}
              >
                uscar tweets que tenham (ou não):
              </span>
            </Table.TextHeaderCell>
            <CloseButton size='sm' />
          </Table.Head>

          <Table.Body width="100%" paddingLeft={10} >
            <Button
              size="xs"
              className="option-button"
              variant="outline"
              colorScheme="pink"
              borderRadius={50}
              leftIcon={<IoMdLink size={15} />}
              iconSpacing={.5}
              onClick={() => toggleFilter("hashtag")}
            >
              Links
            </Button>
            &nbsp;
            <Button
              size="xs"
              className="option-button"
              variant="outline"
              colorScheme="pink"
              borderRadius={50}
              leftIcon={<GoFileMedia size={12} />}
              iconSpacing={.5}
              onClick={() => toggleFilter("mention")}
            >
              Media
            </Button>
            &nbsp;
            <Button
              size="xs"
              className="option-button"
              variant="outline"
              colorScheme="pink"
              borderRadius={50}
              leftIcon={<MdOutlineSlowMotionVideo size={14 } />}
              iconSpacing={.5}
              onClick={() => toggleFilter("mention")}
            >
              Videos
            </Button>
            &nbsp;
            <Button
              size="xs"
              className="option-button"
              variant="outline"
              colorScheme="pink"
              borderRadius={50}
              leftIcon={<IoMdImages size={16} />}
              iconSpacing={.5}
              onClick={() => toggleFilter("mention")}
            >
              Images
            </Button>
            &nbsp;
            <Button
              size="xs"
              className="option-button"
              variant="outline"
              colorScheme="pink"
              borderRadius={50}
              leftIcon={<BiDollar size={13} />}
              iconSpacing={.5}
              onClick={() => toggleFilter("mention")}
            >
              Cashtags
            </Button>

          </Table.Body>
          <Table.Body width="100%" marginTop={10} >
            <Row>
              <Tooltip label="Remover tweets com estes atributos" aria-label='A tooltip'>
                <Button
                  size="xs"
                  variant="ghost"
                  colorScheme="pink"
                  borderRadius={100}
                  iconSpacing={0}
                  leftIcon={<BiBlock size={15} />}
                  onClick={() => toggleFilter("mention")}
                />
              </Tooltip>
            </Row>
          </Table.Body>
        </Table>
      </Row>
    </FadeIn>
  )
}

export default HasOptions;