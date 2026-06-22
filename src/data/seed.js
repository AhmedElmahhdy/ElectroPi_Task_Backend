import dotenv from "dotenv"
import mongoose from "mongoose"
import connectDB from "../config/db.js"
import User from "../models/User.js"
import Product from "../models/Product.js"

dotenv.config()
connectDB()

const products = [
  { name: "Margherita Pizza", description: "Classic cheese and tomato pizza", image: "https://images.unsplash.com/photo-1601924638867-3ec6b7a34225", category: "Pizza", price: 9.99 },
  { name: "Pepperoni Pizza", description: "Pepperoni and mozzarella cheese", image: "https://images.unsplash.com/photo-1548365328-0f2797f8b744", category: "Pizza", price: 11.99 },
  { name: "Veggie Pizza", description: "Bell peppers, onions, olives and mushrooms", image: "https://images.unsplash.com/photo-1542281286-9e0a16bb7366", category: "Pizza", price: 10.99 },
  { name: "Cheeseburger", description: "Juicy burger with cheddar cheese", image: "https://images.unsplash.com/photo-1550547660-d9450f859349", category: "Burgers", price: 8.49 },
  { name: "Bacon Burger", description: "Smoked bacon, lettuce, and tomato", image: "https://images.unsplash.com/photo-1550317138-10000687a72b", category: "Burgers", price: 9.99 },
  { name: "Chicken Burger", description: "Grilled chicken with fresh toppings", image: "https://images.unsplash.com/photo-1550547660-d9450f859349", category: "Burgers", price: 8.99 },
  { name: "Spaghetti Carbonara", description: "Creamy pasta with pancetta", image: "https://images.unsplash.com/photo-1525755662778-989d0524087e", category: "Pasta", price: 12.49 },
  { name: "Penne Arrabiata", description: "Spicy tomato pasta with chili", image: "https://images.unsplash.com/photo-1506354666786-959d6d497f1a", category: "Pasta", price: 10.49 },
  { name: "Fettuccine Alfredo", description: "Rich creamy sauce with parmesan", image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836", category: "Pasta", price: 12.99 },
  { name: "Coca-Cola", description: "Refreshing cola drink", image: "https://images.unsplash.com/photo-1565561790250-26711822d36d", category: "Drinks", price: 2.49 },
  { name: "Orange Juice", description: "Fresh squeezed orange juice", image: "https://images.unsplash.com/photo-1547517029-1a3dcd1b0a2c", category: "Drinks", price: 3.49 },
  { name: "Iced Coffee", description: "Chilled coffee with ice and milk", image: "https://images.unsplash.com/photo-1511920170033-f8396924c348", category: "Drinks", price: 3.99 },
  { name: "Chocolate Cake", description: "Rich chocolate layered cake", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c", category: "Desserts", price: 6.49 },
  { name: "Cheesecake", description: "Creamy cheesecake with berry drizzle", image: "https://images.unsplash.com/photo-1516685018646-549c1b1e04f4", category: "Desserts", price: 6.99 },
  { name: "Tiramisu", description: "Coffee-flavored Italian dessert", image: "https://images.unsplash.com/photo-1516089132655-f7c74036b0d2", category: "Desserts", price: 7.49 },
]

const importData = async () => {
  try {
    await User.deleteMany()
    await Product.deleteMany()

    const adminUser = await User.create({
      name: "Admin User",
      email: "admin@example.com",
      password: "Admin123",
      role: "admin",
    })

    await Product.insertMany(products)

    console.log("Data imported successfully")
    process.exit()
  } catch (error) {
    console.error(`${error}`)
    process.exit(1)
  }
}

importData()
