// In-memory cart storage (note: this will reset on each deployment or server restart)
let cartItems = [];

module.exports = (req, res) => {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,DELETE');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // GET - Fetch all cart items
  if (req.method === 'GET') {
    return res.status(200).json({
      success: true,
      data: cartItems
    });
  }

  // POST - Add item to cart
  if (req.method === 'POST') {
    try {
      const item = req.body;
      
      // Validate item
      if (!item || !item.id || !item.name || !item.price) {
        return res.status(400).json({
          success: false,
          message: 'Invalid item. Required fields: id, name, price'
        });
      }

      // Add item with quantity
      const existingItemIndex = cartItems.findIndex(cartItem => cartItem.id === item.id);
      
      if (existingItemIndex >= 0) {
        // Increment quantity if item already exists
        cartItems[existingItemIndex].quantity = (cartItems[existingItemIndex].quantity || 1) + 1;
      } else {
        // Add new item with quantity 1
        cartItems.push({
          ...item,
          quantity: 1
        });
      }

      return res.status(201).json({
        success: true,
        data: cartItems
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: 'Server error',
        error: error.message
      });
    }
  }

  // DELETE - Remove item from cart
  if (req.method === 'DELETE') {
    try {
      const { id } = req.query;
      
      if (!id) {
        return res.status(400).json({
          success: false,
          message: 'Item ID is required'
        });
      }

      const initialLength = cartItems.length;
      cartItems = cartItems.filter(item => item.id !== id);

      if (cartItems.length === initialLength) {
        return res.status(404).json({
          success: false,
          message: `Item with ID ${id} not found in cart`
        });
      }

      return res.status(200).json({
        success: true,
        message: `Item with ID ${id} removed from cart`,
        data: cartItems
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: 'Server error',
        error: error.message
      });
    }
  }

  // Handle unsupported methods
  return res.status(405).json({
    success: false,
    message: 'Method not allowed'
  });
};
