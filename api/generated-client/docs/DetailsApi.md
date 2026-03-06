# DetailsApi

All URIs are relative to *https://menzili-backend.onrender.com/api*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**detailsCities**](DetailsApi.md#detailscities) | **GET** /listings/cities |  |
| [**detailsIndex**](DetailsApi.md#detailsindex) | **GET** /listings/details |  |
| [**detailsWilayas**](DetailsApi.md#detailswilayas) | **GET** /listings/wilayas |  |



## detailsCities

> DetailsCities200Response detailsCities(wilayaId)



### Example

```ts
import {
  Configuration,
  DetailsApi,
} from '';
import type { DetailsCitiesRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new DetailsApi();

  const body = {
    // number
    wilayaId: 56,
  } satisfies DetailsCitiesRequest;

  try {
    const data = await api.detailsCities(body);
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
| **wilayaId** | `number` |  | [Defaults to `undefined`] |

### Return type

[**DetailsCities200Response**](DetailsCities200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **422** | Validation error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## detailsIndex

> DetailsIndex200Response detailsIndex()



### Example

```ts
import {
  Configuration,
  DetailsApi,
} from '';
import type { DetailsIndexRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new DetailsApi();

  try {
    const data = await api.detailsIndex();
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

[**DetailsIndex200Response**](DetailsIndex200Response.md)

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


## detailsWilayas

> DetailsWilayas200Response detailsWilayas()



### Example

```ts
import {
  Configuration,
  DetailsApi,
} from '';
import type { DetailsWilayasRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new DetailsApi();

  try {
    const data = await api.detailsWilayas();
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

[**DetailsWilayas200Response**](DetailsWilayas200Response.md)

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

