import React from "react";
import {
  Container,
  Spacer,
  Row,
  Col,
  Text,
  Button,
  Card,
  Grid,
  Tooltip,
} from "@nextui-org/react";
import Fade from "react-reveal/Fade";
import { useMediaQuery } from "react-responsive";

import { projects } from "../json/Project.json";

function HighlightedProject() {
  const isMobile = useMediaQuery({
    query: "(max-width: 650px)",
  });

  const isTab = useMediaQuery({
    query: "(max-width: 960px)",
  });

  return (
    <Container
      css={{
        "@md": {
          width: "960px",
        },
      }}
    >
      <Spacer y={4} />
      <Fade bottom delay={700}>
        <Text weight="normal" css={{ fontSize: "2rem" }}>
          Selected Projects
        </Text>
      </Fade>
      <Spacer y={0.9} />
      {projects
        .filter((project) => project.highlight === true)
        .map((highlightedProject, index) => (
          <Fade bottom delay={index === 0 ? 800 : 100 * index}>
            <Card hoverable>
              <Grid.Container
                gap={2}
                direction={isMobile || isTab ? "column-reverse" : "row"}
              >
                <Grid xs={12} sm={6} direction="column" justify="space-between">
                  <Col>
                    <Text weight="light" css={{ fontSize: "$lg" }}>
                      {highlightedProject.name}
                    </Text>
                    <Text weight="light" css={{ fontSize: "18px" }}>
                      {highlightedProject.description}
                    </Text>
                    <Spacer y={0.325} />
                    {highlightedProject.techStack.map((techStack, index) =>
                      index === highlightedProject.techStack.length - 1 ? (
                        <Text
                          weight="light"
                          css={{ display: "inline-block", fontSize: "18px" }}
                        >
                          {techStack}
                        </Text>
                      ) : (
                        <Text
                          weight="light"
                          css={{ display: "inline-block", fontSize: "18px" }}
                        >
                          {techStack}
                          &nbsp;&bull;&nbsp;
                        </Text>
                      )
                    )}
                  </Col>
                  <Spacer y={0.8} />
                  {/* {isMobile || isTab ? <Spacer y={0.8} /> : null} */}
                  {highlightedProject.private === true ? (
                    <Text
                      weight="light"
                      css={{ display: "inline-block", fontSize: "18px" }}
                    >
                      Private Project
                    </Text>
                  ) : (
                    <Row>
                      {highlightedProject.githubUrl && (
                        <Tooltip
                          content="Visit GitHub"
                          placement="top"
                          offset={isTab ? 50 : 95}
                        >
                          <Button
                            bordered
                            color="gradient"
                            auto
                            as="a"
                            rel="noopener noreferrer"
                            target="_blank"
                            href={highlightedProject.githubUrl}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                          </Button>
                          <Spacer x={isTab ? 0.25 : 0.5} />
                        </Tooltip>
                      )}
                      {highlightedProject.demoUrl && (
                        <Tooltip
                          content="Visit Website"
                          placement="top"
                          offset={isTab ? 50 : 95}
                        >
                          <Button
                            bordered
                            color="gradient"
                            auto
                            as="a"
                            rel="noopener noreferrer"
                            target="_blank"
                            href={highlightedProject.demoUrl}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 512 512"
                            >
                              <path
                                fill="#000000"
                                d="M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z"
                              />
                            </svg>
                          </Button>
                          <Spacer x={isTab ? 0.25 : 0.5} />
                        </Tooltip>
                      )}
                      {highlightedProject.playStoreUrl && (
                        <Tooltip
                          content="Visit Google Play Store"
                          placement="top"
                          offset={isTab ? 50 : 95}
                        >
                          <Button
                            bordered
                            color="gradient"
                            auto
                            as="a"
                            rel="noopener noreferrer"
                            target="_blank"
                            href={highlightedProject.playStoreUrl}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 512 512"
                            >
                              <path
                                fill="#000000"
                                d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"
                              />
                            </svg>
                          </Button>
                          <Spacer x={isTab ? 0.25 : 0.5} />
                        </Tooltip>
                      )}
                      {highlightedProject.appStoreUrl && (
                        <Tooltip
                          content="Visit Apple Apps Store"
                          placement="top"
                          offset={isTab ? 50 : 95}
                        >
                          <Button
                            bordered
                            color="gradient"
                            auto
                            as="a"
                            rel="noopener noreferrer"
                            target="_blank"
                            href={highlightedProject.appStoreUrl}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 512 512"
                            >
                              <path
                                fill="#000000"
                                d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM127 384.5c-5.5 9.6-17.8 12.8-27.3 7.3-9.6-5.5-12.8-17.8-7.3-27.3l14.3-24.7c16.1-4.9 29.3-1.1 39.6 11.4L127 384.5zm138.9-53.9H84c-11 0-20-9-20-20s9-20 20-20h51l65.4-113.2-20.5-35.4c-5.5-9.6-2.2-21.8 7.3-27.3 9.6-5.5 21.8-2.2 27.3 7.3l8.9 15.4 8.9-15.4c5.5-9.6 17.8-12.8 27.3-7.3 9.6 5.5 12.8 17.8 7.3 27.3l-85.8 148.6h62.1c20.2 0 31.5 23.7 22.7 40zm98.1 0h-29l19.6 33.9c5.5 9.6 2.2 21.8-7.3 27.3-9.6 5.5-21.8 2.2-27.3-7.3-32.9-56.9-57.5-99.7-74-128.1-16.7-29-4.8-58 7.1-67.8 13.1 22.7 32.7 56.7 58.9 102h52c11 0 20 9 20 20 0 11.1-9 20-20 20z"
                              />
                            </svg>
                          </Button>
                        </Tooltip>
                      )}
                    </Row>
                  )}
                </Grid>
                <Grid xs={12} sm={6}>
                  <img
                    src={highlightedProject.picture}
                    width="100%"
                    height="100%"
                    className="highlighted-project-picture"
                    alt={highlightedProject.name}
                  />
                </Grid>
              </Grid.Container>
            </Card>
            <Spacer y={2} />
          </Fade>
        ))}
    </Container>
  );
}

export default HighlightedProject;
