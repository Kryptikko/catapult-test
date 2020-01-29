import {timeFilters, TIME_OPTIONS} from '../timeutils'

test('isAM shows that midnight is AM', () => {
  const midnight = "24:00";
  expect(timeFilters[TIME_OPTIONS.AM](midnight)).toBe(true);
});

test('isPM shows that midnight is AM', () => {
  const midnight = "24:00";
  expect(timeFilters[TIME_OPTIONS.PM](midnight)).toBe(false);
});

test('isPM shows that noon is PM', () => {
  const noon = "12:00";
  expect(timeFilters[TIME_OPTIONS.PM](noon)).toBe(true);
});

test('isAM shows that noon is PM', () => {
  const noon = "12:00";
  expect(timeFilters[TIME_OPTIONS.AM](noon)).toBe(false);
});
