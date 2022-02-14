import React from 'react';
import {
  Container, Spacer, Row, Col, Text, Card, Grid,
} from '@nextui-org/react';
import Fade from 'react-reveal/Fade';
import { useMediaQuery } from 'react-responsive';

import { projects } from '../json/Project.json';

function NonHighlightedProject() {
  const isMobile = useMediaQuery({
    query: '(max-width: 650px)',
  });

  return (
    <Container css={{
      '@md': {
        width: '960px',
      },
    }}
    >
      <Spacer y={2} />
      <Fade bottom>
        <Text weight="normal" css={{ fontSize: '2rem' }}>Other Projects</Text>
      </Fade>
      <Spacer y={0.5} />
      <Grid.Container gap={2} justify="flex-start">
        {
          projects
            .filter((project) => project.highlight === false)
            .map((nonHighlightedProject, index) => (
              <Grid xs={!isMobile ? 6 : 12} sm={6} md={4}>
                <Fade bottom delay={500 * index + 1}>
                  <Card hoverable css={{ height: '100%' }}>
                    <Grid
                      xs={12}
                      direction="column"
                      justify="space-between"
                      css={{
                        height: '100%', justify: 'space-between', padding: 0,
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
                        <Text weight="light" css={{ fontSize: '$md' }}>{nonHighlightedProject.name}</Text>
                        <Spacer y={0.2} />
                        <Text weight="light" css={{ fontSize: '16px' }}>{nonHighlightedProject.description}</Text>
                        <Spacer y={0.275} />
                        {
                      nonHighlightedProject.techStack.map((techStack, index) => (index === nonHighlightedProject.techStack.length - 1 ? (
                        <Text weight="light" css={{ display: 'inline-block', fontSize: '16px' }}>
                          {techStack}
                        </Text>
                      ) : (
                        <Text weight="light" css={{ display: 'inline-block', fontSize: '16px' }}>
                          {techStack}
                          &nbsp;&bull;&nbsp;
                        </Text>
                      )))
                    }
                        <Spacer y={1} />
                      </Col>
                      <Row>
                        <Spacer x={0.5} />
                        <a
                          rel="noopener noreferrer"
                          target="_blank"
                          href={nonHighlightedProject.githubUrl}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                        </a>
                        <Spacer x={1.5} />
                        <a
                          rel="noopener noreferrer"
                          target="_blank"
                          href={nonHighlightedProject.demoUrl}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z" /></svg>
                        </a>
                      </Row>
                    </Grid>
                    <Spacer y={1} />
                  </Card>
                </Fade>
              </Grid>
            ))
        }
      </Grid.Container>
    </Container>
  );
}

export default NonHighlightedProject;
