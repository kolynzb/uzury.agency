import { draftMode } from "next/headers";
import {VisualEditing} from "next-sanity";

const DraftPreviewBtn = ()=> draftMode().isEnabled  ?(
    <>   <a
                            style={{
                                position:"fixed",
                                right:"20px",
                                bottom:"20px",
                                zIndex:"1000",
                                backgroundColor:"blue",
                                color:"white",
                                padding:"4px 8px",
                                margin:"4px",
                                borderRadius:"20px"
                            }}
                            href="/api/draft-mode/disable"
                        >
                            Disable preview mode
                        </a>
        <VisualEditing />
</>
):null;

export default DraftPreviewBtn