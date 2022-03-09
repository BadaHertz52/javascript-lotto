export const ACTION = {
  SET_MONEY: 'money',
  PURCHASE_LOTTO: 'purchase-lotto',
  SET_MONEY_FORM_ERROR_MESSAGES: 'set-money-form-error-messages',
  TOGGLE_LOTTO_LIST: 'toggle-lotto-list',
  SET_WINNING_NUMBERS: 'set-winning-numbers',
  TOGGLE_STATISTICS_MODAL: 'toggle-statistics-modal',
  RESET: 'reset',
};

export const ERROR_MESSAGE = {
  OVER_MAX_MONEY: '십만원 이하로 입력해 주세요',
  NOT_DIVIDED_BY_THOUSAND: '천 단위로 입력해 주세요!',

  INVALID_WINNING_NUMBER_RANGE: '모든 값을 1 ~ 45 사이로 입력해 주세요!',
  DUPLICATE_WINNING_NUMBERS: '서로 다른 당첨 번호를 입력해 주세요!',
};

export const LOTTO = {
  RANGE: {
    MIN: 1,
    MAX: 45,
  },
  COUNT: 6,
  PRICE: 1000,
  MAX_PURCHASEABLE_COUNT: 100,
  PRIZE_MONEY: [0, 2000000000, 30000000, 1500000, 50000, 5000],
};

export const WINNING_NUM_PLACEHOLDER = '';

export const INITIAL_STATE = {
  money: 0,
  moneyFormErrorMessages: [],
  lottoList: [],
  lottoListVisibility: false,
  winningNumbers: {
    normal: Array(6).fill(WINNING_NUM_PLACEHOLDER),
    bonus: WINNING_NUM_PLACEHOLDER,
  },
  statisticsModalVisibility: false,
};

export const VALIDATION_ERROR_NAME = 'ValidationError';

export const DUPLICATE_ERROR_CLASS_NAMES = [
  'duplicate-error-1',
  'duplicate-error-2',
  'duplicate-error-3',
];
export const INVALID_RANGE_ERROR_CLASS_NAME = 'invalid-range-error';

export const LOTTO_BALL_COLORS = [
  ...Array(11).fill('orange'),
  ...Array(10).fill('blue'),
  ...Array(10).fill('red'),
  ...Array(10).fill('gray'),
  ...Array(5).fill('green'),
];