import InstFooter from "./instfooter";
function Show_Profil() {
    return (
       <div className="container-fluid mt-3 ml-5">
            <div className="row">
                <div className="col-6">
                    <div className="row">
                        <div className="col-12">
                            <div className="row">
                                <div className="col-6">
                                    <select className="border-0" name="" id="" style={{fontSize:"23px",fontWeight:"500"}}>
                                        <option value="" style={{fontSize:"20px"}} className="border-0">msl.nzr</option>
                                    </select>
                                </div>
                                <div className="col-6" style={{float:"right"}}>
                                    <button className="border-0 bg-white" style={{float:"right"}}><i class="fa-regular fa-square-plus fa-2xl"></i></button>
                                    <button className="border-0 bg-white" style={{marginRight:"20px",float:"right"}}><i class="fa-solid fa-bars fa-2xl"></i></button>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 mt-3">
                            <div className="row">
                                <div className="col-4">
                                    <img src="https://sun6-22.userapi.com/s/v1/if1/snl-u7xvjZmGHzIMhQl973GectD6v4dHWM3a2ECljnUqmwj72R4Lbb_RLHIk2LkRcQlEy610.jpg?size=1007x1007&quality=96&crop=8,3,1007,1007&ava=1" alt="" style={{borderRadius:"50%", width:"100px",height:"100px"}}/>
                                    <i class="fa-solid fa-plus bg-primary p-1 text-white rounded-circle" style={{fontSize:"12px",position:"absolute",left:"80px",top:"130px"}}></i>
                                </div>
                                <div className="col-8 mt-4 text-center">
                                    <div className="row">
                                        <div className="col-4">
                                            <div className="row">
                                                <div className="col-12">
                                                    0
                                                </div>
                                                <div className="col-12">
                                                    Публикации
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="row">
                                                <div className="col-12">
                                                   <a href="/followers" className="text-dark text-decoration-none"><b>94</b></a> 
                                                </div>
                                                <div className="col-12">
                                                    <a href="/followers" className="text-dark text-decoration-none">Подписчики</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                        <div className="row">
                                                <div className="col-12">
                                                    <b>152</b> 
                                                </div>      
                                                <div className="col-12">
                                                    Подписчики
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <b style={{marginLeft:"15px"}}>代翁曖）</b>
                        </div>
                        <div className="col-12 mt-2">
                         <span className="p-1 rounded" style={{marginLeft:"15px",background:"#EFEFEF"}}><b>@</b> msl.nzr</span>
                        </div>
                        <div className="col-12 text-left" style={{marginLeft:"15px", marginTop:"10px"}}>
                            <span>If we had not sinned, the Almighty would have destroyed us and created those who would sin but ask for forgiveness.</span>
                        </div>
                        <div className="col-12 mt-4">
                            <div className="row">
                                <div className="col-5">
                                    <button className="border-0 rounded" style={{background:"#EFEFEF",fontWeight:"500",width:"250px",height:"30px"}}><a href="/profilchange" className="text-decoration-none">Изменить</a></button>
                                </div>
                                <div className="col-7">
                                    <div className="row">
                                        <div className="col-10">
                                             <button className="border-0 rounded" style={{background:"#EFEFEF",fontWeight:"500",width:"250px",height:"30px"}}>Поделиться профилем</button>
                                        </div>
                                        <div className="col-2">
                                        <button className="border-0 rounded" style={{background:"#EFEFEF",fontWeight:"500",width:"50px",height:"30px"}}>
                                         <i class="fa-solid fa-user fa-lg"></i>
                                        </button>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        <div className="col-12 mt-5">
                            <div className="row">
                                <div className="col-4 text-center pb-2 hover_click">
                                    <button className="border-0 bg-white">
                                        <i class="fa-solid fa-bars fa-2xl"></i>
                                    </button>
                                </div>
                                <div className="col-4 text-center pb-2 hover_click">
                                    <button className="border-0 bg-white">
                                        <i class="fa-regular fa-circle-play fa-2xl"></i>
                                    </button>
                                </div>
                                <div className="col-4 text-center pb-2 hover_click">
                                    <button className="border-0 bg-white">
                                     <i class="fa-solid fa-user fa-2xl"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 mb-5">
                            <div className="row">
                                <div className="col-12">
                                    <div className="rounded-circle text-center" style={{border:"2px solid", height:"200px",width:"200px", marginLeft:"260px",marginTop:"100px"}}>
                                    <i class="fa-brands fa-instagram" style={{fontSize:"100px", marginTop:"50px"}}></i> 
                                    </div>
                                </div>
                            </div>
                        </div>
                        <InstFooter/>
                    </div>
                </div>
            </div>
       </div> 

    );
}
export default Show_Profil;