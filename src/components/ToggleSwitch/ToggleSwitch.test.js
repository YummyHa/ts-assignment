import { render } from 'utils/test-utils';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ToggleSwitch from './ToggleSwitch';
import 'jest-styled-components';

it('Compare Snapshots', () => {
  const { container } = render(<ToggleSwitch />);
  expect(container.firstChild).toMatchSnapshot();
});

it('Toggle switch successfully', () => {
  const clickFn = jest.fn();
  render(<ToggleSwitch onSwitch={clickFn} />);
  const toggleSwitch = screen.getByTestId("toggle-switch");
  userEvent.click(toggleSwitch);
  expect(clickFn).toBeCalled();
});
