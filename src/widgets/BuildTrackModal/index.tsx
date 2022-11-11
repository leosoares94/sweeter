import { useState } from "react";

import {
  ChakraProvider,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";

import { CgHashtag } from "react-icons/cg";
import { GoMention } from "react-icons/go";
import { BiTime, BiWorld } from "react-icons/bi";
import { BsChatSquareText } from "react-icons/bs";
import { FiUser } from "react-icons/fi";
import { MdImportantDevices, MdOutlineVerified, MdDone } from "react-icons/md";
import { AiOutlineRetweet } from "react-icons/ai";

import HashtagFilter from "./HashtagFilter";
import MentionFilter from "./MentionFilter";
import WordFilter from "./WordsFilter";

const BuildTrackModal = (props: any) => {
  const [enabledFilters, setEnabledFilters] = useState<string[]>([]);

  const isEnabled = (filter: string) =>
    enabledFilters.find((element: string) => element === filter);

  const toggleFilter = (filter: string) =>
    isEnabled(filter)
      ? setEnabledFilters(
          enabledFilters.filter((element: string) => element !== filter)
        )
      : setEnabledFilters([...enabledFilters, filter]);

  return (
    <ChakraProvider>
      <Modal isOpen={props.open} onClose={props.onClose}>
        <ModalOverlay backgroundColor="#29020278" />
        <ModalContent>
          <ModalHeader fontSize={15}>Let's build your track!</ModalHeader>
          <ModalCloseButton />
          <ModalBody fontSize={15}>
            Add some filters below to customize your results:
          </ModalBody>
          <ModalBody>
            <Button
              size="xs"
              variant={isEnabled("hashtag") ? "solid" : "outline"}
              colorScheme="pink"
              leftIcon={<CgHashtag size={15} />}
              rightIcon={
                isEnabled("hashtag") ? <MdDone size={15} /> : undefined
              }
              onClick={() => toggleFilter("hashtag")}
            >
              Hashtags
            </Button>
            &nbsp;
            <Button
              size="xs"
              variant="outline"
              colorScheme="pink"
              leftIcon={<GoMention size={14} />}
            >
              Mentions
            </Button>
            &nbsp;
            <Button
              size="xs"
              variant="outline"
              colorScheme="pink"
              leftIcon={<BsChatSquareText size={14} />}
            >
              Words
            </Button>
            &nbsp;
            <Button
              size="xs"
              variant="outline"
              colorScheme="pink"
              leftIcon={<BiTime size={14} />}
            >
              Period
            </Button>
            &nbsp;
            <Button
              size="xs"
              variant="outline"
              colorScheme="pink"
              leftIcon={<FiUser size={14} />}
              marginTop={2}
            >
              User
            </Button>
            &nbsp;
            <Button
              size="xs"
              variant="outline"
              colorScheme="pink"
              leftIcon={<BiWorld size={14} />}
              marginTop={2}
            >
              Language
            </Button>
            &nbsp;
            <Button
              size="xs"
              variant="outline"
              colorScheme="pink"
              leftIcon={<MdImportantDevices size={14} />}
              marginTop={2}
            >
              Device
            </Button>
            &nbsp;
            <Button
              size="xs"
              variant="outline"
              colorScheme="pink"
              leftIcon={<MdOutlineVerified size={14} />}
              marginTop={2}
            >
              Verified
            </Button>
            &nbsp;
            <Button
              size="xs"
              variant="outline"
              colorScheme="pink"
              leftIcon={<AiOutlineRetweet size={14} />}
              marginTop={2}
            >
              Retweet
            </Button>
          </ModalBody>
          <ModalBody>
            {isEnabled("hashtag") && <HashtagFilter />}
            <MentionFilter />
            <WordFilter />
          </ModalBody>

          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </ChakraProvider>
  );
};

export default BuildTrackModal;
