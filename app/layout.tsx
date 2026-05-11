import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import './globals.css'

export const metadata = {
  title: {
    default: 'Harness Engineering — SDS AI 코드 에이전트 교육',
    template: '%s | SDS AI 코드 에이전트 교육',
  },
  description:
    '개발자가 AI 코드 에이전트를 감이 아닌 원칙으로 다루는 법 — Context, Plan, Verify 3축 실습 가이드',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" dir="ltr" suppressHydrationWarning>
      <Head />
      <body>
        <Layout
          navbar={
            <Navbar
              logo={
                <span style={{ fontWeight: 700 }}>
                  Harness Engineering
                  <span
                    style={{
                      opacity: 0.7,
                      fontWeight: 400,
                      marginLeft: 8,
                      fontSize: '0.85em',
                    }}
                  >
                    SDS · 2026
                  </span>
                </span>
              }
            />
          }
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/imakerjun/effective-ai-coding-sds"
          sidebar={{ defaultMenuCollapseLevel: 1 }}
          toc={{ title: '이 페이지에서' }}
          editLink={null}
          feedback={{ content: null }}
          footer={
            <Footer>
              <div>삼성SDS × 멀티캠퍼스 AI 코드 에이전트 교육 — 임동준(makerjun)</div>
            </Footer>
          }
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
