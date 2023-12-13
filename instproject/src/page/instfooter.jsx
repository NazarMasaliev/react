
function InstFooter(){
    return(

    
    <div className="col-12 mt-3 border pt-3 pb-3 pl-0 pr-0">
        <div className="row">
            <div className="col-7 text-center">
                <div className="row">
                    <div className="col-4">
                       <a href="/home" style={{color:"#000000"}}><i  class="fa-solid fa-house fa-2xl"></i></a>
                    </div>
                    <div className="col-4">
                       <i class="fa-solid fa-magnifying-glass fa-2xl"></i>
                    </div>
                    <div className="col-4">
                    <i class="fa-solid fa-square-plus fa-2xl"></i>  
                    </div>
                </div>
            </div>
            <div className="col-5 text-center">
                <div className="row">
                    <div className="col-6">
                       <i class="fa-solid fa-circle-play fa-2xl"></i> 
                    </div>
                    <div className="col-6">
                       <a style={{color:"#000000"}} href="/profil"><i class="fa-solid fa-user fa-2xl"></i></a> 
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
export default InstFooter