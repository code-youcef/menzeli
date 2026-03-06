
# ListingResource


## Properties

Name | Type
------------ | -------------
`id` | number
`title` | string
`description` | string
`price` | number
`floor` | number
`surface` | number
`minDuration` | number
`numberRooms` | number
`numberPersons` | number
`isReady` | boolean
`isNegotiable` | boolean
`boostLevel` | number
`moderationStatus` | string
`image` | string
`rentDuration` | [RentDurationResource](RentDurationResource.md)
`type` | [TypeResource](TypeResource.md)
`location` | [LocationResource](LocationResource.md)
`categories` | [Array&lt;CategoryResource&gt;](CategoryResource.md)
`features` | [Array&lt;FeatureResource&gt;](FeatureResource.md)
`nearPlaces` | [Array&lt;NearPlaceResource&gt;](NearPlaceResource.md)
`members` | [Array&lt;MemberResource&gt;](MemberResource.md)
`images` | [Array&lt;ImagesResource&gt;](ImagesResource.md)
`timePost` | Date

## Example

```typescript
import type { ListingResource } from ''

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "title": null,
  "description": null,
  "price": null,
  "floor": null,
  "surface": null,
  "minDuration": null,
  "numberRooms": null,
  "numberPersons": null,
  "isReady": null,
  "isNegotiable": null,
  "boostLevel": null,
  "moderationStatus": null,
  "image": null,
  "rentDuration": null,
  "type": null,
  "location": null,
  "categories": null,
  "features": null,
  "nearPlaces": null,
  "members": null,
  "images": null,
  "timePost": null,
} satisfies ListingResource

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ListingResource
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


