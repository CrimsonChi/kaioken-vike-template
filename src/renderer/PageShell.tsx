import "./PageShell.css"
import { children } from "kaioken"
import { LayoutDefault } from "$/layouts/LayoutDefault"
import { PageContextProvider } from "$/context/pageContext"
import type { PageContext } from "vike/types"

export function PageShell({ pageContext }: { pageContext: PageContext }) {
  const PageLayout = pageContext.config.Layout
  return (
    <PageContextProvider pageContext={pageContext}>
      <LayoutDefault>
        {PageLayout ? <PageLayout>{children()}</PageLayout> : children()}
      </LayoutDefault>
    </PageContextProvider>
  )
}
