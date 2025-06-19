import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import MainLayout from "../components/common/main-layout"
import Section1 from "./section1/section1"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <MainLayout>
      <Section1 />
    </MainLayout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
