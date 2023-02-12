import React from "react"

function UsePagination({data, postPerPage, setCurrentPage, currentPage}) {
    let totalPosts = data.items.length

    let pages = []
    for(let i = 1; i <= Math.ceil(totalPosts/postPerPage); i++){
        pages.push(i)
    }
    function previous() {
        if(currentPage > 0) {
            console.log(currentPage)
            setCurrentPage(currentPage-1)
        }
    }
    function next() {
        if(currentPage < pages.length+1) {
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