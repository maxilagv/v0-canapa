import * as React from 'react'

import { cn } from '@/lib/utils'

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  id: string;
  label: string;
  labelClassName?: string;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, id, label, labelClassName, ...props }, ref) => {
    return (
      <div className="relative">
        <textarea
          id={id}
          ref={ref}
          className={cn(
            'peer block w-full appearance-none rounded-md bg-transparent px-3 py-2 text-foreground border border-white/30 focus:border-primary focus:outline-none focus:ring-0',
            className
          )}
          placeholder=" "
          {...props}
        />
        <label
          htmlFor={id}
          className={cn(
            "absolute top-2 left-3 z-10 origin-[0] -translate-y-4 scale-75 transform text-foreground/50 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75",
            labelClassName
          )}
        >
          {label}
        </label>
      </div>
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }
