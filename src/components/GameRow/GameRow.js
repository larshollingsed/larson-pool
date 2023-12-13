import { GridItem, Text, Grid, Divider } from "@chakra-ui/react";
import React from "react";

const GameRow = ({ name, location, date, time, spread, teams }) => (
  <Grid templateColumns={{ md: 'repeat(4, 1fr)'}}>
    <GridItem colSpan={{ base: 4, md: 2 }}>
      <Text size="lg" as="b">{name}</Text>
      <Text>{location}</Text>
      <Text>{date} {time}</Text>
      <Text>{spread}</Text>
      <Divider size="3xl" margin="10px 0"/>
    </GridItem>
    {teams.map((team) => (
      <GridItem colSpan={{ base: 2, md: 1 }}>
        <Text size="lg" as="b">{team.name}</Text>
        <Text>{team.school}</Text>
        <Text>{team.record}</Text>
      </GridItem>
    ))}
    <Divider size="3xl" margin="20px 0"/>
  </Grid>
);

export default GameRow;