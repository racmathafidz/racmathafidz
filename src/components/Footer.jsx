import React from "react";
import {
  Container,
  Spacer,
  Row,
  Col,
  Text,
  Link,
  Grid,
} from "@nextui-org/react";
import Fade from "react-reveal/Fade";
import { useMediaQuery } from "react-responsive";

function Footer() {
  const isMobile = useMediaQuery({
    query: "(max-width: 650px)",
  });

  return (
    <Container
      css={{
        borderTopWidth: "1px",
        borderTopStyle: "solid",
        borderColor: "#EAEAEA",
        "@md": {
          width: "960px",
        },
      }}
    >
      <Spacer y={1.5} />
      <Fade bottom delay={700}>
        <Grid.Container gap={2} justify="flex-start">
          <Grid xs={isMobile ? "12" : "8"} sm={8}>
            <Col>
              <Text weight="normal" css={{ fontSize: "2rem" }}>
                Get in touch
              </Text>
              <Text weight="light" css={{ fontSize: "18px" }}>
                For business inquiry please send email to{" "}
                <Link
                  href="mailto:racmathafidz@gmail.com"
                  css={{
                    textGradient:
                      "112deg, #AAFFEC -63.59%, #ff4ecd -20.3%, #0070F3 70.46%",
                  }}
                >
                  racmathafidz@gmail.com
                </Link>
              </Text>
            </Col>
          </Grid>
          <Grid xs={isMobile ? "12" : "4"} sm={4}>
            <Row
              justify={isMobile ? "flex-start" : "flex-end"}
              align="flex-end"
            >
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="mailto:racmathafidz@gmail.com"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 .02c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.99 6.98l-6.99 5.666-6.991-5.666h13.981zm.01 10h-14v-8.505l7 5.673 7-5.672v8.504z" />
                </svg>
              </a>
              <Spacer x={0.75} />
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.linkedin.com/in/racmathafidz"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
                </svg>
              </a>
              <Spacer x={0.75} />
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/racmathafidz"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </Row>
          </Grid>
        </Grid.Container>
      </Fade>
      <Spacer y={1.75} />
    </Container>
  );
}

export default Footer;
