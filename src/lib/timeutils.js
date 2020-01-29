function _timetoNumber(time) {
  return Math.ceil(time.replace(":", ""))
}

function _inRange(x, min, max) {
  return x >= min && x <= max;
}

function _isAM(x) {
  return _inRange(_timetoNumber(x), 0, 1200);
}

function _isPM(x) {
  return _inRange(_timetoNumber(x), 1200, 2400);
}

export const TIME_OPTIONS = {
  AM: "AM",
  PM: "PM",
  ALL: "ALL",
}

export const timeFilters = {
  [TIME_OPTIONS.PM]: _isPM,
  [TIME_OPTIONS.AM]: _isAM,
  [TIME_OPTIONS.ALL]: () => true
}
