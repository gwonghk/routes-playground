import { useState } from 'react';
import { DropdownMenu, Button } from '@radix-ui/themes';

const WinRateDropdown = () => {
  const options = ['45', '50', '55', '60', '65'];
  const [winRate, setWinRate] = useState(options[0]);

  const handleOnValueChange = (value: (typeof options)[number]) => {
    setWinRate(value);
  };

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <Button>
          {winRate + '%'}
          <DropdownMenu.TriggerIcon />
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <DropdownMenu.RadioGroup
          value={winRate}
          onValueChange={handleOnValueChange}
        >
          {options.map((option, i) => (
            <DropdownMenu.RadioItem key={option + i} value={option}>
              {option + '%'}
            </DropdownMenu.RadioItem>
          ))}
        </DropdownMenu.RadioGroup>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};

export default WinRateDropdown;
