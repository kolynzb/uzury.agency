"use client";

import cn from "classnames";
import type React from "react";

export interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function Logo(props: LogoProps) {
    const { className, ...rest } = props;

    return (
        <div
            className={cn(
                "transition-transform duration-300 hover:rotate-3 active:scale-90 logo",
                className
            )}
            {...rest}
        >
            <img
                width={25}
                height={25}
                src="/logo/submark-2.png"
                // src="https://res.cloudinary.com/kolynz-b/image/upload/v1728153061/Asset_8_4x_xembji.png"
                alt="Uzury logo"
            />
        </div>
            )}

