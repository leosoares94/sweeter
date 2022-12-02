import { Avatar, Badge, Button } from "@chakra-ui/react";

import { BsTwitter, BsPlayFill, BsThreeDots } from "react-icons/bs";

import {
  Container,
  Row,
  Column,
  Title,
  Description,
  Wrapper,
  ImagePreview,
} from "./styles";

import { usePlaylists } from "../../store/Playlist";

const Playlist = (props: any) => {
  const { playlists } = usePlaylists((state) => state);

  return (
    <Wrapper>
      <Column>
        <Title>Your Playlists</Title>
        <Description>Select some playlist to display or edit</Description>
      </Column>
      <div className="scroll-container">
        {playlists.map((playlist) => (
          <Container key={playlist.id}>
            <Column>
              <Row>
                <Column className="avatar-container">
                  <Avatar
                    name={playlist.name}
                    size="sm"
                    borderRadius={4}
                    width="7.5rem"
                    height="4.5rem"
                    src={playlist.backgroundImage}
                  />
                </Column>
                <Column style={{ width: "100%" }}>
                  <Title>
                    {playlist.name}&nbsp;&nbsp;
                    <Badge size="sm" fontSize={9} colorScheme="whatsapp">
                      <Row>
                        <BsTwitter />
                        &nbsp;5
                      </Row>
                    </Badge>
                  </Title>

                  <Description>{playlist.description}</Description>
                </Column>
              </Row>
            </Column>
            <Column>
              <Button variant="outline" colorScheme="pink" size="xs">
                <BsPlayFill size={14} />
              </Button>
              <Button variant="outline" colorScheme="pink" size="xs">
                <BsThreeDots size={14} />
              </Button>
            </Column>
          </Container>
        ))}
      </div>
    </Wrapper>
  );
};

export default Playlist;
