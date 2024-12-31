import '@testing-library/jest-dom';

import { render } from '@/utils/jest/render';
import { screen } from '@testing-library/react';

import { Avatar } from '.';

describe('Avatar', () => {
  test('should match snapshot', () => {
    const { container } = render(
      <Avatar src="https://picsum.photos/id/2/5000/3333" />
    );

    expect(container).toMatchSnapshot();
  });

  test('should enabled content to receive click', () => {
    render(<Avatar src="https://picsum.photos/id/2/5000/3333" clickable />);

    const content = screen.getByTestId('root-avatar');
    const styles = getComputedStyle(content);

    expect(styles.cursor).toBe('pointer');
  });

  test('should not enabled content to receive click', () => {
    render(<Avatar src="https://picsum.photos/id/2/5000/3333" clickable={false} />);

    const content = screen.getByTestId('root-avatar');
    const styles = getComputedStyle(content);

    expect(styles.cursor).toBeFalsy();
  });
});
