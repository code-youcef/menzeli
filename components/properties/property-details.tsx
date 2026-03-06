"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  MapPin,
  Star,
  Bed,
  Bath,
  Maximize,
  Cigarette,
  ChefHat,
  Home,
  Wifi,
  Car,
  Loader2,
  Calendar
} from "lucide-react";
import Image from "next/image";
import { useListing } from "@/hooks/use-listings";
import { API_URL } from "@/lib/api-config";
import { useTranslation } from "react-i18next";

const iconMap = {
  bed: Bed,
  bath: Bath,
  maximize: Maximize,
  smoking: Cigarette,
  "chef-hat": ChefHat,
  home: Home,
  wifi: Wifi,
  car: Car
};

interface Props {
  id: number;
}

export default function PropertyDetails({ id }: Props) {
  const { data, isLoading, error } = useListing(id);
  const { t } = useTranslation("listings");

  if (isLoading) {
    return (
      <div className="flex h-[50vh] items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="flex h-[50vh] items-center justify-center text-red-500">
        Error loading property details
      </div>
    );
  }

  const property = {
    name: data.title,
    location: data.location ? `${data.location.city}, ${data.location.wilaya}` : "Unknown Location",
    price: data.price,
    rating: 4.9, // Mock rating
    images: data.images?.length > 0 
      ? data.images.map((img: any) => `${API_URL}/storage/${img.image_path}`)
      : ["https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2940&auto=format&fit=crop"],
    description: data.description || "No description available.",
    bedrooms: data.numberRooms,
    bathrooms: 1, // Default
    area: data.surface,
    amenities: data.features?.map((f: any) => ({
      icon: "home", // Default icon
      label: f.name,
      iconPath: f.iconPath
    })) || [],
    status: data.isReady ? t('filters.ready_to_move') : t('filters.under_construction'),
    fullLocation: data.location ? `${data.location.city}, ${data.location.wilaya}, ${data.location.country}` : "Unknown",
    livingSpace: `${data.surface} sq.m.`,
    agent: {
      name: data.member?.name || "Agent",
      address: data.member?.address || "No address provided",
      phone1: data.member?.phone || "N/A",
      phone2: "N/A",
      whatsapp: data.member?.phone || "N/A",
      email: data.member?.email || "N/A",
      avatar: data.member?.avatar 
        ? `${API_URL}/storage/${data.member.avatar}`
        : "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2574&auto=format&fit=crop",
      createdAt: data.member?.created_at ? new Date(data.member.created_at).toLocaleDateString() : "N/A"
    },
    propertyId: data.id
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "DZD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-4 lg:py-8">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* Main Content */}
        <div className="space-y-6 lg:col-span-2">
          {/* Image Gallery */}
          <div className="grid grid-cols-3 gap-3">
            <div className="relative col-span-3 aspect-4/3 overflow-hidden rounded-2xl md:col-span-2">
              <Image src={property.images[0]} alt={property.name} fill className="object-cover" />
            </div>
            <div className="col-span-3 grid grid-cols-2 gap-3 md:col-span-1 md:grid-cols-1">
              {property.images[1] && (
                <div className="relative aspect-4/3 overflow-hidden rounded-2xl">
                  <Image
                    src={property.images[1]}
                    alt={`${property.name} view 2`}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              {property.images[2] && (
                <div className="relative aspect-4/3 overflow-hidden rounded-2xl">
                  <Image
                    src={property.images[2]}
                    alt={`${property.name} view 3`}
                    fill
                    className="object-cover"
                  />
                  {property.images.length > 3 && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                      <span className="text-3xl font-bold text-white">+{property.images.length - 3}</span>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Property Info */}
          <div className="space-y-4">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <h1 className="text-foreground font-heading text-3xl lg:text-4xl">{property.name}</h1>
              <div className="text-foreground text-3xl font-semibold whitespace-nowrap lg:text-3xl">
                {formatPrice(property.price)}{" "}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <div className="text-muted-foreground flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">{property.location}</span>
              </div>
              <div className="flex items-center gap-1 text-sm">
                <Star className="size-4 fill-yellow-400 text-yellow-400" />
                <span>{property.rating}</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-3">
            <p className="text-muted-foreground leading-relaxed">{property.description}</p>
          </div>

          {/* Key Features */}
          <div className="space-y-4">
            <h2 className="text-foreground font-bold">{t('details.key_features')}</h2>

            <Card className="shadow-none">
              <CardContent>
                <h3 className="mb-4 font-semibold">{t('details.amenities')}</h3>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                  {property.amenities.map((amenity: any, index: number) => {
                    const Icon = iconMap[amenity.icon as keyof typeof iconMap] || Home;
                    return (
                      <div key={index} className="flex items-center gap-2 text-sm">
                        {amenity.iconPath ? (
                           <img 
                             src={`${API_URL}/storage/${amenity.iconPath}`} 
                             alt="" 
                             className="w-4 h-4" 
                           />
                        ) : (
                           <Icon className="text-muted-foreground h-4 w-4" />
                        )}
                        <span>{amenity.label}</span>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Areas & Lot */}
          <div className="space-y-4">
            <h2 className="text-foreground font-bold">{t('details.areas_lot')}</h2>
            <Card className="shadow-none">
              <CardContent className="divide-y text-sm [&_div]:flex [&_div]:items-center [&_div]:justify-between [&_div]:py-4 [&_div]:first:pt-0 [&_div]:last:pb-0">
                <div>
                  <span className="text-muted-foreground">{t('details.status')}</span>
                  <span className="font-medium">{property.status}</span>
                </div>
                <div>
                  <span className="text-muted-foreground">{t('details.location')}</span>
                  <span className="font-medium">{property.fullLocation}</span>
                </div>
                <div>
                  <span className="text-muted-foreground">{t('details.living_space')}</span>
                  <span className="font-medium">{property.livingSpace}</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-4">
          <Card className="bg-muted/50 shadow-none">
            <CardContent className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-full">
                  <Image
                    src={property.agent.avatar}
                    alt={property.agent.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-lg font-bold">{property.agent.name}</h3>
                  <div className="flex items-center gap-1 text-muted-foreground text-xs mb-1">
                    <Calendar className="w-3 h-3" />
                    <span>{t('details.member_since')} {property.agent.createdAt}</span>
                  </div>
                  <p className="text-muted-foreground text-sm line-clamp-2">{property.agent.address}</p>
                </div>
              </div>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">{t('details.office_phone')}:</span>
                  <span className="font-medium">{property.agent.phone1}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">{t('details.whatsapp')}:</span>
                  <span className="font-medium">{property.agent.whatsapp}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">{t('details.email')}:</span>
                  <span className="font-medium">{property.agent.email}</span>
                </div>
              </div>

              <Button className="w-full">{t('details.view_property')}</Button>
            </CardContent>
          </Card>

          {/* Schedule Tour Card */}
          <Card className="bg-muted/50 shadow-none">
            <CardHeader>
              <CardTitle>{t('details.schedule_tour')}</CardTitle>
              <CardDescription>
                {t('details.schedule_desc')}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label className="text-muted-foreground text-sm">{t('details.property_id')}</Label>
                  <Input value={property.propertyId} readOnly className="bg-muted" />
                </div>

                <div className="space-y-2">
                  <Label className="text-muted-foreground text-sm">{t('details.property_name')}</Label>
                  <Input value={property.name} readOnly className="bg-muted" />
                </div>

                <div className="space-y-2">
                  <Label className="text-muted-foreground text-sm">{t('details.full_name')}</Label>
                  <Input placeholder={t('details.enter_name')} />
                </div>

                <Button className="w-full">{t('details.schedule')}</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
