# DefaultApi

All URIs are relative to *https://menzili-backend.onrender.com/api*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getDataGet**](DefaultApi.md#getdataget) | **GET** /get_data |  |
| [**listingsUpdatePost**](DefaultApi.md#listingsupdatepostoperation) | **POST** /listings/update |  |
| [**userGet**](DefaultApi.md#userget) | **GET** /user |  |



## getDataGet

> Array&lt;TypeResource&gt; getDataGet()



### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { GetDataGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new DefaultApi();

  try {
    const data = await api.getDataGet();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**Array&lt;TypeResource&gt;**](TypeResource.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Array of &#x60;TypeResource&#x60; |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listingsUpdatePost

> ListingsUpdatePost200Response listingsUpdatePost(listingsUpdatePostRequest)



### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { ListingsUpdatePostOperationRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new DefaultApi();

  const body = {
    // ListingsUpdatePostRequest
    listingsUpdatePostRequest: ...,
  } satisfies ListingsUpdatePostOperationRequest;

  try {
    const data = await api.listingsUpdatePost(body);
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
| **listingsUpdatePostRequest** | [ListingsUpdatePostRequest](ListingsUpdatePostRequest.md) |  | |

### Return type

[**ListingsUpdatePost200Response**](ListingsUpdatePost200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **422** | Validation error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## userGet

> User userGet()



### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { UserGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new DefaultApi();

  try {
    const data = await api.userGet();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | &#x60;User&#x60; |  -  |
| **401** | Unauthenticated |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

