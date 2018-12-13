var img_xr = (function () {
    var $shop_left = $(".shop_left");
    var $right_top = $(".right_top");
    // var $change_s = $("#vers_c");
    // console.log($change_s);
    // var $ul = document.querySelector('ul');

    return {
        init() {
            this.event();
            this.getData();
        },
        event() {
            // $change_s.click(function (e) {

            // })
            // $change_s.onclick = function (e) {
            //     console.log(111);
            //     e = e || window.event;
            //     var target = e.target || e.srcElement;

            //     $change_s.children('li').index().addClass("show_s").siblings().removeClass("show_s");
            //     console.log($change_s.children('li'));
            // }
            // var $vear = $(".versions color");
            // // console.log($(this));
            // $(".versions color").onclick = function () {
            //     console.log($(this));
            // };
            // $(".versions color").on("click", function () {

            //     var index = $(this).index();
            //     console.log(index);
            //     // $(".ol_list>ol li:eq(" + index + ")").addClass("_xiaotu").siblings().removeClass("_xiaotu");
            // })
            // var _this = this;
            // $ul.onclick = function (e) {
            //     e = e || window.event;
            //     var target = e.target || e.srcElement;
            //     if (target.className === 'shop_buy') {
            //         // 获取商品数量
            //         // 获取当前li
            //         var father = target.parentNode;
            //         // 拿到的值是字符串, count应该是number类型的
            //         var count = father.querySelector('.count').value;
            //         // 从商品数据中,获取对应这一个商品的数据
            //         _this.data[father.index].count = Number(count);
            //         _this.setItem(_this.data[father.index]);
            //     }
            // }
        },
        getData() {
            sendAjax('static/json/particulars.json').then(res => {
                res = JSON.parse(res);
                // console.log(res);
                if (res.code == 0) {
                    this.data = res.data;
                    this.insertData(res.data);
                } else {
                    alert("获取信息失败, 请查询网络状况");
                }
            });
        },
        insertData(data) {
            // console.log(data);

            // 循环数组
            for (let i = 0; i < data.length; i++) {
                var $ul = document.createElement('ul');
                $ul.className = 'f_left';
                $ul.innerHTML = `
                <li class="active"><img src="${ data[0].ac1}" /></li>
                <li><img src="${ data[0].ac2}" /></li>
                <li><img src="${ data[0].ac3}" /></li>
                <li><img src="${ data[0].ac4}" /></li>
                <li><img src="${ data[0].ac5}" /></li>
                <div class="_xuan"></div>
            `
            }
            $shop_left.append($ul);
            for (let i = 0; i < data.length; i++) {
                var $ul = document.createElement('ul');
                $ul.className = 'f_right';
                $ul.innerHTML = `
                <li class="_datu"><img src="${ data[0].ac1}" /></li>
                <li><img src="${ data[0].ac2}" /></li>
                <li><img src="${ data[0].ac3}" /></li>
                <li><img src="${ data[0].ac4}" /></li>
                <li><img src="${ data[0].ac5}" /></li>   
            `
            }
            $shop_left.append($ul);

            for (let i = 0; i < data.length; i++) {
                var $div = document.createElement('div');
                $div.className = 'ol_list';
                $div.innerHTML = `
                <ol>
                <li class="_xiaotu"><img src="${ data[0].xt1}" /></li>
                <li><img src="${ data[0].xt2}" /></li>
                <li><img src="${ data[0].xt3}" /></li>
                <li><img src="${ data[0].xt4}" /></li>
                <li><img src="${ data[0].xt5}" /></li>
                </ol>
                
            `
            }
            $shop_left.append($div);

            var $h1 = $(".right_top h1");
            $h1.html(`${data[0].title}`);
            var $span1 = $(".span_1");
            var $span2 = $(".span_2");
            $span1.html(`￥${data[0].min_price}`);
            $span2.html(`￥${data[0].max_price}`)
        }
    }
}());



