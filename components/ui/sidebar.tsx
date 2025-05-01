"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Menu } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { useMobile } from "@/hooks/use-mobile"

const SidebarContext = React.createContext<{
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}>({
  isOpen: false,
  setIsOpen: () => {},
})

const sidebarVariants = cva(
  "fixed inset-y-0 left-0 z-50 flex flex-col border-r bg-background transition-all duration-300 ease-in-out",
  {
    variants: {
      variant: {
        default: "w-[var(--sidebar-width,16rem)]",
        floating: "m-4 h-[calc(100%-2rem)] rounded-xl border shadow-xl w-[var(--sidebar-width,16rem)]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
)

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof sidebarVariants> {}

const SidebarProvider = React.forwardRef<HTMLDivElement, SidebarProps>(({ className, children, ...props }, ref) => {
  const [isOpen, setIsOpen] = React.useState(true)
  const isMobile = useMobile()

  React.useEffect(() => {
    setIsOpen(!isMobile)
  }, [isMobile])

  return (
    <SidebarContext.Provider value={{ isOpen, setIsOpen }}>
      <div ref={ref} className={cn("relative", className)} {...props}>
        {children}
      </div>
    </SidebarContext.Provider>
  )
})
SidebarProvider.displayName = "SidebarProvider"

const Sidebar = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof sidebarVariants>
>(({ className, variant, children, ...props }, ref) => {
  const { isOpen } = React.useContext(SidebarContext)

  return (
    <aside
      ref={ref}
      className={cn(sidebarVariants({ variant }), isOpen ? "translate-x-0" : "-translate-x-full", className)}
      {...props}
    >
      {children}
    </aside>
  )
})
Sidebar.displayName = "Sidebar"

const SidebarHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("flex h-14 items-center border-b px-4", className)} {...props}>
        {children}
      </div>
    )
  },
)
SidebarHeader.displayName = "SidebarHeader"

const SidebarContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("flex-1 overflow-auto p-4", className)} {...props}>
        {children}
      </div>
    )
  },
)
SidebarContent.displayName = "SidebarContent"

const SidebarFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("flex items-center border-t p-4", className)} {...props}>
        {children}
      </div>
    )
  },
)
SidebarFooter.displayName = "SidebarFooter"

const SidebarGroup = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("pb-4", className)} {...props}>
        {children}
      </div>
    )
  },
)
SidebarGroup.displayName = "SidebarGroup"

const SidebarGroupLabel = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("mb-2 px-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground", className)}
        {...props}
      >
        {children}
      </div>
    )
  },
)
SidebarGroupLabel.displayName = "SidebarGroupLabel"

const SidebarMenu = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("flex flex-col gap-1", className)} {...props}>
        {children}
      </div>
    )
  },
)
SidebarMenu.displayName = "SidebarMenu"

const SidebarMenuItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("flex flex-col", className)} {...props}>
        {children}
      </div>
    )
  },
)
SidebarMenuItem.displayName = "SidebarMenuItem"

interface SidebarMenuButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
  isActive?: boolean
  size?: "default" | "sm" | "lg"
}

const SidebarMenuButton = React.forwardRef<HTMLButtonElement, SidebarMenuButtonProps>(
  ({ className, children, asChild = false, isActive = false, size = "default", ...props }, ref) => {
    const Comp = asChild ? React.Fragment : "button"
    const sizeClasses = {
      default: "h-9 px-2 py-1.5",
      sm: "h-8 px-2 py-1",
      lg: "h-10 px-3 py-2",
    }

    return (
      <Comp
        ref={ref}
        className={cn(
          "flex w-full items-center gap-2 rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          sizeClasses[size],
          isActive && "bg-accent text-accent-foreground",
          className,
        )}
        {...props}
      >
        {children}
      </Comp>
    )
  },
)
SidebarMenuButton.displayName = "SidebarMenuButton"

interface SidebarMenuSubProps extends React.HTMLAttributes<HTMLDivElement> {
  isOpen?: boolean
}

const SidebarMenuSub = React.forwardRef<HTMLDivElement, SidebarMenuSubProps>(
  ({ className, children, isOpen = true, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("ml-4 border-l pl-2 pt-1", isOpen ? "block" : "hidden", className)} {...props}>
        {children}
      </div>
    )
  },
)
SidebarMenuSub.displayName = "SidebarMenuSub"

const SidebarMenuSubItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("flex", className)} {...props}>
        {children}
      </div>
    )
  },
)
SidebarMenuSubItem.displayName = "SidebarMenuSubItem"

interface SidebarMenuSubButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
  isActive?: boolean
}

const SidebarMenuSubButton = React.forwardRef<HTMLButtonElement, SidebarMenuSubButtonProps>(
  ({ className, children, asChild = false, isActive = false, ...props }, ref) => {
    const Comp = asChild ? React.Fragment : "button"
    return (
      <Comp
        ref={ref}
        className={cn(
          "flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          isActive && "bg-accent text-accent-foreground",
          className,
        )}
        {...props}
      >
        {children}
      </Comp>
    )
  },
)
SidebarMenuSubButton.displayName = "SidebarMenuSubButton"

const SidebarTrigger = React.forwardRef<HTMLButtonElement, React.ComponentPropsWithoutRef<typeof Button>>(
  ({ className, children, ...props }, ref) => {
    const { isOpen, setIsOpen } = React.useContext(SidebarContext)

    return (
      <Button
        ref={ref}
        variant="ghost"
        size="icon"
        className={cn("h-9 w-9", className)}
        onClick={() => setIsOpen(!isOpen)}
        {...props}
      >
        <Menu className="h-4 w-4" />
        <span className="sr-only">Toggle Sidebar</span>
      </Button>
    )
  },
)
SidebarTrigger.displayName = "SidebarTrigger"

const SidebarInset = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => {
    const { isOpen } = React.useContext(SidebarContext)

    return (
      <div
        ref={ref}
        className={cn(
          "flex flex-1 flex-col transition-all duration-300 ease-in-out",
          isOpen ? "ml-[var(--sidebar-width,16rem)]" : "ml-0",
          className,
        )}
        {...props}
      >
        {children}
      </div>
    )
  },
)
SidebarInset.displayName = "SidebarInset"

export {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
  SidebarProvider,
  SidebarTrigger,
  SidebarInset,
}
