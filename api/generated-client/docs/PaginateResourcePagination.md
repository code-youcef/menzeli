
# PaginateResourcePagination


## Properties

Name | Type
------------ | -------------
`total` | string
`count` | string
`perPage` | string
`currentPage` | string
`totalPages` | string
`hasPages` | string
`hasMorePages` | string
`firstPageUrl` | string
`lastPageUrl` | string
`nextPageUrl` | string
`prevPageUrl` | string
`from` | string
`to` | string
`path` | string
`currentPageUrl` | string

## Example

```typescript
import type { PaginateResourcePagination } from ''

// TODO: Update the object below with actual values
const example = {
  "total": null,
  "count": null,
  "perPage": null,
  "currentPage": null,
  "totalPages": null,
  "hasPages": null,
  "hasMorePages": null,
  "firstPageUrl": null,
  "lastPageUrl": null,
  "nextPageUrl": null,
  "prevPageUrl": null,
  "from": null,
  "to": null,
  "path": null,
  "currentPageUrl": null,
} satisfies PaginateResourcePagination

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PaginateResourcePagination
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


