"use client";

import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardAction, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Check, Info, Loader2 } from "lucide-react";
import { useListings } from "@/hooks/use-listings";
import { API_URL } from "@/lib/api-config";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import Link from 'next/link';

const societies = [
  { id: "provident", name: "Provident Cosmo City" },
  { id: "olympia", name: "Olympia Opaline" },
  { id: "vijay", name: "Vijay Shanthi Lotus Pond", checked: true },
  { id: "kg", name: "KG Signature City" },
  { id: "alliance", name: "Alliance Orchid Springs" }
];

interface Props {
    perPage?: string
}
export default function RealEstateFilterPage({ perPage = "10" }: Props) {
  const { t } = useTranslation("listings");
  const { data, isLoading } = useListings({ perPage });

  const [budget, setBudget] = useState([20, 200]);
  const [selectedBedrooms, setSelectedBedrooms] = useState<number[]>([]);
  const [selectedFurnishing, setSelectedFurnishing] = useState<string[]>([]);
  const [selectedSocieties, setSelectedSocieties] = useState<string[]>([]);
  const [ownerVerified, setOwnerVerified] = useState(false);
  const [underConstruction, setUnderConstruction] = useState(false);
  const [readyToMove, setReadyToMove] = useState(false);
  const [withPhotos, setWithPhotos] = useState(false);
  const [familyMode, setFamilyMode] = useState(false);
  const [sortBy, setSortBy] = useState("price");

  const properties = useMemo(() => {
    if (!data?.data?.listing) return [];
    
    return data.data.listing.map((p) => ({
      id: p.id,
      title: p.title || "Untitled Property",
      location: p.location ? `${p.location.city}, ${p.location.wilaya}` : "Unknown Location",
      price: p.price,
      pricePerSqFt: p.surface ? Math.round(p.price / p.surface) : 0,
      area: p.surface || 0,
      areaDetails: p.surface ? `(${p.surface} sq.m.)` : "",
      bhk: p.numberRooms || 0,
      baths: 1, // Defaulting as API doesn't provide this yet
      description: p.description || "No description available.",
      verified: p.moderationStatus === "published",
      postedDate: new Date().toLocaleDateString(), // Mocking date
      owner: "Agent", // Mocking owner
      image: p.image || "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2940&auto=format&fit=crop",
      society: "unknown",
      furnishing: "unfurnished",
      underConstruction: !p.isReady,
      readyToMove: p.isReady,
      hasPhotos: !!p.image,
      features: p.features
    }));
  }, [data]);

  const filteredAndSortedProperties = useMemo(() => {
    const filtered = properties.filter((property) => {
      // Budget filter (price in thousands) - Adjusting logic based on likely API price range
      // Assuming API returns raw price (e.g. 50000) and slider is in k (20k to 200k)
      // If API price is 50000, that is 50k.
      // So we compare property.price / 1000 with budget range.
      const priceInK = property.price / 1000;
      if (priceInK < budget[0] || priceInK > budget[1]) return false;

      // Bedroom filter
      if (selectedBedrooms.length > 0 && !selectedBedrooms.includes(property.bhk)) return false;

      // Society filter
      if (selectedSocieties.length > 0 && !selectedSocieties.includes(property.society))
        return false;

      // Furnishing filter
      if (selectedFurnishing.length > 0 && !selectedFurnishing.includes(property.furnishing))
        return false;

      // Top filter badges
      if (ownerVerified && !property.verified) return false;
      if (underConstruction && !property.underConstruction) return false;
      if (readyToMove && !property.readyToMove) return false;
      if (withPhotos && !property.hasPhotos) return false;

      return true;
    });

    // Sort filtered results
    filtered.sort((a, b) => {
      if (sortBy === "price") return a.price - b.price;
      if (sortBy === "area") return b.area - a.area;
      // Date sort is mocked since we don't have real dates
      return 0;
    });

    return filtered;
  }, [
    properties,
    budget,
    selectedBedrooms,
    selectedSocieties,
    selectedFurnishing,
    ownerVerified,
    underConstruction,
    readyToMove,
    withPhotos,
    sortBy
  ]);

  const toggleBedroom = (bedroom: number) => {
    setSelectedBedrooms((prev) =>
      prev.includes(bedroom) ? prev.filter((b) => b !== bedroom) : [...prev, bedroom]
    );
  };

  const toggleFurnishing = (furnishing: string) => {
    setSelectedFurnishing((prev) =>
      prev.includes(furnishing) ? prev.filter((f) => f !== furnishing) : [...prev, furnishing]
    );
  };

  const toggleSociety = (society: string) => {
    setSelectedSocieties((prev) =>
      prev.includes(society) ? prev.filter((s) => s !== society) : [...prev, society]
    );
  };

  const clearAllFilters = () => {
    setBudget([20, 200]);
    setSelectedBedrooms([]);
    setSelectedFurnishing([]);
    setSelectedSocieties([]);
    setOwnerVerified(false);
    setUnderConstruction(false);
    setReadyToMove(false);
    setWithPhotos(false);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "DZD", // Changed to DZD for Algeria context
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <>
      {/* Header */}
      <div className = "w-full">

      <header className="border-b">
        <div className="mx-auto max-w-7xl px-4 py-4">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-xl font-semibold">
                  {isLoading ? "Loading..." : `${filteredAndSortedProperties.length} ${t('filters.title')}`}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Filters Bar */}
      <div className="border-b">
        <div className="mx-auto max-w-7xl px-4 py-4">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-wrap gap-2">
              <Badge
                variant={ownerVerified ? "default" : "secondary"}
                className="cursor-pointer px-3 py-1"
                onClick={() => setOwnerVerified(!ownerVerified)}>
                {t('filters.owner_verified')}
              </Badge>
              <Badge
                variant={underConstruction ? "default" : "secondary"}
                className="cursor-pointer px-3 py-1"
                onClick={() => setUnderConstruction(!underConstruction)}>
                {t('filters.under_construction')}
              </Badge>
              <Badge
                variant={readyToMove ? "default" : "secondary"}
                className="cursor-pointer px-3 py-1"
                onClick={() => setReadyToMove(!readyToMove)}>
                {t('filters.ready_to_move')}
              </Badge>
              <Badge
                variant={withPhotos ? "default" : "secondary"}
                className="cursor-pointer px-3 py-1"
                onClick={() => setWithPhotos(!withPhotos)}>
                {t('filters.with_photos')}
              </Badge>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <div className="flex items-center gap-2">
                <Switch id="family-mode" checked={familyMode} onCheckedChange={setFamilyMode} />
                <Label htmlFor="family-mode" className="flex items-center gap-1 text-sm">
                  {t('filters.family_mode')} <Info className="text-muted-foreground size-4" />
                </Label>
              </div>
              <div className="flex items-center gap-2">
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger id="sort" className="">
                    {t('filters.sort_by')}: <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="price">{t('filters.price')}</SelectItem>
                    <SelectItem value="date">{t('filters.date')}</SelectItem>
                    <SelectItem value="area">{t('filters.area')}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-7xl px-4 py-6">
        <div className="grid gap-6 lg:grid-cols-[300px_1fr]">
          {/* Sidebar Filters */}
          <aside className="space-y-4">
            <Card className="shadow-none">
              <CardHeader className="flex items-center justify-between">
                <CardTitle>{t('filters.applied_filters')}</CardTitle>
                <CardAction>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-primary"
                    onClick={clearAllFilters}>
                    {t('filters.clear_all')}
                  </Button>
                </CardAction>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Budget Filter */}
                <div className="space-y-3">
                  <Label className="font-semibold">{t('filters.budget')}</Label>
                  <div className="px-2 pt-2">
                    <Slider
                      value={budget}
                      onValueChange={setBudget}
                      min={20}
                      max={200}
                      step={5}
                      className="mb-4"
                    />
                    <div className="text-muted-foreground flex justify-between text-sm">
                      <span>{budget[0]}k</span>
                      <span>{budget[1]}k</span>
                    </div>
                  </div>
                </div>

                {/* Bedrooms Filter */}
                <div className="space-y-3">
                  <Label className="font-semibold">{t('filters.bedrooms')}</Label>
                  <div className="grid grid-cols-3 gap-2">
                    {[1, 2, 3, 4, 6, 7, 8].map((bedroom) => (
                      <Button
                        key={bedroom}
                        variant={selectedBedrooms.includes(bedroom) ? "default" : "outline"}
                        size="sm"
                        onClick={() => toggleBedroom(bedroom)}>
                        {bedroom}{t('filters.bhk')}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Societies Filter */}
                <div className="space-y-3">
                  <Label className="font-semibold">{t('filters.societies')}</Label>
                  <div className="space-y-2">
                    {societies.map((society) => (
                      <div key={society.id} className="flex items-center space-x-2">
                        <Checkbox
                          id={society.id}
                          checked={selectedSocieties.includes(society.id)}
                          onCheckedChange={() => toggleSociety(society.id)}
                        />
                        <Label htmlFor={society.id} className="cursor-pointer text-sm font-normal">
                          {society.name}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Furnishing Status Filter */}
                <div className="space-y-3">
                  <Label className="font-semibold">{t('filters.furnishing')}</Label>
                  <div className="grid grid-cols-2 gap-2">
                    {["Unfurnished", "Semi furnished", "furnished", "Fully furnished"].map(
                      (furnishing) => (
                        <Button
                          key={furnishing}
                          variant={selectedFurnishing.includes(furnishing) ? "default" : "outline"}
                          size="sm"
                          onClick={() => toggleFurnishing(furnishing)}
                          className="text-xs">
                            {/* @ts-ignore */}
                          {t(`filters.furnishing_types.${furnishing.toLowerCase().replace(' ', '_')}`)}
                        </Button>
                      )
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </aside>

          {/* Property Listings */}
          <main className="space-y-6">
            {isLoading ? (
              <div className="flex justify-center items-center h-64">
                <Loader2 className="animate-spin h-8 w-8 text-primary" />
              </div>
            ) : filteredAndSortedProperties.length === 0 ? (
              <Card>
                <CardContent className="p-12 text-center">
                  <p className="text-muted-foreground text-lg">
                    {t('filters.no_results')}
                  </p>
                </CardContent>
              </Card>
            ) : (
              filteredAndSortedProperties.map((property) => (
                <Card key={property.id} className="py-0 shadow-none overflow-hidden">
                  <CardContent className="p-0 ">
                    <div className="grid md:grid-cols-[250px_1fr]">
                      {/* Property Image */}
                      <div className="relative">
                        <img
                          src={`${API_URL}${property.image}`}
                          alt={property.title}
                          className="aspect-square h-full w-full object-cover md:rounded-l-lg"
                        />
                        {property.verified && (
                          <Badge className="absolute top-2 right-2 bg-white text-green-600 hover:bg-white">
                            <Check /> Verified
                          </Badge>
                        )}
                      </div>

                      {/* Property Details */}
                      <div className="px-6 py-4">
                        <div className="space-y-4">
                          <div>
                            <Link href= {`/listings/${property.id}`}>
                            <h3 className="text-foreground text-lg font-semibold">
                              {property.title}
                            </h3>
                            </Link>
                            <p className="text-muted-foreground text-sm">{property.location}</p>
                          </div>

                          <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
                            <div>
                              <p className="text-xl font-bold">{formatPrice(property.price)}</p>
                              <p className="text-muted-foreground text-xs">
                                {property.pricePerSqFt ? `$${property.pricePerSqFt}/sq.ft.` : 'N/A'}
                              </p>
                            </div>
                            <div>
                              <p className="text-xl font-bold">{property.area} sq.m.</p>
                              <p className="text-muted-foreground text-xs">
                                {property.areaDetails}
                              </p>
                            </div>
                            <div>
                              <p className="text-xl font-bold">{property.bhk} {t('filters.bhk')}</p>
                              <p className="text-muted-foreground text-xs">
                                {property.baths} Baths
                              </p>
                            </div>
                          </div>
                          
                          {/* Features */}
                          {property.features && property.features.length > 0 && (
                            <div className="flex flex-wrap gap-2 mt-2">
                              {property.features.slice(0, 3).map((feature) => (
                                <Badge key={feature.id} variant="secondary" className="flex items-center gap-1 text-xs font-normal">
                                  {feature.iconPath && (
                                    <img 
                                      src={`${API_URL}${feature.iconPath}`} 
                                      alt="" 
                                      className="w-3 h-3" 
                                    />
                                  )}
                                  {feature.name}
                                </Badge>
                              ))}
                              {property.features.length > 3 && (
                                <Badge variant="outline" className="text-xs font-normal">
                                  +{property.features.length - 3}
                                </Badge>
                              )}
                            </div>
                          )}

                          <p className="text-muted-foreground line-clamp-2 text-sm">
                            {property.description}{" "}
                            <Link href= {`/listings/${property.id}`}>
                            <span className="text-primary cursor-pointer">{t('filters.more')}</span>
                            </Link>
                          </p>

                          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                            <Button className="w-full sm:w-auto">{t('filters.contact_owner')}</Button>
                            <div className="text-muted-foreground text-xs sm:text-right">
                              <p>
                                {t('filters.posted_by').replace('{{date}}', new Date(property.postedDate).toLocaleString("en-US"))}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </main>
        </div>
      </div>
    </>
  );
}
