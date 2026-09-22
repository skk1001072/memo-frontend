# memo-frontend

React(Vite) + FastAPI 풀스택 메모 앱의 프론트엔드입니다. 백엔드 API를 호출해 메모를 조회·추가·삭제합니다.

## 프로젝트 소개

- 개인 소개 페이지와, 백엔드 API 연동 결과를 보여주는 메모장 페이지 두 개로 구성되어 있습니다.
- 두 페이지는 서로 링크로 연결되어 있어 어느 쪽에서 접속해도 다른 쪽으로 이동할 수 있습니다.

## 주요 구성

| 경로 | 내용 |
| --- | --- |
| `/` | 메모 CRUD 페이지 (`src/App.jsx`). `VITE_API_URL`에 설정된 백엔드 API(GET/POST/DELETE `/memos`)를 호출합니다. |
| `/intro/index.html` | 개인 소개 페이지 (정적 HTML, `public/intro`) |
| `memo-backend` (별도 저장소) | FastAPI로 구현한 백엔드 API |

## 로컬 실행

```bash
npm install
npm run dev
```

`.env`에 `VITE_API_URL`로 백엔드 주소를 지정합니다 (기본값 `http://localhost:8000`).

## 배포 주소

- Vercel: https://memo-frontend-kohl.vercel.app
- 개인 소개 페이지: https://memo-frontend-kohl.vercel.app/intro/index.html
- 백엔드(Render) Swagger UI: https://memo-backend-17xm.onrender.com/docs
- 백엔드 저장소: https://github.com/skk1001072/memo-backend
