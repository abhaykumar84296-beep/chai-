
import { asyncHandler } from "../utils/asyncHandler.js";

const registerUser = asyncHandler(async (req, res) => {
    res.status(200).json({
        message: "Register route working successfully"
    });
});

const login = asyncHandler(async (req, res) => {
    res.status(200).json({
        message: "Login route working successfully"
    });
});

export { registerUser, login };
