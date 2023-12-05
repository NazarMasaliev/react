
function Sing_In() {
    return (
        <div className="container_fluid mt-5">
            <div className="row">
                <div className="col-12">
                    <div className="row">
                        <div className="col-6">
                            <div className="row">
                                <div className="col-12 mb-5">
                                    <a href="/profil"><i class="fa-solid fa-xmark fa-2xl" style={{ float: "right" }}></i></a>
                                </div>
                                <div className="col-12 text-center mt-5 pt-5">
                                    <h2>Instagram</h2>
                                </div>
                                <div className="col-12">
                                    <div className="form-group">
                                        <input className="form-control mt-5" type="text" placeholder="Телефон, имя пользователя или эл. адрес" />
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-group">
                                        <input className="form-control mt-2" type="password" placeholder="Пароль"  />
                                    </div>
                                </div>
                                <div className="col-12 mt-2">
                                    <div style={{ float: "right" }}>
                                        <small className="text-primary"><a href="/changepassword">Забыли пароль?</a></small>
                                    </div>
                                </div>
                                <div className="col-12 mt-5">
                                    <button className="bg-primary rounded" style={{ width: "inherit", height: "50px", color: "white" }}>
                                        Войти
                                    </button>
                                </div>
                                <div className="col-12 mt-4">
                                    <div className="row">
                                        <div className="col-5 border-top" style={{ marginTop: "12px" }}>

                                        </div>
                                        <div className="col-2 text-center">
                                            ИЛИ
                                        </div>
                                        <div className="col-5 border-top" style={{ marginTop: "12px" }}></div>
                                    </div>
                                </div>
                                <div className="col-12 mt-5 pt-5">
                                    <div style={{ color: "#0D6EFD", marginLeft: "120px" }}><i class="fa-brands fa-square-facebook fa-2xl" style={{ color: "#0D6EFD", marginLeft: "50px" }}></i><span style={{ marginLeft: "20px" }}>Продолжить как Мамасалиев Назарбек</span></div>
                                </div>
                                <div className="col-12 mt-5 text-center">
                                    <a><small style={{color:"#0D6EFD"}}>Зарегистрируйтесь.</small></a>
                                </div>
                                <div className="col-12 text-center">
                               
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Sing_In