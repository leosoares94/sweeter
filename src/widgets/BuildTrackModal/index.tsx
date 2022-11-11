import React from 'react'
import { Overlay, Checkbox } from 'evergreen-ui';

import { Wrapper, Container, Row, Column, IconContainer, Title } from './styles';

import { CgHashtag } from 'react-icons/cg';
import { GoMention } from 'react-icons/go';
import { BiTime } from 'react-icons/bi';
import { BsChatSquareText } from 'react-icons/bs';

import { ChakraProvider } from '@chakra-ui/react'

import HashtagFilter from './HashtagFilter';
import MentionFilter from './MentionFilter';

const BuildTrackModal = (props: any) => {
    const [isShown, setIsShown] = React.useState(true)
    const [checked, setChecked] = React.useState(true)
    return (
        <Overlay isShown={isShown}>
            <ChakraProvider>
                <Wrapper>
                    <Row style={{ justifyContent: "center" }}>
                        {/* <Container>
                        <Column>
                        <Title>Filter Types</Title>
                            <Row>
                                <Checkbox size={20} checked={checked}
                                    onChange={e => setChecked(e.target.checked)}
                                />
                                &nbsp;&nbsp;
                                <IconContainer color="#ea4cda">
                                    <CgHashtag size={18} />
                                </IconContainer>
                                &nbsp;
                                Hashtags
                            </Row>
                            <Row>
                                <Checkbox size={20} checked={checked}
                                    onChange={e => setChecked(e.target.checked)}
                                />
                                &nbsp;&nbsp;
                                <IconContainer color="#a850c5">
                                    <GoMention size={14} />
                                </IconContainer>
                                &nbsp;
                                Mentions
                            </Row>
                            <Row>
                                <Checkbox size={20} checked={checked}
                                    onChange={e => setChecked(e.target.checked)}
                                />
                                &nbsp;&nbsp;
                                <IconContainer color="#5650c5">
                                    <BiTime size={15} />
                                </IconContainer>
                                &nbsp;
                                Period
                            </Row>
                            <Row>
                                <Checkbox size={20} checked={checked}
                                    onChange={e => setChecked(e.target.checked)}
                                />
                                &nbsp;&nbsp;
                                <IconContainer color="#50c596">
                                    <BsChatSquareText size={15} />
                                </IconContainer>
                                &nbsp;
                                Words
                            </Row>
                        </Column>
                    </Container>
                    &nbsp;&nbsp;&nbsp; */}
                        <Container>
                            <Column style={{
                                width: "30rem"
                            }}>

                                <HashtagFilter />
                                <MentionFilter />
                            </Column>
                        </Container>
                    </Row>
                </Wrapper>
            </ChakraProvider>
        </Overlay>
    )
}

export default BuildTrackModal;