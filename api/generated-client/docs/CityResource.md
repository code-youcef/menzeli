
# CityResource


## Properties

Name | Type
------------ | -------------
`id` | number
`name` | string
`code` | string
`country` | [CountryResource](CountryResource.md)
`wilaya` | [WilayaResource](WilayaResource.md)

## Example

```typescript
import type { CityResource } from ''

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "name": null,
  "code": null,
  "country": null,
  "wilaya": null,
} satisfies CityResource

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CityResource
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


