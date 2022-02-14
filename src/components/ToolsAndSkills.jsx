import React from 'react';
import {
  Container, Spacer, Text, Card, Grid, Tooltip,
} from '@nextui-org/react';
import Fade from 'react-reveal/Fade';
import { useMediaQuery } from 'react-responsive';

import { toolsAndSkills } from '../json/ToolsAndSkills.json';

function ToolsAndSkills() {
  const isMobile = useMediaQuery({
    query: '(max-width: 650px)',
  });

  const isTab = useMediaQuery({
    query: '(max-width: 960px)',
  });

  return (
    <Container css={{
      '@md': {
        width: '960px',
      },
    }}
    >
      <Spacer y={3.5} />
      <Fade bottom>
        <Text weight="normal" css={{ fontSize: '2rem' }}>Tools & Skills</Text>
      </Fade>
      <Spacer y={0.75} />
      <Grid.Container
        gap={2}
        justify="center"
        css={{
          width: isTab ? '100%' : '820px', margin: '0 auto', padding: isMobile ? '0' : '0 0 0 40px',
        }}
      >
        {
          toolsAndSkills.map((items, index) => (
            <Grid xs={isMobile ? 6 : 4} sm={4} md={3}>
              <Fade bottom delay={200 * index + 1}>
                <Tooltip content={items.name} placement="top" offset={isTab ? 50 : 95}>
                  <Card css={{ width: '125px', height: '125px', justifyContent: 'center' }}>
                    <img
                      src={items.picture}
                      width="auto"
                      height="auto"
                      className="tools-and-skills-picture"
                      alt={items.name}
                    />
                  </Card>
                </Tooltip>
              </Fade>
            </Grid>
          ))
        }
      </Grid.Container>
      <Spacer y={4} />
    </Container>
  );
}

export default ToolsAndSkills;
