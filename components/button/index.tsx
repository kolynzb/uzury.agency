import * as React from "react";
import styles from "./styles.module.scss";
import { VariantProps, cva } from "class-variance-authority";

const buttonVariants = cva(styles.base, {
    variants: {
        variant: {
            default: styles.default,
            destructive: styles.destructive,
            outline: styles.outline,
            subtle: styles.subtle,
            ghost: styles.ghost,
            link: styles.link,
        },
        size: {
            default: styles.size__default,
            sm: styles.size__sm,
            lg: styles.size__lg,
        },
    },
    defaultVariants: {
        variant: "default",
        size: "default",
    },
});

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, ...props }, ref) => {
        return (
            <button
                className={buttonVariants({ variant, size, className })}
                ref={ref}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export { Button, buttonVariants };
