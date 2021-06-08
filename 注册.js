
function $(id) { return document.getElementById(id); }
// 获取文字框的值
function 注册提示() {
    var mgs = "欢迎您:" + $("3").value;
    mgs += "\n您的账号是：" + $("1").value;
    mgs += "\n密码是：" + $("2").value;
    alert(mgs);
    return false;
}
function 验证码() {
    alert('下发验证码成功！');
}


function 游戏() {
    var a = $("shu").value;
    var b = $("shu2").value;
    var c = $("shu3").value;


    // var b = int((9 - 0 + 1) * RND + 0).value;
    if (b == 2 & a == 5 & c == 0)

        alert("恭喜小宝贝，密码正确。\n我爱你，我的小宝贝，我的小姑娘，辛苦了!");
    else
        alert("解密不对哦，小宝贝在想想！");
    return false;

}
// onclick = "javascript:alert('注册新用户成功！');"

