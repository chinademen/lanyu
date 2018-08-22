// 上传公司LOGO
const uploadCompanyLogo = (req, res) => {
    const { file } = req.body;
    console.log(req.files);
    res.json({
        status: 1,
        message: '上传成功'
    });
}

module.exports = {
    uploadCompanyLogo,
};