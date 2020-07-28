import React, { useState } from "react"
import { PortalManager } from "@chakra-ui/portal"
import { Drawer, DrawerContent, DrawerOverlay } from "../src"

export default {
  title: "Drawer",
  decorators: [
    (StoryFn: Function) => (
      <PortalManager>
        <StoryFn />
      </PortalManager>
    ),
  ],
}

export const Basic = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button onClick={() => setOpen(!open)}>Open</button>
      <Drawer isOpen={open} onClose={() => setOpen(false)}>
        <DrawerOverlay>
          <DrawerContent>
            <div>This is the drawer content</div>
            <button>This is a button</button>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  )
}
