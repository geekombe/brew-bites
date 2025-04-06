# Brew-Bites API Documentation

## API Endpoints

### Home Endpoint

**GET /**
- **Description**: Returns a welcome message for the Brew-Bites API
- **Request**: No parameters required
- **Response**:
  - Status: 200 OK
  - Body:
    ```json
    {
      "message": "brew-bites api"
    }
    ```

### Menu Items Endpoint

**GET /items**
- **Description**: Retrieves all available menu items grouped by category
- **Request**: No parameters required
- **Response**:
  - Status: 200 OK
  - Body: JSON object with categories as keys and arrays of items as values
    ```json
    {
      "Coffee Drinks": [
        {
          "id": "coffee-1",
          "name": "Espresso",
          "description": "Pure and powerful...",
          "price": 250,
          "image": "Espresso.jpeg",
          "category": "Coffee Drinks"
        },
        // More coffee items...
      ],
      "Tea": [
        // Tea items...
      ],
      // More categories...
    }
    ```

### Cart Endpoints

**GET /user/cart**
- **Description**: Retrieves all items currently in the user's cart
- **Request**: No parameters required
- **Response**:
  - Status: 200 OK
  - Body:
    ```json
    {
      "items": [
        {
          "id": "coffee-1",
          "name": "Espresso",
          "price": 250,
          "quantity": 2,
          "image": "Espresso.jpeg",
          "category": "Coffee Drinks"
        },
        // More cart items...
      ]
    }
    ```

**POST /user/cart**
- **Description**: Adds an item to the cart or increases its quantity if already present
- **Request**:
  - Content-Type: application/json
  - Body:
    ```json
    {
      "id": "coffee-1",
      "quantity": 1  // Optional, defaults to 1
    }
    ```
- **Response**:
  - Status: 201 Created
  - Body:
    ```json
    {
      "message": "Item added to cart",
      "cart": {
        "items": [
          // Updated cart items...
        ]
      }
    }
    ```
- **Error Responses**:
  - 400 Bad Request: If item id is missing
    ```json
    {
      "error": "Item id is required"
    }
    ```
  - 404 Not Found: If item doesn't exist in the menu
    ```json
    {
      "error": "Item not found in menu"
    }
    ```

**PUT /user/cart/:id**
- **Description**: Updates the quantity of a specific item in the cart
- **URL Parameters**:
  - `id`: The ID of the item to update
- **Request**:
  - Content-Type: application/json
  - Body:
    ```json
    {
      "quantity": 3
    }
    ```
- **Response**:
  - Status: 200 OK
  - Body:
    ```json
    {
      "message": "Cart updated",
      "cart": {
        "items": [
          // Updated cart items...
        ]
      }
    }
    ```
- **Error Responses**:
  - 400 Bad Request: If quantity is invalid
    ```json
    {
      "error": "Valid quantity is required"
    }
    ```
  - 404 Not Found: If item isn't in the cart
    ```json
    {
      "error": "Item not found in cart"
    }
    ```

**DELETE /user/cart/:id**
- **Description**: Removes a specific item from the cart
- **URL Parameters**:
  - `id`: The ID of the item to remove
- **Request**: No body required
- **Response**:
  - Status: 200 OK
  - Body:
    ```json
    {
      "message": "Item removed from cart",
      "cart": {
        "items": [
          // Updated cart items...
        ]
      }
    }
    ```
- **Error Response**:
  - 404 Not Found: If item isn't in the cart
    ```json
    {
      "error": "Item not found in cart"
    }
    ```

**DELETE /user/cart**
- **Description**: Clears all items from the cart
- **Request**: No body required
- **Response**:
  - Status: 200 OK
  - Body:
    ```json
    {
      "message": "Cart cleared",
      "cart": {
        "items": []
      }
    }
    ```

## Data Models

### Menu Item
```json
{
  "id": "string",
  "name": "string",
  "description": "string",
  "price": number,
  "image": "string",
  "category": "string"
}
```

### Cart Item
```json
{
  "id": "string",
  "name": "string",
  "price": number,
  "quantity": number,
  "image": "string",
  "category": "string"
}
```

### Cart
```json
{
  "items": [
    // Cart Item objects
  ]
}
```

## Error Handling

All endpoints return appropriate HTTP status codes:
- 200: Successful operation
- 201: Resource created successfully
- 400: Bad request (invalid input)
- 404: Resource not found
- 500: Server error (not explicitly handled but may occur)
