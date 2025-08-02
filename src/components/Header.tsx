import { Box, HStack } from "@chakra-ui/react";
import type { ReactElement } from "react";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMedium,
  FaStackOverflow,
} from "react-icons/fa";

type SocialLink = {
  icon: ReactElement;
  url: string;
};

const socials: SocialLink[] = [
  {
    icon: <FaEnvelope />,
    url: "mailto:hello@example.com",
  },
  {
    icon: <FaGithub />,
    url: "https://github.com",
  },
  {
    icon: <FaLinkedin />,
    url: "https://www.linkedin.com",
  },
  {
    icon: <FaMedium />,
    url: "https://medium.com",
  },
  {
    icon: <FaStackOverflow />,
    url: "https://stackoverflow.com",
  },
];

const Header = (): ReactElement => {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const targetId: string | undefined = event.currentTarget
      .getAttribute("href")
      ?.substring(1);
    const targetElement: HTMLElement | null = document.getElementById(
      targetId || ""
    );
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack gap="{5}">
              {socials.map((social: SocialLink) => (
                <a
                  key={social.url}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </a>
              ))}
            </HStack>
          </nav>
          <nav>
            <HStack gap={4}>
              <a href="#projects-section" onClick={handleClick}>
                Projects
              </a>
              <a href="#contact-me" onClick={handleClick}>
                Contact Me
              </a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};

export default Header;
