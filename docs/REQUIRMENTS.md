# 로또 미션 -1단계

## 기능 구현 목록

### 로또

- [x] 로또는 1~45까지의 정수 6개로 이루어진다.(중복 없음)
  - 로또 구입은 1,000원 단위로만 가능하다.
  - 로또는 50장까지만 구입할 수 있다.

### 당첨 로또, 보너스 번호

- [x] 로또는 1~45까지의 정수 6개로 이루어진다.(중복 없음)
- [x] 보너스 번호는 로또 번호와 겹치지 않는 1~45까지의 정수다.

### 당첨 확인

- [x] 발행한 로또의 번호와 당첨 로또의 번호와 보너스 번호를 비교하여 순위를 정한다.
  - 1등: 6개 번호 일치 / 2,000,000,000원
  - 2등: 5개 번호 + 보너스 번호 일치 / 30,000,000원
  - 3등: 5개 번호 일치 / 1,500,000원
  - 4등: 4개 번호 일치 / 50,000원
  - 5등: 3개 번호 일치 / 5,000원

### 당첨 통계

- [x] 수익률은 (당첨 금액 / 구입 금액 \* 100)을 소수점 둘째 자리에서 반올림한다.

### 로또 게임 재시작 여부

- [x] 당첨 통계를 출력한 후엔 게임 재시작 여부를 입력 받는다.
  - 'y'를 입력하면 재시작한다.
  - 'n'을 입력하면 종료한다.

### 입출력

#### 입력

- [x] 유효하지 않은 입력이 들어올 경우 각 입력을 다시 받는다.
  - 구입 금액
  - 당첨 로또 번호 + 보너스 번호
  - 게임 재시작 여부 입력값 :(y/n)

### 출력

- [x] 로또 번호는 오름차순으로 정렬하여 보여준다.
- [x] 당첨 통계(순위 별 당첨 개수, 수익률)

---

## 모듈 구조 수정 사항

[x] 유효성 검사는 해당 모듈에서 진행

- [x] 구매 금액-> LottoMachine
- [x] 로또 숫자 -> Lotto
- [x] 보너스 번호 -> Bonus
      [x] WinningLotto : 당첨 번호
      [x] LottoResultsHelper
  - 필드 : lottoMachine , winningLotto

# 로또 미션-2단계

## 기능 구현 목록

- [x] 로또 구매
- [x] 구매한 로또 목록 확인
- [x] 당첨 번호 및 보너스 번호 지정
- [x] 당첨 통계 확인
- [x] 게임 재시작

## UI

- [x] [피그마 시안](https://www.figma.com/file/KcViH81qTQERbbJtBlTEqZ/%EB%A0%88%EB%B2%A81-%EB%AF%B8%EC%85%98-%EB%94%94%EC%9E%90%EC%9D%B8-%285%EA%B8%B0-%ED%81%AC%EB%A3%A8-%EA%B3%B5%EC%9C%A0%EC%9A%A9%29?node-id=1:2) 사용 -[x] 구체화한 요구 사항에 따라 추가로 필요한 UI가 있다면 스스로 적절히 판단하여 구현

## 배포

- [x] 배포용 브랜치로 github page 기능 사용
- [x] npm 스크립트로 배포

```dash
npm run build-step2
```

## 일관성 있고 의도가 드러나는 마크업 작성

- 목적에 맞는 HTML 태그를 사용한다.
- [x] HTML 시맨틱 태그 활용
- CSS 속성 선언 순서의 일관성을 고려한다.
  - id,class

## CSS 문법 사용에 익숙해진다.

- CSS 속성은 가능하면 축약형(shorthand)을 사용한다.
- flexBox를 활용해 레이아웃을 구성한다.
  - [x] BEM 네이밍 방법론 사용

## 기타 추가할 기능

- [x] 룰 토글 기능
- [x] modal 클로즈 기능
- [x] 구매 금액 입력 후에 당첨 번화와 보너스 번호 입력폼을 나오도록 하는 기능
- [x] 결과 확인 클릭 시, modal 오픈
- [x] input -XSS 차단 메서드
- [x] modal 클로즈 시, 게임 재설정

### 수정

[] 구매 금액 다시 입력 시 발행된 로또 구역 숨기기
