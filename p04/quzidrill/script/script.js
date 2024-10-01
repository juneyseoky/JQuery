$(function () {
    let itemVal1 = {
        "imgPath": "list_02_615x615.jpg",
        "itemType": "[리바트온라인]",
        "itemCon": "솔브 4인 헤드틸팅리클라이터 소파(양면형, 3색/택1)",
        price: 835100
    }
    let itemVal2 = {
        "imgPath": "list_03_615x615.jpg",
        "itemType": "[리바트온라인]",
        "itemCon": "뉴 레가토 4인 리클라이너 소파 양면형 3색택1",
        price: 1059300
    }
    let itemVal3 = {
        "imgPath": "list_04_615x615.jpg",
        "itemType": "[리바트온라인]",
        "itemCon": "올 뉴탐 3인 패브릭 소파 8종택1",
        price: 419000
    }
    let itemVal4 = {
        "imgPath": "list_05_220x220.jpg",
        "itemType": "[리바트온라인]",
        "itemCon": "무드 레트로 18000 거실장",
        price: 185000
    }
    let itemVal5 = {
        "imgPath": "list_06_615x615.jpg",
        "itemType": "[리바트온라인]",
        "itemCon": "후아 1800 다리형 거실장 (2색 중 택1)",
        price: 165000
    }
    let itemVal6 = {
        "imgPath": "list_07_220x220.jpg",
        "itemType": "[인터라켄]",
        "itemCon": "스칸디나 북유럽디자인 이태리가죽 3인소파",
        price: 899000
    }

    let itemList = [itemVal1, itemVal2, itemVal3, itemVal4, itemVal5, itemVal6];
    let itemArea = $("#itemArea");
    let itemAreaTag = "";
    let idVal;
    for (i = 0; i < itemList.length; i++) {
        itemAreaTag += `
            <div class="itemImg" data-index="${i}">
            <img src="images/${itemList[i].imgPath}" alt="상품이미지">
            <span>${itemList[i].itemType}</span>
            <span>${itemList[i].itemCon}</span>
            <p>${(itemList[i].price).toLocaleString()}원</p>
            </div>
            `;
        itemArea.html(itemAreaTag);
    }
    $("div.itemImg").click(function () {
        let imgSrc = $(this).find("img").attr("src");
        console.log(imgSrc);
        let index = $(this).data("index");
        let itemVal = itemList[index];

        tag = `<div id="modalCloseBnt">
            <span id="closeBnt">&times;</span>
            </div>
            <div id="modalBox">
            <img src="images/${itemVal.imgPath}" alt="">
            <div id="modalTxtArea">
            <span>${itemVal.itemType}</span>
            <span>${itemVal.itemCon}</span>
            <p>${(itemVal.price).toLocaleString()}원</p>
            </div>
            </div>
            `;
        $("div#modal").html(tag);
        $("div#modal").css("display", "block");
        $("#closeBnt").click(function () {
            $("div#modal").css("display", "none");
        })
    })



});