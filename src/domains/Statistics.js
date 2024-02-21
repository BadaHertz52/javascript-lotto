import { WINNING_RULE } from '../constants';

class Statistics {
  #ranks = [];

  #totalPrizes = 0;

  #profitRate = 0;

  get profitRate() {
    return this.#profitRate;
  }

  get totalPrizes() {
    return this.#totalPrizes;
  }

  get statisticsResult() {
    return this.#ranks.reduce(
      (acc, rank) => {
        acc[rank] += 1;
        return acc;
      },
      { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 },
    );
  }

  checkTickets(results) {
    results.forEach((result) => this.#checkTicket(result));
  }

  #checkTicket(result) {
    WINNING_RULE.forEach((value, key) => {
      const { matchedCount, isBonus } = value;

      const checkBonusMatch = matchedCount === 5;

      if (matchedCount !== result.matchedCount) return;

      if (checkBonusMatch && isBonus === result.isBonus) {
        this.#ranks.push(key);
      } else if (!checkBonusMatch) {
        this.#ranks.push(key);
      }
    });
  }

  calculateProfitRate(paymentAmount) {
    this.#calculateTotalPrize();
    this.#profitRate = Number(
      ((this.#totalPrizes / paymentAmount) * 100).toFixed(1),
    );
  }

  #calculateTotalPrize() {
    this.#totalPrizes = this.#ranks.reduce(
      (totalPrizes, rank) => totalPrizes + WINNING_RULE.get(rank).money,
      0,
    );
  }
}

export default Statistics;