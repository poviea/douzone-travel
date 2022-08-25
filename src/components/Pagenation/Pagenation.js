import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
// import styles from "./pagenation.module.css";

const PageUL = styled.ul`
    
    margin: 20px 0px;
    padding: 0px;
    list-style: none;
    text-align: center;
`;

const PageLI = styled.li`
    display: inline-block;
    text-align: center;
    width: 45px;
    height: 45px;
    font-size: 20px;
    font-weight: bold;
    padding: 7px 5px 5px 5px;
    margin: 3px;
    border: 1px solid #DDDDDD;
    // color: #6495ED;
    border-radius: 2px;

    ${(props) => {
        // console.log(`${props.selectPage} ---- ${props.pageNumber}`);
        if(props.selectPage === props.pageNumber) {
            return `
                color: white;
                background: #6495ED;
            ` 
        } else {
            return `
                color: #777;
                background: #fff;
                &:hover {
                    background: #EEEEEE;
                    cursor: pointer;
                }
            `
        }
    }};
`;

const InnerLI = styled.li`
    display: inline-block;
    text-align: center;
    width: 70px;
    height: 45px;
    font-size: 20px;
    font-weight: bold;
    padding: 7px 5px 5px 5px;
    margin: 3px 10px;
    border: 1px solid #DDDDDD;

    color: black;
    background: #fff;
    &:hover {
        background: #EEEEEE;
        cursor: pointer;
    }
`;

const OuterLI = styled.li`
    display: inline-block;
    text-align: center;
    width: 50px;
    height: 45px;
    font-size: 20px;
    font-weight: bold;
    padding: 7px 5px 5px 5px;
    margin: 3px 0;
    border: 1px solid #DDDDDD;

    color: black;
    background: #fff;
    &:hover {
        background: #EEEEEE;
        cursor: pointer;
    }
`;




function Pagenation({ postsPerPage, totalPosts, paginate, selectPage }) {
    
    const Pageorder = (totalPosts, postsPerPage) => {
        const pageNumbers = [];
        for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
            pageNumbers.push(i);
        }
        return pageNumbers;
    }

    const pageNumbers = Pageorder(totalPosts, postsPerPage);


    const [ innerPage, setInnerPage ] = useState(1);
    const [ innerPerPage, setInnerPerPage ] = useState(7);

    const indexOfLast = innerPage * innerPerPage;
    const indexOfFirst = indexOfLast - innerPerPage;


    const currentPosts = (pages) => {
        let currentPosts = 0;
        currentPosts = pages.slice(indexOfFirst, indexOfLast);
        return currentPosts;
    }

    const results = currentPosts(pageNumbers);
    


    const onPrev = () => {
        // console.log((results.length * innerPage) + 1); 
        // console.log(`${selectPage} ${results[0]}`);
        if(selectPage == results[0]) {
            if(results[0] == pageNumbers[0]) {}
            else setInnerPage(innerPage - 1);
        }
        if(selectPage > 1) paginate(selectPage - 1);
    }

    const onNext = () => {
        // console.log(`${selectPage} --- ${pageNumbers.length}`)
        // if(selectPage == results.length*innerPage) setInnerPage(innerPage + 1);
        if(selectPage == results[results.length - 1]) {
            if(results[results.length-1] == pageNumbers[pageNumbers.length-1]) {} 
            else setInnerPage(innerPage + 1);
        }
        
        if(selectPage < pageNumbers.length) paginate(selectPage + 1);
    }

    const onFirst = () => {
        setInnerPage(1);
        paginate(1);
    }

    const onLast = () => {
        setInnerPage(Math.ceil(pageNumbers.length / innerPerPage));
        paginate(pageNumbers.length);
    }


    return (
        
        <div>
            <nav className="pagenation">
                <PageUL>
                    <OuterLI onClick={() => onFirst()}>&lt;&lt;</OuterLI>
                    <InnerLI onClick={() => onPrev()}>Prev</InnerLI>
                    {results.map(pageNumber => (
                        <PageLI 
                        selectPage={selectPage} 
                        pageNumber={pageNumber} 
                        key={pageNumber} onClick={() => paginate(pageNumber) }>{pageNumber}</PageLI> 
                    ))}
                    <InnerLI onClick={() => onNext()}>Next</InnerLI>
                    <OuterLI onClick={() => onLast()}>&gt;&gt;</OuterLI>
                </PageUL>
            </nav>
        </div>
    );
}

export default Pagenation;