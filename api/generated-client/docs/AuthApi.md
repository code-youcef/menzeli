# AuthApi

All URIs are relative to *https://menzili-backend.onrender.com/api*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**authCompleteProfile**](AuthApi.md#authcompleteprofileoperation) | **POST** /auth/fill-name |  |
| [**authRequestOtp**](AuthApi.md#authrequestotpoperation) | **POST** /auth/login |  |
| [**authVerifyOtp**](AuthApi.md#authverifyotpoperation) | **POST** /auth/valid-otp |  |



## authCompleteProfile

> AuthCompleteProfile200Response authCompleteProfile(authCompleteProfileRequest)



### Example

```ts
import {
  Configuration,
  AuthApi,
} from '';
import type { AuthCompleteProfileOperationRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new AuthApi();

  const body = {
    // AuthCompleteProfileRequest
    authCompleteProfileRequest: ...,
  } satisfies AuthCompleteProfileOperationRequest;

  try {
    const data = await api.authCompleteProfile(body);
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
| **authCompleteProfileRequest** | [AuthCompleteProfileRequest](AuthCompleteProfileRequest.md) |  | |

### Return type

[**AuthCompleteProfile200Response**](AuthCompleteProfile200Response.md)

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
| **401** | Unauthenticated |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## authRequestOtp

> AuthRequestOtp200Response authRequestOtp(authRequestOtpRequest)



### Example

```ts
import {
  Configuration,
  AuthApi,
} from '';
import type { AuthRequestOtpOperationRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new AuthApi();

  const body = {
    // AuthRequestOtpRequest
    authRequestOtpRequest: ...,
  } satisfies AuthRequestOtpOperationRequest;

  try {
    const data = await api.authRequestOtp(body);
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
| **authRequestOtpRequest** | [AuthRequestOtpRequest](AuthRequestOtpRequest.md) |  | |

### Return type

[**AuthRequestOtp200Response**](AuthRequestOtp200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **403** |  |  -  |
| **200** | $whatsapp-&gt;sendOtp($phone, $otp); |  -  |
| **422** | Validation error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## authVerifyOtp

> AuthVerifyOtp200Response authVerifyOtp(authVerifyOtpRequest)



### Example

```ts
import {
  Configuration,
  AuthApi,
} from '';
import type { AuthVerifyOtpOperationRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new AuthApi();

  const body = {
    // AuthVerifyOtpRequest
    authVerifyOtpRequest: ...,
  } satisfies AuthVerifyOtpOperationRequest;

  try {
    const data = await api.authVerifyOtp(body);
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
| **authVerifyOtpRequest** | [AuthVerifyOtpRequest](AuthVerifyOtpRequest.md) |  | |

### Return type

[**AuthVerifyOtp200Response**](AuthVerifyOtp200Response.md)

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
| **404** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

