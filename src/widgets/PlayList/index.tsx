import { Avatar, Button } from "@chakra-ui/react";

import { Container, Row, Column, Title, Description, Wrapper } from "./styles";

const Playlist = (props: any) => {
  return (
    <Wrapper>
      <Container>
        <Column>
          <Row>
            <Column className="avatar-container">
              <Avatar
                name="AVATAR"
                size="sm"
                src="https://assets.awwwards.com/awards/images/2020/04/heavy-typography-web-design.jpg"
              />
            </Column>
            <Column style={{ width: "100%" }}>
              <Title>My Playlist Title</Title>
              <Description>A playlist with my favorite tweets</Description>
            </Column>
          </Row>
        </Column>
        <Button variant="outline" colorScheme="pink" size="xs">
          Select
        </Button>
      </Container>
    </Wrapper>
  );
};

export default Playlist;
