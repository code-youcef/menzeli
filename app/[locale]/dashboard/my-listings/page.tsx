import initTranslations from "@/app/i18n";
import { ListingApi, ListingResource } from "@/api/generated-client";
import { apiConfig, API_URL } from "@/lib/api-config";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import {
  Search,
  Plus,
  LayoutGrid,
  List as ListIcon,
  MoreVertical,
  Eye,
  PhoneCall,
  Edit,
  Megaphone,
  Trash2,
  MapPin,
  TrendingUp,
  Image as ImageIcon
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function MyListingsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const { t, resources } = await initTranslations(locale, ["dashboard"]);

  // Fetch listings using the regular API as requested
  const listingApi = new ListingApi(apiConfig);
  let listings: ListingResource[] = [];
  try {
    // Fetching all listings for now as per instruction "just call the regular function"
    // In a real app, this would be filtered by the logged-in user
    const response = await listingApi.listingsIndex({ perPage: "12" });
    listings = response.data.listing;
  } catch (error) {
    console.error("Failed to fetch listings:", error);
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat(locale === "ar" ? "ar-DZ" : "en-US", {
      style: "currency",
      currency: "DZD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  // Helper to determine status style
  const getStatusStyle = (status: string, isReady: boolean) => {
    if (status === "sold") return "bg-zinc-100 text-zinc-600";
    if (!isReady) return "bg-orange-100 text-orange-600"; // Pending/Under construction
    return "bg-green-100 text-green-600"; // Active/Ready
  };

  const getStatusLabel = (status: string, isReady: boolean) => {
    if (status === "sold") return t("dashboard:listings.status.sold");
    if (!isReady) return t("dashboard:listings.status.pending");
    return t("dashboard:listings.status.active");

  };

  console.log({listings})

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-zinc-900">{t("dashboard:listings.title")}</h1>
          <p className="text-sm text-zinc-500">{t("dashboard:listings.subtitle")}</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative hidden sm:block">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />
            <Input
              placeholder={t("dashboard:listings.search")}
              className="h-10 w-64 border-zinc-200 pl-10 focus-visible:ring-0"
            />
          </div>
          <Link href={`/${locale}/dashboard/my-listings/new`}>
            <Button className="gap-2 bg-blue-600 hover:bg-blue-700">
              <Plus className="h-4 w-4" />
              {t("dashboard:listings.add_new")}
            </Button>
          </Link>
        </div>
      </div>

      {/* Tabs & View Toggle */}
      <div className="flex items-center justify-between border-b border-zinc-200 pb-4">
        <div className="flex items-center gap-6 overflow-x-auto pb-2 sm:pb-0">
          <button className="whitespace-nowrap border-b-2 border-blue-600 pb-4 text-sm font-semibold text-blue-600">
            {t("dashboard:listings.tabs.all")} ({listings.length})
          </button>
          <button className="whitespace-nowrap pb-4 text-sm font-medium text-zinc-500 hover:text-zinc-900">
            {t("dashboard:listings.tabs.active")} ({listings.filter(l => l.isReady).length})
          </button>
          <button className="whitespace-nowrap pb-4 text-sm font-medium text-zinc-500 hover:text-zinc-900">
            {t("dashboard:listings.tabs.pending")} ({listings.filter(l => !l.isReady).length})
          </button>
          <button className="whitespace-nowrap pb-4 text-sm font-medium text-zinc-500 hover:text-zinc-900">
            {t("dashboard:listings.tabs.sold")} (0)
          </button>
        </div>
        <div className="hidden items-center gap-2 sm:flex">
          <button className="rounded-lg bg-zinc-100 p-2 text-zinc-900">
            <LayoutGrid className="h-4 w-4" />
          </button>
          <button className="rounded-lg p-2 text-zinc-400 hover:bg-zinc-50 hover:text-zinc-900">
            <ListIcon className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Listings Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {listings.map((listing) => (
          <Card key={listing.id} className="group py-0 overflow-hidden border-zinc-200 shadow-sm transition-shadow hover:shadow-md">
            {/* Image Area */}
            <div className="relative h-48 bg-zinc-100">
              <img
                src={listing.image ? `${API_URL}${listing.image}` : "/images/placeholder-property.jpg"}
                alt={listing.title}
                // fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 top-0 flex items-start justify-between p-3">
                <span className={`rounded px-2 py-1 text-[10px] font-bold uppercase tracking-wider ${getStatusStyle(listing.moderationStatus, listing.isReady)}`}>
                  {getStatusLabel(listing.moderationStatus, listing.isReady)}
                </span>
                <button className="flex h-8 w-8 items-center justify-center rounded-full bg-black/20 text-white backdrop-blur-sm hover:bg-black/30">
                  <MoreVertical className="h-4 w-4" />
                </button>
              </div>
            </div>

            <CardContent className="p-4">
              {/* Content */}
              <div className="mb-4 space-y-1">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="line-clamp-1 font-semibold text-zinc-900" title={listing.title}>
                    {listing.title}
                  </h3>
                  <span className="shrink-0 font-bold text-blue-600">
                    {formatPrice(listing.price)}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-zinc-500">
                  <MapPin className="h-3 w-3" />
                  {listing.location ? `${listing.location.city}, ${listing.location.wilaya}` : 'Algeria'}
                </div>
              </div>

              {/* Stats */}
              <div className="mb-4 grid grid-cols-2 divide-x divide-zinc-100 rounded-lg border border-zinc-100 bg-zinc-50/50 py-2">
                <div className="flex items-center justify-center gap-2 px-2">
                  <Eye className="h-4 w-4 text-zinc-400" />
                  <div>
                    <p className="text-[10px] font-medium uppercase text-zinc-500">{t("dashboard:listings.card.views")}</p>
                    <p className="text-sm font-bold text-zinc-900">1,248</p>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-2 px-2">
                  <PhoneCall className="h-4 w-4 text-zinc-400" />
                  <div>
                    <p className="text-[10px] font-medium uppercase text-zinc-500">{t("dashboard:listings.card.leads")}</p>
                    <p className="text-sm font-bold text-zinc-900">42</p>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2">
                <Link href = {`/${locale}/dashboard/my-listings/${listing.id}`}  className={buttonVariants({variant: "outline", size: "sm", className: "h-9 flex-1 gap-2 border-zinc-200 text-xs font-medium"})}>
                  <Edit className="h-3.5 w-3.5" />
                  {t("dashboard:listings.card.edit")}
                </Link>
                <Button size="sm" className="h-9 flex-1 gap-2 bg-blue-50 text-xs font-medium text-blue-600 hover:bg-blue-100 hover:text-blue-700">
                  <Megaphone className="h-3.5 w-3.5" />
                  {t("dashboard:listings.card.promote")}
                </Button>
                <Button variant="outline" size="sm" className="h-9 w-9 border-zinc-200 px-0 text-red-500 hover:bg-red-50 hover:text-red-600">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}

        {/* Add New Placeholder Card */}
        <button className="group flex h-full min-h-[380px] flex-col items-center justify-center gap-4 rounded-xl border-2 border-dashed border-zinc-200 bg-zinc-50 p-6 text-center transition-colors hover:border-blue-300 hover:bg-blue-50/50">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-zinc-200 transition-transform group-hover:scale-110">
            <Plus className="h-8 w-8 text-blue-600" />
          </div>
          <div>
            <h3 className="font-semibold text-zinc-900">{t("dashboard:listings.empty.title")}</h3>
            <p className="mt-1 text-sm text-zinc-500 max-w-[200px] mx-auto">
              {t("dashboard:listings.empty.subtitle")}
            </p>
          </div>
        </button>
      </div>
      
      {/* Pagination (Mock) */}
      <div className="flex items-center justify-center gap-2 pt-8">
         <Button variant="outline" size="icon" className="h-8 w-8 border-zinc-200" disabled>
           <span className="sr-only">Previous</span>
           &lt;
         </Button>
         <Button size="sm" className="h-8 w-8 bg-blue-600 p-0 text-white">1</Button>
         <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-zinc-600 hover:bg-zinc-100">2</Button>
         <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-zinc-600 hover:bg-zinc-100">3</Button>
         <Button variant="outline" size="icon" className="h-8 w-8 border-zinc-200">
           <span className="sr-only">Next</span>
           &gt;
         </Button>
      </div>
    </div>
  );
}
