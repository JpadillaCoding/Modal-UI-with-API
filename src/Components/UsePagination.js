import React from "react"
import "./components.css"

function UsePagination({data, postPerPage, setCurrentPage, currentPage}) {
    let totalPosts = data.items.length
    let previousBtn = "<<"
    let nextBtn = ">>"

    let pages = []
    for(let i = 1; i <= Math.ceil(totalPosts/postPerPage); i++){
        pages.push(i)
    }
    //previous and next are simple. Grab the current page and add/subtract->update state.
    function previous() {
        if(currentPage > 1) {
            setCurrentPage(currentPage-1)
            window.scrollTo(0, 0)
        }
    }
    function next() {
        if(currentPage < pages.length) {
            setCurrentPage(currentPage+1)
            window.scrollTo(0, 0)
        }
    }

    return (
        <div className="pagination-btns">
            <button className="btn btn-grad"
            onClick={previous}>{previousBtn}</button>

            {
                //make buttons based on how many pages are made. each button updates the currentPage state.
                //For user experience, scrollTo goes to the top of the page on each page change.
                pages.map((page, index) => {
                    return <button className="btn btn-grad" id={`btn${index}`}
                    onClick={() => {setCurrentPage(page); window.scrollTo(0, 0)
                    }} 
                    key={index}>{page}</button>
                })
                
            }

            <button className="btn btn-grad" onClick={next}>{nextBtn}</button>
        </div>
    )
}


export default UsePagination