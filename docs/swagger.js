// swagger.js

const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const path = require('path');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Product Catalog API Project',
      version: '1.0.0',
      description: 'API documentation for the Product Catalog API built with Express.js and MongoDB',
    },
    servers: [
      {
        url: 'http://localhost:3000/api/',
        description: 'Local development server',
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
      schemas: {
        Variant: {
          type: 'object',
          required: ['size', 'color', 'price', 'stock', 'status', 'isDiscounted'],
          properties: {
            _id: { type: 'string', example: '64bd...' },
            size: { type: 'string', example: '41' },
            color: { type: 'string', example: 'Black' },
            price: { type: 'number', example: 99.99 },
            stock: { type: 'number', example: 25 },
            isDiscounted: { type: 'boolean', example: false },
            discountPrice: { type: 'number', example: 89.99 },
            discount: { type: 'number', example: 10 },
            status: {
              type: 'string',
              enum: ['in_stock', 'out_of_stock', 'low_stock'],
              example: 'in_stock'
            }
          }
        },
        Product: {
          type: 'object',
          required: ['name', 'description', 'brand', 'category_id'],
          properties: {
            _id: { type: 'string', example: '64bd...' },
            name: { type: 'string', example: 'Leather Sneakers' },
            description: { type: 'string', example: 'Comfortable leather sneakers' },
            brand: { type: 'string', example: 'Nike' },
            category_id: { type: 'string', example: '64bd...' },
            variants: {
              type: 'array',
              items: { $ref: '#/components/schemas/Variant' }
            }
          }
        },
        Category: {
          type: 'object',
          required: ['name'],
          properties: {
            _id: { type: 'string', example: '64bd...' },
            name: { type: 'string', example: 'Footwear' },
            createdAt: {
              type: 'string',
              format: 'date-time',
              example: '2025-07-17T13:25:35.000Z'
            },
            updatedAt: {
              type: 'string',
              format: 'date-time',
              example: '2025-07-17T14:00:00.000Z'
            }
          }
        },
        User: {
          type: 'object',
          required: ['username', 'password'],
          properties: {
            _id: { type: 'string', example: '64bd...' },
            username: { type: 'string', example: 'john_doe' },
            password: { type: 'string', format: 'password', example: 'securepassword123' }
          }
        }
      }
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: [path.join(__dirname, './routers/*.js')], // Update the path if your routes are elsewhere
};

const swaggerSpec = swaggerJsDoc(options);

module.exports = { swaggerUi, swaggerSpec };

/**
 * @swagger
 * components:
 *   schemas:
 *     Category:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           example: 64dcb5dd6cba7c56a2e4a23f
 *         name:
 *           type: string
 *           example: "Footwear"
 *         createdAt:
 *           type: string
 *           format: date-time
 *           example: "2025-07-17T13:25:35.000Z"
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           example: "2025-07-17T14:00:00.000Z"
 */

/**
 * @swagger
 * /categories/{id}:
 *   put:
 *     summary: Update a category
 *     operationId: updateCategory
 *     tags: [Categories]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The category ID
 *         schema:
 *           type: string
 *           example: 64dcb5dd6cba7c56a2e4a23f
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Updated Category Name"
 *           example:
 *             name: "Updated Category Name"
 *     responses:
 *       200:
 *         description: Category updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Category updated successfully
 *                 category:
 *                   $ref: '#/components/schemas/Category'
 *       400:
 *         description: Failed to update category or category not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Category not found
 *                 error:
 *                   type: string
 *                   example: Cast to ObjectId failed for value "invalid-id"
 *       401:
 *         description: Unauthorized
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Unauthorized
 *       500:
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Internal Server Error
 */

/**
 * @swagger
 * /categories/{id}:
 *   delete:
 *     summary: Delete a category
 *     operationId: deleteCategory
 *     tags: [Categories]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The category ID
 *         schema:
 *           type: string
 *           example: 64dcb5dd6cba7c56a2e4a23f
 *     responses:
 *       200:
 *         description: Category deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Category deleted successfully
 *       404:
 *         description: Category not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Category not found
 *       401:
 *         description: Unauthorized
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Unauthorized
 *       500:
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Internal Server Error
 */

/**
 * @swagger
 * /products:
 *   post:
 *     summary: Create a new product with variants (includes automatic discount calculations)
 *     operationId: createProduct
 *     tags: [Products]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - description
 *               - brand
 *               - category_id
 *               - variants
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Sneakers"
 *               description:
 *                 type: string
 *                 example: "Comfortable running shoes"
 *               brand:
 *                 type: string
 *                 example: "Nike"
 *               category_id:
 *                 type: string
 *                 example: "64f1c4bcf1234567890abcd1"
 *               variants:
 *                 type: array
 *                 items:
 *                   type: object
 *                   required:
 *                     - size
 *                     - color
 *                     - price
 *                     - stock
 *                   properties:
 *                     size:
 *                       type: string
 *                       example: "41"
 *                     color:
 *                       type: string
 *                       example: "Black"
 *                     price:
 *                       type: number
 *                       example: 79.99
 *                     stock:
 *                       type: integer
 *                       example: 50
 *                     isDiscounted:
 *                       type: boolean
 *                       example: true
 *                       description: Optional - whether discount should be applied
 *           example:
 *             name: "Sneakers"
 *             description: "Comfortable running shoes"
 *             brand: "Nike"
 *             category_id: "64f1c4bcf1234567890abcd1"
 *             variants:
 *               - size: "41"
 *                 color: "Black"
 *                 price: 79.99
 *                 stock: 50
 *                 isDiscounted: true
 *     responses:
 *       201:
 *         description: Product created successfully with variants and discount calculations
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 product:
 *                   $ref: '#/components/schemas/Product'
 *                 variants:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                       product_id:
 *                         type: string
 *                       size:
 *                         type: string
 *                       color:
 *                         type: string
 *                       price:
 *                         type: number
 *                       stock:
 *                         type: integer
 *                       isDiscounted:
 *                         type: boolean
 *                       discountPrice:
 *                         type: number
 *                         description: Calculated discount price
 *       400:
 *         description: Bad request - validation failed, transaction aborted, or discount calculation error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Variant discount error: Invalid discount configuration"
 *       401:
 *         description: Unauthorized - missing or invalid authentication token
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Unauthorized"
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Internal Server Error"
 */
