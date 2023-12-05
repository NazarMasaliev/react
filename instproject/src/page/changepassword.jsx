function Change_Password() {
    return (
        <div className="container-fluid mt-5">
            <div className="row">
                <div className="col-12">
                    <div className="row">
                        <div className="col-6">
                            <div className="row">
                                <div className="col-12 text-center mt-5">
                                    <h1>Новый пароль</h1>
                                </div>
                                <div className="col-12 mt-5">
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Введите новый пароль" />
                                    </div>
                                </div>
                                <div className="col-12 text-center mt-5">
                                    <button className="btn btn-success">Изменить пароль</button>
                                </div>
                                <div className="col-12 text-center mt-5">
                                    <a style={{ color: "#000000" }} href="/profil"><i class="fa-solid fa-user fa-2xl"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Change_Password