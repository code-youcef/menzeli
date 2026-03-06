
# StoreRequest


## Properties

Name | Type
------------ | -------------
`title` | string
`description` | string
`price` | number
`floor` | number
`surface` | number
`boostLevel` | number
`minDuration` | number
`numberRooms` | number
`numberPersons` | number
`isReady` | boolean
`isNegotiable` | boolean
`mainImage` | Blob
`memberId` | number
`rentDurationId` | number
`typeId` | number
`location` | [StoreRequestLocation](StoreRequestLocation.md)
`categories` | Array&lt;number&gt;
`features` | Array&lt;number&gt;
`nearPlaces` | Array&lt;number&gt;
`images` | Array&lt;Blob&gt;

## Example

```typescript
import type { StoreRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "title": null,
  "description": null,
  "price": null,
  "floor": null,
  "surface": null,
  "boostLevel": null,
  "minDuration": null,
  "numberRooms": null,
  "numberPersons": null,
  "isReady": null,
  "isNegotiable": null,
  "mainImage": null,
  "memberId": null,
  "rentDurationId": null,
  "typeId": null,
  "location": null,
  "categories": null,
  "features": null,
  "nearPlaces": null,
  "images": null,
} satisfies StoreRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as StoreRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


