// Sample menu items data based on the Brew Bites website
const menuItems = {
    "Coffee Drinks": [
      {
        id: "coffee-1",
        name: "Espresso",
        description: "Pure and powerful. A shot of rich, concentrated coffee that's bold, intense, and ready to wake you up with every sip.",
        price: 250,
        image: "Espresso.jpeg",
        category: "Coffee Drinks"
      },
      {
        id: "coffee-2",
        name: "Cappuccino",
        description: "Velvety foam, rich espresso, and a dash of boldness—this classic is your go-to for mornings that need a little magic.",
        price: 300,
        image: "Cappuccino.jpeg",
        category: "Coffee Drinks"
      },
      {
        id: "coffee-3",
        name: "Latte",
        description: "Silky, smooth, and endlessly comforting. A warm blend of espresso and steamed milk that feels like your favorite sweater in a cup.",
        price: 270,
        image: "Latte.jpeg",
        category: "Coffee Drinks"
      },
      {
        id: "coffee-4",
        name: "Cold Brew",
        description: "Brewed slowly, chilled perfectly. This bold, smooth cold brew skips the heat but keeps the rich, strong kick, refreshing.",
        price: 370,
        image: "Cold Brew.jpeg",
        category: "Coffee Drinks"
      }
    ],
    "Tea": [
      {
        id: "tea-1",
        name: "Earl Grey",
        description: "A classic blend of black tea infused with fragrant bergamot. Elegant, fragrant, and calming, with a hint of citrus zest.",
        price: 220,
        image: "Earl Grey.jpeg",
        category: "Tea"
      },
      {
        id: "tea-2",
        name: "Chai Latte",
        description: "A warm, spiced blend of black tea and milk, infused with cinnamon, cardamom, and cloves—rich, creamy, and full of flavor.",
        price: 250,
        image: "Chai Latte.jpeg",
        category: "Tea"
      },
      {
        id: "tea-3",
        name: "Green Tea",
        description: "Light, refreshing, and full of antioxidants. This delicate brew offers a subtle grassy flavor with a smooth, calming finish.",
        price: 180,
        image: "Green Tea.jpeg",
        category: "Tea"
      }
    ],
    "Pastries": [
      {
        id: "pastry-1",
        name: "Croissant",
        description: "Flaky, buttery, and golden. This French classic is the perfect balance of crispy on the outside, soft on the inside.",
        price: 150,
        image: "croissant.jpeg",
        category: "Pastries"
      },
      {
        id: "pastry-2",
        name: "Chocolate Chip Cookie",
        description: "Chewy, indulgent, and packed with chocolate chips—your classic, sweet treat in every bite.",
        price: 120,
        image: "Chocolate Chip Cookie.jpeg",
        category: "Pastries"
      },
      {
        id: "pastry-3",
        name: "Blueberry Muffin",
        description: "Bursting with fresh blueberries, this soft, moist muffin is a perfect balance of sweet and tangy in every bite.",
        price: 200,
        image: "Blueberry Muffin.jpeg",
        category: "Pastries"
      }
    ],
    "Sandwiches": [
      {
        id: "sandwich-1",
        name: "Avocado Toast",
        description: "Creamy avocado on toasted bread, lightly seasoned—simple, fresh, and always a delicious choice.",
        price: 250,
        image: "Avocado Toast.jpeg",
        category: "Sandwiches"
      },
      {
        id: "sandwich-2",
        name: "Chicken Sandwich",
        description: "Tender chicken, fresh veggies, and zesty sauce, all tucked in soft bread—flavorful and satisfying.",
        price: 350,
        image: "Chicken Sandwich.jpeg",
        category: "Sandwiches"
      },
      {
        id: "sandwich-3",
        name: "Veggie Wrap",
        description: "A wholesome blend of fresh veggies, wrapped in a soft tortilla—light, crunchy, and packed with flavor.",
        price: 300,
        image: "Veggie Wrap.jpeg",
        category: "Sandwiches"
      }
    ],
    "Crunch & Munch": [
      {
        id: "crunch-1",
        name: "Sausages",
        description: "Savory, juicy, and perfectly spiced, these sausages are a flavorful bite of pure satisfaction.",
        price: 220,
        image: "Sausages.jpeg",
        category: "Crunch & Munch"
      },
      {
        id: "crunch-2",
        name: "French Fries",
        description: "Crispy on the outside, soft on the inside—these golden fries are the perfect snack or side.",
        price: 180,
        image: "French fries.jpeg",
        category: "Crunch & Munch"
      },
      {
        id: "crunch-3",
        name: "Samosa India",
        description: "Crispy pastry filled with spiced potatoes and peas—deliciously savory and perfect for a snack.",
        price: 220,
        image: "SAMOSA INDIA.jpeg",
        category: "Crunch & Munch"
      },
      {
        id: "crunch-4",
        name: "Chips Masala",
        description: "Crispy fries tossed in aromatic spices—savory, tangy, and full of flavor in every bite.",
        price: 260,
        image: "Chips masala.jpeg",
        category: "Crunch & Munch"
      }
    ],
    "Chilled Sips": [
      {
        id: "drink-1",
        name: "Coca Cola",
        description: "Chilled, fizzy, and timeless—perfectly sweet with that classic cola kick and refreshing feel in every sip.",
        price: 150,
        image: "Coca Cola.jpeg",
        category: "Chilled Sips"
      },
      {
        id: "drink-2",
        name: "Red Bull",
        description: "Energizing and bold, this classic boost keeps you sharp, refreshed, and ready to power through.",
        price: 250,
        image: "Red Bull .jpeg",
        category: "Chilled Sips"
      },
      {
        id: "drink-3",
        name: "Dasani Water",
        description: "Clean, crisp, and refreshing—pure hydration for whenever you need a cool, calming sip.",
        price: 100,
        image: "Dasani Water Bottle .jpeg",
        category: "Chilled Sips"
      },
      {
        id: "drink-4",
        name: "Orange Juice",
        description: "Fresh and fruity with a natural citrus zing—brightens your day, one sip at a time.",
        price: 200,
        image: "Fresh Orange Juice.jpeg",
        category: "Chilled Sips"
      }
    ]
  };
  
  // Create a flat array of all items for easier searching
  const allItems = Object.values(menuItems).flat();
  
  module.exports = (req, res) => {
    // Set CORS headers
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader(
      'Access-Control-Allow-Headers',
      'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    );
  
    // Handle preflight requests
    if (req.method === 'OPTIONS') {
      return res.status(200).end();
    }
  
    // Only allow GET requests
    if (req.method !== 'GET') {
      return res.status(405).json({
        success: false,
        message: 'Method not allowed'
      });
    }
  
    // Get query parameters
    const { category, id, search } = req.query;
  
    // Return a specific item by ID
    if (id) {
      const item = allItems.find(item => item.id === id);
      if (!item) {
        return res.status(404).json({
          success: false,
          message: `Item with ID ${id} not found`
        });
      }
      return res.status(200).json({
        success: true,
        data: item
      });
    }
  
    // Return items by category
    if (category) {
      const categoryItems = menuItems[category];
      if (!categoryItems) {
        return res.status(404).json({
          success: false,
          message: `Category ${category} not found`,
          availableCategories: Object.keys(menuItems)
        });
      }
      return res.status(200).json({
        success: true,
        data: categoryItems
      });
    }
  
    // Search items by name or description
    if (search) {
      const searchTerm = search.toLowerCase();
      const searchResults = allItems.filter(item => 
        item.name.toLowerCase().includes(searchTerm) || 
        item.description.toLowerCase().includes(searchTerm)
      );
      
      return res.status(200).json({
        success: true,
        data: searchResults
      });
    }
  
    // Return all categories with their items
    return res.status(200).json({
      success: true,
      data: menuItems,
      categories: Object.keys(menuItems)
    });
  };
