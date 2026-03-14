import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Home() {
  return (
    <Layout
      title="테크 스터디 아카이브"
      description="주말 테크 스터디 기록"
    >
      <main style={{ padding: '4rem 2rem', textAlign: 'center' }}>
        <h1>테크 스터디 아카이브</h1>
        <p>주말마다 진행한 테크 스터디 기록을 정리하는 공간입니다.</p>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2rem', flexWrap: 'wrap' }}>
          <Link
            className="button button--primary button--lg"
            to="/docs/intro"
          >
            스터디 소개
          </Link>

          <Link
            className="button button--secondary button--lg"
            to="/docs"
          >
            스터디 로그
          </Link>

          <Link
            className="button button--secondary button--lg"
            to="/docs/materials"
          >
            기타자료
          </Link>

          <Link
            className="button button--secondary button--lg"
            to="/docs/github"
          >
            참여인원 깃허브
          </Link>
        </div>
      </main>
    </Layout>
  );
}