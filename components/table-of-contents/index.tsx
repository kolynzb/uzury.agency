import { getChildrenText } from "@/lib/sanity.utils";
import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Box,
  Tooltip,
} from "@chakra-ui/react";
import { Minus, Plus } from "lucide-react";
import styles from "./styles.module.scss";
// TODO:  Remove Chakra  REPLACE WITH normal bootstrap
const TableOfContents = (props: any) => (
  <Accordion>
    <AccordionItem>
      {({ isExpanded }) => (
        <React.Fragment>
          <h2>
            <AccordionButton _expanded={{ bg: "tomato", color: "white" }}>
              <Box as="span" flex="1" textAlign="left">
                Table Of Contents
              </Box>
              {isExpanded ? <Plus size={12} /> : <Minus size={12} />}
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <TableContents outline={props.outline} />
          </AccordionPanel>
        </React.Fragment>
      )}
    </AccordionItem>
  </Accordion>
);

export default TableOfContents;

const TableContents = (props: any) => (
  <ol>
    {props.outline.map((heading: any, key: any) => (
      <li key={key}>
        <a
          href={"#" + heading.slug}
          className={props.className ? props.className : styles.heading}
        >
          {getChildrenText(heading)}
        </a>
        {heading.subheadings.length > 0 && (
          <TableContents
            outline={heading.subheadings}
            className={styles.sub_heading}
          />
        )}
      </li>
    ))}
  </ol>
);
