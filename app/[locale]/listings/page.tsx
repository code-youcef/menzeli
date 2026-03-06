import initTranslations from "@/app/i18n";
import TranslationsProvider from "@/components/providers/TranslationsProvider";
import Header from "@/components/shared/header";
import RealEstateFilterPage from "@/components/properties/property-filters";

export default async function ListingsPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { locale } = await params;
  const { per_page } = await searchParams;
  const { t, resources } = await initTranslations(locale, [
    "common",
    "listings",
  ]);
  const perPageString = Array.isArray(per_page)
    ? per_page[0]
    : per_page || "10";

  return <RealEstateFilterPage perPage={perPageString} />;
}
