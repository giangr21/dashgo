import {
  Box,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerCloseButton,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useSideBarDrawer } from "../../contexts/SideBarDrawerContext";
import { SideBarNav } from "./SidebarNav";

export function SideBar() {
  const { isOpen, onClose } = useSideBarDrawer();

  const isDrawerSidebar = useBreakpointValue({
    base: true,
    lg: false,
  });

  if (isDrawerSidebar) {
    return (
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent bg="gray.800" p="4">
            <DrawerCloseButton mt="6" />
            <DrawerHeader>Navegacao</DrawerHeader>
            <DrawerBody>
              <SideBarNav />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    );
  }

  return (
    <h1>
      <Box as="aside" w="64" mr="8">
        <SideBarNav />
      </Box>
    </h1>
  );
}
