
# DetailsIndex200ResponseData


## Properties

Name | Type
------------ | -------------
`features` | [Array&lt;FeatureResource&gt;](FeatureResource.md)
`categories` | [Array&lt;CategoryResource&gt;](CategoryResource.md)
`nearPlaces` | [Array&lt;NearPlaceResource&gt;](NearPlaceResource.md)
`types` | [Array&lt;TypeResource&gt;](TypeResource.md)
`rentDurations` | [Array&lt;RentDurationResource&gt;](RentDurationResource.md)

## Example

```typescript
import type { DetailsIndex200ResponseData } from ''

// TODO: Update the object below with actual values
const example = {
  "features": null,
  "categories": null,
  "nearPlaces": null,
  "types": null,
  "rentDurations": null,
} satisfies DetailsIndex200ResponseData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DetailsIndex200ResponseData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


