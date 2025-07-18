
export const checkEmail = async (req, res) => {
    try {
        const { email } = req.body;
        
       

        return res.status(200).json({
            success: true,
            message: 'Email is available'
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Server error',
            error: error.message
        });
    }
};
