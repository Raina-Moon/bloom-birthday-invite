# Bloom Birthday Invite

Tshela의 생일 행사 플라이어용 인터랙티브 싱글 페이지다. 현재 버전은 `Tshela's Birthday + BREAK Paint Concept + feinSTAUB Lounge`를 한 화면 흐름 안에서 함께 보여주도록 재구성되어 있고, 기본 언어는 독일어다.

## Run

```bash
cd /Users/raina/bloom-birthday-invite
npm run dev
```

브라우저에서 `http://127.0.0.1:4321` 또는 `http://localhost:4321`를 열면 된다.

## Edit

- 초대 정보 플레이스홀더는 `index.html`에서 바로 수정하면 된다.
- 전체 룩앤필은 `styles.css`의 색상 변수와 카드 스타일을 바꾸면 빠르게 조정할 수 있다.
- 스크롤 모션, 언어 토글, Google Maps 연결은 `script.js`에서 제어한다.
- 상단에서 영어/독일어 토글이 가능하고, `?lang=en` 또는 `?lang=de`로 초기 언어를 강제할 수 있다.
- BREAK 로고는 `assets/break-mark.svg`가 현재 플레이스홀더이며, 실제 로고 파일로 교체하면 된다.
- Google Maps Embed API 키는 `config.js`의 `googleMapsEmbedApiKey`에 넣으면 된다.
- 로고 경로를 바꾸고 싶으면 `config.js`의 `breakLogoPath`를 수정하면 된다.
- 페인팅 참가 신청 폼은 `config.js`의 `googleAppsScriptUrl`을 채우면 활성화된다.

## Google Apps Script Setup

1. 새 Google Spreadsheet를 만들고 원하는 시트 이름을 정한다. 기본 예시는 `Painting Signups`다.
2. `Extensions > Apps Script`로 들어간다.
3. [`apps-script/Code.gs`](/Users/raina/bloom-birthday-invite/apps-script/Code.gs)를 붙여 넣고 `SPREADSHEET_ID`와 `SHEET_NAME`을 수정한다.
4. `Deploy > New deployment > Web app`으로 배포한다.
5. `Execute as: Me`, `Who has access: Anyone` 또는 `Anyone with the link`로 설정한다.
6. 배포된 Web App URL을 [`config.js`](/Users/raina/bloom-birthday-invite/config.js)에 넣는다.

```js
window.EVENT_CONFIG = {
  googleMapsEmbedApiKey: "",
  breakLogoPath: "./assets/break-logo-transparent.png",
  googleAppsScriptUrl: "https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec",
};
```

- 현재 폼은 `timestamp`, `full_name`, `phone_number`, `whatsapp_id`, `locale`, `source`를 시트에 저장한다.
- 프론트엔드는 `POST + no-cors + form-urlencoded`로 전송하고, 실제 정리는 Google Sheets에서 한다.
- Apps Script를 수정하면 전화번호 포맷 정리나 중복 체크도 나중에 쉽게 붙일 수 있다.

## Notes

- 외부 프레임워크 없이 동작한다.
- 상단 번호 네비게이션으로 섹션 이동 가능하다.
- 배경 컬러 필드는 스크롤 위치와 포인터 이동에 반응한다.
- 지도는 Google Maps Embed API 키가 있으면 iframe으로 뜨고, 없으면 Google Maps 열기/경로 버튼으로 폴백한다.
