import { delay } from '../../client/src/utils';

jest.useFakeTimers();

test('delay on 1 second', () => {
  const callback = jest.fn();

  delay(1000, callback);

  jest.advanceTimersByTime(1000);

  expect(callback).toBeCalled();
  expect(callback).toHaveBeenCalledTimes(1);
});
