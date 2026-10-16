# HTTP Status Codes – Complete Reference

HTTP status codes are three-digit numbers returned by a server to indicate the result of an HTTP request. They are commonly used in REST APIs built with Node.js and Express.

## Table of Contents

- [1. Status Code Categories](#1-status-code-categories)
- [2. Informational Responses (1xx)](#2-informational-responses-1xx)
- [3. Successful Responses (2xx)](#3-successful-responses-2xx)
- [4. Redirection Responses (3xx)](#4-redirection-responses-3xx)
- [5. Client Error Responses (4xx)](#5-client-error-responses-4xx)
- [6. Server Error Responses (5xx)](#6-server-error-responses-5xx)
- [7. Common Status Codes in REST APIs](#7-common-status-codes-in-rest-apis)
- [8. CRUD Status Code Reference](#8-crud-status-code-reference)
- [9. Express.js Examples](#9-expressjs-examples)
- [10. Important Differences](#10-important-differences)
- [11. Official References](#11-official-references)

---

## 1. Status Code Categories

| Range | Category | Meaning |
|---|---|---|
| 100–199 | Informational | Request received; processing continues |
| 200–299 | Success | Request completed successfully |
| 300–399 | Redirection | Further action or redirection is required |
| 400–499 | Client Error | Request cannot be fulfilled because of a client-side issue |
| 500–599 | Server Error | Server failed to fulfill a valid request |

## 2. Informational Responses (1xx)

These codes indicate that the server has received the request and is continuing processing. They are generally handled automatically by HTTP clients, servers, and proxies.

| Code | Status | Description |
|---|---|---|
| 100 | Continue | Client can continue sending the request body. |
| 101 | Switching Protocols | Server agrees to switch protocols, such as an HTTP upgrade. |
| 102 | Processing | Server is processing the request but has not completed it. |
| 103 | Early Hints | Sends preliminary headers while the final response is being prepared. |
| 104 | Upload Resumption Supported | Temporary registered extension for resumable uploads; check its current registration status before relying on it. |

## 3. Successful Responses (2xx)

These codes indicate that a request has been successfully received, understood, and handled.

| Code | Status | Description |
|---|---|---|
| 200 | OK | Request completed successfully. |
| 201 | Created | A new resource was created successfully. |
| 202 | Accepted | Request was accepted for processing, but processing is not complete. |
| 203 | Non-Authoritative Information | Response metadata has been modified by a transforming intermediary. |
| 204 | No Content | Request succeeded; no response body is returned. |
| 205 | Reset Content | Request succeeded; client should reset the relevant view or form. |
| 206 | Partial Content | Server returns part of a resource, usually for range requests. |
| 207 | Multi-Status | Reports multiple resource statuses, commonly in WebDAV. |
| 208 | Already Reported | Prevents repeating previously reported WebDAV resource bindings. |
| 226 | IM Used | Server returned a result based on an instance manipulation. |

## 4. Redirection Responses (3xx)

These codes indicate that the client needs to use a different resource location or take another action to complete the request.

| Code | Status | Description |
|---|---|---|
| 300 | Multiple Choices | Multiple representations are available. |
| 301 | Moved Permanently | Resource has permanently moved to a new URL. |
| 302 | Found | Resource is temporarily available at another URL. |
| 303 | See Other | Client should retrieve another URL, typically using GET. |
| 304 | Not Modified | Cached resource can be reused because it has not changed. |
| 305 | Use Proxy | Obsolete; should not be used. |
| 306 | Unused | Reserved and no longer used. |
| 307 | Temporary Redirect | Temporary redirect; the request method must be preserved. |
| 308 | Permanent Redirect | Permanent redirect; the request method must be preserved. |

## 5. Client Error Responses (4xx)

These codes indicate that the request cannot be fulfilled due to a problem with the request, permissions, authentication, or the requested resource.

| Code | Status | Description |
|---|---|---|
| 400 | Bad Request | Invalid request, malformed JSON, or invalid input format. |
| 401 | Unauthorized | Authentication is required or the supplied credentials are invalid. |
| 402 | Payment Required | Reserved for future use; sometimes used by payment systems. |
| 403 | Forbidden | Server understands the request but refuses to authorize it. |
| 404 | Not Found | Requested resource or endpoint does not exist. |
| 405 | Method Not Allowed | HTTP method is not supported for the endpoint. |
| 406 | Not Acceptable | Server cannot provide a representation acceptable to the client. |
| 407 | Proxy Authentication Required | Client must authenticate with a proxy. |
| 408 | Request Timeout | Server timed out waiting for the request. |
| 409 | Conflict | Request conflicts with the current state of the resource. |
| 410 | Gone | Resource is no longer available and is not expected to return. |
| 411 | Length Required | Server requires a Content-Length header. |
| 412 | Precondition Failed | A request precondition was not satisfied. |
| 413 | Content Too Large | Request body exceeds the server's accepted limit. |
| 414 | URI Too Long | Request URI is longer than the server accepts. |
| 415 | Unsupported Media Type | Request body format is not supported. |
| 416 | Range Not Satisfiable | Requested range cannot be supplied. |
| 417 | Expectation Failed | Server cannot satisfy the Expect header requirements. |
| 418 | I'm a Teapot | Originally an April Fools' joke; registered as a status code. |
| 421 | Misdirected Request | Request was sent to a server unable to produce a response for that origin. |
| 422 | Unprocessable Content | Request content is syntactically valid but cannot be processed semantically. |
| 423 | Locked | Resource is locked, commonly in WebDAV. |
| 424 | Failed Dependency | Request failed because a dependent operation failed. |
| 425 | Too Early | Server is unwilling to process a request that might be replayed. |
| 426 | Upgrade Required | Client must switch to another protocol. |
| 428 | Precondition Required | Server requires a conditional request. |
| 429 | Too Many Requests | Client has sent too many requests within a given time. |
| 431 | Request Header Fields Too Large | Request headers are too large. |
| 451 | Unavailable For Legal Reasons | Resource is unavailable due to legal restrictions. |

## 6. Server Error Responses (5xx)

These codes indicate that the server or an upstream service failed to complete a request.

| Code | Status | Description |
|---|---|---|
| 500 | Internal Server Error | Unexpected server-side error. |
| 501 | Not Implemented | Server does not support the functionality required. |
| 502 | Bad Gateway | Gateway or proxy received an invalid response from an upstream server. |
| 503 | Service Unavailable | Server is temporarily unable to handle requests. |
| 504 | Gateway Timeout | Gateway or proxy did not receive a timely upstream response. |
| 505 | HTTP Version Not Supported | Server does not support the HTTP version used. |
| 506 | Variant Also Negotiates | Server has an internal configuration error during content negotiation. |
| 507 | Insufficient Storage | Server cannot store the representation needed to complete the request. |
| 508 | Loop Detected | Server detected an infinite loop while processing the request. |
| 510 | Not Extended | An extension to the request is required. |
| 511 | Network Authentication Required | Client must authenticate to gain network access. |

**Note:** This reference lists assigned codes, not every possible number between 100 and 599. Some numbers are unassigned. The 509 status code, often used by hosting providers for bandwidth limits, is not a standard registered HTTP status code.

## 7. Common Status Codes in REST APIs

For Node.js and Express applications, these are the most frequently used codes.

| Code | When to Use |
|---|---|
| 200 | Successful GET, PUT, PATCH, or other request with a response body. |
| 201 | Successful POST that creates a resource. |
| 204 | Successful operation with no response body. |
| 400 | Invalid input, malformed JSON, or invalid request parameters. |
| 401 | Missing, invalid, or expired authentication credentials. |
| 403 | Authenticated user does not have permission to perform the action. |
| 404 | Requested resource or route was not found. |
| 405 | HTTP method is not supported by the endpoint. |
| 409 | Duplicate record or conflicting resource state. |
| 413 | Request payload exceeds the configured size limit. |
| 415 | Unsupported request content type. |
| 422 | Valid request syntax but failed business validation. |
| 429 | Rate limit exceeded. |
| 500 | Unexpected internal application error. |
| 502 | Invalid response from an upstream server. |
| 503 | Service temporarily unavailable. |
| 504 | Upstream service timed out. |

## 8. CRUD Status Code Reference

For a Student Management REST API:

| Operation | HTTP Method | Success Code | Error Example |
|---|---|---|---|
| Get all students | GET | 200 OK | 500 Internal Server Error |
| Get student by ID | GET | 200 OK | 404 Not Found |
| Create student | POST | 201 Created | 400 Bad Request |
| Update student | PUT | 200 OK | 404 Not Found |
| Partially update student | PATCH | 200 OK | 404 Not Found |
| Delete student | DELETE | 204 No Content | 404 Not Found |

A DELETE request may also return `200 OK` when the API returns a response body confirming the deletion.

## 9. Express.js Examples

### 9.1 Return a successful response

```javascript
app.get("/students", async (req, res, next) => {
  try {
    const students = await Student.find();

    res.status(200).json({
      status: "success",
      results: students.length,
      data: { students },
    });
  } catch (error) {
    next(error);
  }
});
```

### 9.2 Create a resource

```javascript
app.post("/students", async (req, res, next) => {
  try {
    const student = await Student.create(req.body);

    res.status(201).json({
      status: "success",
      data: { student },
    });
  } catch (error) {
    next(error);
  }
});
```

### 9.3 Return a 400 Bad Request

```javascript
if (!req.body.name) {
  return res.status(400).json({
    status: "fail",
    message: "Student name is required",
  });
}
```

### 9.4 Return a 404 Not Found

```javascript
const student = await Student.findById(req.params.id);

if (!student) {
  return res.status(404).json({
    status: "fail",
    message: "Student not found",
  });
}
```

### 9.5 Return a 500 Internal Server Error

In a centralized error handler, use `500` as the fallback for unexpected errors.

```javascript
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    status: statusCode >= 500 ? "error" : "fail",
    message:
      statusCode === 500
        ? "Internal Server Error"
        : err.message,
  });
});
```

**Important:** Register your error-handling middleware after your routes. In production, avoid exposing internal error details or stack traces to clients.

## 10. Important Differences

### 400 vs 404

- **400 Bad Request:** The request itself is invalid, such as malformed JSON or an invalid ID format.
- **404 Not Found:** The request is valid, but the requested student does not exist.

Example:

```javascript
// Invalid MongoDB ObjectId format
return res.status(400).json({
  message: "Invalid student ID",
});

// Valid ID format, but no matching student exists
return res.status(404).json({
  message: "Student not found",
});
```

### 401 vs 403

- **401 Unauthorized:** The user needs valid authentication credentials.
- **403 Forbidden:** The server refuses access, even though the request is understood and authenticated access may already exist.

### 200 vs 201 vs 204

- **200 OK:** Request succeeded and a response body may be returned.
- **201 Created:** A new resource was created.
- **204 No Content:** Request succeeded, and no response body is returned.

### 409 vs 422

- **409 Conflict:** Request conflicts with the current state, such as attempting to create a duplicate resource.
- **422 Unprocessable Content:** Request is syntactically valid, but its contents fail semantic or business validation.

### 500 vs 503

- **500 Internal Server Error:** An unexpected server error occurred.
- **503 Service Unavailable:** Service is temporarily unable to handle the request, often because of maintenance or overload.

## 11. Official References

- [RFC 9110 – HTTP Semantics and Status Codes](https://www.rfc-editor.org/rfc/rfc9110.html)
- [IANA – Official HTTP Status Code Registry](https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml)
- [MDN – HTTP Response Status Codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status)

---

**Best practice:** Always return an appropriate HTTP status code from your Express API. Use centralized error handling, validate incoming data, and return consistent JSON response structures.

