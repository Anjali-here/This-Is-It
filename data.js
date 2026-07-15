export const SWIGGY_URL = 'https://www.swiggy.com';
export const ZOMATO_URL = 'https://www.zomato.com';

export const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Menu', path: '/menu' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Our Team', path: '/team' },
  { label: 'Contact', path: '/contact' },
];

export const heroSlides = [
  {
    title: 'Truffle Mushroom Pizza',
    tagline: 'Signature Dish',
    description: 'Wood-fired sourdough crust, truffle cream, wild mushrooms, and aged parmesan.',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=1600&auto=format&fit=crop&q=80'
  },
  {
    title: 'Artisanal Latte',
    tagline: 'Crafted Daily',
    description: 'Single-origin beans, velvet microfoam, and intricate latte art in every cup.',
    image: 'https://images.unsplash.com/photo-1485808191679-5f86510681a2?w=1600&auto=format&fit=crop&q=80'
  },
  {
    title: 'Berry Cheesecake',
    tagline: 'House Special',
    description: 'New York style cheesecake with wild berry compote and a buttery graham crust.',
    image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=1600&auto=format&fit=crop&q=80'
  },
  {
    title: 'Gourmet Burgers',
    tagline: 'Flame Grilled',
    description: 'Prime cut beef patty, melted gruyère, caramelized onions, and house brioche bun.',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=1600&auto=format&fit=crop&q=80'
  }
];

export const features = [
  { icon: 'Award', title: 'Premium Quality', description: 'Every ingredient is handpicked from the finest local farms and trusted suppliers we have known for years.' },
  { icon: 'ChefHat', title: 'Talented Chefs', description: 'Our award-winning culinary team brings years of passion and precision to every plate they craft.' },
  { icon: 'Bike', title: 'Fast Delivery', description: 'Piping hot and freshly made, delivered to your doorstep in under 30 minutes, every single time.' }
];

export const menuCategories = ['Mocktails', 'Soups', 'Sandwiches', 'Burgers', 'Pizzas', 'Desserts'];

const img = (id) => `https://images.unsplash.com/photo-${id}?w=800&auto=format&fit=crop&q=80`;

export const menuItems = [
  // Mocktails
  { name: 'Virgin Mojito', description: 'Fresh mint, lime, and soda over crushed ice', price: 180, category: 'Mocktails', image_url: img('1551024506-0bccd828d307'), is_featured: false },
  { name: 'Berry Smash', description: 'Muddled mixed berries, basil, and sparkling water', price: 220, category: 'Mocktails', image_url: img('1607318389773-831086f7b033'), is_featured: false },
  { name: 'Cucumber Cooler', description: 'Cucumber, elderflower, lime, and tonic water', price: 200, category: 'Mocktails', image_url: img('1544145945-f90425340c7e'), is_featured: false },
  // Soups
  { name: 'Cream of Tomato', description: 'Roasted tomato velouté with basil oil and croutons', price: 150, category: 'Soups', image_url: img('1547592166-23ac45744acd'), is_featured: false },
  { name: 'French Onion', description: 'Caramelized onions, toasted croutons, and melted gruyère', price: 180, category: 'Soups', image_url: img('1606733144905-9840e3f2c8d3'), is_featured: false },
  { name: 'Minestrone', description: 'Hearty vegetable soup with pesto and parmesan', price: 160, category: 'Soups', image_url: img('1517093728432-a0440f8d45af'), is_featured: false },
  // Sandwiches
  { name: 'Grilled Cheese', description: 'Triple cheese melt on sourdough with truffle butter', price: 250, category: 'Sandwiches', image_url: img('1521305916504-4a1121188589'), is_featured: true },
  { name: 'Club Sandwich', description: 'Triple-decker with chicken, bacon, egg, and avocado', price: 320, category: 'Sandwiches', image_url: img('1565299624946-b28f40a0ae38'), is_featured: false },
  { name: 'Caprese Panini', description: 'Mozzarella, tomato, basil pesto, pressed panini', price: 280, category: 'Sandwiches', image_url: img('1528735602780-2552fd46c7af'), is_featured: false },
  // Burgers
  { name: 'Classic Beef', description: 'Prime beef, aged cheddar, lettuce, house sauce', price: 380, category: 'Burgers', image_url: img('1568901346375-23c9450c58cd'), is_featured: true },
  { name: 'Spicy Chicken', description: 'Crispy chicken, jalapeño, chipotle mayo, slaw', price: 340, category: 'Burgers', image_url: img('1551782450-a2132b4ba21d'), is_featured: false },
  { name: 'Veggie Deluxe', description: 'Quinoa patty, avocado, roasted peppers, vegan mayo', price: 300, category: 'Burgers', image_url: img('1571091718767-18b5b1457add'), is_featured: false },
  // Pizzas
  { name: 'Margherita', description: 'San Marzano tomato, fresh mozzarella, basil, olive oil', price: 350, category: 'Pizzas', image_url: img('1513104890138-7c749659a591'), is_featured: true },
  { name: 'Truffle Mushroom', description: 'Truffle cream, wild mushrooms, parmesan, arugula', price: 480, category: 'Pizzas', image_url: img('1565299624946-b28f40a0ae38'), is_featured: true },
  { name: 'Pepperoni', description: 'Spicy pepperoni, mozzarella, oregano, chili oil', price: 420, category: 'Pizzas', image_url: img('1521017432531-fbd92d768814'), is_featured: false },
  // Desserts
  { name: 'Berry Cheesecake', description: 'New York style with wild berry compote', price: 280, category: 'Desserts', image_url: img('1547592180-85f173990554'), is_featured: true },
  { name: 'Tiramisu', description: 'Coffee-soaked ladyfingers, mascarpone, cocoa', price: 260, category: 'Desserts', image_url: img('1571877227200-a0d98ea607e9'), is_featured: false },
  { name: 'Chocolate Lava Cake', description: 'Warm molten center, vanilla bean ice cream', price: 250, category: 'Desserts', image_url: img('1554679665-55463eb9efc7'), is_featured: false },
];

export const testimonials = [
  { customer_name: 'Priya Sharma', rating: 5, quote: 'The truffle pizza is unlike anything I have had in the city. Every bite feels luxurious, and the ambiance makes you want to stay for hours.' },
  { customer_name: 'Arjun Mehta', rating: 5, quote: 'This Is It Cafe has become our weekend ritual. The coffee is perfection and the staff treats you like family from the moment you walk in.' },
  { customer_name: 'Sneha Reddy', rating: 4, quote: 'Beautiful space, incredible food. The berry cheesecake is to die for. A hidden gem that deserves all the praise it gets.' },
  { customer_name: 'Rahul Verma', rating: 5, quote: 'From the plating to the flavors, everything is crafted with such care. Easily the best cafe experience I have had in years.' },
];

export const galleryImages = [
  { url: img('1485808191679-5f86510681a2'), caption: 'Latte art at dawn', span: 'row-span-2' },
  { url: img('1495474472287-4d71bcdd2085'), caption: 'Morning table', span: '' },
  { url: img('1565299624946-b28f40a0ae38'), caption: 'Wood-fired pizza', span: 'col-span-2' },
  { url: img('1442512595331-e89e73853f31'), caption: 'Cafe ambiance', span: '' },
  { url: img('1547592180-85f173990554'), caption: 'Berry cheesecake', span: 'row-span-2' },
  { url: img('1568901346375-23c9450c58cd'), caption: 'Gourmet burger', span: '' },
  { url: img('1509722747041-616f39b57566'), caption: 'Coffee ritual', span: '' },
  { url: img('1486427944299-d1955d23e34d'), caption: 'Pouring perfection', span: 'col-span-2' },
  { url: img('1521305916504-4a1121188589'), caption: 'Fresh panini', span: '' },
  { url: img('1513104890138-7c749659a591'), caption: 'Margherita pizza', span: '' },
];

export const branches = [
  {
    name: 'Downtown',
    address: '42 Brigade Road, Bengaluru, Karnataka 560001',
    phone: '+91 98765 43210',
    email: 'downtown@thisisitcafe.com',
    hours: 'Mon–Sun: 8:00 AM – 11:00 PM'
  },
  {
    name: 'Uptown',
    address: '15 Carter Road, Bandra West, Mumbai, Maharashtra 400050',
    phone: '+91 98765 43211',
    email: 'uptown@thisisitcafe.com',
    hours: 'Mon–Sun: 7:30 AM – 11:30 PM'
  },
  {
    name: 'Riverside',
    address: '8 Riverside Terrace, Kolkata, West Bengal 700001',
    phone: '+91 98765 43212',
    email: 'riverside@thisisitcafe.com',
    hours: 'Mon–Sun: 8:00 AM – 10:30 PM'
  }
];

export const openingHours = [
  { day: 'Monday – Friday', hours: '8:00 AM – 10:00 PM' },
  { day: 'Saturday', hours: '7:30 AM – 11:00 PM' },
  { day: 'Sunday', hours: '8:00 AM – 9:00 PM' },
  { day: 'Public Holidays', hours: '9:00 AM – 8:00 PM' }
];
