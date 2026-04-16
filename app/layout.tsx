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
              logo={<strong>Harness Engineering</strong>}
            />
          }
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/imakerjun/effective-ai-coding-sds"
          footer={
            <Footer>
              <p>삼성SDS × 멀티캠퍼스 AI 코드 에이전트 교육 — 임동준(makerjun)</p>
            </Footer>
          }
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
