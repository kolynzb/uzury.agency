import React, { Fragment } from 'react'

import type { Props } from './types'

import { Image } from './image-media'
import { Video } from './video-media'

export const Media: React.FC<Props> = (props) => {
    const { className, htmlElement = 'div', resource } = props

    const isVideo = typeof resource !== 'string' && resource?.mimeType?.includes('video')
    const Tag = (htmlElement as any) || Fragment

    return (
        <Tag
            {...(htmlElement !== null
                ? {
                    className,
                }
                : {})}
        >
            {isVideo ? <Video {...props} /> : <Image {...props} />}
        </Tag>
    )
}
