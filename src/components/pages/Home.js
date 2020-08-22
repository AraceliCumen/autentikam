import React, { Component } from 'react';
// import '../../css/List.scss';

// import db from '../../FireStoreConfig';

// import { AgGridReact } from 'ag-grid-react';
// import 'ag-grid-community/dist/styles/ag-grid.css';
// import 'ag-grid-community/dist/styles/ag-theme-balham.css';


class Home extends Component {

    // state = {
    //     columnDefs: [{
    //         headerName: "IdUser", field: "idUser", checkboxSelection: true, sortable: true, filter: true
    //     }, {
    //         headerName: "UserName", field: "userName", sortable: true, filter: true
    //     }, {
    //         headerName: "Password", field: "password"
    //     }, {
    //         headerName: "FirstName", field: "firstName"
    //     }, {
    //         headerName: "LastName", field: "lastName"
    //     }, {
    //         headerName: "Email", field: "email"
    //     }, {
    //         headerName: "Estado", field: "estado"
    //     }, {
    //         headerName: "Editar", field: "editar"
    //     }, {
    //         headerName: "Eliminar", field: "eliminar"
    //     }],
    //     rowData: []
    // }


    componentDidMount() {

        // let rowData = [];

        // db.collection('users').get().then((snapShots) => {
        //     snapShots.docs.map(doc => {
        //         let rowDataEjemplo = {
        //             idUser: '', userName: '', password: '', firstName: '', lastName: '', email: '', estado: '', editar: 'editar', eliminar: 'eliminar'
        //         };
        //         rowDataEjemplo.idUser = doc.id;
        //         rowDataEjemplo.userName = doc.data().userName;
        //         rowDataEjemplo.password = doc.data().password;
        //         rowDataEjemplo.firstName = doc.data().firstName;
        //         rowDataEjemplo.lastName = doc.data().lastName;
        //         rowDataEjemplo.email = doc.data().email;
        //         rowDataEjemplo.estado = doc.data().estado;
        //         rowData.push(rowDataEjemplo);
        //     });


        //     this.setState({
        //         rowData: rowData
        //     });

        // }, error => {
        //     console.log(error);
        // });
    }

    // onButtonClickEditar = e => {

    // }

    // onButtonClickEliminar = e => {
    //     const selectedNodes = this.gridApi.getSelectedNodes()
    //     const selectedData = selectedNodes.map(node => node.data)
    //     selectedData.map(node => {
    //         db.collection("users").doc(node.idUser).delete().then(function () {
    //             alert('Usuario eliminado correctamente');
    //         }).catch(function (error) {
    //             alert("Error eliminando usuario");
    //         });
    //     });

    // }

    render() {
        return (
            <div>
              {/* Search Wrapper Area Start */}
              <div className="search-wrapper section-padding-100">
                <div className="search-close">
                  <i className="fa fa-close" aria-hidden="true" />
                </div>
                <div className="container">
                  <div className="row">
                    <div className="col-12">
                      <div className="search-content">
                        <form action="#" method="get">
                          <input type="search" name="search" id="search" placeholder="Type your keyword..." />
                          <button type="submit"><img src="img/core-img/search.png" alt="" /></button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Search Wrapper Area End */}
              {/* ##### Main Content Wrapper Start ##### */}
              <div className="main-content-wrapper d-flex clearfix">
              {/* Mobile Nav (max width 767px)*/}
              <div className="mobile-nav">
                {/* Navbar Brand */}
                <div className="amado-navbar-brand">
                  <a href="index.html"><img src="img/core-img/logo.png" alt="" /></a>
                </div>
                {/* Navbar Toggler */}
                <div className="amado-navbar-toggler">
                  <span /><span /><span />
                </div>
              </div>
              {/* Header Area Start */}
              <header className="header-area clearfix">
                {/* Close Icon */}
                <div className="nav-close">
                  <i className="fa fa-close" aria-hidden="true" />
                </div>
                {/* Logo */}
                <div className="logo">
                  <a href="index.html"><img src="img/core-img/logo.png" alt="" /></a>
                </div>
                {/* Amado Nav */}
                <nav className="amado-nav">
                  <ul>
                    <li className="active"><a href="index.html">Inicio</a></li>
                    <li><a href="shop.html">Tienda</a></li>
                    <li><a href="product-details.html">Productos</a></li>
                    <li><a href="cart.html">Pedido</a></li>
                    <li><a href="checkout.html">Contactanos</a></li>
                  </ul>
                </nav>
                {/* Button Group */}
                <div className="amado-btn-group mt-30 mb-100">
                  {/* <a href="#" className="btn amado-btn mb-15">%Descuento%</a>
                  <a href="#" className="btn amado-btn active">Lo nuevo</a> */}
                </div>
                {/* Cart Menu */}
                <div className="cart-fav-search mb-100">
                  <a href="cart.html" className="cart-nav"><img src="img/core-img/cart.png" alt="" /> Pedido
                    <span>(0)</span></a>
                  {/* <a href="#" className="fav-nav"><img src="img/core-img/favorites.png" alt="" /> Favoritos</a>
                  <a href="#" className="search-nav"><img src="img/core-img/search.png" alt="" /> Buscar</a> */}
                </div>
                {/* Social Button */}
                <div className="social-info d-flex justify-content-between">
                  {/* <a href="#"><i className="fa fa-pinterest" aria-hidden="true" /></a>
                  <a href="#"><i className="fa fa-instagram" aria-hidden="true" /></a>
                  <a href="#"><i className="fa fa-facebook" aria-hidden="true" /></a>
                  <a href="#"><i className="fa fa-twitter" aria-hidden="true" /></a> */}
                </div>
              </header>

            </div>
            </div>
        )
    }
}


export default Home;