import { toPlainText } from "@portabletext/react";
import { calculateReadingTime } from "@/utils";

import React from "react";
import { PortableTextBlock } from "sanity";

interface Props {
    body: PortableTextBlock[];
}

const PostReadTime = (props: Props) => {
    return (
        <li>{calculateReadingTime(props.body ? toPlainText(props.body) : "")}</li>
    );
};

export default PostReadTime;
