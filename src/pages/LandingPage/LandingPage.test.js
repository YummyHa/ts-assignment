import { render } from 'utils/test-utils';
import LandingPage from './LandingPage';
import 'jest-styled-components';

it('Compare Snapshots', () => {
  const { container } = render(<LandingPage />);
  expect(container.firstChild).toMatchSnapshot();
});
