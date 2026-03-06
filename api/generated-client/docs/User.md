
# User


## Properties

Name | Type
------------ | -------------
`id` | number
`name` | string
`phone` | string
`email` | string
`emailVerifiedAt` | Date
`profileImage` | string
`otpCode` | string
`otpExpiresAt` | Date
`isActive` | number
`phoneVerifiedAt` | Date
`isAdmin` | number
`deviceToken` | string
`lastLoginAt` | string
`createdAt` | Date
`updatedAt` | Date

## Example

```typescript
import type { User } from ''

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "name": null,
  "phone": null,
  "email": null,
  "emailVerifiedAt": null,
  "profileImage": null,
  "otpCode": null,
  "otpExpiresAt": null,
  "isActive": null,
  "phoneVerifiedAt": null,
  "isAdmin": null,
  "deviceToken": null,
  "lastLoginAt": null,
  "createdAt": null,
  "updatedAt": null,
} satisfies User

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as User
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


