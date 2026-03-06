# ListingApi

All URIs are relative to *https://menzili-backend.onrender.com/api*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**listingsDestroy**](ListingApi.md#listingsdestroy) | **DELETE** /listings/{listing} |  |
| [**listingsIndex**](ListingApi.md#listingsindex) | **GET** /listings |  |
| [**listingsStore**](ListingApi.md#listingsstore) | **POST** /listings |  |
| [**listingsUpdate**](ListingApi.md#listingsupdate) | **PUT** /listings/{listing} |  |



## listingsDestroy

> ListingsDestroy200Response listingsDestroy(listing)



### Example

```ts
import {
  Configuration,
  ListingApi,
} from '';
import type { ListingsDestroyRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new ListingApi();

  const body = {
    // number | The listing ID
    listing: 56,
  } satisfies ListingsDestroyRequest;

  try {
    const data = await api.listingsDestroy(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **listing** | `number` | The listing ID | [Defaults to `undefined`] |

### Return type

[**ListingsDestroy200Response**](ListingsDestroy200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **404** | Not found |  -  |
| **401** | Unauthenticated |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listingsIndex

> ListingsIndex200Response listingsIndex(perPage)



### Example

```ts
import {
  Configuration,
  ListingApi,
} from '';
import type { ListingsIndexRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new ListingApi();

  const body = {
    // string (optional)
    perPage: perPage_example,
  } satisfies ListingsIndexRequest;

  try {
    const data = await api.listingsIndex(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **perPage** | `string` |  | [Optional] [Defaults to `&#39;4&#39;`] |

### Return type

[**ListingsIndex200Response**](ListingsIndex200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listingsStore

> ListingsStore201Response listingsStore(storeRequest)



### Example

```ts
import {
  Configuration,
  ListingApi,
} from '';
import type { ListingsStoreRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new ListingApi();

  const body = {
    // StoreRequest
    storeRequest: ...,
  } satisfies ListingsStoreRequest;

  try {
    const data = await api.listingsStore(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **storeRequest** | [StoreRequest](StoreRequest.md) |  | |

### Return type

[**ListingsStore201Response**](ListingsStore201Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** |  |  -  |
| **401** | Unauthenticated |  -  |
| **422** | Validation error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listingsUpdate

> ListingsStore201Response listingsUpdate(listing, updateRequest)



### Example

```ts
import {
  Configuration,
  ListingApi,
} from '';
import type { ListingsUpdateRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new ListingApi();

  const body = {
    // number | The listing ID
    listing: 56,
    // UpdateRequest (optional)
    updateRequest: ...,
  } satisfies ListingsUpdateRequest;

  try {
    const data = await api.listingsUpdate(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **listing** | `number` | The listing ID | [Defaults to `undefined`] |
| **updateRequest** | [UpdateRequest](UpdateRequest.md) |  | [Optional] |

### Return type

[**ListingsStore201Response**](ListingsStore201Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **404** | Not found |  -  |
| **401** | Unauthenticated |  -  |
| **422** | Validation error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

