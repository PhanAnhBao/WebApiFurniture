import { Link } from "react-router-dom";

function Pagination({itemPage, totalPage, paginated, current}) {
    const pageNumber = [];

    for (let i = 1; i <= Math.ceil(totalPage / itemPage); i+=1){
        pageNumber.push(i);
    }
    
    return (
    <div class="pagination">
        {pageNumber.length === 1 ? "" : <Link onClick={() => paginated(current - 1) } to="">&laquo;</Link>}
        
        {
            pageNumber.map(number => (
                <Link key={number} className={current === number ? "active" : ""} onClick={() => paginated(number)} to="">{number}</Link>
            ))
        }
        {pageNumber.length === 1 ? "" : <Link onClick={() => paginated(current + 1) } to="">&raquo;</Link>}
        
    </div>
    );
}

export default Pagination;