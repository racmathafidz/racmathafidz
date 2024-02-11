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
                  {isMobile || isTab ? <Spacer y={0.8} /> : null}
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
                        <Button
                          light
                          color="primary"
                          size="xs"
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
                      )}
                      {highlightedProject.demoUrl && (
                        <Button
                          light
                          color="primary"
                          size="xs"
                          as="a"
                          rel="noopener noreferrer"
                          target="_blank"
                          href={highlightedProject.demoUrl}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                          >
                            <path d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z" />
                          </svg>
                        </Button>
                      )}
                      {highlightedProject.playStoreUrl && (
                        <Button
                          light
                          color="primary"
                          size="xs"
                          as="a"
                          rel="noopener noreferrer"
                          target="_blank"
                          href={highlightedProject.playStoreUrl}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="24"
                            viewBox="0 0 512 512"
                          >
                            <path d="M420.6 301.9a24 24 0 1 1 24-24 24 24 0 0 1 -24 24m-265.1 0a24 24 0 1 1 24-24 24 24 0 0 1 -24 24m273.7-144.5 47.9-83a10 10 0 1 0 -17.3-10h0l-48.5 84.1a301.3 301.3 0 0 0 -246.6 0L116.2 64.5a10 10 0 1 0 -17.3 10h0l47.9 83C64.5 202.2 8.2 285.6 0 384H576c-8.2-98.5-64.5-181.8-146.9-226.6" />
                          </svg>
                        </Button>
                      )}
                      {highlightedProject.appStoreUrl && (
                        <Button
                          light
                          color="primary"
                          size="xs"
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
                            <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                          </svg>
                        </Button>
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
