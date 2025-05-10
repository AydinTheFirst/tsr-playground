import { HeroUIProvider } from '@heroui/react';
import { Outlet, createRootRoute } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <HeroUIProvider>
      <Outlet />
      <TanStackRouterDevtools initialIsOpen={false} />
    </HeroUIProvider>
  );
}
