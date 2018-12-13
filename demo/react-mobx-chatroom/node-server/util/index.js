// 统一判断session是否过期
const logout = (req, res) => {
    if (!req.session.userAccount) {
        res.json({
            status: 401,
            message: '会话已过期'
        });
        return false;
    }
    return true;
}