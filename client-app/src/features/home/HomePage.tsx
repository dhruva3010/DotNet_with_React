import { Link } from "react-router-dom";
import { Button, Container } from "semantic-ui-react";

export default function HomePage() {
    return (
        <Container style={{marginTop: '7em'}}>
            <h1>Home Page</h1>
            <Button as={Link} to='/activities' size="huge" inverted>
                Activites
            </Button>
        </Container>
    )
}