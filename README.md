# SESAC Tech Study Log

주말마다 진행한 테크 스터디의 내용을 기록하고 공유하기 위한 아카이브 사이트입니다.

## Overview

이 사이트는 다음 내용을 정리하기 위해 제작되었습니다.

- 스터디 주차별 요약
- 기술 트렌드 및 AI/LLM 관련 이슈 정리
- 토론 내용 및 후속 탐색 주제 기록
- 참고 자료 및 참여 인원 정보 공유

정적 사이트 생성기인 Docusaurus를 기반으로 구축되었으며, GitHub Pages를 통해 배포됩니다.

## Tech Stack

- Docusaurus
- React
- GitHub Pages
- GitHub Actions

## Installation

프로젝트를 처음 실행할 때 의존성을 설치합니다.

```bash
npm install
```

## Local Development

로컬 개발 서버를 실행합니다.

```bash
npm run start
```

실행 후 브라우저에서 로컬 주소로 접속하면 사이트를 확인할 수 있습니다.  
수정한 내용은 대부분 저장 후 바로 반영됩니다.

## Build

배포용 정적 파일을 생성합니다.

```bash
npm run build
```

빌드 결과물은 `build` 디렉토리에 생성됩니다.

## Deployment

이 프로젝트는 GitHub Actions를 통해 GitHub Pages에 자동 배포됩니다.

- `main` 브랜치에 변경 사항을 push하면
- GitHub Actions가 사이트를 build하고
- GitHub Pages에 자동 반영합니다

배포 주소:

```text
https://sesac-tech-study-log.github.io/tech-study/
```

## Project Structure

```text
tech-study/
├─ docs/                  # 문서 페이지
├─ src/pages/             # 커스텀 페이지
├─ static/                # 정적 파일
├─ sidebars.js            # 문서 사이드바 설정
├─ docusaurus.config.js   # 사이트 전체 설정
└─ .github/workflows/     # 배포 워크플로
```

## Collaboration

팀원들은 GitHub 웹을 통해 문서를 수정하고 PR로 반영할 수 있습니다.  
주요 스터디 기록은 `docs/` 폴더 내 Markdown 파일로 관리합니다.