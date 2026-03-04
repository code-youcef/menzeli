# AuthApi

All URIs are relative to *http://localhost:8000/api*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**authFillNamePost**](AuthApi.md#authfillnamepostoperation) | **POST** /auth/fill-name | Complete user profile (fill name) |
| [**authLoginPost**](AuthApi.md#authloginpostoperation) | **POST** /auth/login | Request OTP for login |
| [**authValidOtpPost**](AuthApi.md#authvalidotppostoperation) | **POST** /auth/valid-otp | Verify OTP |



## authFillNamePost

> AuthFillNamePost200Response authFillNamePost(accept, acceptLanguage, authorization, authFillNamePostRequest)

Complete user profile (fill name)

Update user name after OTP verification. Requires authentication token.

### Example

```ts
import {
  Configuration,
  AuthApi,
} from '';
import type { AuthFillNamePostOperationRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AuthApi(config);

  const body = {
    // string
    accept: accept_example,
    // 'ar' | 'fr' | 'en'
    acceptLanguage: acceptLanguage_example,
    // string | Token received from /auth/valid-otp
    authorization: Bearer <token>,
    // AuthFillNamePostRequest
    authFillNamePostRequest: ...,
  } satisfies AuthFillNamePostOperationRequest;

  try {
    const data = await api.authFillNamePost(body);
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
| **accept** | `string` |  | [Defaults to `&#39;application/json&#39;`] |
| **acceptLanguage** | `ar`, `fr`, `en` |  | [Defaults to `&#39;en&#39;`] [Enum: ar, fr, en] |
| **authorization** | `string` | Token received from /auth/valid-otp | [Defaults to `undefined`] |
| **authFillNamePostRequest** | [AuthFillNamePostRequest](AuthFillNamePostRequest.md) |  | |

### Return type

[**AuthFillNamePost200Response**](AuthFillNamePost200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Profile completed successfully |  -  |
| **401** | Unauthorized - invalid or missing token |  -  |
| **422** | Validation error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## authLoginPost

> AuthLoginPost200Response authLoginPost(accept, acceptLanguage, authLoginPostRequest)

Request OTP for login

Send OTP via WhatsApp to user\&#39;s phone number

### Example

```ts
import {
  Configuration,
  AuthApi,
} from '';
import type { AuthLoginPostOperationRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new AuthApi();

  const body = {
    // string
    accept: accept_example,
    // 'ar' | 'fr' | 'en'
    acceptLanguage: acceptLanguage_example,
    // AuthLoginPostRequest
    authLoginPostRequest: ...,
  } satisfies AuthLoginPostOperationRequest;

  try {
    const data = await api.authLoginPost(body);
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
| **accept** | `string` |  | [Defaults to `&#39;application/json&#39;`] |
| **acceptLanguage** | `ar`, `fr`, `en` |  | [Defaults to `&#39;en&#39;`] [Enum: ar, fr, en] |
| **authLoginPostRequest** | [AuthLoginPostRequest](AuthLoginPostRequest.md) |  | |

### Return type

[**AuthLoginPost200Response**](AuthLoginPost200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OTP sent successfully |  -  |
| **422** | Validation error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## authValidOtpPost

> AuthValidOtpPost200Response authValidOtpPost(accept, acceptLanguage, authValidOtpPostRequest)

Verify OTP

Verify OTP code and get authentication token

### Example

```ts
import {
  Configuration,
  AuthApi,
} from '';
import type { AuthValidOtpPostOperationRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new AuthApi();

  const body = {
    // string
    accept: accept_example,
    // 'ar' | 'fr' | 'en'
    acceptLanguage: acceptLanguage_example,
    // AuthValidOtpPostRequest
    authValidOtpPostRequest: ...,
  } satisfies AuthValidOtpPostOperationRequest;

  try {
    const data = await api.authValidOtpPost(body);
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
| **accept** | `string` |  | [Defaults to `&#39;application/json&#39;`] |
| **acceptLanguage** | `ar`, `fr`, `en` |  | [Defaults to `&#39;en&#39;`] [Enum: ar, fr, en] |
| **authValidOtpPostRequest** | [AuthValidOtpPostRequest](AuthValidOtpPostRequest.md) |  | |

### Return type

[**AuthValidOtpPost200Response**](AuthValidOtpPost200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OTP verified successfully |  -  |
| **404** | User not found |  -  |
| **422** | Invalid or expired OTP |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

