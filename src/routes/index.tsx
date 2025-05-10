import { Button } from '@heroui/react';
import { Link, createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className='container'>
      Hello "/"!
      <Button
        color='primary'
        isIconOnly
      >
        Naber
      </Button>
      <Link to='/about'>
        <span>Go to "/about"</span>
      </Link>
    </div>
  );
}
