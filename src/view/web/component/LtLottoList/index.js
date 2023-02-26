import Lotto from '../../../../domain/lotto/Lotto';
import { default as LtFormControl } from '../LtFormControl';
import template from './index.html';

class LtLottoList extends LtFormControl {
  /** @type {HTMLUListElement} */
  $lottoList;

  /** @type {HTMLTemplateElement} */
  $lottoTemplate;

  /** @type {Lotto[]} */
  #lottos = [];

  static get observedAttributes() {
    return ['placeholder'];
  }

  getLottos() {
    return this.#lottos;
  }

  setLottos(lottos) {
    this.#lottos = lottos;
    this.render();
  }

  formResetCallback() {
    this.setLottos([]);
  }

  getRenderContent() {
    return template;
  }

  render() {
    super.render();

    const $lottos = this.#lottos.map((lotto) => {
      const $lotto = this.$lottoTemplate.content.cloneNode(true);
      $lotto.querySelector('.numbers').innerText = lotto.getLottoNumbers().join(', ');
      return $lotto;
    });
    this.$lottoList.dataset.count = this.#lottos.length;
    this.$lottoList.append(...$lottos);
  }
}

export default LtLottoList;