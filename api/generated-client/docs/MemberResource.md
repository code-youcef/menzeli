
# MemberResource


## Properties

Name | Type
------------ | -------------
`id` | number
`name` | string
`email` | string
`phone` | string
`profileImage` | string
`memberVerified` | boolean
`agentVerified` | boolean

## Example

```typescript
import type { MemberResource } from ''

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "name": null,
  "email": null,
  "phone": null,
  "profileImage": null,
  "memberVerified": null,
  "agentVerified": null,
} satisfies MemberResource

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MemberResource
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


