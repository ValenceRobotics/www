"use client";
import {
  Box,
  Center,
  HStack,
  Stack,
  StackDivider,
  useDisclosure,
  Flex,
  Text,
  Img,
  chakra,
  useColorModeValue,
} from "@chakra-ui/react";
import * as React from "react";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

export function Navbar(props: { active: string }) {
  return (
    <Box bg="black" color="white" py="3" position="sticky" top="0" zIndex="100">
      <Box as="header" height="16" position="relative">
        <Box
          height="100%"
          // mx="auto"
          px={{
            base: "8",
            md: "8",
          }}
          pe={{
            base: "8",
            md: "8",
          }}
        >
          <Flex
            as="nav"
            aria-label="Site navigation"
            align="center"
            justify="space-between"
            height="100%"
          >
            <motion.a href="/" whileHover={{ scale: 1.1 }}>
              <Img
                src="/logo_dark.png"
                h="3rem"
                display="inline"
                mr="3"
                mt="-1"
              />
              <Text
                className="font-heading font-name"
                as="h1"
                fontSize="3xl"
                fontWeight="extrabold"
                maxW="48rem"
                display="inline"
                color="#F4822F"
              >
                Valence
              </Text>
              <Text
                className="font-heading font-name"
                as="h1"
                fontSize="3xl"
                fontWeight="extrabold"
                maxW="48rem"
                display="inline"
              >
                {" "}
                Robotics
              </Text>
            </motion.a>

            <NavContent.Desktop
              display={{
                base: "none",
                md: "flex",
              }}
              color="#6F6F6F"
              active={props.active}
            />
            <NavContent.Mobile
              display={{
                base: "flex",
                md: "none",
              }}
            />
          </Flex>
        </Box>
      </Box>
    </Box>
  );
}

const links = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Sponsor",
    href: "/sponsor",
  },
  {
    label: "Resources",
    href: "/resources",
  },
  // {
  //     label: 'Camps',
  //     href: '/camps',
  // }
];

function MobileNavContent(props: React.ComponentProps<typeof Box>) {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Box {...props}>
      <Center as="button" p="2" fontSize="2xl" onClick={onToggle} color="white">
        {isOpen ? <HiX /> : <HiOutlineMenu />}
      </Center>
      <NavList
        pos="absolute"
        insetX="0"
        bg="black"
        top="64px"
        animate={isOpen ? "enter" : "exit"}
      >
        <Stack
          spacing="0"
          divider={<StackDivider color="#b3b3b3" opacity={0.5} />}
        >
          {links.map((link, index) => (
            <NavListItem key={index}>
              <NavLink.Mobile color="white" href={link.href}>
                {link.label}
              </NavLink.Mobile>
            </NavListItem>
          ))}
          <NavListItem
            style={{
              flex: "1",
            }}
          ></NavListItem>
        </Stack>
      </NavList>
    </Box>
  );
}

interface DesktopNavContentProps {
  active: string;
  display: any;
  color: string;
}

function DesktopNavContent(props: DesktopNavContentProps) {
  return (
    <HStack spacing="8" align="stretch" {...props}>
      {links.map((link, index) => {
        if (link.label.toLowerCase() === props.active) {
          return (
            <NavLink.Desktop
              key={index}
              href={link.href}
              fontSize="xl"
              color="#b3b3b3"
              fontWeight="bold"
              _hover={{ color: "#828282" }}
            >
              {link.label}
            </NavLink.Desktop>
          );
        }
        return (
          <NavLink.Desktop
            key={index}
            href={link.href}
            fontSize="xl"
            fontWeight="bold"
            color="white"
            _hover={{ color: "#b3b3b3" }}
            className="font-heading"
          >
            {link.label}
          </NavLink.Desktop>
        );
      })}
    </HStack>
  );
}

const NavContent = {
  Mobile: MobileNavContent,
  Desktop: DesktopNavContent,
};

function DesktopNavLink(props: React.ComponentProps<typeof chakra.a>) {
  return (
    <chakra.a
      fontWeight="medium"
      display="flex"
      alignItems="center"
      justifyContent="center"
      borderBottom="2px"
      borderColor="transparent"
      transition="all 0.2s"
      _hover={{
        borderColor: "currentcolor",
        color: useColorModeValue("blue.600", "blue.200"),
      }}
      {...props}
    />
  );
}

function MobileNavLink(props: React.ComponentProps<typeof chakra.a>) {
  return (
    <chakra.a
      display="block"
      textAlign="center"
      fontWeight="bold"
      py="5"
      fontSize="lg"
      color="white"
      w="full"
      _hover={{
        bg: "blackAlpha.200",
      }}
      {...props}
    />
  );
}

const NavLink = {
  Mobile: MobileNavLink,
  Desktop: DesktopNavLink,
};

const MotionList = motion(chakra.ul);
function NavList(props: React.ComponentProps<typeof MotionList>) {
  const variants = {
    init: {
      opacity: 0,
      y: -4,
      display: "none",
      transition: {
        duration: 0,
      },
    },
    enter: {
      opacity: 1,
      y: 0,
      display: "block",
      transition: {
        duration: 0.15,
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      y: -4,
      transition: {
        duration: 0.1,
      },
      transitionEnd: {
        display: "none",
      },
    },
  };
  return (
    <MotionList opacity="0" initial="init" variants={variants} {...props} />
  );
}

const MotionListItem = motion(chakra.li);
function NavListItem(props: React.ComponentProps<typeof MotionListItem>) {
  const variants = {
    exit: {
      opacity: 0,
      y: 4,
    },
    enter: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
      },
    },
  };
  return <MotionListItem variants={variants} {...props} />;
}
