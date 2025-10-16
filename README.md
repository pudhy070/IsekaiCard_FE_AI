# 💳 이세계 카드 (Isekai Card) 프로젝트
React, Spring Boot, Flask를 활용한 마이크로서비스 아키텍처(MSA) 형식의 카드 발급 신청 및 관리 플랫폼입니다.

현대적인 웹 UI/UX를 갖춘 카드사 웹사이트를 컨셉으로, 기능별로 백엔드 서버를 분리하여 각 기술 스택의 장점을 최대한 활용하고자 했습니다. 사용자는 다양한 카드의 혜택을 확인하고, 이벤트를 조회하며, 직접 카드를 신청하고 그 현황을 추적할 수 있습니다.

---

## ✨ 주요 기능
### 🎨 세련된 UI/UX: 최신 웹 트렌드에 맞는 깔끔하고 직관적인 사용자 인터페이스

### 📢 이벤트 게시판 (CRUD): Spring Boot로 구현된 이벤트 공지 및 관리 기능

### 📝 카드 신청 기능: Flask로 구현된 사용자 카드 발급 신청 기능

### 🔍 신청 현황 조회: 이메일을 통해 자신의 카드 신청 처리 현황 조회

### 🔐 관리자 페이지: Flask와 연동하여 접수된 모든 카드 신청 내역 조회 및 삭제

### 🏛️ 마이크로서비스 아키텍처: 기능별(이벤트/카드신청) 백엔드 서버를 분리하여 독립적인 개발 및 배포 환경 구축

### 🏛️ AI 카드 찾기 서비스 : OpenAI를 활용한 나에게 맞는 카드 찾기 서비스 
---

## 🛠️ 기술 스택 (Tech Stack)
- Frontend
```
- React 18.x
- Vite
- React Router 6.x
- CSS Modules / Global CSS
```

- Backend 1 (RestAPI, 이벤트 CRUD, 카드 신청 및 현황 리스트 )
```
Java 21
Spring Boot 3.3.x
Spring Data JPA
Gradle
H2 (In-memory Database)
```

- Backend 2 (Flask)
```
python 3.13.7
OpenAI
```

---

## 🏛️ 시스템 아키텍처

본 프로젝트는 각 기능의 역할과 책임에 따라 백엔드 서버를 분리한 마이크로서비스 아키텍처(MSA) 형태로 설계되었습니다.

```
┌─────────────────────────┐
│                         │
│   React Frontend        │
│ (http://localhost:5173) │
│                         │
└─────────────────────────┘
           │
           ├─ (이벤트 CRUD , 카드 신청,리스트) ─> ┌──────────────────────────┐      ┌─────────────┐
           │                                    │ Spring Boot (Port: 8080)  │─────>│ DB(MySQL)  │
           │                                    └──────────────────────────┘      └─────────────┘
           │
           └─ (AI 카드 찾기 에빈트) ─> ┌──────────────────────────┐
                                      │    Flask (Port: 5000)    │
                                      └──────────────────────────┘

```

- React (Client): 모든 사용자 인터페이스와 상호작용을 담당하며, 필요한 데이터는 기능에 맞는 백엔드 API 서버에 비동기적으로 요청합니다.
 
- Spring Boot (Backend 1): Java의 안정성과 강력한 생태계를 바탕으로 이벤트 게시판의 CRUD , 카드 신청 및 리스트 현황 기능을 전담합니다.

- Flask (Backend 2): LLM에 데이터 파일(json)을 넣어 학습을 시킨후 나만의 카드 찾기 AI 서비스를 만들었습니다.

---

## 🚀 시작하기 (Getting Started)
사전 준비
```
Node.js 18.x 이상
JDK 21
Python 3.10 이상
```

## 1. Frontend (React)
1. 프론트엔드 프로젝트 폴더로 이동
```
cd IsekaiCardFront
```

 2. 의존성 라이브러리 설치
```
npm install
```

3. 개발 서버 실행 (http://localhost:5173)
```
npm run dev
```

---

## 2. Backend - Spring Boot (이벤트 API)
 1. Spring Boot 프로젝트 폴더로 이동
```
cd IsekaiCardBe/isekai
```

 2. Gradle 빌드
```
./gradlew build
```
 
 3. 애플리케이션 실행 (http://localhost:8080)
```
./gradlew bootRun
  또는 IDE(IntelliJ 등)에서 IsekaiApplication.java 파일을 직접 실행
```

3. Backend - Flask (카드 신청 API)
 1. Flask 프로젝트 폴더로 이동
```
cd IsekaiCardFlask
```
 2. 가상환경 생성 및 활성화
```
python -m venv venv
```

 Windows:
 ```
.\venv\Scripts\activate
```

 macOS/Linux:
```
source venv/bin/activate
```

 3. 의존성 라이브러리 설치
```
pip install -r requirements.txt
```

 4. Flask 개발 서버 실행 (http://localhost:5000) 
```
flask run
```

---


### Isekai Card Spring Boot 
```
https://github.com/pudhy070/IsekaiCard_SpringBoot_AI
```

### Isekai Card Flask (AI)
```
https://github.com/pudhy070/IsekaiCard_LLM
```
