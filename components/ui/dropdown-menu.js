// The dropdown-menu 
"use client"

import * as React from "react"
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"

export const DropdownMenu = DropdownMenuPrimitive.Root
export const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger
export const DropdownMenuGroup = DropdownMenuPrimitive.Group
export const DropdownMenuPortal = DropdownMenuPrimitive.Portal
export const DropdownMenuSub = DropdownMenuPrimitive.Sub
export const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup

export const DropdownMenuSubTrigger = React.forwardRef(
  ({ className, inset, children, ...props }, ref) => (
    <DropdownMenuPrimitive.SubTrigger
      ref={ref}
      className={`flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent ${inset ? "pl-8" : ""} ${className}`}
      {...props}
    >
      {children}
    </DropdownMenuPrimitive.SubTrigger>
  )
)
DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName

export const DropdownMenuSubContent = React.forwardRef(
  ({ className, ...props }, ref) => (
    <DropdownMenuPrimitive.SubContent
      ref={ref}
      className={`z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md ${className}`}
      {...props}
    />
  )
)
DropdownMenuSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName

export const DropdownMenuContent = React.forwardRef(
  ({ className, sideOffset = 4, ...props }, ref) => (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        ref={ref}
        sideOffset={sideOffset}
        className={`z-50 min-w-[8rem] overflow-hidden rounded-md border bg-white dark:bg-gray-800 p-1 text-black dark:text-white shadow-md ${className}`}
        {...props}
      />
    </DropdownMenuPrimitive.Portal>
  )
)
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName

export const DropdownMenuItem = React.forwardRef(
  ({ className, ...props }, ref) => (
    <DropdownMenuPrimitive.Item
      ref={ref}
      className={`relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-gray-100 dark:hover:bg-gray-700 ${className}`}
      {...props}
    />
  )
)
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName
