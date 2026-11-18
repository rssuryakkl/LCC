const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// User Signup
const signup = async (req, res) => {
    try {
        const body = req.body || {};
        const fullName = (body.fullName || body.name || '').trim();
        const username = (body.username || '').trim().toLowerCase();
        const email = (body.email || '').trim().toLowerCase();
        const mobileNumber = (body.mobileNumber || body.mobile || '').trim();
        const password = body.password || body.createPassword || '';
        const confirmPassword = body.confirmPassword;

        // 1. Check required fields
        if (!fullName || !username || !email || !mobileNumber || !password) {
            return res.status(400).json({
                success: false,
                message: 'All fields are required'
            });
        }

        // 2. Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({
                success: false,
                message: 'Please enter a valid email address'
            });
        }

        // 3. Validate mobile number
        const mobileRegex = /^\d{10,15}$/;
        if (!mobileRegex.test(mobileNumber)) {
            return res.status(400).json({
                success: false,
                message: 'Please enter a valid 10-digit mobile number'
            });
        }

        // 4. Validate password
        if (password.length < 8) {
            return res.status(400).json({
                success: false,
                message: 'Password must contain at least 8 characters'
            });
        }

        // 5. Check password confirmation (if supplied)
        if (confirmPassword !== undefined && password !== confirmPassword) {
            return res.status(400).json({
                success: false,
                message: 'Passwords do not match'
            });
        }

        // 6. Check existing username or email
        const existingUsername = await User.findOne({ username });
        if (existingUsername) {
            return res.status(409).json({
                success: false,
                message: 'Username already exists'
            });
        }

        const existingEmail = await User.findOne({ email });
        if (existingEmail) {
            return res.status(409).json({
                success: false,
                message: 'Email already exists'
            });
        }

        // 7. Create new user
        const newUser = new User({
            name: fullName,
            fullName,
            username,
            email,
            mobileNumber,
            password,
            role: 'user'
        });

        // 8. Save user to MongoDB
        await newUser.save();

        // 9. Send response
        return res.status(201).json({
            success: true,
            message: 'Account created successfully',
            user: {
                id: newUser._id,
                name: newUser.name,
                fullName: newUser.fullName,
                username: newUser.username,
                email: newUser.email,
                mobileNumber: newUser.mobileNumber
            }
        });

    } catch (error) {
        console.error('Signup Error:', error);

        if (error.code === 11000) {
            const field = Object.keys(error.keyPattern || {})[0] || 'field';
            return res.status(409).json({
                success: false,
                message: `${field.charAt(0).toUpperCase() + field.slice(1)} already exists`
            });
        }

        return res.status(500).json({
            success: false,
            message: error.message || 'Internal server error'
        });
    }
};

// User Login
const login = async (req, res) => {
    try {
        const body = req.body || {};
        const username = (body.username || body.email || '').trim().toLowerCase();
        const password = body.password || '';

        if (!username || !password) {
            return res.status(400).json({
                success: false,
                message: 'Username and password are required'
            });
        }

        const user = await User.findOne({
            $or: [
                { username: username },
                { email: username }
            ]
        }).select('+password');

        if (!user) {
            return res.status(401).json({
                success: false,
                message: 'Invalid username or password'
            });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({
                success: false,
                message: 'Invalid username or password'
            });
        }

        const token = jwt.sign(
            { userId: user._id, username: user.username, role: user.role || 'user' },
            process.env.JWT_SECRET || 'secret123',
            { expiresIn: '1d' }
        );

        return res.status(200).json({
            success: true,
            message: 'Login successful',
            token,
            user: {
                id: user._id,
                fullName: user.fullName || user.name,
                name: user.name || user.fullName,
                username: user.username,
                email: user.email,
                mobileNumber: user.mobileNumber,
                role: user.role || 'user'
            }
        });
    } catch (error) {
        console.error('Login Error:', error);
        return res.status(500).json({
            success: false,
            message: error.message || 'Internal server error'
        });
    }
};

module.exports = { signup, login };
