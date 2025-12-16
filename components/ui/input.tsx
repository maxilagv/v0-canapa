import * as React from 'react'

import { cn } from '@/lib/utils'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, id, label, ...props }, ref) => {
    return (
      <div className="relative">
        <input
          type={type}
          id={id}
          ref={ref}
          className={cn(
            'peer block w-full appearance-none rounded-md bg-transparent px-3 py-2 text-white border border-white/30 focus:border-primary focus:outline-none focus:ring-0',
            className
          )}
          placeholder=" "
          {...props}
        />
        <label
          htmlFor={id}
          className="absolute top-2 left-3 z-10 origin-[0] -translate-y-4 scale-75 transform text-white/50 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75"
        >
          {label}
        </label>
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input }
