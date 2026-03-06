
# LocationResource


## Properties

Name | Type
------------ | -------------
`id` | number
`latitude` | string
`longitude` | string
`zipCode` | string
`city` | string
`wilaya` | string
`wilayaCode` | string
`country` | string

## Example

```typescript
import type { LocationResource } from ''

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "latitude": null,
  "longitude": null,
  "zipCode": null,
  "city": null,
  "wilaya": null,
  "wilayaCode": null,
  "country": null,
} satisfies LocationResource

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as LocationResource
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


