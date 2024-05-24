import { describe, it, expect, beforeAll, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { MOCK_RADIO_GROUP_LIST } from './RadioGroup.mocks';
import RadioGroup from './RadioGroup';

beforeAll(() => {
  window.ResizeObserver =
    window.ResizeObserver ||
    vi.fn().mockImplementation(() => {
      return {
        disconnect: vi.fn(),
        observe: vi.fn(),
        unobserve: vi.fn(),
      };
    });
});

describe('[UI]: RadioGroup', () => {
  it('should render correctly', () => {
    render(
      <form>
        <RadioGroup radioDataList={MOCK_RADIO_GROUP_LIST} />
      </form>,
    );

    const radioElements = screen.getAllByRole('radio');
    const checkedRadioElement = screen.queryByRole('radio', { checked: true });

    expect(radioElements).toHaveLength(MOCK_RADIO_GROUP_LIST.length);
    expect(checkedRadioElement).toBeNull();
  });

  it('should render correctly with default value', () => {
    render(
      <form>
        <RadioGroup radioDataList={MOCK_RADIO_GROUP_LIST} defaultValue="3" />
      </form>,
    );

    const radioElements = screen.getAllByRole('radio');
    const checkedRadioElement = screen.getByRole('radio', { checked: true });

    expect(radioElements).toHaveLength(MOCK_RADIO_GROUP_LIST.length);
    expect(checkedRadioElement).toBeDefined();
    expect(checkedRadioElement.getAttribute('value')).toEqual('3');
  });

  it('should change active radio on click without defaultValue', async () => {
    render(
      <form>
        <RadioGroup radioDataList={MOCK_RADIO_GROUP_LIST} />
      </form>,
    );

    const radioElements = screen.getAllByRole('radio');
    const checkedRadioElement = screen.queryByRole('radio', { checked: true });

    expect(radioElements).toHaveLength(MOCK_RADIO_GROUP_LIST.length);
    expect(checkedRadioElement).toBeNull();

    await fireEvent.click(radioElements[1]);

    const checkedRadioElementAfterClick = screen.getByRole('radio', { checked: true });

    expect(checkedRadioElementAfterClick).toBeDefined();
    expect(checkedRadioElementAfterClick.getAttribute('value')).toEqual('2');
  });

  it('should change active radio on click with defaultValue', async () => {
    render(
      <form>
        <RadioGroup radioDataList={MOCK_RADIO_GROUP_LIST} defaultValue="3" />
      </form>,
    );

    const radioElements = screen.getAllByRole('radio');
    const checkedRadioElement = screen.getByRole('radio', { checked: true });

    expect(radioElements).toHaveLength(MOCK_RADIO_GROUP_LIST.length);
    expect(checkedRadioElement).toBeDefined();
    expect(checkedRadioElement.getAttribute('value')).toEqual('3');

    await fireEvent.click(radioElements[0]);

    const checkedRadioElementAfterClick = screen.getByRole('radio', { checked: true });

    expect(checkedRadioElementAfterClick).toBeDefined();
    expect(checkedRadioElementAfterClick.getAttribute('value')).toEqual('1');
  });

  it('should not change value if disabled', () => {
    render(
      <form>
        <RadioGroup radioDataList={MOCK_RADIO_GROUP_LIST} defaultValue="3" disabled />
      </form>,
    );

    const radioElements = screen.getAllByRole('radio');
    const checkedRadioElement = screen.getByRole('radio', { checked: true });

    expect(radioElements).toHaveLength(MOCK_RADIO_GROUP_LIST.length);
    expect(checkedRadioElement).toBeDefined();
    expect(checkedRadioElement.getAttribute('value')).toEqual('3');

    fireEvent.click(radioElements[0]);

    const checkedRadioElementAfterClick = screen.getByRole('radio', { checked: true });

    expect(checkedRadioElementAfterClick).toBeDefined();
    expect(checkedRadioElementAfterClick.getAttribute('value')).toEqual('3');
  });
});
