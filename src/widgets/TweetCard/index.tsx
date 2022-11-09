import { Container, Row, Column, Username, Name, Tweet, Time, Source } from './styles';
import { Avatar } from 'evergreen-ui';
import { formatDate } from '../../utils/dateUtils';
import { toTitleCase } from '../../utils/stringUtils';
import { BsTwitter } from 'react-icons/bs';

const TweetCard = (props: any) => {
    return (
        <Container>
            <Column>
                <Row className='user-info'>
                   <Row>
                   <Avatar
                        src="https://upload.wikimedia.org/wikipedia/commons/a/a1/Alan_Turing_Aged_16.jpg"
                        name="Alan Turing"
                        size={42}
                    />
                    <Column className='username'>
                        <Name>
                            Ethan Hardy
                        </Name>
                        <Username>
                            @ethanhardy
                        </Username>
                    </Column>
                   </Row>
                   <BsTwitter size={25} color="#4ba1ea" />
                </Row>
                <Column className='tweet-container'>
                    <Tweet>
                        In some cases user avatars are displayed without knowing the name of the user. It's possible in those cases to use a id as the hashValue property to automatically determine the color.
                    </Tweet>
                </Column>
                <Row>
                    <Time>
                        {toTitleCase(formatDate(new Date()))}
                    </Time>
                    <Source>
                        &nbsp;· Twitter for iPhone
                    </Source>
                </Row>
            </Column>
        </Container>
    )
}

export default TweetCard;