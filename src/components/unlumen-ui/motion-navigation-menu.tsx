import React, {
  createContext,
  useContext,
  useState,
  useRef,
  useCallback,
  useEffect,
  useId,
} from "react"
import { motion, AnimatePresence } from "motion/react"
import { cn } from "@/lib/utils"

// ─── Context ────────────────────────────────────────────────────────────

interface MotionNavigationMenuContextType {
  activeValue: string
  setActiveValue: (value: string) => void
  springStiffness: number
  springDamping: number
  springBounce: number
  viewport: boolean
}

const MotionNavigationMenuContext =
  createContext<MotionNavigationMenuContextType | null>(null)

function useMenuContext() {
  const ctx = useContext(MotionNavigationMenuContext)
  if (!ctx)
    throw new Error(
      "MotionNavigationMenu sub-components must be used within <MotionNavigationMenu>"
    )
  return ctx
}

// ─── Root ───────────────────────────────────────────────────────────────

interface MotionNavigationMenuProps {
  children: React.ReactNode
  viewport?: boolean
  viewportClassName?: string
  springStiffness?: number
  springDamping?: number
  springBounce?: number
  value?: string
  onValueChange?: (value: string) => void
  className?: string
}

export function MotionNavigationMenu({
  children,
  viewport = true,
  viewportClassName,
  springStiffness = 350,
  springDamping = 32,
  springBounce = 0,
  value: controlledValue,
  onValueChange,
  className,
}: MotionNavigationMenuProps) {
  const [uncontrolledValue, setUncontrolledValue] = useState("")
  const isControlled = controlledValue !== undefined
  const activeValue = isControlled ? controlledValue : uncontrolledValue
  const viewportRef = useRef<HTMLDivElement>(null)
  const [contentRects] = useState(() => new Map<string, DOMRect>())

  const setActiveValue = useCallback(
    (val: string) => {
      if (!isControlled) setUncontrolledValue(val)
      onValueChange?.(val)
    },
    [isControlled, onValueChange]
  )

  const registerContent = useCallback((value: string, rect: DOMRect) => {
    contentRects.set(value, rect)
  }, [])

  const unregisterContent = useCallback((value: string) => {
    contentRects.delete(value)
  }, [])

  return (
    <MotionNavigationMenuContext.Provider
      value={{
        activeValue,
        setActiveValue,
        springStiffness,
        springDamping,
        springBounce,
        viewport,
      }}
    >
      <ViewportContext.Provider
        value={{ viewportRef, contentRects, registerContent, unregisterContent }}
      >
        <div className={cn("relative inline-flex", className)}>
          <div className="flex flex-col">
            {children}
            {viewport && (
              <div
                ref={viewportRef}
                className={cn("relative overflow-hidden", viewportClassName)}
              />
            )}
          </div>
        </div>
      </ViewportContext.Provider>
    </MotionNavigationMenuContext.Provider>
  )
}

// ─── Viewport ───────────────────────────────────────────────────────────

interface ViewportContextType {
  viewportRef: React.RefObject<HTMLDivElement | null>
  contentRects: Map<string, DOMRect>
  registerContent: (value: string, rect: DOMRect) => void
  unregisterContent: (value: string) => void
}

const ViewportContext = createContext<ViewportContextType | null>(null)

function useViewportContext() {
  const ctx = useContext(ViewportContext)
  if (!ctx) throw new Error("Viewport context not available")
  return ctx
}

// ─── List ───────────────────────────────────────────────────────────────

interface MotionNavigationMenuListProps {
  children: React.ReactNode
  className?: string
  highlightClassName?: string
}

export function MotionNavigationMenuList({
  children,
  className,
  highlightClassName,
}: MotionNavigationMenuListProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [itemRects, setItemRects] = useState<DOMRect[]>([])
  const listRef = useRef<HTMLUListElement>(null)
  const itemRefs = useRef<(HTMLLIElement | null)[]>([])

  const childrenArray = React.Children.toArray(children)

  useEffect(() => {
    const rects = itemRefs.current.map((el) =>
      el ? el.getBoundingClientRect() : new DOMRect()
    )
    setItemRects(rects)
  }, [childrenArray.length])

  const updateRects = useCallback(() => {
    const rects = itemRefs.current.map((el) =>
      el ? el.getBoundingClientRect() : new DOMRect()
    )
    setItemRects(rects)
  }, [])

  useEffect(() => {
    if (hoveredIndex === null) return
    const timer = setInterval(updateRects, 100)
    return () => clearInterval(timer)
  }, [hoveredIndex, updateRects])

  return (
    <ul
      ref={listRef}
      onMouseLeave={() => setHoveredIndex(null)}
      className={cn("relative flex items-center gap-1", className)}
    >
      {hoveredIndex !== null && itemRects[hoveredIndex] && listRef.current && (
        <motion.li
          layoutId="menu-highlight"
          className={cn(
            "absolute pointer-events-none",
            highlightClassName
          )}
          style={{
            left: itemRects[hoveredIndex].left - (listRef.current.getBoundingClientRect().left),
            top: itemRects[hoveredIndex].top - (listRef.current.getBoundingClientRect().top),
            width: itemRects[hoveredIndex].width,
            height: itemRects[hoveredIndex].height,
          }}
          transition={{
            type: "spring",
            stiffness: 350,
            damping: 32,
          }}
        />
      )}
      {React.Children.map(children, (child, index) => (
        <li
          ref={(el) => { itemRefs.current[index] = el }}
          onMouseEnter={() => setHoveredIndex(index)}
          className="relative"
        >
          {child}
        </li>
      ))}
    </ul>
  )
}

// ─── Item ───────────────────────────────────────────────────────────────

interface MotionNavigationMenuItemProps {
  children: React.ReactNode
  value?: string
  className?: string
}

export function MotionNavigationMenuItem({
  children,
  value,
  className,
}: MotionNavigationMenuItemProps) {
  const { setActiveValue, viewport } = useMenuContext()
  const itemId = useId()
  const itemValue = value ?? itemId

  const childrenArray = React.Children.toArray(children)

  const content = childrenArray.find(
    (child) =>
      React.isValidElement(child) && child.type === MotionNavigationMenuContent
  )
  const indicator = childrenArray.find(
    (child) =>
      React.isValidElement(child) && child.type === MotionNavigationMenuIndicator
  )

  const handleMouseEnter = () => {
    if (content || indicator) setActiveValue(itemValue)
  }

  const handleMouseLeave = () => {
    if (content || indicator) setActiveValue("")
  }

  if (viewport && (content || indicator)) {
    const wrappedChildren = childrenArray.map((child) => {
      if (
        React.isValidElement(child) &&
        child.type === MotionNavigationMenuContent
      ) {
        return React.cloneElement(child as React.ReactElement<any>, {
          _itemValue: itemValue,
          _viewport: true,
        })
      }
      if (
        React.isValidElement(child) &&
        child.type === MotionNavigationMenuIndicator
      ) {
        return React.cloneElement(child as React.ReactElement<any>, {
          _itemValue: itemValue,
          _viewport: true,
        })
      }
      return child
    })

    return (
      <div
        className={cn("relative", className)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {wrappedChildren}
      </div>
    )
  }

  return (
    <div
      className={cn("relative", className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  )
}

// ─── Trigger ────────────────────────────────────────────────────────────

interface MotionNavigationMenuTriggerProps {
  children: React.ReactNode
  className?: string
}

export function MotionNavigationMenuTrigger({
  children,
  className,
}: MotionNavigationMenuTriggerProps) {
  const { activeValue } = useMenuContext()

  return (
    <button
      type="button"
      className={cn(
        "px-4 py-2 text-sm font-medium transition-colors",
        activeValue ? "text-foreground" : "text-muted-foreground hover:text-foreground",
        className
      )}
      aria-expanded={!!activeValue}
    >
      {children}
    </button>
  )
}

// ─── Content ────────────────────────────────────────────────────────────

interface MotionNavigationMenuContentProps {
  children: React.ReactNode
  className?: string
  highlightClassName?: string
  innerClassName?: string
  _itemValue?: string
  _viewport?: boolean
}

export function MotionNavigationMenuContent({
  children,
  className,
  highlightClassName,
  innerClassName,
  _itemValue,
  _viewport,
}: MotionNavigationMenuContentProps) {
  const { activeValue, springStiffness, springDamping, springBounce, viewport } = useMenuContext()
  const contentRef = useRef<HTMLDivElement>(null)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [linkRects, setLinkRects] = useState<DOMRect[]>([])
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([])
  const viewportCtx = useViewportContext()

  const childrenArray = React.Children.toArray(children)

  const isVisible = viewport ? activeValue === _itemValue : activeValue === _itemValue

  useEffect(() => {
    const rects = linkRefs.current.map((el) =>
      el ? el.getBoundingClientRect() : new DOMRect()
    )
    setLinkRects(rects)
  }, [childrenArray.length, isVisible])

  const content = (
    <div
      ref={contentRef}
      className={cn("p-4", className)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      {highlightClassName && (
        <>
          {hoveredIndex !== null && linkRects[hoveredIndex] && (
            <motion.div
              layoutId="content-highlight"
              className={cn("absolute pointer-events-none", highlightClassName)}
              style={{
                left: linkRects[hoveredIndex].left - (contentRef.current?.getBoundingClientRect().left ?? 0),
                top: linkRects[hoveredIndex].top - (contentRef.current?.getBoundingClientRect().top ?? 0),
                width: linkRects[hoveredIndex].width,
                height: linkRects[hoveredIndex].height,
              }}
              transition={{
                type: "spring",
                stiffness: springStiffness,
                damping: springDamping,
                bounce: springBounce,
              }}
            />
          )}
        </>
      )}
      <div className={cn("relative", innerClassName)}>
        {React.Children.map(children, (child, index) => {
          if (React.isValidElement(child) && child.type === MotionNavigationMenuLink) {
            return React.cloneElement(child as React.ReactElement<any>, {
              _onHover: () => setHoveredIndex(index),
              _refCallback: (el: HTMLAnchorElement | null) => { linkRefs.current[index] = el },
            })
          }
          return child
        })}
      </div>
    </div>
  )

  if (_viewport) {
    return (
      <div
        style={{ display: isVisible ? "block" : "none" }}
        ref={(el) => {
          if (el && _itemValue) {
            const rect = el.getBoundingClientRect()
            viewportCtx.registerContent(_itemValue, rect)
          }
        }}
      >
        {isVisible && content}
      </div>
    )
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{
            type: "spring",
            stiffness: springStiffness,
            damping: springDamping,
            bounce: springBounce,
          }}
          className="absolute top-full left-0 z-50"
        >
          {content}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// ─── Link ───────────────────────────────────────────────────────────────

interface MotionNavigationMenuLinkProps {
  children: React.ReactNode
  href?: string
  className?: string
  _onHover?: () => void
  _refCallback?: (el: HTMLAnchorElement | null) => void
}

export function MotionNavigationMenuLink({
  children,
  href,
  className,
  _onHover,
  _refCallback,
}: MotionNavigationMenuLinkProps) {
  return (
    <a
      ref={_refCallback}
      href={href}
      onMouseEnter={_onHover}
      className={cn(
        "flex flex-col gap-0.5 rounded-md px-3 py-2 transition-colors hover:bg-primary/5",
        className
      )}
    >
      {children}
    </a>
  )
}

// ─── Indicator ──────────────────────────────────────────────────────────

interface MotionNavigationMenuIndicatorProps {
  className?: string
  _itemValue?: string
  _viewport?: boolean
}

export function MotionNavigationMenuIndicator({
  className,
  _itemValue,
  _viewport,
}: MotionNavigationMenuIndicatorProps) {
  const { activeValue, springStiffness, springDamping, springBounce } = useMenuContext()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const isVisible = activeValue === _itemValue

  if (!mounted) return null

  if (_viewport) {
    return (
      <div style={{ display: "none" }} />
    )
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scaleX: 0.5 }}
          animate={{ opacity: 1, scaleX: 1 }}
          exit={{ opacity: 0, scaleX: 0.5 }}
          transition={{
            type: "spring",
            stiffness: springStiffness,
            damping: springDamping,
            bounce: springBounce,
          }}
          className={cn(
            "absolute -bottom-1 left-1/2 h-0.5 w-4 -translate-x-1/2 rounded-full bg-primary",
            className
          )}
        />
      )}
    </AnimatePresence>
  )
}
