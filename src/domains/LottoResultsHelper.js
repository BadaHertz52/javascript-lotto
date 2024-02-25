import Bonus from './Bonus';
import LottoMachine from './LottoMachine';
import WinningLotto from './WinningLotto';

class LottoResultsHelper {
  /**
   * @param{LottoMachine} lottoMachine
   */
  #lottoMachine;

  /**
   * @param {{
   * winningLotto:WinningLotto|undefined,
   * bonus:Bonus|undefined
   * }} winningData
   */
  #winningData = {
    winningLotto: undefined,
    bonus: undefined,
  };

  get paymentAmount() {
    return this.#lottoMachine.paymentAmount;
  }

  get lottoTickets() {
    return JSON.parse(JSON.stringify(this.#lottoMachine.lottoTickets));
  }

  /**
   * @param {string} paymentAmountInput
   */
  generateLottoMachine(paymentAmountInput) {
    this.#lottoMachine = new LottoMachine(paymentAmountInput);
  }

  /**
   * @param {string} lottoNumbersInput
   */
  generateWinningLotto(lottoNumbersInput) {
    this.#winningData.winningLotto = new WinningLotto(lottoNumbersInput);
  }

  /**
   * @param {string} bonusNumberInput
   */
  generateBonus(bonusNumberInput) {
    this.#winningData.bonus = new Bonus(
      bonusNumberInput,
      this.#winningData.winningLotto.lottoNumbers,
    );
  }

  /**
   *
   * @return {{isBonus:boolean, matchedCount:number}[]} result
   */
  calculateMatchingResults() {
    return this.#lottoMachine.lottoTickets.map((lottoTicket) =>
      this.#winningData.winningLotto.compareLotto(
        lottoTicket,
        this.#winningData.bonus,
      ),
    );
  }
}

export default LottoResultsHelper;