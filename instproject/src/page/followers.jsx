import Followers_Show from "../followersshow"
function Followers() {
    return (
        <div className="container-fluid mt-3">
            <div className="row">
                <div className="col-12">
                    <div className="row">
                        <div className="col-6">
                            <div className="row">
                                <div className="col-12 border pb-3">
                                    <div className="row">
                                        <div className="col-2 text-left">
                                            <a href="/profil"> <i class="fa-sharp fa-solid fa-angle-left"></i></a>
                                        </div>
                                        <div className="col-10">
                                            <b style={{ marginLeft: "200px" }}>msl.nzr</b>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="row">
                                        <div className="col-4 hoverBorderBottom1 pb-3">
                                            <button className="bg-white border-0"><b>94</b> <b>Подписчики</b></button>
                                        </div>
                                        <div className="col-4 hoverBorderBottom1 pb-3">
                                            <b>149</b> <b>Подписчки</b>
                                        </div>
                                        <div className="col-4 hoverBorderBottom1 pb-3">
                                            <b>Платные подписки</b>
                                        </div>
                                    </div>
                                </div>
                                <Followers_Show />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}
export default Followers