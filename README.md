# Online-Qr-Code-Generator
<h2>Author:Rajkumar Maurya</h2>
<h1># API Documentation for QR Code Generator</h1>

## Overview

This documentation outlines the API used in the QR Code Generator application for generating QR codes based on user-provided text or URLs. The application is built using HTML and JavaScript.

## HTML Structure

### Document Structure

* **DOCTYPE Declaration**: Specifies the document type and version of HTML.
* **`<html>` Element**: The root element of the HTML document.
* **`<head>` Section**: Contains metadata such as character set, viewport settings, title, and stylesheet reference.
* **`<body>` Section**: Contains the visible content of the webpage including a text input for user data, an image display for the QR code, and a button to trigger QR code generation.

### Elements

* **`<input>` Element**:
    * Type: Text
    * **ID**: `qrtext`
    * **Placeholder**: "Text or URL"
    * User input is collected from here.
* **`<div>` Element**:
    * **ID**: `imgbox`
    * Contains an `<img>` tag where the generated QR code is displayed.
* **`<button>` Element**:
    * Invokes the `generateqr()` function on click to generate the QR code.

## JavaScript Functionality

### Variables

* **`imgbox`**: References the `div` element that contains the QR code image.
* **`qrcode`**: References the `img` element where the QR code will be displayed.
* **`qrtext`**: References the input field where the user enters text or URL.

### Function: `generateqr()`

#### Description

This function generates a QR code based on the user input from the `qrtext` input field and updates the `src` attribute of the `img` element to display the QR code.

#### Syntax

```javascript
function generateqr() {
    // function logic
}
```

#### Usage

To generate a QR code, the user must enter text or a URL into the input field and click the button. The `generateqr()` function is triggered, during which the QR code image source is constructed and set.

#### Parameters

* **No parameters** are passed to this function.

#### Return Value

* Returns no value (void). It modifies the `src` attribute of the `<img>` HTML element to display the generated QR code.

#### Example

```javascript
// User inputs "Hello, World!" in the input field
// After clicking the button, the QR code displayed will encode that text.
```

### API Endpoint

The QR code generation relies on a third-party API: `https://api.qrserver.com/v1/create-qr-code/`.

#### Request Method

* **GET**

#### Request Parameters

* **size**: Specifies the size of the QR code image (e.g., `150x150`).
* **data**: The text or URL to be encoded in the QR code.

#### Example API Call

To generate a QR code for the text "Hello, World!", the API call would look like this:

```plaintext
GET https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Hello%2C%20World%21


### Response
The API responds with an image (PNG format) of the generated QR code, which is displayed in the application via the `img` tag.

### Notes
- Ensure that user input is valid to avoid generating unwanted QR codes.
- Consider implementing error handling for the input and API call to enhance user experience. 

This documentation serves as a guide for developers to understand and implement the functionality of the QR Code Generator project effectively.
```
