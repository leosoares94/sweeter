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
import { BiTime, BiWorld, BiImages } from "react-icons/bi";
import { BsChatSquareText } from "react-icons/bs";
import { FiUser } from "react-icons/fi";
import { MdImportantDevices, MdOutlineVerified, MdDone } from "react-icons/md";
import { AiOutlineRetweet } from "react-icons/ai";
import { IoIosRocket } from "react-icons/io";

import HashtagFilter from "./HashtagFilter";
import MentionFilter from "./MentionFilter";
import WordFilter from "./WordsFilter";
import { Column } from "./styles";

const BuildTrackModal = (props: any) => {
  const [enabledFilters, setEnabledFilters] = useState<string[]>([
    "hashtag",
    "mentions",
  ]);

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
      <Modal isOpen={props.open} onClose={props.onClose} isCentered size="lg">
        <ModalOverlay backgroundColor="#29020278" overflowY="hidden" />
        <ModalContent height="35rem">
          <ModalHeader fontSize={15}>Let's build your track!</ModalHeader>
          <ModalCloseButton />
          <ModalBody fontSize={15}>
            Add some filters below to customize your results:
          </ModalBody>
          <ModalBody className="buttons-container">
            <Button
              size="xs"
              variant={isEnabled("hashtag") ? "solid" : "outline"}
              colorScheme="pink"
              leftIcon={<CgHashtag size={15} />}
              onClick={() => toggleFilter("hashtag")}
            >
              Hashtags
            </Button>
            &nbsp;
            <Button
              size="xs"
              variant={isEnabled("mentions") ? "solid" : "outline"}
              colorScheme="pink"
              leftIcon={<GoMention size={14} />}
              onClick={() => toggleFilter("mentions")}
            >
              Mentions
            </Button>
            &nbsp;
            <Button
              size="xs"
              variant={isEnabled("words") ? "solid" : "outline"}
              colorScheme="pink"
              leftIcon={<BsChatSquareText size={14} />}
              onClick={() => toggleFilter("words")}
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
            &nbsp;
            <Button
              size="xs"
              variant="outline"
              colorScheme="pink"
              leftIcon={<BiImages size={14} />}
              marginTop={2}
            >
              Media
            </Button>
          </ModalBody>
          <ModalBody>
            <Column>
              {isEnabled("hashtag") && <HashtagFilter />}
              {isEnabled("mentions") && <MentionFilter />}
              {isEnabled("words") && <WordFilter />}
            </Column>
          </ModalBody>

          <ModalFooter justifyContent="center">
            <Button
              size="sm"
              width="100%"
              variant="solid"
              colorScheme="pink"
              leftIcon={<IoIosRocket size={18} />}
            >
              LIFT OFF!
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </ChakraProvider>
  );
};

export default BuildTrackModal;
