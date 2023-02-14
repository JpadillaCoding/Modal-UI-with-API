import React from "react"

function UsePagination({data, postPerPage, setCurrentPage, currentPage}) {
    let totalPosts = data.items.length

    let pages = []
    for(let i = 1; i <= Math.ceil(totalPosts/postPerPage); i++){
        pages.push(i)
    }
    function previous() {
        console.log(currentPage)
        if(currentPage > 1) {
            setCurrentPage(currentPage-1)
        }
    }
    function next() {
        console.log(currentPage,pages.length)
        if(currentPage < pages.length) {
            setCurrentPage(currentPage+1)
        }
    }

    return (
        <div>
            <button className="btn btn-secondary"
            onClick={previous}>Previous</button>
            {
                pages.map((page, index) => {
                    return <button className="btn btn-secondary"
                    onClick={() => setCurrentPage(page)} 
                    key={index}>{page}</button>
                })
            }
            <button className="btn btn-secondary"
            onClick={next}>Next</button>
        </div>
    )

}


export default UsePagination