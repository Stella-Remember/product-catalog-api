# Product Catalog API

A RESTful API for managing products, categories, sellers, inventory, and reporting, built with Node.js, Express, and MongoDB.

---

## Setup & Installation

1. **Clone the repository**
   ```sh
   git clone https://github.com/Stella-Remember/product-catalog-api.git
   cd product-catalog-api
   ```

2. **Install dependencies**
   ```sh
   npm install
   ```

3. **Configure environment variables**
   - Create a `.env` file in the root directory:
     ```
     MONGO_URI=mongodb://localhost:27017/product-catalog
     PORT=5000
     ```
   - Adjust `MONGO_URI` as needed for your MongoDB setup.

4. **Start the server**
   ```sh
   node server.js
   ```
   The API will run at `http://localhost:5000`.

---

## API Documentation

Interactive documentation is available at [`/api-docs`](http://localhost:5000/api-docs) (Swagger UI).

### **Endpoints**

#### **Products**
- `GET /api/products`  
  Get all products. Supports query params: `search`, `category`, `seller`, `order`.

- `GET /api/products/:id`  
  Get product by ID.

- `POST /api/products`  
  Create a new product.  
  **Request Example:**
  ```json
  {
    "name": "Sneakers",
    "description": "Comfortable running shoes",
    "price": 79.99,
    "discount": 10,
    "category": "<category_id>",
    "seller": "<seller_id>",
    "variants": [
      { "size": "41", "color": "Black", "stock": 50 }
    ]
  }
  ```

- `PUT /api/products/:id`  
  Update a product.

- `DELETE /api/products/:id`  
  Delete a product.

- `GET /api/products/low-stock`  
  Get products with low stock variants.

#### **Categories**
- `GET /api/categories`  
  Get all categories.

- `POST /api/categories`  
  Create a new category.  
  **Request Example:**
  ```json
  {
    "name": "Footwear",
    "description": "Shoes and sandals"
  }
  ```

#### **Sellers**
- `GET /api/sellers`  
  Get all sellers.

- `GET /api/sellers/:id`  
  Get seller by ID.

- `POST /api/sellers`  
  Create a new seller.

---

### **Status Codes**

- `200 OK` — Successful GET, PUT, DELETE
- `201 Created` — Successful POST
- `400 Bad Request` — Validation or input error
- `404 Not Found` — Resource not found
- `500 Internal Server Error` — Server error

---

## Assumptions & Limitations

- **Authentication:** Not implemented (all endpoints are public).
- **Discounts:** Simple percentage discount at product level.
- **Inventory:** Low stock threshold is hardcoded (can be adjusted).
- **No pagination:** All results are returned at once.
- **No advanced reporting:** Only basic low-stock reporting is available.
- **Data validation:** Basic validation via Mongoose schemas.

---

## DEMO VIDEO

https://drive.google.com/file/d/1LdnFFUHU1fpkiSrDu5T3I7-Kxk_UR6Im/view?usp=sharing
