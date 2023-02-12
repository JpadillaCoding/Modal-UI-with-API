import React from "react"

function UsePagination({data, postPerPage, setCurrentPage}) {
    let totalPosts = data.items.length

    let pages = []
    for(let i = 1; i <= Math.ceil(totalPosts/postPerPage); i++){
        pages.push(i)
    }

    return (
        <div>
            {
                pages.map((page, index) => {
                    return <button className="btn btn-primary"
                    onClick={() => setCurrentPage(page)} 
                    key={index}>{page}</button>
                })
            }
        </div>
    )

}


export default UsePagination