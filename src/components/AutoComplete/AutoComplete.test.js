import { render } from 'utils/test-utils';
import AutoComplete from './AutoComplete';
import 'jest-styled-components';

it('Compare Snapshots', () => {
  const { container } = render(<AutoComplete />);
  expect(container.firstChild).toMatchSnapshot();
});
