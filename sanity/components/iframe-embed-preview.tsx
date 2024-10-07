import React from 'react';
import {Card, Flex, Label, Text} from '@sanity/ui';

// Define the props to match the structure of the iframe block
interface IframePreviewProps {
        url: string;
        title: string;
}

// Component to render the iframe preview in Sanity Studio
const IframeEmbedPreview: React.FC<IframePreviewProps> = (props) => {
    const { url, title } = props;

    // If no URL is provided, show a placeholder
    if (!url) {
        return (
            <Card padding={4} radius={2} shadow={1} tone="transparent">
                <Text>No URL provided for the iframe</Text>
            </Card>
        );
    }

    return (
        <Card padding={4} radius={2} shadow={1} tone="transparent">
            {title &&   <Flex align={"center"}  marginBottom={2}>
                <Label size={3}>label:</Label>
                <Text size={2}> ({title}) </Text>
            </Flex>}
            <iframe
                src={url}
                title={title || 'Embedded Content'}
                width="100%"
                height="400px"
                style={{ border: 'none' }}
                allowFullScreen
            />
        </Card>
    );
};

export default IframeEmbedPreview;
