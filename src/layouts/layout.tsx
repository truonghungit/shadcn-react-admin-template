import EmptyLayout from './empty/empty-layout';
import ClassicLayout from './classic/classic-layout';

export default function AppLayout({
  type,
  children,
  ...props
}: React.ComponentProps<'div'> & {
  type?: 'empty' | 'classic';
}) {
  switch (type) {
    case 'classic':
      return <ClassicLayout>{children}</ClassicLayout>;
    case 'empty':
      return <EmptyLayout>{children}</EmptyLayout>;
    default:
      return <>{children}</>;
  }
}
