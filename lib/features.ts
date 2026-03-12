
export type Feature = {
    id: number;
    name: string;
    icon_path: string;
}

export type Category = {
    id: number;
    name: string;
    icon_path: string;
}

export type NearPlace = {
    id: number;
    name: string;
    distance: number;
    icon_path: string;

}
export const features: Feature[] = [
    {
        id: 1,
        name: "Wifi",
        icon_path: "wifi"
    },
    {
        id: 2,
        name: "TV",
        icon_path: "tv"
    },
    {
        id: 3,
        name: "Kitchen",
        icon_path: "chef-hat"
    },
    {
        id: 4,
        name: "Washing Machine",
        icon_path: "washing-machine"
    },
    {
        id: 5,
        name: "Air Conditioning",
        icon_path: "air-vent"
    },
    {
        id: 6,
        name: "Heating",
        icon_path: "heater"
    },
    {
        id: 7,
        name: "Pool",
        icon_path: "waves"
    },
    {
        id: 8,
        name: "Hot Tub",
        icon_path: "bath"
    },
    {
        id: 9,
        name: "Parking",
        icon_path: "car"
    },
    {
        id: 10,
        name: "Gym",
        icon_path: "dumbbell"
    },
    {
        id: 11,
        name: "Balcony",
        icon_path: "wind"
    },
    {
        id: 12,
        name: "Garden",
        icon_path: "flower"
    },
    {
        id: 13,
        name: "Elevator",
        icon_path: "arrow-up-down"
    },
    {
        id: 14,
        name: "Security",
        icon_path: "shield"
    },
    {
        id: 15,
        name: "Fireplace",
        icon_path: "flame"
    },
    {
        id: 16,
        name: "Workspace",
        icon_path: "briefcase"
    },
    {
        id: 17,
        name: "First Aid Kit",
        icon_path: "first-aid"
    },
    {
        id: 18,
        name: "Fire Extinguisher",
        icon_path: "fire-extinguisher"
    },
    {
        id: 19,
        name: "Smoke Alarm",
        icon_path: "bell"
    },
    {
        id: 20,
        name: "Carbon Monoxide Alarm",
        icon_path: "alert-triangle"
    }
];


export const categories: Category[] = [
    {
        id: 1,
        name: "Apartment",
        icon_path: "building"
    },
    {
        id: 2,
        name: "Studio",
        icon_path: "layout"
    },
    {
        id: 3,
        name: "Villa",
        icon_path: "home"
    },
    {
        id: 4,
        name: "Shared Room",
        icon_path: "users"
    },
    {
        id: 5,
        name: "Office",
        icon_path: "briefcase"
    },
    {
        id: 6,
        name: "Garage",
        icon_path: "warehouse"
    },
    {
        id: 7,
        name: "Land",
        icon_path: "map"
    },
    {
        id: 8,
        name: "Bungalow",
        icon_path: "tent"
    },
    {
        id: 9,
        name: "Duplex",
        icon_path: "copy"
    },
    {
        id: 10,
        name: "Loft",
        icon_path: "layers"
    }
];

export const nearPlaces: NearPlace[] = [
    {
        id: 1,
        name: "School",
        distance: 0.5,
        icon_path: "school"
    },
    {
        id: 2,
        name: "Hospital",
        distance: 1.0,
        icon_path: "hospital"
    },
    {
        id: 3,
        name: "Police Station",
        distance: 1.5,
        icon_path: "police"
    },
    {
        id: 4,
        name: "Bank",
        distance: 2.0,
        icon_path: "bank"
    },
    {
        id: 5,
        name: "Mall",
        distance: 2.5,
        icon_path: "shop"
    },
    {
        id: 6,
        name: "Cinema",
        distance: 3.0,
        icon_path: "cinema"
    },
    {
        id: 7,
        name: "Restaurant",
        distance: 3.5,
        icon_path: "restaurant"
    },
    {
        id: 8,
        name: "Hotel",
        distance: 4.0,
        icon_path: "hotel"
    },
    {
        id: 9,
        name: "Convenience Store",
        distance: 4.5,
        icon_path: "store"
    },
    {
        id: 10,
        name: "Park",
        distance: 5.0,
        icon_path: "park"
    },
    {
        id: 11,
        name: "Library",
        distance: 5.5,
        icon_path: "library"
    },
    {
        id: 12,
        name: "Museum",
        distance: 6.0,
        icon_path: "museum"
    },
    {
        id: 13,
        name: "Parking",
        distance: 6.5,
        icon_path: "car"
    },
    {
        id: 14,
        name: "School",
        distance: 7.0,
        icon_path: "school"
    },
]
