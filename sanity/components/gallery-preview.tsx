import type { PreviewProps } from "sanity";
import {Badge, Box, Card, Flex, Label, Stack, Text} from "@sanity/ui";
import {urlFor} from "@/sanity/lib/image";
import type {SanityImageSource} from "@sanity/image-url/lib/types/types";

interface ImageData {
    asset: SanityImageSource;
    alt: string;
    caption?: string;
}
interface PreviewGalleryProps extends PreviewProps {
    display: string;
    title: string;
    images:  ImageData[];
}

export function GalleryPreview(props: PreviewGalleryProps) {
    const { display, images, title } = props;

    if (!images || !images.length) return <Text>No images added</Text>;

    return (
        <Stack space={2}>
            <Flex align={"center"} justify={"space-between"} paddingX={2}>
         <Flex align={"center"} >
             <Label size={2}>Gallery Preview:</Label>
             <Text size={1}> ({title}) </Text>
         </Flex>
            <Badge tone="primary">({display})</Badge>
            </Flex>
            <Box  style={{ whiteSpace: 'nowrap', overflowX:"scroll"}}>
                {images.map((image, index) => (
                    <Card key={index}   style={{ display: "inline-block", margin: "0 5px", width: "150px", height: "150px" }}>
                        {/* Ensure image.asset exists before trying to get the URL */}
                        {image.asset ? (
                            <img src={urlFor(image.asset).url()} alt={image.alt || "Image"}   style={{
                                width: "100%",   // Ensures the image doesn't overflow the card
                                height: "100%",  // Ensures the image fits within the card
                                objectFit: "cover", // Ensures the image maintains its aspect ratio and covers the container
                            }}/>
                        ) : (
                            <Text>Image not available</Text>
                        )}
                        {image.caption && <Text style={{fontStyle:"italic"}}>{image.caption}</Text>}
                    </Card>
                ))}
            </Box>
        </Stack>
    );
}
