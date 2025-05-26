'use client';
import React, { useState } from 'react';

import { Form, Label } from 'radix-ui';
import {
  Section,
  TextField,
  Card,
  Box,
  Separator,
  Text,
  Strong,
} from '@radix-ui/themes';

import WinRateDropdown from './components/win-rate-dropdown';

type FormStateT = {
  winRatePercent?: string;
  currentRankPts?: string;
};

//https://www.serebii.net/tcgpocket/rankedmatch/seasona2b.shtml
interface Rank {
  [key: string]: string;
}
type RankType =
  | 'beginner'
  | 'pokeball'
  | 'greatball'
  | 'ultraball'
  | 'masterball';

const ranks: Rank[] = [
  { '0': 'beginner_1' },
  { '20': 'beginner_2' },
  { '50': 'beginner_3' },
  { '95': 'beginner_4' },
  { '145': 'pokeball_1' },
  { '195': 'pokeball_2' },
  { '245': 'pokeball_3' },
  { '300': 'pokeball_4' },
  { '355': 'greatball_1' },
  { '420': 'greatball_2' },
  { '490': 'greatball_3' },
  { '600': 'greatball_4' },
  { '710': 'ultraball_1' },
  { '860': 'ultraball_2' },
  { '1010': 'ultraball_3' },
  { '1225': 'ultraball_4' },
  { '1450': 'masterball' },
];

const POINTS_PER_WIN = 10;
const pointsPerLossByRank: Record<RankType, number> = {
  beginner: 0,
  pokeball: -5,
  greatball: -5,
  ultraball: -7,
  masterball: -10,
};

const calc = ({ winRatePercent = '0', currentRankPts = '0' }: FormStateT) => {
  const winRateDecimals = Number(winRatePercent) / 100;

  const currentRankLevel = ranks.findLast(
    (o) => Number(Object.keys(o)[0]) <= Number(currentRankPts),
  );

  if (!currentRankLevel) {
    return {
      avgPtsPerGame: 0,
      gamesNeeded: 0,
      error: 'No rank found for the given points',
    };
  }

  let [currentRankFloor, currentRankType] = Object.entries(currentRankLevel)[0];
  const currentRank = currentRankType?.match(/\b(?:\D*\d*)([A-Za-z]+)/)?.[0];

  const pointsPerLoss =
    pointsPerLossByRank[currentRank as keyof typeof pointsPerLossByRank];

  const avgPtsPerGame =
    winRateDecimals * POINTS_PER_WIN + (1 - winRateDecimals) * pointsPerLoss;

  const gamesNeeded = (Number(currentRankPts) - 710) / avgPtsPerGame;

  console.log(pointsPerLoss, avgPtsPerGame);
  return {
    avgPtsPerGame,
    gamesNeeded,
  };
};

const RoadToMasterballCalculator = () => {
  const [formState, setFormState] = useState<FormStateT>({
    winRatePercent: '0',
    currentRankPts: '0',
  });
  const { winRatePercent } = formState;

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));

    const { winRatePercent } = data;
    setFormState(data);
  };

  const { avgPtsPerGame, gamesNeeded } = calc(formState);

  return (
    <Box>
      <Card className="my-3">
        <Strong>Calculations:</Strong>
        <Separator my="3" size="4" />
        <Text>
          Average Point per Game: ({winRatePercent}/100 * 10) + ((1 -
          {winRatePercent}/100) * -7)
        </Text>
      </Card>
      <Card>
        <Text>
          Win Rate: <Strong>{winRatePercent}%</Strong>
        </Text>
        <Separator my="3" size="4" />
        <Text>
          Average Point per Game: <Strong>{avgPtsPerGame}</Strong>
        </Text>
        <Separator my="3" size="4" />
        <Text>
          Games Needed: <Strong>{gamesNeeded}</Strong>
        </Text>
      </Card>

      <Separator my="3" size="4" />

      <Form.Root className="mx-auto max-w-sm" onSubmit={handleOnSubmit}>
        {/* <WinRateDropdown /> */}

        <Form.Field name="winRatePercent" className="my-3">
          <Form.Label className=" flex justify-between align-baseline">
            Win Rate %
          </Form.Label>
          <Form.Control asChild>
            <TextField.Root
              placeholder="Win rate percent?"
              type="number"
              min="0"
              max="100"
            ></TextField.Root>
          </Form.Control>
        </Form.Field>

        <Form.Field name="currentRankPts" className="my-3 ">
          <Form.Label className="flex justify-between align-baseline">
            Current Rank Points
          </Form.Label>
          <Form.Control asChild>
            <TextField.Root
              placeholder="Current rank points?"
              type="number"
              min="0"
              max="10000"
            ></TextField.Root>
          </Form.Control>
        </Form.Field>

        <Form.Submit className="rt-reset rt-BaseButton rt-r-size-2 rt-variant-solid rt-Button">
          Calculate
        </Form.Submit>
      </Form.Root>
    </Box>
  );
};

export default RoadToMasterballCalculator;
