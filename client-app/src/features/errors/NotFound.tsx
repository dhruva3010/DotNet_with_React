import { Header, Icon } from "semantic-ui-react";

import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";

import { Segment } from "semantic-ui-react";

function NotFound() {
    return (
        <Segment placeholder>
            <Header icon>
                <Icon name='search' />
                Oops - we've looked everywhere and couldn't find this.
            </Header>
            <Segment.Inline>
                <Button as={Link} to='/activities' primary>
                    Return to activities
                </Button>
            </Segment.Inline>
        </Segment>
    )
}

export default NotFound;