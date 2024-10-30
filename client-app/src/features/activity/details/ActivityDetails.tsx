import { Button, Card, Image } from 'semantic-ui-react';
import { useStore } from '../../../app/stores/store';
import LoadingComponent from '../../../app/layout/LoadingComponent';

export default function ActivityDetails() {
    const {activityStore} = useStore();
    const {selectedActivity: activity, cancelSelectActivity, openForm} = activityStore;
    
    if (!activity) return <LoadingComponent />

    return (
        <Card>
            <Image src={`/assets/categoryImages/${activity.category}.jpg`} />
            <Card.Content>
                <Card.Header>{activity.title}</Card.Header>
                <Card.Meta>
                    <span>{activity.date.toString()}</span>
                </Card.Meta>
                <Card.Description>
                    {activity.description}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Button.Group widths={2}>
                    <Button basic color='blue' content='Edit' 
                        onClick={() => openForm(activity.id)} />
                    <Button basic color='grey' content='Cancel' 
                        onClick={cancelSelectActivity} />
                </Button.Group>
            </Card.Content>
        </Card>
    )
}
