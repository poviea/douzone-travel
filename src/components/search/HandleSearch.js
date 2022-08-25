import React from 'react';

const HandleSearch = (dataForSearching, setData, setSelectPage, input, textForSearch)=>{
    const test = [];

    // console.log("for search", input);
    // console.log("data : ", dataForSearching);

    dataForSearching.forEach((item) => {
            // console.log(item.MAIN_TITLE);
            const element = item[textForSearch];
            // console.log("data : ", item);
            if (element.includes(input)) {
                test.push(item)
            }
        }
    )
    setData(test);
    setSelectPage(1);
}

export default HandleSearch