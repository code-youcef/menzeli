import initTranslations from "@/app/i18n";
import { DashboardContent } from "./dashboard-content";
import TranslationsProvider from "@/components/providers/TranslationsProvider";

export default async function DashboardPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const { resources } = await initTranslations(locale, ["dashboard"]);

  return (
    <TranslationsProvider locale={locale} namespaces={["dashboard"]} resources={resources}>
      <DashboardContent />
    </TranslationsProvider>
  );
}
