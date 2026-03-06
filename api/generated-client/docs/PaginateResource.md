
# PaginateResource


## Properties

Name | Type
------------ | -------------
`listing` | [Array&lt;ListingResource&gt;](ListingResource.md)
`pagination` | [PaginateResourcePagination](PaginateResourcePagination.md)

## Example

```typescript
import type { PaginateResource } from ''

// TODO: Update the object below with actual values
const example = {
  "listing": null,
  "pagination": null,
} satisfies PaginateResource

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PaginateResource
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


