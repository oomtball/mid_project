# mid_project
web programming mid project
名稱：抽獎系統
描述這個在做什麼: 就是抽獎，看你運氣好不好啊！
github連結：https://github.com/oomtball/mid_project.git
如何使用(開始前請先安裝node_modules)： 
1. 前端使用 react.js 架構 -> npm start開啟前端
2. 後端使用 node,js 架構 -> nodemon server.js開啟後端
3. 開啟後，請先到register頁面註冊
    為求方便，只需要輸入名稱即可完成註冊
    沒有註冊將無法接續動作！！！
4. 註冊完之後，從上方log in的input方框輸入你的user name進行登入
5. 登入之後會在下方看到自己得名字和剩下的次數，每個user預設是3次
    再來按GoLottery，可以看到四個獎品，選一個你喜歡的，雖然我沒有獎品送
6. 每個獎品頁面有很多籤(牌)，翻開牌會消耗一次次數，中獎會有獎品圖片，沒中獎就是白色正方形
7. 使用完3次就沒辦法繼續抽，需要換帳號才能繼續抽
注意：有時候傳資料有延遲，抽籤等time下降再抽下一籤，沒寫好抱歉

使用與參考之框架/模組/原始碼：
https://medium.com/javascript-in-plain-english/full-stack-mongodb-react-node-js-express-js-in-one-simple-app-6cc8ed6de274
教我如何建立前後端連接

我的貢獻：
都是我手刻的

<strong>心得</strong>
因為上課的時候聽前後端連接的部分聽的不是很懂
所以這次的project特別致力於研究node.js的使用和連接mongoDB的測試
但我認為我一開始在這一塊還是沒有做得很好
例如get/post的code位置等等，常常看到後端的console在一直亂跳
或是有明明可以透過父子傳props的方法來傳的，我卻又另外get一次data，十分的多餘
經過修改有稍微整齊一些，但我認為還有很大的進步空間
但不能否認在寫完之後，我對node.js有更深入的了解
再來，我認為前端也用手刻的實在是太笨了哈哈
當初找不到喜歡的template就先自己隨便刻
結果寫著寫著就發現時間快沒了，沒有時間美化，延後一個禮拜太即時了
顯然我沒有規劃好整個project的流程，這是我下一次可以改進的地方
結論：CSS好難寫啊