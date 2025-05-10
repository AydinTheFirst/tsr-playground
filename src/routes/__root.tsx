import { Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

import ErrorComponent from '~/components/error-component'
import NotFound from '~/components/not-found'
import PendingComponent from '~/components/pending-component'

export const Route = createRootRoute({
  notFoundComponent: NotFound,
  errorComponent: ErrorComponent,
  pendingComponent: PendingComponent,
  component: RootComponent,
  pendingMs: 0,
})

function RootComponent() {
  return (
    <>
      <Outlet />
      <TanStackRouterDevtools initialIsOpen={false} />
    </>
  )
}
