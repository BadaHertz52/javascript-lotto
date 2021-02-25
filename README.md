<p align="middle" >
  <img width="200px;" src="./src/images/lotto_ball.png"/>
</p>
<h2 align="middle">level1 - 행운의 로또</h2>
<p align="middle">자바스크립트로 구현 하는 로또 어플리케이션</p>
<p align="middle">
<img src="https://img.shields.io/badge/version-1.0.0-blue?style=flat-square" alt="template version"/>
<img src="https://img.shields.io/badge/language-html-red.svg?style=flat-square"/>
<img src="https://img.shields.io/badge/language-css-blue.svg?style=flat-square"/>
<img src="https://img.shields.io/badge/language-js-yellow.svg?style=flat-square"/>
<a href="https://github.com/daybrush/moveable/blob/master/LICENSE" target="_blank">
  <img src="https://img.shields.io/github/license/daybrush/moveable.svg?style=flat-square&label=license&color=08CE5D"/>
  </a>
</p>

## 🔥 Projects!

<p align="middle">
  <img width="400" src="./src/images/lotto_ui.png">
</p>

### 🎯 step1 구입 기능

- [x] 로또 구입 금액을 입력하면, 금액에 해당하는 로또를 발급해야 한다.
  - [x] 정상적인 구매가 완료되면 구매 안내 메시지를 보여준다 ex) 로또 N개 구매 완료. 거스름돈 : M원
  - [x] 금액은 최소 1000원 부터 입력이 가능하다. => 1000원 이하일 경우 `alert`
  - [x] 금액은 정수여야 한다.
- [x] 로또 1장의 가격은 1,000원이다.
- [x] 소비자는 **자동 구매**를 할 수 있어야 한다.
  - [x] 로또 번호는 1부터 45까지의 숫자 중 중복되지 않은 6개의 숫자로 이루어져있다.
- [x] 복권 번호는 번호보기 토글 버튼을 클릭하면, 볼 수 있어야 한다.
- [x] 구매한 복권의 총 개수를 화면에 표시한다.

### 🎯🎯 step2 당첨 결과 기능

- [x] 결과 확인하기 버튼을 누르면 당첨 통계, 수익률을 모달로 확인할 수 있다.
- [x] 로또 당첨 금액은 고정되어 있는 것으로 가정한다.
- [x] 다시 시작하기 버튼을 누르면 초기화 되서 다시 구매를 시작할 수 있다.

### 🎯🎯🎯 step3 수동 구매

- [ ] 소비자는 수동 구매(스스로 구매 번호를 입력)를 할 수 있어야 한다.
  - 수동 구매를 위한 input UI는 스스로 구현한다.
- [ ] 수동 구매 후 남는 금액이 있다면 자동으로 구매할 수 있어야 한다.
- [ ] 위 기능들이 정상적으로 동작하는지 Cypress를 이용해 테스트한다.

<br>

### 구조도

![picture 1](images/e7394783b0bc03f6fbf6906e29e2efcab8e151bc1536102491339dfb2d704fb6.png)

## 🐞 Bug Report

버그를 발견한다면, [Issues](https://github.com/woowacourse/javascript-lotto/issues)에 등록해주세요.

<br>

## 📝 License

This project is [MIT](https://github.com/woowacourse/javascript-lotto/blob/main/LICENSE) licensed.
