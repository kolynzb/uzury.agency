import React from "react";
import {
    Body,
    Button,
    Img,
    Container,
    Head,
    Heading,
    Html,
    Preview,
    Text,
    Tailwind,
    Section,
    Link,
    Hr,
} from "@react-email/components";
import { siteConfig } from "@/config/site";

type ContactUsEmailProps = {
    customerEmail: string | null | undefined;
    subject: string | null | undefined;
    phoneNumber: string | null | undefined;
    message: string | null | undefined;
    name: string | null | undefined;
}

const { url: baseUrl, logo } = siteConfig;

export const ContactUsEmail = ({
    name,
    phoneNumber,
    subject,
    customerEmail,
    message
}: ContactUsEmailProps) => {
    const previewText = `Customer Inquiry From, ${name}!`;

    return (
        <Html>
            <Head />
            <Preview>{previewText}</Preview>
            <Tailwind>
                <Body className="bg-white my-auto mx-auto font-sans">
                    <Container className="my-10 mx-auto p-5 w-[465px]">
                        <Section className="flex items-center justify-between">
                            <Img
                                src={`${baseUrl}/favicon/favicon-32x32.png`}
                                width="32"
                                height="32"
                                alt="kawu"
                                className="object-contain"
                            />{" "}
                            <Heading className="text-2xl font-bold text-center p-0 my-8 mx-0">
                                Inquiry from  Customer!
                            </Heading>
                        </Section>

                        <Section>
                            <Text className="text-sm font-bold">Subject: {subject}</Text>
                            <Text className="text-sm font-bold">Name: {name}</Text>

                            <Text className="text-sm font-bold">
                                Email:{" "}
                                <Link
                                    href={`mailto:${customerEmail}`}
                                    className="text-primary-400 no-underline font-normal"
                                >
                                    {customerEmail}
                                </Link>{" "}
                            </Text>
                            <Text className="text-sm font-bold">
                                Phone Number:{" "}
                                <Link
                                    href={`tel:${phoneNumber}`}
                                    className="text-primary-400 no-underline font-normal"
                                >
                                    {phoneNumber}
                                </Link>{" "}
                            </Text>
                        </Section>

                        <Section className="bg-slate-100 rounded-sm mb-4 p-4">
                            <Text className="text-md font-bold">
                                Inquiry:{" "}
                            </Text>
                            <Text className="text-sm pl-1">{message}</Text>
                        </Section>

                        <Text className="text-sm">
                            Cheers,
                            <br />
                            The Kawu Team
                        </Text>
                        <Hr className="border border-[#dddddd] mt-4" />
                        <Img
                            src={`${baseUrl}/favicon.ico`}
                            width={32}
                            height={32}
                            className="object-contain"

                        />
                        <Text className="text-[#8898aa] text-sm ml-2">
                            &copy; {new Date().getFullYear()} | KAWU LTD. |{" "}
                            www.kawu.ug
                        </Text>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
};
