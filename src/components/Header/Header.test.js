import { render } from 'utils/test-utils';
import Header from './Header';
import 'jest-styled-components';

it('Compare Snapshots', () => {
  const { container } = render(<Header />);
  expect(container.firstChild).toMatchSnapshot();
});
