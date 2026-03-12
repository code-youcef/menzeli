import initTranslations from '@/app/i18n';
import TranslationsProvider from '@/components/providers/TranslationsProvider';
import AuthContent from '@/components/auth/AuthContent';
import { Suspense } from 'react';

export default async function AuthPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const { t, resources } = await initTranslations(locale, ['auth', 'common']);

  return (
    <TranslationsProvider locale={locale} namespaces={['auth', 'common']} resources={resources}>
      <Suspense fallback={<div className="min-h-screen bg-zinc-50" />}>
        <AuthContent />
      </Suspense>
    </TranslationsProvider>
  );
}
