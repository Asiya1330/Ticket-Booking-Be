const BaseController = require("../BaseController");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { roles } = require("../../constants/user");

class UserController extends BaseController {
  constructor(ModelClass) {
    super(ModelClass);
  }

  async signup(req, res) {
    try {
      const { email, password, role, fname, lname} = req.body;
      if(!fname || !lname) throw new Error("First name and Last name is required")
      if(!roles.includes(role)) throw new Error("Role does not exist")
      
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await this.model.create({
        email,
        password: hashedPassword,
        role,
        fname,
        lname,
      });
      res.status(201).json({ id: user.id });
    } catch (error) {
      console.log(error.message)
      res.status(500).json({error: error.message});
    }
  }

  async login(req, res) {
    try {
      const { email, password } = req.body;
      const user = await this.model.findOne({ where: { email } });
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }

      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({ error: "Invalid password" });
      }

      const token = jwt.sign({ id: user.id }, process.env.SECRET, {
        expiresIn: "1h",
      });
      res.json({ token });
    } catch (error) {
      console.log(error)
      res.status(500).json({ error: error.message });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const { email, password, role } = req.body;

      // Find the user to be updated
      const user = await this.model.findOne({ id });

      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }

      // If email is provided, check if it is already in use
      if (email) {
        const existingUser = await this.model.findOne({ where: { email } });
        if (existingUser && existingUser.id !== id) {
          return res.status(400).json({ error: "Email is already in use" });
        }
        user.email = email;
      }

      // If password is provided, hash it and update
      if (password) {
        const hashedPassword = await bcrypt.hash(password, 10);
        user.password = hashedPassword;
      }
      if (!roles.includes(role)) throw new Error("Role does not exist");
      if (role) {
        user.role = role;
      }

      await user.save();
      res.json({ message: "User updated successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = UserController;
