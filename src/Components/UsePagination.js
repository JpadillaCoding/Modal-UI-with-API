import React from "react"

function UsePagination({data, postPerPage, setCurrentPage, currentPage}) {
    let totalPosts = data.items.length
    let previousBtn = "<<"
    let nextBtn = ">>"

    let pages = []
    for(let i = 1; i <= Math.ceil(totalPosts/postPerPage); i++){
        pages.push(i)
    }

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
            <button className="btn btn-dark"
            onClick={previous}>{previousBtn}</button>

            {
                pages.map((page, index) => {
                    return <button className="btn btn-dark"
                    onClick={() => {setCurrentPage(page); window.scrollTo(0, 0)}} 
                    key={index}>{page}</button>
                })
            }

            <button className="btn btn-dark" onClick={next}>{nextBtn}</button>
        </div>
    )

}


export default UsePagination