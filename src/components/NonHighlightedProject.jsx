import React from "react";
import {
  Container,
  Spacer,
  Row,
  Col,
  Text,
  Card,
  Grid,
  Tooltip,
  Button,
} from "@nextui-org/react";
import Fade from "react-reveal/Fade";
import { useMediaQuery } from "react-responsive";

import { projects } from "../json/Project.json";

function NonHighlightedProject() {
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
      <Spacer y={2} />
      <Fade bottom>
        <Text weight="normal" css={{ fontSize: "2rem" }}>
          Other Projects
        </Text>
      </Fade>
      <Spacer y={0.5} />
      <Grid.Container gap={2} justify="flex-start">
        {projects
          .filter((project) => project.highlight === false)
          .map((nonHighlightedProject, index) => (
            <Grid xs={!isMobile ? 6 : 12} sm={6} md={4}>
              <Fade bottom delay={100 * (index < 3 ? index : index - 3)}>
                <Card hoverable css={{ height: "100%" }}>
                  <Grid
                    xs={12}
                    direction="column"
                    justify="space-between"
                    css={{
                      height: "100%",
                      justify: "space-between",
                      padding: 0,
                    }}
                  >
                    <Col>
                      <img
                        src={nonHighlightedProject.picture}
                        width="100%"
                        height="auto"
                        className="nonhighlighted-project-picture"
                        alt={nonHighlightedProject.name}
                      />
                      <Spacer y={0.275} />
                      <Text weight="light" css={{ fontSize: "$md" }}>
                        {nonHighlightedProject.name}
                      </Text>
                      <Spacer y={0.2} />
                      <Text weight="light" css={{ fontSize: "16px" }}>
                        {nonHighlightedProject.description}
                      </Text>
                      <Spacer y={0.4} />
                      {nonHighlightedProject.techStack.map((techStack, index) =>
                        index === nonHighlightedProject.techStack.length - 1 ? (
                          <Text
                            weight="light"
                            css={{ display: "inline-block", fontSize: "16px" }}
                          >
                            {techStack}
                          </Text>
                        ) : (
                          <Text
                            weight="light"
                            css={{ display: "inline-block", fontSize: "16px" }}
                          >
                            {techStack}
                            &nbsp;&bull;&nbsp;
                          </Text>
                        )
                      )}
                      <Spacer y={0.4} />
                      <Text
                        weight="light"
                        css={{ fontSize: "16px", color: "$accents5" }}
                      >
                        {nonHighlightedProject.year}
                      </Text>
                      <Spacer y={1} />
                    </Col>
                    {nonHighlightedProject.private === true ? (
                      <Text
                        weight="light"
                        css={{ display: "inline-block", fontSize: "18px" }}
                      >
                        Private Project
                      </Text>
                    ) : (
                      <Row>
                        {nonHighlightedProject.figmaUrl && (
                          <Tooltip
                            content="Visit Figma"
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
                              href={nonHighlightedProject.figmaUrl}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="20"
                                viewBox="0 0 384 512"
                              >
                                <path d="M14 95.8C14 42.9 56.9 0 109.8 0H274.2C327.1 0 370 42.9 370 95.8C370 129.3 352.8 158.8 326.7 175.9C352.8 193 370 222.5 370 256C370 308.9 327.1 351.8 274.2 351.8H272.1C247.3 351.8 224.7 342.4 207.7 326.9V415.2C207.7 468.8 163.7 512 110.3 512C57.5 512 14 469.2 14 416.2C14 382.7 31.2 353.2 57.2 336.1C31.2 319 14 289.5 14 256C14 222.5 31.2 193 57.2 175.9C31.2 158.8 14 129.3 14 95.8zM176.3 191.6H109.8C74.2 191.6 45.4 220.4 45.4 256C45.4 291.4 74 320.2 109.4 320.4C109.5 320.4 109.7 320.4 109.8 320.4H176.3V191.6zM207.7 256C207.7 291.6 236.5 320.4 272.1 320.4H274.2C309.7 320.4 338.6 291.6 338.6 256C338.6 220.4 309.7 191.6 274.2 191.6H272.1C236.5 191.6 207.7 220.4 207.7 256zM109.8 351.8C109.7 351.8 109.5 351.8 109.4 351.8C74 352 45.4 380.8 45.4 416.2C45.4 451.7 74.6 480.6 110.3 480.6C146.6 480.6 176.3 451.2 176.3 415.2V351.8H109.8zM109.8 31.4C74.2 31.4 45.4 60.2 45.4 95.8C45.4 131.4 74.2 160.2 109.8 160.2H176.3V31.4H109.8zM207.7 160.2H274.2C309.7 160.2 338.6 131.4 338.6 95.8C338.6 60.2 309.7 31.4 274.2 31.4H207.7V160.2z" />
                              </svg>
                            </Button>
                            <Spacer x={0.3} />
                          </Tooltip>
                        )}
                        {nonHighlightedProject.githubUrl && (
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
                              href={nonHighlightedProject.githubUrl}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="19"
                                viewBox="0 0 24 24"
                              >
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                              </svg>
                            </Button>
                            <Spacer x={0.3} />
                          </Tooltip>
                        )}
                        {nonHighlightedProject.demoUrl && (
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
                              href={nonHighlightedProject.demoUrl}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                viewBox="0 0 512 512"
                              >
                                <path
                                  fill="#000000"
                                  d="M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z"
                                />
                              </svg>
                            </Button>
                          </Tooltip>
                        )}
                      </Row>
                    )}
                  </Grid>
                  <Spacer y={1} />
                </Card>
              </Fade>
            </Grid>
          ))}
      </Grid.Container>
    </Container>
  );
}

export default NonHighlightedProject;
