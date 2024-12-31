import '@testing-library/jest-dom';

import { FiEdit, FiSend } from 'react-icons/fi';

import theme from '@/styles/theme';
import { render } from '@/utils/jest/render';
import { screen } from '@testing-library/react';

import { Button } from '.';

describe('Button', () => {
  test('should match snapshot only label', () => {
    const { container } = render(<Button label="Botão" loading />);

    expect(container).toMatchSnapshot();
  });

  test('should match snapshot with icons', () => {
    const { container } = render(
      <Button
        label="Botão"
        iconLeft={<FiEdit size={20} color={theme.colors.surface} />}
        iconRight={<FiSend size={20} color={theme.colors.surface} />}
      />
    );

    expect(container).toMatchSnapshot();
  });

  test('should show label', () => {
    render(<Button label="Botão" />);

    const label = screen.getByTestId('root-button-label');

    expect(label).toBeDefined();
  });

  test('should show icon left', () => {
    render(
      <Button
        iconLeft={<FiEdit size={20} color={theme.colors.surface} />}
        label="Botão"
      />
    );

    const element = screen.getByTestId('root-button-icon-left');

    expect(element).toBeDefined();
  });

  test('should not show icon left', () => {
    render(
      <Button
        iconLeft={undefined}
        label="Botão"
      />
    );

    const element = screen.queryByTestId('root-button-icon-left');

    expect(element).toBeNull();
  });

  test('should hide label when responsiveMode is enabled', () => {
    render(<Button responsiveMode label="Botão" />);

    const element = screen.queryByTestId('root-button-label');

    expect(element).toBeNull();
  });

  test('should show icon right', () => {
    render(
      <Button
        iconRight={<FiSend size={20} color={theme.colors.surface} />}
        label="Botão"
      />
    );

    const element = screen.getByTestId('root-button-icon-right');

    expect(element).toBeDefined();
  });

  test('should not show icon right', () => {
    render(
      <Button
        iconRight={undefined}
        label="Botão"
      />
    );

    const element = screen.queryByTestId('root-button-icon-right');

    expect(element).toBeNull();
  });

  test('should show loading behavior', () => {
    render(
      <Button
        loading
        label="Botão"
      />
    );

    const element = screen.getByTestId('root-button-loading');

    expect(element).toBeDefined();
  });

  test('should not show loading behavior', () => {
    render(<Button loading={false} label="Botão" />);

    const element = screen.queryByTestId('root-button-loading');

    expect(element).toBeNull();
  });
});
