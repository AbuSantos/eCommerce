import * as React from "react"
import { VariantProps, cva } from "class-variance-authority"

import { cn } from "@/utils/util"

const buttonVariants = cva(
    "inline-flex items-center justify-center  text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
    {
        variants: {
            variant: {
                default: "bg-primary text-primary-foreground hover:bg-primary/90",
                destructive:
                    "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                outline:
                    "border border-input hover:bg-accent hover:text-accent-foreground text-[0.8rem] md:text-base",
                secondary:
                    "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                ghost: "hover:bg-accent hover:text-accent-foreground",
                link: "underline-offset-4 hover:underline text-primary",
                buy: "w-full bg-gray-900 p-8 text-[0.8rem] font-medium text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black",
                basket: "w-full bg-gray-300 p-8 text-[0.8rem] font-medium text-gray-900 hover:bg-gray-800  hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
            },
            size: {
                default: "h-10 py-2 px-4",
                sm: "h-9 px-3 rounded-md",
                lg: "h-11 px-8 rounded-md",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
)

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> { }

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, ...props }, ref) => {
        return (
            <button
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"

export { Button, buttonVariants }