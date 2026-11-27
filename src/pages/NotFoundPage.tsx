import { FileQuestion } from 'lucide-react';
import { Link } from 'react-router-dom';
import { EmptyState } from '@/components/ui';

export default function NotFoundPage() {
  return (
    <div className="pt-16">
      <EmptyState icon={FileQuestion} title="Page not found">
        This page doesn’t exist or has moved.{' '}
        <Link to="/" className="font-semibold text-teal-700">Go home</Link>
      </EmptyState>
    </div>
  );
}
