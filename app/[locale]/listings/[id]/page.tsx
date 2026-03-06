import initTranslations from "@/app/i18n";
import TranslationsProvider from "@/components/providers/TranslationsProvider";
import Header from "@/components/shared/header";
import PropertyDetails from "@/components/properties/property-details";

export default async function PropertyPage({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}) {
  const { locale, id } = await params;
  const { t, resources } = await initTranslations(locale, ["common", "listings"]);

  return (
    <TranslationsProvider
      locale={locale}
      namespaces={["common", "listings"]}
      resources={resources}
    >
      <div className="min-h-screen">
        <PropertyDetails id={parseInt(id)} />
      </div>
    </TranslationsProvider>
  );
}
